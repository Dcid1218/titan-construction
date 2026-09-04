"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, telHref } from "@/lib/site-config";

export function Header() {
  const callReady = Boolean(siteConfig.phoneTel);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-brass/20 bg-titan-black/95 shadow-soft"
          : "border-transparent bg-gradient-to-b from-titan-black/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-titan-silver sm:text-2xl"
        >
          <img src="/logo.png" alt="Titan Construction & Electric" className="h-11 w-auto object-contain" />
          <span className="hidden sm:inline-block">Titan Construction &amp; Electric</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-titan-silver/90 lg:flex xl:gap-8">
          <a href="#services" className="rounded px-2 py-1 transition-colors hover:text-titan-gold">
            Services
          </a>
          <a href="#gallery" className="rounded px-2 py-1 transition-colors hover:text-titan-gold">
            Work
          </a>
          <a href="#faq" className="rounded px-2 py-1 transition-colors hover:text-titan-gold">
            FAQ
          </a>
          <a href="#contact" className="rounded px-2 py-1 transition-colors hover:text-titan-gold">
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
          className="btn-primary py-2.5 text-sm lg:hidden"
        >
          {callReady ? "Call Now" : "Get a Quote"}
        </a>
      </div>
    </header>
  );
}
