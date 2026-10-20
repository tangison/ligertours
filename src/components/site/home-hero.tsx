"use client";

/* Hero: cinematic-center (design plan, RNG seed 20261020).
   Load-crafted entrance: image scale settles 1.06 -> 1, kicker rises,
   headline words stagger in, lead + CTAs follow. Parallax stays capped 12%. */

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, prefersReduced } from "@/lib/gsap";
import { WordsIn } from "./scroll-craft";
import Parallax from "./parallax";

export default function HomeHero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!root.current || prefersReduced()) return;
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        root.current.querySelector(".hero-img"),
        { scale: 1.06 },
        { scale: 1, duration: 2.2, ease: "expo.out" },
        0
      )
        .fromTo(".hero-kicker", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.15)
        .fromTo(".hero-lead", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.75)
        .fromTo(
          ".hero-cta > *",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1 },
          0.95
        );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="photo-hero" aria-label="Welcome">
      <Parallax className="z-[-20]">
        <Image
          src="/imagery/web/safari-vehicle-red-sand.webp"
          alt="Open safari vehicle with two guests driving over red sand at golden hour"
          fill
          priority
          sizes="100vw"
          className="hero-img object-cover"
        />
      </Parallax>
      <div className="container-liger pb-16 pt-44 md:pb-24">
        <div className="lockup max-w-5xl">
          <p className="hero-kicker kicker text-rose-200">Guided by locals</p>
          <WordsIn
            as="h1"
            text="Namibia, unhurried."
            className="script text-rose-50"
            delay={0.35}
          />
        </div>
        <p className="hero-lead t-lead mt-6 max-w-2xl text-rose-100">
          Locally owned, Windhoek based. Small group guided tours from the red
          dunes of Sossusvlei to the wildlife of Etosha, planned around your
          dates and your pace.
        </p>
        <div className="hero-cta mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn--primary">
            Plan my trip
          </Link>
          <Link
            href="/tours"
            className="btn btn--ghost border-rose-100 text-rose-50 hover:border-rose-50 hover:bg-rose-50 hover:text-ink"
          >
            See the tours
          </Link>
        </div>
      </div>
    </section>
  );
}
