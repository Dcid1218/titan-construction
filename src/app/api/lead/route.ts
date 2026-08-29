import { NextRequest, NextResponse } from "next/server";
import { mkdir, appendFile, writeFile } from "fs/promises";
import path from "path";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

const MAX_PHOTO_BYTES = 8 * 1024 * 1024; // 8MB

type LeadPayload = {
  name: string;
  phone: string;
  service: string;
  location: string;
  timeline: string;
  photoFilename?: string;
  receivedAt: string;
};

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

function serverError(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 500 });
}

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return badRequest("Invalid form data.");
  }

  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const service = String(form.get("service") || "").trim();
  const location = String(form.get("location") || "").trim();
  const timeline = String(form.get("timeline") || "").trim();
  const photo = form.get("photo");

  if (!name || name.length < 2) {
    return badRequest("Please enter your name.");
  }
  if (!phone || phone.replace(/\D/g, "").length < 10) {
    return badRequest("Please enter a valid phone number.");
  }
  if (!service) {
    return badRequest("Please select a service.");
  }
  if (!location) {
    return badRequest("Please enter your city or ZIP.");
  }
  if (!timeline) {
    return badRequest("Please select a project timeline.");
  }

  const receivedAt = new Date().toISOString();
  let photoFilename: string | undefined;

  const dataDir = path.join(process.cwd(), "data");
  const uploadsDir = path.join(dataDir, "uploads");
  await mkdir(uploadsDir, { recursive: true });

  if (photo && typeof photo !== "string" && photo.size > 0) {
    if (photo.size > MAX_PHOTO_BYTES) {
      return badRequest("Photo must be under 8MB.");
    }
    const safeBase = photo.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
    photoFilename = `${Date.now()}-${safeBase || "photo.jpg"}`;
    const bytes = Buffer.from(await photo.arrayBuffer());
    await writeFile(path.join(uploadsDir, photoFilename), bytes);
  }

  const lead: LeadPayload = {
    name,
    phone,
    service,
    location,
    timeline,
    photoFilename,
    receivedAt,
  };

  // Durable local capture — never rely on console.log alone
  try {
    await appendFile(
      path.join(dataDir, "leads.jsonl"),
      `${JSON.stringify(lead)}\n`,
      "utf8"
    );
  } catch (err) {
    console.error("[lead] Failed to write leads.jsonl", err);
    return serverError(
      `That didn't go through — call us directly at ${siteConfig.phoneDisplay} and we'll get you taken care of.`
    );
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  const leadEmail = siteConfig.leadEmail || process.env.LEAD_EMAIL?.trim();

  if (resendKey && leadEmail) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      const from =
        process.env.RESEND_FROM_EMAIL?.trim() ||
        "Titan Construction Leads <onboarding@resend.dev>";

      const { error } = await resend.emails.send({
        from,
        to: [leadEmail],
        subject: `New quote request — ${service}`,
        text: [
          `New Titan Construction lead`,
          ``,
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Service: ${service}`,
          `Location: ${location}`,
          `Timeline: ${timeline}`,
          `Photo: ${photoFilename || "(none)"}`,
          `Received: ${receivedAt}`,
        ].join("\n"),
      });

      if (error) {
        console.error("[lead] Resend error (lead still saved to data/leads.jsonl):", error);
        // Lead is already persisted locally — still return success so the
        // homeowner isn't stuck. Ops must monitor Resend config.
      }
    } catch (err) {
      console.error("[lead] Resend threw (lead still saved):", err);
    }
  } else {
    // TODO: add RESEND_API_KEY + LEAD_EMAIL (and optional RESEND_FROM_EMAIL)
    // before launch so leads arrive by email. Until then, leads land in
    // data/leads.jsonl — check that file after every test submit.
    console.warn(
      "[lead] Email not configured. Lead saved to data/leads.jsonl. Set RESEND_API_KEY and LEAD_EMAIL."
    );
  }

  return NextResponse.json({ ok: true });
}
