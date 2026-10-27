"use client";

/* Inner page header: 50svh photo with dusk overlay, eyebrow, script H1.
   Craft on EVERY page that uses it: eyebrow rises, title words stagger in,
   image settles 1.05 -> 1. Parallax capped 12%, disabled for reduced motion. */

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, prefersReduced } from "@/lib/gsap";
import { WordsIn } from "./scroll-craft";
import Parallax from "./parallax";

export default function PageHeader({
  image,
  alt,
  eyebrow,
  title,
  priority = true,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  priority?: boolean;
}) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!root.current || prefersReduced()) return;
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        root.current.querySelector(".page-header-img"),
        { scale: 1.05 },
        { scale: 1, duration: 1.8, ease: "expo.out" },
        0
      ).fromTo(
        ".ph-eyebrow",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.55 },
        0.15
      );
    },
    { scope: root }
  );

  return (
    <header ref={root} className="page-header">
      <Parallax className="z-[-20]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="page-header-img object-cover"
        />
      </Parallax>
      <div className="container-liger pb-14 pt-40">
        <p className="ph-eyebrow t-eyebrow relative z-[2] text-rose-200">{eyebrow}</p>
        <WordsIn
          as="h1"
          text={title}
          className="t-h1 mt-3 max-w-4xl text-rose-50"
          delay={0.3}
          stagger={0.05}
        />
      </div>
    </header>
  );
}
