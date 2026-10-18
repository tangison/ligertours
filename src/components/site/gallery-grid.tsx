"use client";

/* Gallery: masonry grid with lightbox. Keyboard: Escape closes,
   ArrowLeft/ArrowRight navigate. Focus returns to the opening item. */

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryPhoto = { src: string; alt: string; tall?: boolean };

export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    openerRef.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((cur) => (cur === null ? null : (cur + dir + photos.length) % photos.length));
    },
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            ref={i === 0 ? openerRef : undefined}
            className="gallery-item block w-full cursor-zoom-in text-left focus-visible:outline-[3px]"
            onClick={(e) => {
              openerRef.current = e.currentTarget;
              setActive(i);
            }}
            aria-label={`Open image: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={800}
              height={p.tall ? 1000 : 800}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              loading="lazy"
              className="h-auto w-full rounded-[var(--radius-md)]"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="on-dark fixed inset-0 z-[1000] flex flex-col bg-night/95 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].alt}
          onClick={close}
        >
          <div className="flex items-center justify-between">
            <p className="t-small text-ink-muted-on-dark">
              {active + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={close}
              className="t-button flex h-11 min-h-11 items-center rounded-[var(--radius-pill)] border-2 border-rose-200 px-5 text-rose-200 transition-colors duration-[240ms] hover:bg-rose-200 hover:text-night"
              autoFocus
            >
              Close
            </button>
          </div>
          <div
            className="relative mt-4 flex flex-1 items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-rose-200 text-2xl text-rose-200 transition-colors duration-[240ms] hover:bg-rose-200 hover:text-night"
            >
              &#8592;
            </button>
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              width={1400}
              height={1050}
              sizes="(min-width: 1024px) 70vw, 90vw"
              className="max-h-[72svh] w-auto max-w-full rounded-[var(--radius-md)] object-contain"
              priority
            />
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-rose-200 text-2xl text-rose-200 transition-colors duration-[240ms] hover:bg-rose-200 hover:text-night"
            >
              &#8594;
            </button>
          </div>
          <p className="t-small mt-4 text-center text-ink-muted-on-dark">{photos[active].alt}</p>
        </div>
      )}
    </>
  );
}
