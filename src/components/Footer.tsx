import Link from "next/link";
import { siteConfig, telHref } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-titan-black/50 bg-titan-black text-titan-silver">
      <div className="section-pad mx-auto max-w-content !py-14 pb-28 md:pb-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src="/logo.png"
              alt={siteConfig.name}
              className="h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            />
            <p className="mt-4 font-display text-xl font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-titan-silver/75">
              Commercial &amp; Residential Electrical, Outdoor &amp; Indoor Remodeling &amp; Construction — Est. {siteConfig.establishedYear}. Over {siteConfig.yearsExperience} years of trade experience.
            </p>
            <p className="mt-4 text-sm text-titan-silver/70">
              License: {siteConfig.licenseNumber}
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <a href={telHref()} className="text-titan-gold transition-colors hover:text-electric-blue hover:underline">
                  Phone: {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.leadEmail}`} className="text-titan-gold transition-colors hover:text-electric-blue hover:underline">
                  Email: {siteConfig.leadEmail}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-label text-titan-gold">
              Service area
            </p>
            <p className="mt-2 text-sm text-titan-silver/90 font-medium">
              Based out of {siteConfig.serviceArea.base}
            </p>
            <p className="mt-1 text-xs text-titan-silver/70">
              Serving {siteConfig.serviceArea.region}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-1 text-sm text-titan-silver/80">
              {siteConfig.serviceArea.towns.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-label text-titan-gold">
              On this site
            </p>
            <ul className="mt-3 space-y-2 text-sm text-titan-silver/80">
              <li>
                <a href="#services" className="hover:text-titan-gold">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-titan-gold">
                  Recent work
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-titan-gold">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-titan-gold">
                  Upfront quote
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-titan-gold">
                  Home
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-titan-silver/70 border-l-2 border-titan-gold/40 pl-3">
              Upfront pricing. Client comes first. Turnkey execution from start to finish on every commercial and residential project.
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-titan-silver/10 pt-6 text-xs text-titan-silver/50">
          © {year} {siteConfig.name}. Licensed &amp; Bonded. Based in Kendall County, IL.
        </p>
      </div>
    </footer>
  );
}
