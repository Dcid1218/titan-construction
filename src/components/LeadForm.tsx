"use client";

import { FormEvent, useState } from "react";
import { siteConfig, telHref } from "@/lib/site-config";

const serviceOptions = [
  "Residential Electrical Services",
  "Commercial Electrical Services & Build-Outs",
  "Electrical Panel Upgrade",
  "Outdoor Living — Decks & Porches",
  "Outdoor Living — Pergolas & Custom Builds",
  "Indoor Remodeling — Kitchen & Bath",
  "Indoor Remodeling — Custom Tiling",
  "Turnkey Remodeling / Construction",
  "Other / Multiple Services",
] as const;

const timelines = ["ASAP", "This month", "Just planning"] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const callReady = Boolean(siteConfig.phoneTel);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(
          json.error ||
            `That didn't go through — call us directly at ${siteConfig.phoneDisplay} and we'll get you taken care of.`
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        `That didn't go through — call us directly at ${siteConfig.phoneDisplay} and we'll get you taken care of.`
      );
    }
  }

  return (
    <section id="contact" className="section-pad scroll-mt-8 bg-titan-black">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="label-eyebrow">Free quote</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-titan-silver sm:text-4xl">
            Get a free quote — no obligation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-titan-silver/80">
            Tell us what you need. We&apos;ll call you back, usually the same
            day, and give it to you straight — including if it&apos;s not a fit.
          </p>
          <p className="mt-6 border-l-4 border-brass pl-4 text-base font-medium text-titan-silver">
            {siteConfig.seasonalUrgency}
          </p>
          {callReady ? (
            <p className="mt-8 text-base text-titan-silver/80">
              Prefer to talk now?{" "}
              <a
                href={telHref()}
                className="font-semibold text-timber underline-offset-2 hover:underline"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </p>
          ) : null}
        </div>

        <div className="rounded-sm border border-titan-black/10 bg-titan-blue-dark p-6 shadow-soft sm:p-8">
          {status === "success" ? (
            <div role="status" className="py-8 text-center">
              <p className="font-display text-2xl font-semibold text-titan-silver">
                Got it — we&apos;ll call you back today.
              </p>
              <button
                type="button"
                className="btn-secondary mt-6"
                onClick={() => setStatus("idle")}
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-titan-silver">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-sm border border-titan-black/20 bg-titan-black px-3 py-3 text-titan-silver outline-none focus:border-brass"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-titan-silver">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-sm border border-titan-black/20 bg-titan-black px-3 py-3 text-titan-silver outline-none focus:border-brass"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-titan-silver">
                  Service needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-1.5 w-full rounded-sm border border-titan-black/20 bg-titan-black px-3 py-3 text-titan-silver outline-none focus:border-brass"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-titan-silver">
                  Property city or ZIP
                </label>
                <input
                  id="location"
                  name="location"
                  required
                  autoComplete="address-level2"
                  className="mt-1.5 w-full rounded-sm border border-titan-black/20 bg-titan-black px-3 py-3 text-titan-silver outline-none focus:border-brass"
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-titan-silver">
                  Project timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  defaultValue=""
                  className="mt-1.5 w-full rounded-sm border border-titan-black/20 bg-titan-black px-3 py-3 text-titan-silver outline-none focus:border-brass"
                >
                  <option value="" disabled>
                    When are you looking to start?
                  </option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="photo" className="block text-sm font-semibold text-titan-silver">
                  Project photo (optional)
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="mt-1.5 w-full text-sm text-titan-silver/80 file:mr-3 file:rounded-sm file:border-0 file:bg-titan-blue-dark file:px-3 file:py-2 file:text-sm file:font-semibold file:text-titan-silver"
                />
                <p className="mt-1.5 text-sm text-titan-silver/80">
                  A photo helps us quote faster — totally optional.
                </p>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting"
                  ? "Sending…"
                  : "Request My Free Quote"}
              </button>

              <p className="text-center text-sm text-titan-silver/80">
                No spam. No pushy sales calls. Just a straight answer.
              </p>

              {status === "error" ? (
                <p role="alert" className="rounded-sm bg-red-50 px-3 py-2 text-sm text-red-900">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
