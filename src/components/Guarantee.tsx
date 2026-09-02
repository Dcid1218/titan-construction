import { siteConfig } from "@/lib/site-config";

export function Guarantee() {
  const referralLine = siteConfig.referralStat
    ? siteConfig.referralStat
    : "Titan Construction & Electric LLC is licensed, bonded, and backed by over 30 years of trade expertise across Kendall County and Chicago suburbs. Upfront pricing, turnkey delivery, and client satisfaction guaranteed.";

  return (
    <section id="guarantee" className="section-pad bg-bone">
      <div className="mx-auto max-w-3xl text-center">
        <p className="label-eyebrow">Our promise</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Licensed &amp; Bonded. Upfront Pricing. Client Comes First.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate">
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
