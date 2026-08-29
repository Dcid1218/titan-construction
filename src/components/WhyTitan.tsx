import { siteConfig } from "@/lib/site-config";

const facts = [
  {
    title: "30 Years",
    body: `Three decades of Kendall County homes, from panel upgrades to full kitchen remodels. We were doing this before most of our competitors' trucks existed.`,
  },
  {
    title: "Licensed & Bonded",
    body: "Every job backed by real licensing and bonding — verify it yourself, we're not asking you to take our word for it.",
  },
  {
    title: "One Point of Contact",
    body: "Carpentry, remodeling, and electrical — one crew, one phone number, one person accountable for the whole job. No pointing fingers between contractors when something's off.",
  },
] as const;

export function WhyTitan() {
  return (
    <section id="why-titan" className="section-pad bg-charcoal text-bone">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow-on-dark">Why Titan</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for homeowners who want one call, not five.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.title} className="border-t border-brass/40 pt-6">
              <h3 className="font-display text-2xl font-semibold text-brass">
                {fact.title === "30 Years"
                  ? `${siteConfig.yearsExperience} Years`
                  : fact.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-bone/80">
                {fact.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
