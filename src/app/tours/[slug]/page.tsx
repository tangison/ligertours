import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import ContactForm from "@/components/site/contact-form";
import { tours, company } from "@/lib/content";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return {};
  return {
    title: tour.metaTitle,
    description: tour.blurb.slice(0, 155),
    openGraph: {
      title: `${tour.metaTitle} | Liger Tours Namibia`,
      description: tour.blurb.slice(0, 155),
      images: [{ url: tour.image.replace("-4x5", "-16x9"), width: 1600, height: 900, alt: tour.alt }],
    },
  };
}

const included = [
  "Local guide and driver for the full route",
  "Park and conservancy fees on the itinerary",
  "Accommodation on the route, booked for you",
  "All route transport from Windhoek and back",
];
const notIncluded = [
  "International flights to and from Namibia",
  "Travel insurance (required before departure)",
  "Personal spending, drinks and souvenirs",
  "Optional activities not listed on the route",
];

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.blurb,
    touristType: "Small group guided tour",
    itinerary: tour.highlights,
    provider: {
      "@type": "LocalBusiness",
      name: company.legalName,
      telephone: "+264814722552",
      email: company.email,
      address: { "@type": "PostalAddress", addressLocality: "Windhoek", addressCountry: "NA" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        image={tour.image.replace("-4x5", "-16x9")}
        alt={tour.alt}
        eyebrow={tour.eyebrow}
        title={tour.name}
      />

      {/* Summary bar */}
      <div className="border-b border-line bg-surface-alt">
        <div className="container-liger grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="t-eyebrow text-rose-600">Route</p>
            <p className="t-body mt-1">{tour.route}</p>
          </div>
          <div>
            <p className="t-eyebrow text-rose-600">Duration</p>
            <p className="t-body mt-1">{tour.duration ?? "Confirmed at enquiry"}</p>
          </div>
          <div>
            <p className="t-eyebrow text-rose-600">Group size</p>
            <p className="t-body mt-1">Your group only</p>
          </div>
          <div>
            <p className="t-eyebrow text-rose-600">Departs</p>
            <p className="t-body mt-1">Windhoek, on your dates</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container-liger grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            {/* Overview */}
            <Reveal>
              <h2 className="t-h2">The route</h2>
              <div className="prose-liger mt-6 grid gap-4">
                {tour.description.map((p) => (
                  <p key={p.slice(0, 24)} className="t-body text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Day-by-day timeline */}
            <Reveal className="mt-16">
              <h2 className="t-h2">Day by day</h2>
              <p className="t-body mt-4 max-w-2xl text-ink-muted">
                The exact day plan is confirmed with you at enquiry and shaped
                around your dates. These are the stops that never change.
              </p>
              <ol className="timeline mt-10">
                {tour.highlights.map((h, i) => (
                  <li key={h} className="timeline-item">
                    <p className="font-script text-3xl text-rose-700" aria-hidden="true">
                      {i + 1}
                    </p>
                    <h3 className="t-h4 mt-1">{h}</h3>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* Highlights gallery band */}
            <Reveal className="mt-16">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-lg)]">
                <Image
                  src="/imagery/web/deadvlei-warm-light.webp"
                  alt="Bare dead trees on pale clay with a red dune rising behind"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Included / not included */}
            <Reveal className="mt-16">
              <h2 className="t-h2">What is included</h2>
              <div className="mt-8 grid gap-10 sm:grid-cols-2">
                <div className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
                  <h3 className="t-h4 text-rose-700">Included</h3>
                  <ul className="mt-4 grid gap-3">
                    {included.map((item) => (
                      <li key={item} className="t-body flex gap-3 text-ink-muted">
                        <span className="mt-[3px] text-brand" aria-hidden="true">
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[var(--radius-lg)] border border-line p-8">
                  <h3 className="t-h4">Not included</h3>
                  <ul className="mt-4 grid gap-3">
                    {notIncluded.map((item) => (
                      <li key={item} className="t-body flex gap-3 text-ink-muted">
                        <span className="mt-[3px] text-rose-400" aria-hidden="true">
                          &#10005;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="t-small mt-6 max-w-2xl text-ink-muted">
                Prices depend on your group size, season and accommodation
                choices, so we quote every tour individually in N$. Send the
                enquiry form and you will have a full quote, with nothing hidden,
                usually within one working day.
              </p>
            </Reveal>
          </div>

          {/* Sticky enquiry panel */}
          <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Enquire about this tour">
            <Reveal className="rounded-[var(--radius-lg)] border border-line bg-surface p-8 shadow-[var(--shadow-1)]">
              <h2 className="t-h3">Enquire about this tour</h2>
              <p className="t-body mt-3 text-ink-muted">
                Tell us your dates and group. We reply with a personalised quote
                and an honest view on timing.
              </p>
              <div className="mt-6">
                <ContactForm source={`tour:${tour.slug}`} />
              </div>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost mt-6 w-full"
              >
                WhatsApp us instead
              </a>
            </Reveal>
          </aside>
        </div>
      </div>

      {/* More tours */}
      <Dune variant="rose-100" />
      <section className="section bg-surface-alt" aria-label="More tours">
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">Other routes you might like</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {tours
              .filter((t) => t.slug !== tour.slug)
              .slice(0, 3)
              .map((t, i) => (
                <Reveal key={t.slug} delay={i * 80}>
                  <Link
                    href={`/tours/${t.slug}`}
                    className="card-tour group"
                    aria-label={`View the tour: ${t.name}`}
                  >
                    <span className="media arch block">
                      <Image
                        src={t.image}
                        alt={t.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 86vw"
                        className="object-cover"
                      />
                    </span>
                    <span className="t-eyebrow mt-2 block text-rose-600">{t.eyebrow}</span>
                    <span className="t-h3 mt-2 block transition-colors duration-[240ms] group-hover:text-brand">
                      {t.name}
                    </span>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
