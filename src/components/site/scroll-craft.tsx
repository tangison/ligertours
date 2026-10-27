"use client";

/* Scroll craft engine v2 (GSAP ScrollTrigger).
   Applied on EVERY page, not just home. Primitives:

   WordsIn     load-time word-by-word rise (hero, page headers)
   WordScrub   scroll-scrubbed word-by-word opacity 0.1 -> 1 (gpt-taste)
   ImgReveal   image entrance scale 0.85 -> 1 + autoAlpha (gpt-taste)
   Batch       ScrollTrigger.batch staggered entrances for grids/cards
   CountUp     count-up stat on enter
   PinnedQuote flagship pinned section: script line scrubs while pinned
   LineDraw    vertical rule draws itself as the timeline scrolls (scrub)
   DriftY      capped scrub parallax for decorative layers (sun discs)

   Rules from installed skills (gsap-core / gsap-scrolltrigger / gsap-react):
   - useGSAP + scope everywhere, auto cleanup on route change
   - autoAlpha not opacity; transform aliases not top/left
   - scrub OR toggleActions, never both on one trigger
   - never animate the pinned element itself, animate children
   - prefers-reduced-motion: set final states, no pin, no scrub */

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReduced } from "@/lib/gsap";

/* ---------- WordsIn: load-time entrance ---------- */
export function WordsIn({
  text,
  className = "",
  as: Tag = "h1",
  stagger = 0.06,
  delay = 0.1,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  stagger?: number;
  delay?: number;
}) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      const words = root.current.querySelectorAll<HTMLElement>(".w");
      if (prefersReduced()) {
        gsap.set(words, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        words,
        { opacity: 0.12, y: "0.35em" },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", stagger, delay }
      );
    },
    { scope: root }
  );

  const words = text.split(" ");
  return (
    <Tag ref={root as React.RefObject<never>} className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="w inline-block">
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

/* ---------- WordScrub: scroll-scrubbed word opacity ---------- */
export function WordScrub({
  text,
  className = "",
  as: Tag = "h2",
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  stagger?: number;
}) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      const words = root.current.querySelectorAll<HTMLElement>(".w");
      if (prefersReduced()) {
        gsap.set(words, { opacity: 1 });
        return;
      }
      gsap.fromTo(
        words,
        { opacity: 0.35 },
        {
          opacity: 1,
          ease: "none",
          stagger,
          scrollTrigger: {
            trigger: root.current,
            start: "top 88%",
            end: "top 45%",
            scrub: 0.4,
          },
        }
      );
    },
    { scope: root }
  );

  const words = text.split(" ");
  return (
    <Tag ref={root as React.RefObject<never>} className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="w">
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}

/* ---------- ImgReveal: scale 0.85 -> 1 + autoAlpha on enter ---------- */
export function ImgReveal({
  children,
  className = "",
  scale = 0.85,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
  delay?: number;
}) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const target = el.firstElementChild as HTMLElement | null;
      if (!target) return;
      if (prefersReduced()) {
        gsap.set(target, { autoAlpha: 1, scale: 1 });
        return;
      }
      gsap.fromTo(
        target,
        { autoAlpha: 0, scale },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.1,
          ease: "expo.out",
          delay,
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}

/* ---------- Batch: staggered grid entrances via ScrollTrigger.batch ---------- */
export function Batch({
  children,
  className = "",
  y = 28,
  stagger = 0.08,
  selector = ":scope > *",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  selector?: string;
  as?: "div" | "ol" | "ul" | "section" | "nav";
}) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const items = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(selector));
      if (!items.length) return;
      if (prefersReduced()) {
        gsap.set(items, { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.set(items, { autoAlpha: 0, y });
      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, stagger, overwrite: true }),
      });
    },
    { scope: root }
  );

  return (
    <Tag ref={root as React.RefObject<never>} className={className}>
      {children}
    </Tag>
  );
}

