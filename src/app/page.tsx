import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/reveal";
import Parallax from "@/components/site/parallax";
import Dune from "@/components/site/dune";
import TourCard from "@/components/site/tour-card";
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

export default function HomePage() {
  const featured = [
    tours.find((t) => t.slug === "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha")!,
    tours.find((t) => t.slug === "etosha-and-waterberg")!,
    tours.find((t) => t.slug === "kalahari-quiver-tree-fish-river-canyon")!,
  ];
  const homeActivities = activities.slice(0, 6);

  return (
    <>
      {/* 1. Hero: safari-vehicle-red-sand, dusk overlay, headline lockup, CTAs, parallax max 12% */}
      <section className="photo-hero" aria-label="Welcome">
        <Parallax className="z-[-20]">
          <Image
            src="/imagery/web/safari-vehicle-red-sand.webp"
            alt="Open safari vehicle with two guests driving over red sand at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
        <div className="container-liger pb-16 pt-44 md:pb-24">
          <div className="lockup max-w-5xl">
            <p className="kicker text-rose-200">Guided by locals</p>
            <h1 className="script text-rose-50">Namibia, unhurried.</h1>
          </div>
          <p className="t-lead mt-6 max-w-2xl text-rose-100">
            Locally owned, Windhoek based. Small group guided tours from the red
            dunes of Sossusvlei to the wildlife of Etosha, planned around your
            dates and your pace.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn--primary">
              Plan my trip
            </Link>
            <Link href="/tours" className="btn btn--ghost border-rose-100 text-rose-50 hover:border-rose-50 hover:bg-rose-50 hover:text-ink">
              View tours
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Intro: two columns, arch portrait with offset outline and sun discs */}
      <section className="section" aria-label="About Liger Tours">
        <div className="container-liger grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="t-eyebrow text-rose-600">Locally owned, NTB registered</p>
            <h2 className="t-h2 mt-4">
              The best way to see Namibia is with people who call it home.
            </h2>
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
          </Reveal>
          <Reveal delay={120} className="arch-wrap relative mx-auto w-full max-w-[420px]">
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
          </Reveal>
        </div>
      </section>

      {/* 3. Signature tours: rose-100, 3-col arch cards */}
      <Dune variant="rose-100" />
      <section className="section bg-surface-alt" aria-label="Signature tours">
        <div className="container-liger">
          <Reveal>
            <p className="t-eyebrow text-rose-600">Where we go</p>
            <h2 className="t-h2 mt-4 max-w-3xl">Signature tours, shaped around you.</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featured.map((tour, i) => (
              <Reveal key={tour.slug} delay={i * 80}>
                <TourCard tour={tour} priority={i === 0} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/tours" className="btn btn--primary">
              View all tours
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Landscape band: full-bleed deadvlei-blue-sky, script phrase, no button, dune into next */}
      <section className="relative isolate" aria-label="The Namib landscape">
        <div className="relative grid min-h-[60svh] items-center">
          <Image
            src="/imagery/web/deadvlei-blue-sky.webp"
            alt="Dead acacia trees on a white clay pan below red dunes and a deep blue sky"
            fill
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
          <div className="absolute inset-0 bg-[var(--overlay-dusk)]" aria-hidden="true" />
          <Reveal className="container-liger relative py-24">
            <p className="t-hero max-w-4xl text-rose-50">
              Five hundred year old trees. A thousand metre dunes. Your morning.
            </p>
          </Reveal>
        </div>
        <Dune variant="rose-200" />
      </section>

      {/* 5. Why Liger: rose-200 panel, script numbers */}
      <section className="section bg-[#F0DAD5]" aria-label="Why travel with us">
        <div className="container-liger">
          <Reveal>
            <p className="t-eyebrow text-rose-700">Why Liger Tours</p>
            <h2 className="t-h2 mt-4 max-w-3xl">What makes the difference.</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {whyLiger.map((item, i) => (
              <Reveal key={item.n} delay={i * 80} className="border-t-2 border-rose-700/30 pt-6">
                <p className="font-script text-5xl text-rose-700" aria-hidden="true">
                  {item.n}
                </p>
                <h3 className="t-h4 mt-4">{item.title}</h3>
                <p className="t-small mt-3 text-ink-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Activities: 2x3 image tiles with dusk overlay titles */}
      <Dune variant="rose-50" />
      <section className="section" aria-label="Activities">
        <div className="container-liger">
          <Reveal>
            <p className="t-eyebrow text-rose-600">Day trips and experiences</p>
            <h2 className="t-h2 mt-4 max-w-3xl">Short on time? Start here.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeActivities.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 80}>
                <Link
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
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/activities" className="btn btn--ghost">
              All activities
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7. Stay: two photos side by side with short copy */}
      <section className="section bg-surface-alt" aria-label="Where you stay">
        <div className="container-liger">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
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
            </Reveal>
            <Reveal delay={120}>
              <p className="t-eyebrow text-rose-600">Where you stay</p>
              <h2 className="t-h2 mt-4">Lodges and camps chosen the way we would choose for family.</h2>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Testimonials: real ones only, quote in Schibsted 24px, name in Archivo label */}
      <section className="section" aria-label="What our guests say">
        <div className="container-narrow">
          <Reveal>
            <p className="t-eyebrow text-rose-600">Guest words</p>
          </Reveal>
          <div className="mt-10 grid gap-12">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="border-t border-rose-300 pt-8">
                  <blockquote className="text-[1.5rem] leading-[1.5] text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="t-eyebrow mt-6 text-ink-muted">
                    {t.name} &middot; {t.country}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA: night, sun discs, script H2, two buttons */}
      <Dune variant="night" />
      <section className="section on-dark relative overflow-hidden" aria-label="Plan your trip">
        <div className="sun-disc -right-24 -top-16 opacity-70" aria-hidden="true" />
        <div className="container-liger relative z-10 py-10 text-center md:py-20">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-3xl text-rose-100">
              Ready when you are.
            </h2>
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
                WhatsApp us
              </a>
            </div>
            <p className="t-small mt-8 text-ink-muted-on-dark">
              {company.phone} &middot; {company.email}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
