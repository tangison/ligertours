"use client";

/* Route container. The former whole-page fade lived here; it was cut for two
   reasons: it is the "one fade for the whole block" pattern the motion rules
   call out (per-section entrances already carry the craft), and a full-page
   ancestor tween re-composites every layer on the page each frame, which
   deadlocked software rasterizers during load. Entrances belong to sections. */

export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