/* ---------- CountUp ---------- */
export function CountUp({
  to,
  suffix = "",
  className = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const state = { v: 0 };
      if (prefersReduced()) {
        el.textContent = `${to}${suffix}`;
        return;
      }
      gsap.to(state, {
        v: to,
        duration,
        ease: "power1.out",
        onUpdate: () => {
          el.textContent = `${Math.round(state.v)}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/* ---------- PinnedQuote: flagship pinned section ---------- */
export function PinnedQuote({
  image,
  alt,
  quote,
  sub,
  ariaLabel = "The Namib landscape",
  className = "",
}: {
  image: string;
  alt: string;
  quote: string;
  sub?: string;
  ariaLabel?: string;
  className?: string;
}) {
  const root = useRef<HTMLElement | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!root.current || !stage.current) return;
      const words = root.current.querySelectorAll<HTMLElement>(".w");
      const subEl = root.current.querySelector<HTMLElement>(".pin-sub");
      const img = root.current.querySelector<HTMLElement>(".pin-img");
      if (prefersReduced()) {
        gsap.set(words, { opacity: 1 });
        return;
      }
      /* Desktop holds the stage and scrubs it. Phones render the same split
         band statically: no pin spacer, final states set, nothing to wait for. */
      const mm = gsap.matchMedia();
      mm.add(
        { isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" },
        (ctx) => {
          const mobile = ctx.conditions?.isMobile;
          if (mobile) {
            gsap.set(words, { opacity: 1 });
            gsap.set(img, { scale: 1 });
            if (subEl) gsap.set(subEl, { autoAlpha: 1, y: 0 });
            return;
          }
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=750",
              pin: stage.current,
              scrub: 0.6,
            },
          });
          tl.fromTo(
            words,
            { opacity: 0.35 },
            { opacity: 1, ease: "none", stagger: 0.05 },
            0
          );
          if (subEl) {
            tl.fromTo(subEl, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, ease: "none", duration: 0.25 }, 0.7);
          }
          tl.fromTo(img, { scale: 1.14 }, { scale: 1, ease: "none", duration: tl.duration() }, 0);
        }
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  const words = quote.split(" ");
  return (
    <section ref={root as React.RefObject<never>} className={`relative isolate ${className}`} aria-label={ariaLabel}>
      {/* Split stage: the statement sits on a solid night panel, the picture holds
          its own column. Text never crosses the photograph, at any width. */}
      <div ref={stage} className="relative grid min-h-[86svh] overflow-hidden bg-night md:grid-cols-[1.05fr_1fr]">
        <div className="relative order-2 flex items-center md:order-1">
          <div className="w-full py-14 pl-[max(var(--gutter),calc((100vw-var(--container))/2))] pr-[var(--gutter)] md:py-0 md:pr-[clamp(2rem,5vw,5rem)]">
            <p className="t-pin text-rose-50">
              {words.map((w, i) => (
                <span key={`${w}-${i}`} className="w">
                  {w}
                  {i < words.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
            {sub ? (
              <p className="pin-sub mt-5 font-script text-2xl text-rose-200 md:mt-6 md:text-4xl">
                {sub}
              </p>
            ) : null}
          </div>
        </div>
        <div className="relative order-1 h-[46svh] overflow-hidden md:order-2 md:h-auto">
          <img
            src={image}
            alt={alt}
            className="pin-img absolute inset-0 h-full w-full object-cover object-[center_38%]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- LineDraw: timeline rule draws on scrub ---------- */
export function LineDraw({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReduced()) {
        gsap.set(el, { scaleY: 1 });
        return;
      }
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top 78%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        }
      );
    },
    { scope: ref }
  );

  return <span ref={ref} className={className} aria-hidden="true" />;
}

/* ---------- DriftY: capped scrub parallax for decorations ---------- */
export function DriftY({
  children,
  className = "",
  percent = 8,
}: {
  children: ReactNode;
  className?: string;
  percent?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReduced()) return;
      gsap.fromTo(
        el,
        { yPercent: -percent },
        {
          yPercent: percent,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={{ "--drift": `${percent}%` } as CSSProperties}>
      {children}
    </div>
  );
}
