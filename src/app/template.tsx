"use client";

/* Route-change craft: every navigation replays a short page entrance.
   Runs on every route (the correction: craft everywhere, not just home).
   GSAP via useGSAP with auto cleanup; reduced motion = instant. */

import { useRef } from "react";
import { gsap, useGSAP, prefersReduced } from "@/lib/gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReduced()) return;
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "transform,visibility",
        }
      );
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
