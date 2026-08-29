import { siteConfig } from "@/lib/site-config";

const facts = [
  `${siteConfig.yearsExperience} Years`,
  "Licensed & Bonded",
  "Kendall County Local",
] as const;

export function CredentialsBar() {
  return (
    <section
      aria-label="Credentials"
      className="border-b border-charcoal/10 bg-bone"
    >
      <div className="mx-auto flex max-w-content flex-col items-stretch justify-center gap-0 px-5 sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:px-8 lg:px-12">
        {facts.map((fact, i) => (
          <div
            key={fact}
            className="flex flex-1 items-center justify-center border-b border-charcoal/10 px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:border-brass/50 sm:last:border-r-0"
          >
            <p className="text-center font-sans text-xs font-medium uppercase tracking-label text-charcoal sm:text-[0.7rem]">
              {fact}
            </p>
            {i < facts.length - 1 ? (
              <span className="sr-only">·</span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
