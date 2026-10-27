"use client";

/* Testimonial carousel widget (homepage).
   - GSAP-driven slide track, expo.out, localized quote marks
   - Auto-advances every 6.5s; pauses on hover, focus, swipe and hidden tabs
   - Arrows, dot navigation, swipe gestures, keyboard accessible
   - prefers-reduced-motion: no auto-advance, instant slide changes
   Per gsap skills: transform aliases only, autoAlpha, scope + cleanup. */

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, prefersReduced } from "@/lib/gsap";
import type { Dict, Testimonial } from "@/lib/content";

export default function TestimonialCarousel({
  quotes,
  dict,
}: {
  quotes: readonly Testimonial[];
  dict: Dict;
}) {
  const root = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prevIndex = useRef(0);
  const pointerStart = useRef<{ x: number; t: number } | null>(null);

  const count = quotes.length;
  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);

  /* Slide motion: track slides to -100% per index. First paint positions instantly.
     will-change is set only for the tween and dropped on complete: no resting layer. */
  useGSAP(
    () => {
      const el = track.current;
      if (!el) return;
      if (prevIndex.current === index && index === 0) {
        gsap.set(el, { xPercent: 0 });
      } else {
        el.style.willChange = "transform";
        gsap.to(el, {
          xPercent: -100 * index,
          duration: prefersReduced() ? 0 : 0.9,
          ease: "expo.out",
          onComplete: () => {
            el.style.willChange = "";
          },
        });
      }
      prevIndex.current = index;
    },
    { scope: root, dependencies: [index] }
  );

  /* Auto-advance: 6.5s, paused on hover/focus/tab hidden/reduced motion. */
  useEffect(() => {
    if (paused || prefersReduced()) return;
    if (typeof document !== "undefined" && document.hidden) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (i + 1) % count);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, t: Date.now() };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    if (Math.abs(dx) > 48 && Date.now() - start.t < 800) {
      step(dx < 0 ? 1 : -1);
    }
  };

  const onRegionKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  const marks = dict.quoteMarks;

  return (
    <div
      ref={root}
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={dict.home.testimonials.ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onRegionKeyDown}
    >
      {/* Desert sun behind the panel: warmth of Namibian hospitality, decorative */}
      <div
        className="sun-disc -left-10 -top-10 opacity-30 md:-left-16"
        aria-hidden="true"
      />

      <div
        className="relative z-10 overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface"
        aria-live={paused ? "polite" : "off"}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          ref={track}
          className="flex"
          style={{ touchAction: "pan-y" }}
        >
          {quotes.map((q, i) => (
            <figure
              key={`${q.name}-${i}`}
              className="w-full shrink-0 px-8 py-10 md:px-14 md:py-14"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${count}`}
            >
              <span
                className="font-script block text-6xl leading-none text-rose-400"
                aria-hidden="true"
              >
                {marks.open}
              </span>
              <blockquote className="t-lead mt-6 text-ink md:text-[1.35rem] md:leading-[1.6]">
                {q.quote}
                <span aria-hidden="true">{marks.close}</span>
              </blockquote>
              <figcaption className="t-eyebrow mt-8 text-ink-muted">
                {q.name} &middot; {q.country}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Controls: previous, dots, next. 44px targets, localized labels. */}
      <div className="relative z-10 mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label={dict.a11y.prevSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-rose-300 text-rose-700 transition-colors duration-[240ms] hover:border-brand hover:bg-brand hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          {quotes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={dict.a11y.goToSlide.replace("{n}", String(i + 1))}
              aria-current={i === index ? "true" : undefined}
              className={`h-3 rounded-full transition-[width,background-color] duration-[240ms] ${
                i === index
                  ? "w-8 bg-brand"
                  : "w-3 bg-rose-300 hover:bg-rose-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label={dict.a11y.nextSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-rose-300 text-rose-700 transition-colors duration-[240ms] hover:border-brand hover:bg-brand hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {index + 1} / {count}
      </p>
    </div>
  );
}
