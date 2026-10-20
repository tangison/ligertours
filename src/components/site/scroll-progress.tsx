"use client";

/* Scroll progress hairline: 3px rose-400 line over the brand bar,
   scrub-linked to page scroll, present on every route.
   rose-400 is the kit's decorative accent, safe on both header states. */

import { useRef } from "react";
import { gsap, useGSAP, prefersReduced } from "@/lib/gsap";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = bar.current;
    if (!el || prefersReduced()) return;
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      }
    );
  });

  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[101] h-[3px] origin-left scale-x-0 bg-rose-400"
    />
  );
}
