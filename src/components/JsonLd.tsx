import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const services = [
    ...siteConfig.services.outdoor.items,
    ...siteConfig.services.interior.items,
    ...siteConfig.services.electrical.items,
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "Electrician", "LocalBusiness"],
    name: siteConfig.name,
    legalName: "Titan Construction & Electric LLC",
    description:
      "Licensed & bonded commercial and residential electrical services, outdoor construction (decks, porches, pergolas), and indoor remodeling (kitchens, bathrooms, tiling) based in Kendall County, IL serving Northern, Western, and Chicago suburbs. Est. 2022, over 30 years experience.",
    url: siteConfig.url,
    telephone: `+1${siteConfig.phoneTel}`,
    email: siteConfig.leadEmail,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: siteConfig.serviceArea.base,
      },
      {
        "@type": "AdministrativeArea",
        name: siteConfig.serviceArea.region,
      },
      ...siteConfig.serviceArea.towns.map((town) => ({
        "@type": "City",
        name: town,
      })),
    ],
    knowsAbout: services,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Titan Construction & Electric Services",
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
      addressLocality: "Kendall County",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
