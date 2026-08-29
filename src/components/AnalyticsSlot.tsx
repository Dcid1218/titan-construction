import { Analytics } from "@vercel/analytics/react";

/**
 * Vercel Analytics enabled by default.
 *
 * TODO: Drop Google Ads / Meta pixel snippets here once ad accounts exist.
 * Local contractors typically run paid local search/social — leave this slot
 * marked clearly so pixels can be added without restructuring the layout.
 *
 * Example (do not enable until real IDs are provided):
 * <Script id="gtag" strategy="afterInteractive" src="..." />
 * <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script>
 */
export function AnalyticsSlot() {
  return (
    <>
      <Analytics />
      {/* PIXEL_SLOT_START — Google Ads / Meta — PIXEL_SLOT_END */}
    </>
  );
}
