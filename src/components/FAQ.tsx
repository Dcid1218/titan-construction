import { siteConfig } from "@/lib/site-config";

type FaqItem = {
  question: string;
  answer: string;
  /** Marked TODO until Danni confirms — do not ship unanswered as final copy */
  todo?: boolean;
};

const faqs: FaqItem[] = [
  {
    // TODO (Danni): confirm answer — do you handle permits?
    question: "Do you handle permits?",
    answer:
      "TODO: Confirm with Danni. Call us and we'll tell you exactly how permits work for your project and town.",
    todo: true,
  },
  {
    // TODO (Danni): confirm typical lead time / start window
    question: "How fast can you start?",
    answer:
      "TODO: Confirm typical lead time with Danni. Timing depends on the job and season — call and we'll give you a straight answer for your project.",
    todo: true,
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes — request a free quote with no obligation. We'll call you back, usually the same day, and tell you straight whether we're a fit.",
  },
  {
    question: "What areas do you actually cover?",
    answer: `Kendall County — including ${siteConfig.serviceArea.towns.join(", ")}. Call if you're just outside that — we'll tell you straight if we can't make it work.`,
  },
  {
    question:
      "Why don't you do drywall, plumbing, concrete, or stone patios?",
    answer:
      "We'd rather be excellent at fewer things than mediocre at everything. We'll point you to someone good for those.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow">Before you call</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Questions people usually ask first
        </h2>

        <div className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {faqs.map((item) => (
            <details key={item.question} className="group py-2">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-3 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-semibold text-charcoal sm:text-xl">
                  {item.question}
                  {item.todo ? (
                    <span className="ml-2 align-middle text-xs font-sans font-semibold uppercase tracking-label text-timber">
                      Confirm with Danni
                    </span>
                  ) : null}
                </span>
                <span className="mt-1 shrink-0 text-brass group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="mt-1 hidden shrink-0 text-brass group-open:inline" aria-hidden>
                  −
                </span>
              </summary>
              <p className="pb-4 pr-8 text-base leading-relaxed text-slate">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
