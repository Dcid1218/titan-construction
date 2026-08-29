import { siteConfig } from "@/lib/site-config";

/**
 * PLACEHOLDER TESTIMONIALS — not real reviews.
 * Do not ship these as if they were authentic customer quotes.
 * Replace with Google Reviews embed once Danni provides GBP link/ID,
 * or delete this interim block entirely.
 */
const PLACEHOLDER_TESTIMONIALS = [
  {
    quote:
      "[Placeholder] Deck came out better than we expected — clean work and showed up when they said.",
    attribution: "— Placeholder, Yorkville",
  },
  {
    quote:
      "[Placeholder] One crew handled the kitchen and the panel upgrade. No juggling contractors.",
    attribution: "— Placeholder, Oswego",
  },
  {
    quote:
      "[Placeholder] Straight answers on price and timeline. Exactly what we needed.",
    attribution: "— Placeholder, Plainfield",
  },
] as const;

export function SocialProof() {
  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow">What neighbors say</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Local reputation, not marketing fluff.
        </h2>

        {siteConfig.googleReviewsUrl ? (
          <div className="mt-10 overflow-hidden rounded-sm border border-charcoal/10 bg-bone p-4">
            {/* Wire real Google Reviews embed / iframe when GBP is connected */}
            <iframe
              title="Google Reviews for Titan Construction"
              src={siteConfig.googleReviewsUrl}
              className="h-[480px] w-full border-0"
              loading="lazy"
            />
          </div>
        ) : (
          <>
            <p className="mt-4 max-w-2xl text-base text-slate">
              Google Reviews embed will appear here once a Google Business
              Profile link is connected. Until then, these are clearly marked
              placeholders — not real reviews.
            </p>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {PLACEHOLDER_TESTIMONIALS.map((t) => (
                <li
                  key={t.attribution}
                  className="rounded-sm border border-dashed border-timber/40 bg-bone/60 p-6"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-label text-timber">
                    Placeholder — not a real review
                  </p>
                  <blockquote className="font-display text-lg leading-snug text-charcoal">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm font-medium text-charcoal/80">
                    {t.attribution}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
