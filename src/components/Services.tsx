import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { serviceImages } from "@/lib/gallery";

const categories = [
  siteConfig.services.outdoor,
  siteConfig.services.interior,
  siteConfig.services.electrical,
] as const;

export function Services() {
  return (
    <section id="services" className="section-pad bg-bone">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow">What we build</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          If it&apos;s not on the short list below, we&apos;ve probably already
          built it.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {categories.map((cat) => {
            const img = serviceImages[cat.id as keyof typeof serviceImages];
            return (
              <article
                key={cat.id}
                className="group overflow-hidden rounded-sm border border-charcoal/10 bg-white shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal">
                    {cat.label}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-snug text-slate"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="mt-12 border-l-4 border-brass bg-brass/10 px-6 py-5 rounded-sm">
          <h3 className="font-display text-lg font-semibold text-charcoal">
            The Titan Start-to-Finish Promise
          </h3>
          <p className="mt-2 max-w-3xl text-base leading-relaxed text-charcoal/90">
            Whether it&apos;s a residential electrical upgrade, custom deck build, or commercial remodeling project, we manage every step from concept to cleanup. Upfront pricing, clear timelines, and zero hidden fees — client satisfaction is always #1.
          </p>
        </aside>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn-primary">
            Get a Free Quote — No Obligation
          </a>
          <a href="#gallery" className="btn-secondary">
            See Recent Work
          </a>
        </div>
      </div>
    </section>
  );
}
