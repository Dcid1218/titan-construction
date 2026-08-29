import { siteConfig } from "@/lib/site-config";

export function Guarantee() {
  // Do not invent referral percentages. Only ship a numeric claim via
  // NEXT_PUBLIC_REFERRAL_STAT once Danni confirms it.
  const referralLine = siteConfig.referralStat
    ? siteConfig.referralStat
    : "Titan Construction is licensed, bonded, and has been doing this in Kendall County long enough that past customers keep sending us their neighbors.";

  return (
    <section id="guarantee" className="section-pad bg-bone">
      <div className="mx-auto max-w-3xl text-center">
        <p className="label-eyebrow">Our promise</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Licensed. Bonded. Here in {siteConfig.yearsExperience} years, still
          here tomorrow.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate">
          We&apos;re not a truck and a phone number that disappears after the
          check clears. {referralLine}
        </p>
        {/* TODO (Danni): If a written workmanship warranty term is confirmed,
            set NEXT_PUBLIC_WORKMANSHIP_WARRANTY — do not fabricate a length. */}
        {siteConfig.workmanshipWarranty ? (
          <p className="mt-4 text-base font-medium text-timber">
            {siteConfig.workmanshipWarranty}
          </p>
        ) : null}
      </div>
    </section>
  );
}
