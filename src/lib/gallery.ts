/**
 * Gallery accepts drop-in photos at /public/gallery/[category]/*.jpg
 * with zero code changes beyond adding entries here (or auto-discover later).
 * Categories: outdoor | interior | electrical
 */

export type GalleryCategory = "outdoor" | "interior" | "electrical" | "all";

export type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/outdoor/deck-hero.jpg",
    alt: "Newly built wood deck with clean modern railings on a Midwestern two-story home at golden hour",
    category: "outdoor",
    title: "Wood deck — suburban backyard",
  },
  {
    src: "/gallery/outdoor/porch.jpg",
    alt: "Newly built craftsman-style front porch with natural wood tones and white trim",
    category: "outdoor",
    title: "Craftsman front porch",
  },
  {
    src: "/gallery/outdoor/pergola.jpg",
    alt: "Cedar pergola over a wood patio deck with string lights in a suburban Illinois backyard",
    category: "outdoor",
    title: "Cedar pergola",
  },
  {
    src: "/gallery/interior/kitchen.jpg",
    alt: "Modern-farmhouse kitchen remodel with white shaker cabinets and quartz countertops",
    category: "interior",
    title: "Kitchen remodel",
  },
  {
    src: "/gallery/interior/bathroom.jpg",
    alt: "Upgraded bathroom with large-format tile shower and matte black fixtures",
    category: "interior",
    title: "Bathroom remodel",
  },
  {
    src: "/gallery/interior/tile-detail.jpg",
    alt: "Close-up of precisely laid large-format porcelain tile with clean grout lines in a shower",
    category: "interior",
    title: "Tile detail",
  },
  {
    src: "/gallery/electrical/panel-upgrade.jpg",
    alt: "Clean newly installed residential electrical panel with organized labeled breakers",
    category: "electrical",
    title: "Panel upgrade",
  },
];

export const serviceImages = {
  outdoor: {
    src: "/gallery/outdoor/deck-hero.jpg",
    alt: "Wood deck project representing outdoor living and carpentry work",
  },
  interior: {
    src: "/gallery/interior/kitchen.jpg",
    alt: "Kitchen remodel representing interior remodeling work",
  },
  electrical: {
    src: "/gallery/electrical/panel-upgrade.jpg",
    alt: "Residential electrical panel upgrade",
  },
} as const;
