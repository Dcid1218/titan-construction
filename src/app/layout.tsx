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
    default: "Titan Construction & Electric LLC | Commercial & Residential Remodeling & Electrical",
    template: "%s | Titan Construction & Electric LLC",
  },
  description:
    "Titan Construction & Electric LLC — Licensed & Bonded in Kendall County, IL, serving Northern, Western & Chicago Suburbs. Commercial & Residential Electrical, Decks, Porches, Tiling & Remodeling. Est. 2022 | 30+ Years Experience. Call 630-487-8995.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Titan Construction & Electric LLC — Upfront Pricing, Client First",
    description:
      "Commercial & Residential Electrical, Remodeling & Construction across Kendall County & Chicago Suburbs. Upfront pricing, start to finish.",
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
