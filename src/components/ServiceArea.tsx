import { siteConfig } from "@/lib/site-config";

export function ServiceArea() {
  return (
    <section id="service-area" className="section-pad bg-iron text-bone">
      <div className="mx-auto max-w-content">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Proudly serving Kendall County
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {siteConfig.serviceArea.towns.map((town) => (
            <li
              key={town}
              className="rounded-sm border border-bone/25 bg-bone/10 px-4 py-2 text-sm font-medium"
            >
              {town}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/85">
          Not sure if you&apos;re in range? Call — if we can get there, we&apos;ll
          take the job.
        </p>
      </div>
    </section>
  );
}
