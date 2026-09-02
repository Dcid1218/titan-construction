import { siteConfig } from "@/lib/site-config";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Do you handle both commercial and residential projects?",
    answer:
      "Yes! No project is too big or too small. We specialize in residential electrical and remodeling as well as commercial electrical services, build-outs, and custom construction.",
  },
  {
    question: "How does upfront pricing work?",
    answer:
      "We believe the client always comes first. We evaluate your project scope upfront and give you clear, transparent pricing with zero surprise charges down the line.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer:
      "Yes. As a licensed and bonded company, we handle all necessary building permits and municipal inspection coordination from start to finish.",
  },
  {
    question: "What geographic areas do you cover?",
    answer: `We are based out of Kendall County, Illinois and handle jobs across the Northern, Western, and Chicagoan suburbs, including ${siteConfig.serviceArea.towns.slice(0, 6).join(", ")}, and beyond.`,
  },
  {
    question: "How quickly can we get a quote and start?",
    answer:
      "Call us directly at 630-487-8995 or submit a online quote request. We typically return calls the same day to discuss your timeline and provide an upfront quote.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow">Before you call</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {faqs.map((item) => (
            <details key={item.question} className="group py-2">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-3 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-semibold text-charcoal sm:text-xl">
                  {item.question}
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
