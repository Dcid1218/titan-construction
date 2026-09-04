"use client";

import { SERVICE_OPTIONS } from "@/lib/site-config";
import { selectService } from "@/lib/motion";

const picks = [
  { label: "Deck or porch", value: SERVICE_OPTIONS[3] },
  { label: "Kitchen remodel", value: SERVICE_OPTIONS[5] },
  { label: "Bathroom remodel", value: SERVICE_OPTIONS[5] },
  { label: "Panel upgrade", value: SERVICE_OPTIONS[2] },
  { label: "Home electrical", value: SERVICE_OPTIONS[0] },
  { label: "Commercial electrical", value: SERVICE_OPTIONS[1] },
  { label: "Tiling", value: SERVICE_OPTIONS[6] },
  { label: "Pergola / custom build", value: SERVICE_OPTIONS[4] },
  { label: "Something else", value: SERVICE_OPTIONS[8] },
] as const;

export function QuickPicker() {
  return (
    <section aria-label="Start a quote" className="border-b border-brass/10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <h2 className="text-titan-silver font-display text-xl font-semibold sm:text-2xl">
            What do you need done?
          </h2>
          <p className="text-sm text-titan-silver/60">
            Pick one and we&apos;ll take it from there — about 30 seconds.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {picks.map((p) => (
            <li key={p.label}>
              <button
                type="button"
                onClick={() => selectService(p.value)}
                className="inline-flex items-center gap-2 rounded-sm border border-brass/30 bg-titan-blue-dark px-5 py-3 text-sm font-semibold text-titan-silver/90 shadow-soft transition-all hover:border-titan-gold hover:text-titan-gold"
              >
                {p.label}
                <span aria-hidden className="opacity-60">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
