/**
 * Titan Construction — site configuration.
 * Fill PHONE_NUMBER, SMS_NUMBER, LEAD_EMAIL, and LICENSE_NUMBER before launch.
 * Prefer env vars in production; these constants are the single source of truth in code.
 */

export const siteConfig = {
  name: "Titan Construction",
  trade: "Residential general contracting / remodeling / electrical",
  yearsExperience: 30,
  /** Replace via LICENSE_NUMBER env or here before launch */
  licenseNumber:
    process.env.NEXT_PUBLIC_LICENSE_NUMBER?.trim() || "IL-LIC-#XXXXXX",
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "[PHONE]",
  phoneTel:
    process.env.NEXT_PUBLIC_PHONE_TEL?.trim() ||
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(/\D/g, "") ||
    "",
  smsDisplay:
    process.env.NEXT_PUBLIC_SMS_NUMBER?.trim() ||
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() ||
    "[PHONE]",
  smsTel:
    process.env.NEXT_PUBLIC_SMS_TEL?.trim() ||
    process.env.NEXT_PUBLIC_PHONE_TEL?.trim() ||
    process.env.NEXT_PUBLIC_SMS_NUMBER?.replace(/\D/g, "") ||
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(/\D/g, "") ||
    "",
  leadEmail: process.env.LEAD_EMAIL?.trim() || "",
  /** Optional: set when Danni confirms a written workmanship warranty term */
  workmanshipWarranty: process.env.NEXT_PUBLIC_WORKMANSHIP_WARRANTY?.trim() || "",
  /** Optional: real referral/repeat stat only — leave empty rather than invent */
  referralStat: process.env.NEXT_PUBLIC_REFERRAL_STAT?.trim() || "",
  /** Optional Google Business Profile place ID / reviews embed URL */
  googleReviewsUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL?.trim() || "",
  serviceArea: {
    county: "Kendall County, IL",
    towns: [
      "Yorkville",
      "Oswego",
      "Plano",
      "Plainfield",
      "Sugar Grove",
      "Montgomery",
    ] as const,
  },
  exclusions: [
    "Drywall",
    "Plumbing",
    "Concrete",
    "Stone patios",
  ] as const,
  services: {
    outdoor: {
      id: "outdoor",
      label: "Outdoor Living & Carpentry",
      items: [
        "Porches",
        "Decks",
        "Pergolas",
        "General carpentry, indoor and outdoor",
      ],
    },
    interior: {
      id: "interior",
      label: "Interior Remodeling",
      items: [
        "Kitchen remodels & upgrades",
        "Bathroom remodels & upgrades",
        "Tile work",
      ],
    },
    electrical: {
      id: "electrical",
      label: "Electrical",
      items: [
        "Electrical panel upgrades",
        "Full residential electrical services (repair, installation, upgrades)",
      ],
    },
  },
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://titan-construction.example",
  seasonalUrgency: getSeasonalUrgency(),
} as const;

function getSeasonalUrgency(): string {
  const month = new Date().getMonth(); // 0–11
  // Winter focus: Dec–Feb
  if (month === 11 || month <= 1) {
    return "Panel upgrades and interior remodels are our winter focus — good time to get on the schedule before spring books solid.";
  }
  // Spring/summer: Mar–Aug
  if (month >= 2 && month <= 7) {
    return "Deck and pergola season books up fast — the earlier you call, the more start dates you have to choose from.";
  }
  // Fall: Sep–Nov
  return "Fall is a strong window for decks, porches, and interior work before winter weather sets in — call early for the start dates you want.";
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
