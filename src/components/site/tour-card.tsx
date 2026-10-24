/* Tour card: 4x5 arch media, eyebrow, title, one-line blurb, text link.
   Hover: slow image scale 1.04 inside overflow-hidden media (kit card-tour). */

import Link from "next/link";
import Image from "next/image";
import { localePath, type Locale, type Tour } from "@/lib/content";

export default function TourCard({
  tour,
  locale,
  labels,
  priority = false,
}: {
  tour: Tour;
  locale: Locale;
  labels: { viewTour: string; viewTourAria: string };
  priority?: boolean;
}) {
  const href = localePath(locale, `/tours/${tour.slug}`);
  return (
    <article className="card-tour group">
      <Link
        href={href}
        className="media arch block"
        aria-label={labels.viewTourAria.replace("{name}", tour.name)}
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
          href={href}
          className="transition-colors duration-[240ms] hover:text-brand"
        >
          {tour.name}
        </Link>
      </h3>
      <p className="t-body text-ink-muted">{tour.blurb}</p>
      <Link
        href={href}
        className="t-button w-fit text-brand underline decoration-2 underline-offset-[6px] transition-colors duration-[240ms] hover:text-brand-hover"
      >
        {labels.viewTour}
      </Link>
    </article>
  );
}
