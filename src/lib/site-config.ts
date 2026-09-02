/**
 * Titan Construction & Electric LLC — site configuration.
 * Single source of truth for business details, fallback contact info, and services.
 */

export const siteConfig = {
  name: "Titan Construction & Electric LLC",
  shortName: "Titan Construction & Electric",
  owner: "Ryan",
  establishedYear: 2022,
  yearsExperience: 30,
  trade: "Residential & Commercial Electrical, Remodeling, and Construction",
  licenseNumber:
    process.env.NEXT_PUBLIC_LICENSE_NUMBER?.trim() || "Licensed & Bonded",
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "630-487-8995",
  phoneTel:
    process.env.NEXT_PUBLIC_PHONE_TEL?.trim() ||
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(/\D/g, "") ||
    "6304878995",
  smsDisplay:
    process.env.NEXT_PUBLIC_SMS_NUMBER?.trim() ||
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() ||
    "630-487-8995",
  smsTel:
    process.env.NEXT_PUBLIC_SMS_TEL?.trim() ||
    process.env.NEXT_PUBLIC_PHONE_TEL?.trim() ||
    process.env.NEXT_PUBLIC_SMS_NUMBER?.replace(/\D/g, "") ||
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(/\D/g, "") ||
    "6304878995",
  leadEmail:
    process.env.LEAD_EMAIL?.trim() || "titanelectric222@gmail.com",
  workmanshipWarranty:
    process.env.NEXT_PUBLIC_WORKMANSHIP_WARRANTY?.trim() || "",
  referralStat:
    process.env.NEXT_PUBLIC_REFERRAL_STAT?.trim() || "",
  googleReviewsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL?.trim() || "",
  serviceArea: {
    base: "Kendall County, IL",
    region: "Northern, Western & Chicago Suburbs",
    towns: [
      "Yorkville",
      "Oswego",
      "Plano",
      "Plainfield",
      "Sugar Grove",
      "Montgomery",
      "Aurora",
      "Naperville",
      "Joliet",
      "Chicago & Surrounding Suburbs",
    ] as const,
  },
  valueProps: [
    "Upfront Pricing",
    "Client Comes First",
    "Start-to-Finish Management",
    "Licensed & Bonded",
    "Commercial & Residential",
    "Over 30 Years Experience",
  ] as const,
  services: {
    outdoor: {
      id: "outdoor",
      label: "Outdoor Living & Construction",
      items: [
        "Custom Decks & Porches",
        "Pergolas & Outdoor Structures",
        "Custom Carpentry (Indoor & Outdoor)",
        "Custom Outdoor Builds",
      ],
    },
    interior: {
      id: "interior",
      label: "Indoor Remodeling & Tiling",
      items: [
        "Kitchen Remodels & Upgrades",
        "Bathroom Remodels & Upgrades",
        "Custom Tiling & Tile Work",
        "Turnkey Interior Remodeling",
      ],
    },
    electrical: {
      id: "electrical",
      label: "Electrical Services (Residential & Commercial)",
      items: [
        "Residential Electrical Services (Repair & Upgrades)",
        "Commercial Electrical Services & Build-Outs",
        "Electrical Panel Upgrades & Circuit Additions",
        "Start-to-Finish Electrical Installations",
      ],
    },
  },
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://titan-construction-electric.com",
  seasonalUrgency: getSeasonalUrgency(),
} as const;

function getSeasonalUrgency(): string {
  const month = new Date().getMonth(); // 0–11
  // Winter focus: Dec–Feb
  if (month === 11 || month <= 1) {
    return "Winter is prime time for electrical panel upgrades, commercial work, and interior remodels — call early to reserve your project start date.";
  }
  // Spring/summer: Mar–Aug
  if (month >= 2 && month <= 7) {
    return "Outdoor living season books up fast! Decks, porches, and custom builds are scheduling now across Kendall County and Chicago suburbs.";
  }
  // Fall: Sep–Nov
  return "Fall is an ideal window for custom builds, decks, and interior remodeling before winter — contact us for upfront pricing today.";
}

export function telHref(): string {
  const digits = siteConfig.phoneTel;
  if (!digits) return "#contact";
  return `tel:+1${digits.replace(/^1/, "")}`;
}

export function smsHref(body?: string): string {
  const digits = siteConfig.smsTel;
  if (!digits) return "#contact";
  const base = `sms:+1${digits.replace(/^1/, "")}`;
  if (body) return `${base}?body=${encodeURIComponent(body)}`;
  return base;
}

export type ServiceCategoryId = keyof typeof siteConfig.services;
