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

  // Photos: best-effort local write (works in local/dev). Vercel disk is ephemeral —
  // never fail the request if write fails; CRM remains the durable store.
  if (photo && typeof photo !== "string" && photo.size > 0) {
    if (photo.size > MAX_PHOTO_BYTES) {
      return badRequest("Photo must be under 8MB.");
    }
    const safeBase = photo.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
    photoFilename = `${Date.now()}-${safeBase || "photo.jpg"}`;
    const bytes = Buffer.from(await photo.arrayBuffer());
    try {
      const dataDir = path.join(process.cwd(), "data");
      const uploadsDir = path.join(dataDir, "uploads");
      await mkdir(uploadsDir, { recursive: true });
      await writeFile(path.join(uploadsDir, photoFilename), bytes);
    } catch (err) {
      console.warn("[lead] Local photo write skipped (expected on Vercel):", err);
    }
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

  let savedLocal = false;
  try {
    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    await appendFile(
      path.join(dataDir, "leads.jsonl"),
      `${JSON.stringify(lead)}\n`,
      "utf8",
    );
    savedLocal = true;
  } catch (err) {
    // Vercel serverless has no durable local disk — CRM is the source of truth.
    console.warn("[lead] Local leads.jsonl write skipped:", err);
  }

  let emailed = false;
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
        console.error("[lead] Resend error:", error);
      } else {
        emailed = true;
      }
    } catch (err) {
      console.error("[lead] Resend threw:", err);
    }
  }

  // CRM is the durable store in production.
  let crmOk = false;
  const crmUrl = process.env.TITAN_CRM_INTAKE_URL?.trim();
  const crmSecret = process.env.TITAN_CRM_FUNNEL_SECRET?.trim();
  if (crmUrl && crmSecret) {
    try {
      const idempotencyKey = `site:${phone.replace(/\D/g, "")}:${receivedAt.slice(0, 13)}`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 8000);
      const crmRes = await fetch(crmUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-titan-funnel-secret": crmSecret,
        },
        body: JSON.stringify({
          name,
          phone,
          service,
          location,
          timeline,
          source: "website",
          idempotencyKey,
          photoFilename,
        }),
        signal: controller.signal,
      }).finally(() => clearTimeout(timer));
      if (crmRes.ok) {
        crmOk = true;
      } else {
        const text = await crmRes.text().catch(() => "");
        console.error(
          "[lead] CRM intake failed:",
          crmRes.status,
          text.slice(0, 300),
        );
      }
    } catch (err) {
      console.error("[lead] CRM intake threw:", err);
    }
  } else {
    console.warn(
      "[lead] TITAN_CRM_INTAKE_URL / TITAN_CRM_FUNNEL_SECRET not set — CRM forward skipped.",
    );
  }

  if (!crmOk && !savedLocal && !emailed) {
    return serverError(
      `That didn't go through — call us directly at ${siteConfig.phoneDisplay} and we'll get you taken care of.`,
    );
  }

  return NextResponse.json({ ok: true, crm: crmOk });
}
