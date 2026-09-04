
const facts = [
  {
    title: `30+ Years Experience`,
    body: `Owner Ryan brings over 30 years of trade expertise to Titan Construction & Electric LLC (Est. 2022). Deep knowledge in electrical systems, outdoor builds, and interior remodeling across Kendall County and Chicago suburbs.`,
  },
  {
    title: "Upfront Pricing & Client First",
    body: "No hidden fees, no bait-and-switch quotes. We provide upfront pricing before work begins, and we prioritize the client's needs from day one through final walkthrough.",
  },
  {
    title: "Start-to-Finish Accountability",
    body: "Commercial & residential — electrical, construction, tiling, decks, and custom builds. One crew, one phone call (630-487-8995), and complete turnkey project management.",
  },
] as const;

export function WhyTitan() {
  return (
    <section id="why-titan" className="section-pad bg-titan-blue-dark text-titan-silver">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow-on-dark">Why Titan</p>
        <h2 className="text-titan-silver mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for clients who expect upfront pricing and start-to-finish excellence.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {facts.map((fact, i) => (
            <div key={fact.title} className="card-glass border-t-2 border-t-titan-gold/50 p-8">
              <p className="font-display text-xs font-bold tracking-[0.3em] text-titan-gold/75">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-titan-gold">
                {fact.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-titan-silver/80">
                {fact.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
