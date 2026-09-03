import Link from "next/link";
import { siteConfig, telHref } from "@/lib/site-config";

export function Header() {
  const callReady = Boolean(siteConfig.phoneTel);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-titan-silver sm:text-2xl flex items-center gap-3"
        >
          <img src="/logo.png" alt="Titan Construction & Electric" className="h-12 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <span className="hidden sm:inline-block">Titan Construction &amp; Electric</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-titan-silver/90 md:flex">
          <a href="#services" className="hover:text-titan-gold transition-colors hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] px-2 py-1 rounded">
            Services
          </a>
          <a href="#gallery" className="hover:text-titan-gold transition-colors hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] px-2 py-1 rounded">
            Work
          </a>
          <a href="#faq" className="hover:text-titan-gold transition-colors hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] px-2 py-1 rounded">
            FAQ
          </a>
          <a href="#contact" className="hover:text-titan-gold transition-colors hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] px-2 py-1 rounded">
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
