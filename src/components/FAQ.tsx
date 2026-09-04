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
    <section id="faq" className="section-pad bg-titan-blue-dark">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow">Before you call</p>
        <h2 className="text-titan-silver mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((item) => (
            <details key={item.question} className="card-glass group px-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-semibold text-titan-gold sm:text-xl">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-electric-blue/40 text-sm text-electric-blue group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 hidden h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-electric-blue/40 text-sm text-electric-blue group-open:flex"
                >
                  −
                </span>
              </summary>
              <p className="pb-5 pr-8 text-base leading-relaxed text-titan-silver/80">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
