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
          ? "border-brass/20 bg-titan-black/85 backdrop-blur-lg shadow-[0_12px_40px_-20px_rgba(0,0,0,0.95)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-titan-silver sm:text-2xl"
        >
          <img
            src="/logo.png"
            alt="Titan Construction & Electric"
            className="h-11 w-auto object-contain drop-shadow-[0_0_14px_rgba(0,229,255,0.35)]"
          />
          <span className="hidden sm:inline-block">Titan Construction &amp; Electric</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-titan-silver/90 md:flex">
          <a href="#services" className="rounded px-2 py-1 transition-colors hover:text-titan-gold hover:shadow-[0_0_10px_rgba(0,229,255,0.4)]">
            Services
          </a>
          <a href="#gallery" className="rounded px-2 py-1 transition-colors hover:text-titan-gold hover:shadow-[0_0_10px_rgba(0,229,255,0.4)]">
            Work
          </a>
          <a href="#faq" className="rounded px-2 py-1 transition-colors hover:text-titan-gold hover:shadow-[0_0_10px_rgba(0,229,255,0.4)]">
            FAQ
          </a>
          <a href="#contact" className="rounded px-2 py-1 transition-colors hover:text-titan-gold hover:shadow-[0_0_10px_rgba(0,229,255,0.4)]">
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
