import { siteConfig } from "@/lib/site-config";

export function Guarantee() {
  const referralLine = siteConfig.referralStat
    ? siteConfig.referralStat
    : "Titan Construction & Electric LLC is licensed, bonded, and backed by over 30 years of trade expertise across Kendall County and Chicago suburbs. Upfront pricing, turnkey delivery, and client satisfaction guaranteed.";

  return (
    <section
      id="guarantee"
      className="section-pad relative overflow-hidden border-y border-brass/15 bg-titan-black"
    >
      <img
        aria-hidden="true"
        src="/logo.png"
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(560px,80vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="label-eyebrow">Our promise</p>
        <h2 className="text-titan-silver mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Licensed &amp; Bonded. Upfront Pricing. Client Comes First.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-titan-silver/80">
          {referralLine}
        </p>
        {siteConfig.workmanshipWarranty ? (
          <p className="mt-4 text-base font-medium text-timber">
            {siteConfig.workmanshipWarranty}
          </p>
        ) : null}
      </div>
    </section>
  );
}
