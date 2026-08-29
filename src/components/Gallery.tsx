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
    <section id="gallery" className="section-pad bg-bone">
      <div className="mx-auto max-w-content">
        <p className="label-eyebrow">Recent work</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
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
                className={`rounded-sm px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-charcoal text-bone"
                    : "bg-white text-charcoal ring-1 ring-charcoal/15 hover:ring-charcoal/30"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.src}
              className="overflow-hidden rounded-sm border border-charcoal/10 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-label text-slate">
                  {item.category}
                </p>
                <p className="mt-1 font-medium text-charcoal">{item.title}</p>
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
