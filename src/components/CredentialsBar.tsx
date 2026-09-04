"use client";

import { siteConfig } from "@/lib/site-config";
import { useCountUp } from "@/lib/motion";

const stats = [
  { target: siteConfig.yearsExperience, suffix: "+", label: "Years experience" },
  { target: siteConfig.establishedYear, suffix: "", label: "Established" },
  { target: siteConfig.serviceArea.towns.length, suffix: "+", label: "Towns served" },
  { target: 100, suffix: "%", label: "Upfront pricing" },
];

function Stat({ target, suffix, label }: (typeof stats)[number]) {
  const { ref, value } = useCountUp(target);
  const isAccent = suffix === "%";
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-1 flex-col items-center justify-center gap-2.5 border-b border-brass/10 px-4 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:border-brass/20 sm:last:border-r-0"
    >
      <p
        className={`font-display text-4xl font-bold leading-none ${
          isAccent ? "text-gradient-cyan" : "text-gradient-brass"
        }`}
      >
        {value}
        {suffix}
      </p>
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-titan-silver/60">
        {label}
      </p>
    </div>
  );
}

export function CredentialsBar() {
  return (
    <section
      aria-label="Credentials"
      className="border-y border-brass/15 bg-gradient-to-b from-titan-blue-dark/70 to-titan-black backdrop-blur"
    >
      <div className="mx-auto flex max-w-content flex-col sm:flex-row">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
