import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { AnalyticsSlot } from "@/components/AnalyticsSlot";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Titan Construction | Decks, Remodels & Electrical — Kendall County, IL",
    template: "%s | Titan Construction",
  },
  description:
    "Licensed & bonded residential contractor in Kendall County, IL. Porches, decks, pergolas, kitchen & bathroom remodels, tile, and electrical panel upgrades. 30 years. One call.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Titan Construction — Done once, done right",
    description:
      "Porches, remodels, and electrical work for Kendall County homeowners. 30 years. Licensed & bonded.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/gallery/outdoor/deck-hero.webp"
          type="image/webp"
        />
      </head>
      <body className="min-h-screen pb-20 md:pb-0">
        <JsonLd />
        {children}
        <AnalyticsSlot />
      </body>
    </html>
  );
}
