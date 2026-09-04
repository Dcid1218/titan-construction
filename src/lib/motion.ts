"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Attaches scroll-reveal behavior to any element: fades/slides in once it
 * crosses into the viewport. No-ops entirely under prefers-reduced-motion.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setRevealed(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    observer.observe(el);

    const failsafe = window.setTimeout(() => setRevealed(true), 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return { ref, revealed };
}

/** Tailwind classes for a `useScrollReveal` element. */
export const revealClass =
  "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0";

export function revealState(revealed: boolean) {
  return revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";
}

/**
 * Animates a number counting up from 0 to `target` once it scrolls into
 * view. Returns the current display value.
 */
export function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}

/** Fires a custom event the LeadForm listens for to pre-select a service and scroll into view. */
export const SELECT_SERVICE_EVENT = "titan:select-service";

export function selectService(service: string) {
  window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: service }));
}
