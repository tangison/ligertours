import Link from "next/link";
import Image from "next/image";
import Dune from "@/components/site/dune";
import TourCard from "@/components/site/tour-card";
import HomeHero from "@/components/site/home-hero";
import {
  WordScrub,
  ImgReveal,
  Batch,
  CountUp,
  PinnedQuote,
  DriftY,
} from "@/components/site/scroll-craft";
import { tours, activities, testimonials, company } from "@/lib/content";

const whyLiger = [
  {
    n: "1",
    title: "Local expertise",
    body: "Guides who know Namibia's history, wildlife, cultures and the quiet corners most itineraries skip.",
  },
  {
    n: "2",
    title: "Authentic experiences",
    body: "Bushmen walks, traditional cooking classes, township tours: genuine encounters, arranged with respect.",
  },
  {
    n: "3",
    title: "Personalised service",
    body: "Every tour is tailored to couples, families, groups and solo travellers, from first enquiry to final drop-off.",
  },
  {
    n: "4",
    title: "Comfort and safety",
    body: "Comfort and safety are top priorities throughout every journey, not optional extras.",
  },
  {
    n: "5",
    title: "Registered operator",
    body: "Registered with the Namibia Tourism Board (NTB) and held to professional standards at every step.",
  },
];

type Stat = { value?: number; suffix?: string; label: string; raw?: string };

const stats: Stat[] = [
  { value: 7, suffix: "", label: "Signature routes" },
  { value: 12, suffix: "", label: "Guided experiences" },
  { value: 100, suffix: "%", label: "Locally owned" },
  { label: "Country, known deeply", raw: "NTB" },
];

