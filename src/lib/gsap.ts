"use client";

/* GSAP singleton: registers ScrollTrigger + useGSAP once, sets brand defaults.
   Import ONLY from client components. Per gsap-core/gsap-react skills:
   - transform aliases + autoAlpha (never raw opacity for hide/show)
   - gsap.matchMedia for prefers-reduced-motion (auto revert)
   - useGSAP(scope) for automatic cleanup on route change */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  // Brand motion profile: "restrained" per design plan (RNG seed 20261020).
  gsap.defaults({ duration: 0.8, ease: "power2.out" });
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger, useGSAP };
