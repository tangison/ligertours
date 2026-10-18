"use client";

/* Hero parallax, capped at 12% per the brand motion guide.
   Runs on rAF-throttled scroll, disabled when prefers-reduced-motion. */

import { useEffect, useRef } from "react";

export default function Parallax({
  children,
  max = 0.12,
  className = "",
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
}) {
  const inner = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const scrolled = Math.max(0, -rect.top);
      const shift = Math.min(scrolled * max, rect.height * max);
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [max]);

  return (
    <div ref={inner} className={`absolute inset-0 will-change-transform ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}