export default function HomePage() {
  const featured = [
    tours.find((t) => t.slug === "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha")!,
    tours.find((t) => t.slug === "etosha-and-waterberg")!,
    tours.find((t) => t.slug === "kalahari-quiver-tree-fish-river-canyon")!,
  ];
  const homeActivities = activities.slice(0, 6);

  return (
    <>
      {/* 1. Hero: load-crafted entrance, parallax capped 12% */}
      <HomeHero />

      {/* 2. Intro: scrubbed heading, arch image entrance, sun disc */}
      <section className="section" aria-label="About Liger Tours">
        <div className="container-liger grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="t-eyebrow text-rose-600">Locally owned, NTB registered</p>
            <WordScrub
              as="h2"
              className="t-h2 mt-4"
              text="The best way to see Namibia is with people who call it home."
            />
            <p className="t-body mt-6 text-ink-muted">
              Liger Tours Namibia is a Windhoek tour company built on genuine
              local knowledge. From game drives just outside the capital to
              multi-day journeys across the country's deserts, coastlines and
              wildlife reserves, every route is designed to show you the real
              Namibia, at a pace that lets you actually take it in.
            </p>
            <p className="t-body mt-4 text-ink-muted">
              As a company registered with the Namibia Tourism Board, we plan
              every trip around the people booking it: couples, families, groups
              and solo travellers, each with a route, pace and style of travel
              that suits them.
            </p>
            <Link
              href="/about"
              className="t-button mt-8 inline-block text-brand underline decoration-2 underline-offset-[6px] transition-colors duration-[240ms] hover:text-brand-hover"
            >
              More about us
            </Link>
          </div>
          <ImgReveal className="arch-wrap relative mx-auto w-full max-w-[420px]">
            <div className="sun-disc -left-16 bottom-10 md:-left-24" aria-hidden="true" />
            <div className="arch relative z-10">
              <Image
                src="/imagery/crops/gemsbok-golden-light-4x5.webp"
                alt="Gemsbok oryx with long straight horns standing on a grassy ridge in golden light"
                fill
                sizes="(min-width: 1024px) 420px, 86vw"
                className="object-cover"
              />
            </div>
          </ImgReveal>
        </div>
      </section>

      {/* 2b. Facts strip: count-up on enter */}
      <section className="border-y border-rose-200 bg-rose-50" aria-label="Liger Tours in numbers">
        <div className="container-liger grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-script text-5xl text-rose-700 md:text-6xl" aria-hidden="true">
                {s.raw ? (
                  s.raw
                ) : (
                  <CountUp to={s.value ?? 0} suffix={s.suffix ?? ""} />
                )}
              </p>
              <p className="t-eyebrow mt-3 text-ink-muted">{s.label}</p>
              <span className="sr-only">
                {s.raw ?? `${s.value}${s.suffix}`} {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Signature tours: batched card entrances */}
      <Dune variant="rose-100" />
      <section className="section bg-surface-alt" aria-label="Signature tours">
        <div className="container-liger">
          <p className="t-eyebrow text-rose-600">Where we go</p>
          <WordScrub
            as="h2"
            className="t-h2 mt-4 max-w-3xl"
            text="Signature tours, shaped around you."
          />
          <Batch className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featured.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </Batch>
          <Batch className="mt-12" y={16}>
            <div>
              <Link href="/tours" className="btn btn--primary">
                See all routes
              </Link>
            </div>
          </Batch>
        </div>
      </section>

      {/* 4. Flagship: pinned landscape band, script line scrubs while pinned */}
      <PinnedQuote
        image="/imagery/web/deadvlei-blue-sky.webp"
        alt="Dead acacia trees on a white clay pan below red dunes and a deep blue sky"
        quote="Five hundred year old trees. A thousand metre dunes. Your morning."
      />
      <Dune variant="rose-200" />

      {/* 5. Why Liger: rose-200 panel, batched script numbers */}
      <section className="section bg-[#F0DAD5]" aria-label="Why travel with us">
        <div className="container-liger">
          <p className="t-eyebrow text-rose-700">Why Liger Tours</p>
          <WordScrub as="h2" className="t-h2 mt-4 max-w-3xl" text="What makes the difference." />
          <Batch className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
            {whyLiger.map((item) => (
              <div key={item.n} className="border-t-2 border-rose-700/30 pt-6">
                <p className="font-script text-5xl text-rose-700" aria-hidden="true">
                  {item.n}
                </p>
                <h3 className="t-h4 mt-4">{item.title}</h3>
                <p className="t-small mt-3 text-ink-muted">{item.body}</p>
              </div>
            ))}
          </Batch>
        </div>
      </section>

      {/* 6. Activities: batched tiles */}
      <Dune variant="rose-50" />
      <section className="section" aria-label="Activities">
        <div className="container-liger">
          <p className="t-eyebrow text-rose-600">Day trips and experiences</p>
          <WordScrub as="h2" className="t-h2 mt-4 max-w-3xl" text="Short on time? Start here." />
          <Batch className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeActivities.map((a) => (
              <Link
                key={a.slug}
                href="/activities"
                className="group relative block aspect-square overflow-hidden rounded-[var(--radius-md)]"
                aria-label={`${a.name}: ${a.duration}`}
              >
                <Image
                  src={a.image.replace("-4x5", "-1x1")}
                  alt={a.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,22,19,0)_35%,rgba(31,22,19,.78)_100%)]"
                  aria-hidden="true"
                />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="t-eyebrow block text-rose-200">{a.duration}</span>
                  <span className="t-h4 mt-1 block text-rose-50">{a.name}</span>
                </span>
              </Link>
            ))}
          </Batch>
          <Batch className="mt-12" y={16}>
            <div>
              <Link href="/activities" className="btn btn--ghost">
                Browse all experiences
              </Link>
            </div>
          </Batch>
        </div>
      </section>

      {/* 7. Stay: image entrances + scrubbed heading */}
      <section className="section bg-surface-alt" aria-label="Where you stay">
        <div className="container-liger">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <ImgReveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
                  <Image
                    src="/imagery/crops/thatched-chalets-hillside-16x9.webp"
                    alt="Row of thatched chalets on stilts below a rocky red hillside"
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </ImgReveal>
              <ImgReveal delay={0.15}>
                <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-[var(--radius-md)] sm:ml-16 sm:mt-[-3rem] sm:w-2/3 sm:shadow-[var(--shadow-2)]">
                  <Image
                    src="/imagery/crops/red-dune-timber-lodge-16x9.webp"
                    alt="Timber lodge cabin with a green roof on a red sand dune under a blue sky"
                    fill
                    loading="lazy"
                    sizes="(min-width: 640px) 33vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </ImgReveal>
            </div>
            <div>
              <p className="t-eyebrow text-rose-600">Where you stay</p>
              <WordScrub
                as="h2"
                className="t-h2 mt-4"
                text="Lodges and camps chosen the way we would choose for family."
              />
              <p className="t-body mt-6 text-ink-muted">
                From timber lodges on Kalahari dunes to thatched chalets above
                the riverbeds, every stop on a Liger tour is a place we have
                stayed ourselves and would recommend to family. Comfort where it
                counts, character everywhere, and locations chosen for the view
                you wake up to.
              </p>
              <Link
                href="/tours"
                className="t-button mt-8 inline-block text-brand underline decoration-2 underline-offset-[6px] transition-colors duration-[240ms] hover:text-brand-hover"
              >
                See the routes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials: batched quotes */}
      <section className="section" aria-label="What our guests say">
        <div className="container-narrow">
          <p className="t-eyebrow text-rose-600">Guest words</p>
          <Batch className="mt-10 grid gap-12" y={20}>
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-rose-300 pt-8">
                <blockquote className="text-[1.5rem] leading-[1.5] text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="t-eyebrow mt-6 text-ink-muted">
                  {t.name} &middot; {t.country}
                </figcaption>
              </figure>
            ))}
          </Batch>
        </div>
      </section>

      {/* 9. Final CTA: night, drifting sun disc + gradient disc pattern, scrubbed script line */}
      <Dune variant="night" />
      <section className="section on-dark relative overflow-hidden" aria-label="Plan your trip">
        <DriftY className="absolute -right-24 -top-16" percent={7}>
          <div className="sun-disc opacity-70" aria-hidden="true" />
        </DriftY>
        <img
          src="/brand/patterns/sun-gradient-disc.svg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute -bottom-28 -left-28 w-72 opacity-25 md:w-96"
        />
        <div className="container-liger relative z-10 py-10 text-center md:py-20">
          <WordScrub as="h2" className="t-h2 mx-auto max-w-3xl text-rose-100" text="Ready when you are." />
          <p className="t-script mx-auto mt-4 max-w-2xl font-script text-3xl leading-snug text-rose-200 md:text-4xl">
            Tell us your dates. We will build the trip around them.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn--primary">
              Plan my trip
            </Link>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              WhatsApp us now
            </a>
          </div>
          <p className="t-small mt-8 text-ink-muted-on-dark">
            {company.phone} &middot; {company.email}
          </p>
        </div>
      </section>
    </>
  );
}
