import Link from "next/link";
import { siteConfig, telHref } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-bone">
      <div className="section-pad mx-auto max-w-content !py-14 pb-28 md:pb-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-bone/75">
              Commercial &amp; Residential Electrical, Outdoor &amp; Indoor Remodeling &amp; Construction — Est. {siteConfig.establishedYear}. Over {siteConfig.yearsExperience} years of trade experience.
            </p>
            <p className="mt-4 text-sm text-bone/70">
              License: {siteConfig.licenseNumber}
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <a href={telHref()} className="text-brass hover:underline">
                  Phone: {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.leadEmail}`} className="text-brass hover:underline">
                  Email: {siteConfig.leadEmail}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-label text-brass">
              Service area
            </p>
            <p className="mt-2 text-sm text-bone/90 font-medium">
              Based out of {siteConfig.serviceArea.base}
            </p>
            <p className="mt-1 text-xs text-bone/70">
              Serving {siteConfig.serviceArea.region}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-1 text-sm text-bone/80">
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
                  Upfront quote
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-brass">
                  Home
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-bone/70 border-l-2 border-brass/40 pl-3">
              Upfront pricing. Client comes first. Turnkey execution from start to finish on every commercial and residential project.
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-bone/10 pt-6 text-xs text-bone/50">
          © {year} {siteConfig.name}. Licensed &amp; Bonded. Based in Kendall County, IL.
        </p>
      </div>
    </footer>
  );
}
