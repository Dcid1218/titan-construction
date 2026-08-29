import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const services = [
    ...siteConfig.services.outdoor.items,
    ...siteConfig.services.interior.items,
    ...siteConfig.services.electrical.items,
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    name: siteConfig.name,
    description:
      "Residential general contracting, remodeling, and electrical services in Kendall County, IL. Porches, decks, pergolas, kitchens, bathrooms, tile, and electrical panel upgrades.",
    url: siteConfig.url,
    telephone: siteConfig.phoneTel
      ? `+1${siteConfig.phoneTel.replace(/^1/, "")}`
      : undefined,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: siteConfig.serviceArea.county,
      },
      ...siteConfig.serviceArea.towns.map((town) => ({
        "@type": "City",
        name: town,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Kendall County, IL",
        },
      })),
    ],
    knowsAbout: services,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Titan Construction Services",
      itemListElement: [
        siteConfig.services.outdoor,
        siteConfig.services.interior,
        siteConfig.services.electrical,
      ].map((cat) => ({
        "@type": "OfferCatalog",
        name: cat.label,
        itemListElement: cat.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item,
          },
        })),
      })),
    },
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "IL",
      addressCountry: "US",
      addressLocality: "Yorkville",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
