"use client";

import { useEffect, useState } from "react";
import { siteConfig, smsHref, telHref } from "@/lib/site-config";

export function StickyMobileCTA() {
  const [hiddenNearForm, setHiddenNearForm] = useState(false);
  const callReady = Boolean(siteConfig.phoneTel);
  const smsReady = Boolean(siteConfig.smsTel);

  useEffect(() => {
    const form = document.getElementById("contact");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHiddenNearForm(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.15 }
    );

    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (hiddenNearForm) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-titan-black/15 bg-titan-black/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-content gap-2">
        <a
          href={callReady ? telHref() : "#contact"}
          className="btn-call flex-1 py-3.5 text-sm"
        >
          {callReady
            ? `Call ${siteConfig.phoneDisplay}`
            : `Call ${siteConfig.phoneDisplay}`}
        </a>
        <a
          href={
            smsReady
              ? smsHref("Hi Titan — I'd like a quote for a project.")
              : "#contact"
          }
          className="btn-primary flex-1 py-3.5 text-sm"
        >
          Text Us
        </a>
      </div>
    </div>
  );
}
