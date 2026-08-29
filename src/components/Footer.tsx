import Link from "next/link";
import { siteConfig, telHref } from "@/lib/site-config";

export function Footer() {
  const callReady = Boolean(siteConfig.phoneTel);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-bone">
      <div className="section-pad mx-auto max-w-content !py-14 pb-28 md:pb-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">
              Titan Construction
            </p>
            <p className="mt-3 text-sm leading-relaxed text-bone/75">
              Residential general contracting, remodeling, and electrical —
              Kendall County, IL. {siteConfig.yearsExperience} years.
            </p>
            <p className="mt-4 text-sm text-bone/70">
              License: {siteConfig.licenseNumber}
            </p>
            {callReady ? (
              <a
                href={telHref()}
                className="mt-4 inline-block text-brass hover:underline"
              >
                {siteConfig.phoneDisplay}
              </a>
            ) : (
              <p className="mt-4 text-sm text-bone/60">
                Phone: {siteConfig.phoneDisplay}
              </p>
            )}
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-label text-brass">
              Service area
            </p>
            <ul className="mt-3 space-y-1 text-sm text-bone/80">
              {siteConfig.serviceArea.towns.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-label text-brass">
              On this site
            </p>
            <ul className="mt-3 space-y-2 text-sm text-bone/80">
              <li>
                <a href="#services" className="hover:text-brass">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brass">
                  Recent work
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brass">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brass">
                  Free quote
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-brass">
                  Home
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-bone/70">
              What we don&apos;t do: drywall, plumbing, concrete, and stone
              patios. We&apos;ll say so upfront instead of taking the job
              anyway.
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-bone/10 pt-6 text-xs text-bone/50">
          © {year} Titan Construction. Licensed &amp; bonded. Serving{" "}
          {siteConfig.serviceArea.county}.
        </p>
      </div>
    </footer>
  );
}
