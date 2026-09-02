import Link from "next/link";
import { siteConfig, telHref } from "@/lib/site-config";

export function Header() {
  const callReady = Boolean(siteConfig.phoneTel);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-bone sm:text-2xl"
        >
          Titan Construction &amp; Electric
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-bone/90 md:flex">
          <a href="#services" className="hover:text-brass">
            Services
          </a>
          <a href="#gallery" className="hover:text-brass">
            Work
          </a>
          <a href="#faq" className="hover:text-brass">
            FAQ
          </a>
          <a href="#contact" className="hover:text-brass">
            Quote
          </a>
          {callReady ? (
            <a href={telHref()} className="btn-primary py-2.5 text-sm">
              Call {siteConfig.phoneDisplay}
            </a>
          ) : (
            <a href="#contact" className="btn-primary py-2.5 text-sm">
              Get a Free Quote
            </a>
          )}
        </nav>
        <a
          href={callReady ? telHref() : "#contact"}
          className="btn-primary py-2.5 text-sm md:hidden"
        >
          {callReady ? `Call ${siteConfig.phoneDisplay}` : "Get a Quote"}
        </a>
      </div>
    </header>
  );
}
