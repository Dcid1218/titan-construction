"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  galleryItems,
  type GalleryCategory,
} from "@/lib/gallery";

const filters: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "outdoor", label: "Outdoor" },
  { id: "interior", label: "Interior" },
  { id: "electrical", label: "Electrical" },
];

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("all");

  const items = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="gallery" className="section-pad bg-titan-black">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow">Recent work</p>
        <h2 className="text-gradient-brass mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          See the work before you call.
        </h2>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Gallery category filters"
        >
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`rounded-sm px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all ${
                  active
                    ? "border border-electric-blue bg-electric-blue/15 text-electric-blue shadow-[0_0_22px_rgba(0,229,255,0.35)]"
                    : "border border-brass/25 bg-white/[0.03] text-titan-silver/70 hover:border-brass/45 hover:text-titan-silver"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.src} className="card-glass group">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-titan-black/85 via-transparent to-transparent"
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric-blue">
                  {item.category}
                </p>
                <p className="mt-1 font-medium text-titan-silver">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a href="#contact" className="btn-primary">
            Request My Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
