/* Tour card: 4x5 arch media, eyebrow, title, one-line blurb, text link.
   Hover: slow image scale 1.04 inside overflow-hidden media (kit card-tour). */

import Link from "next/link";
import Image from "next/image";
import type { Tour } from "@/lib/content";

export default function TourCard({ tour, priority = false }: { tour: Tour; priority?: boolean }) {
  return (
    <article className="card-tour group">
      <Link
        href={`/tours/${tour.slug}`}
        className="media arch block"
        aria-label={`View the tour: ${tour.name}`}
      >
        <Image
          src={tour.image}
          alt={tour.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 86vw"
          className="object-cover"
        />
      </Link>
      <p className="t-eyebrow mt-2 text-rose-600">{tour.eyebrow}</p>
      <h3 className="t-h3">
        <Link
          href={`/tours/${tour.slug}`}
          className="transition-colors duration-[240ms] hover:text-brand"
        >
          {tour.name}
        </Link>
      </h3>
      <p className="t-body text-ink-muted">{tour.blurb}</p>
      <Link
        href={`/tours/${tour.slug}`}
        className="t-button w-fit text-brand underline decoration-2 underline-offset-[6px] transition-colors duration-[240ms] hover:text-brand-hover"
      >
        View the tour
      </Link>
    </article>
  );
}
