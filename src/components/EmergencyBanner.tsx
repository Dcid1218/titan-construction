import { siteConfig, telHref } from "@/lib/site-config";

export function EmergencyBanner() {
  return (
    <section
      aria-label="Electrical emergencies"
      className="border-y border-electric-blue/25 bg-gradient-to-r from-electric-blue/10 via-titan-blue-dark/85 to-titan-black px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
    >
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-electric-blue">
            Electrical problem right now?
          </p>
          <p className="mt-2 max-w-xl font-display text-lg font-semibold leading-snug text-titan-silver sm:text-2xl">
            Dead outlets, a tripping panel, or no power to part of the house —
            call and talk to an electrician.
          </p>
        </div>
        <a href={telHref()} className="btn-call shrink-0 text-base">
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
