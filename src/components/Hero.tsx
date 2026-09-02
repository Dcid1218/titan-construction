import Image from "next/image";
import { siteConfig, telHref } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-charcoal sm:min-h-[88vh]">
      <Image
        src="/gallery/outdoor/deck-hero.webp"
        alt="Newly built wood deck with clean modern railings on a Midwestern two-story home at golden hour"
        fill
        priority
        fetchPriority="high"
        quality={65}
        unoptimized
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoMAAkABUB8JZACdAEfgggEAAD9T35Rji1YbzQ1DZBqYIvhgJ0pNMNayiGaq/WcLXbHGgucnW4T+AAA"
        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1600px"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/35"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[78vh] max-w-content flex-col justify-end px-5 pb-16 pt-28 sm:min-h-[88vh] sm:px-8 sm:pb-20 lg:justify-center lg:px-12 lg:pb-24 lg:pt-32">
        <p className="label-eyebrow-on-dark mb-4">
          Kendall County &amp; Chicago Suburbs · Commercial &amp; Residential · Licensed &amp; Bonded
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-bone sm:text-5xl lg:text-6xl">
          Electrical, remodeling &amp; construction — upfront pricing, done right from start to finish.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/85 sm:text-xl">
          {siteConfig.name} brings over {siteConfig.yearsExperience} years of hands-on expertise to residential &amp; commercial projects across Kendall County and the Northern, Western, and Chicagoan suburbs. From full electrical installations and panel upgrades to custom decks, tiling, and turnkey remodels — no project too big or small, the client always comes first.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={telHref()} className="btn-call text-lg shadow-soft">
            Call {siteConfig.phoneDisplay}
          </a>
          <a href="#contact" className="btn-secondary border-bone/30 bg-transparent text-bone hover:bg-bone/10">
            Get an Upfront Quote — No Obligation
          </a>
        </div>
        <p className="mt-4 text-sm text-bone/70">
          Upfront pricing · Start-to-finish management · Fast response
        </p>
      </div>
    </section>
  );
}
