import Link from "next/link";
import Image from "next/image";
import Dune from "@/components/site/dune";
import TourCard from "@/components/site/tour-card";
import HomeHero from "@/components/site/home-hero";
import TestimonialCarousel from "@/components/site/testimonial-carousel";
import {
  WordScrub,
  ImgReveal,
  Batch,
  CountUp,
  PinnedQuote,
  DriftY,
} from "@/components/site/scroll-craft";
import {
  company,
  getDict,
  locales,
  type Locale,
} from "@/lib/content";
import { localePath } from "@/lib/content";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const home = dict.home;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: home.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const featured = [
    dict.tours.find((t) => t.slug === "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha")!,
    dict.tours.find((t) => t.slug === "etosha-and-waterberg")!,
    dict.tours.find((t) => t.slug === "kalahari-quiver-tree-fish-river-canyon")!,
  ];
  const homeActivities = dict.activities.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* 1. Hero: load-crafted entrance, parallax capped 12% */}
      <HomeHero locale={locale} dict={dict} />

      {/* 2. Intro: scrubbed heading, arch image entrance, sun disc (desert sun behind the veld view) */}
      <section className="section" aria-label={home.intro.eyebrow}>
        <div className="container-liger grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="t-eyebrow text-rose-600">{home.intro.eyebrow}</p>
            <WordScrub
              as="h2"
              className="t-h2 mt-4"
              text={home.intro.h2}
            />
            <p className="t-body mt-6 text-ink-muted">{home.intro.p1}</p>
            <p className="t-body mt-4 text-ink-muted">{home.intro.p2}</p>
            <Link
              href={localePath(locale, "/about")}
              className="t-button mt-8 inline-block text-brand underline decoration-2 underline-offset-[6px] transition-colors duration-[240ms] hover:text-brand-hover"
            >
              {home.intro.cta}
            </Link>
          </div>
          <ImgReveal className="arch-wrap relative mx-auto w-full max-w-[420px]">
            <div className="sun-disc -left-16 bottom-10 md:-left-24" aria-hidden="true" />
            <div className="arch relative z-10">
              <Image
                src="/imagery/crops/antelope-herd-savanna-4x5.webp"
                alt={home.intro.imageAlt}
                fill
                sizes="(min-width: 1024px) 420px, 86vw"
                className="object-cover"
              />
            </div>
          </ImgReveal>
        </div>
      </section>

      {/* 2b. Facts strip: count-up on enter */}
      <section className="border-y border-rose-200 bg-rose-50" aria-label={home.stats.ariaLabel}>
        <div className="container-liger grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
          {home.stats.items.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-script text-5xl text-rose-700 md:text-6xl" aria-hidden="true">
                {"raw" in s && s.raw ? (
                  s.raw
                ) : (
                  <CountUp to={("value" in s ? s.value : 0) ?? 0} suffix={("suffix" in s ? s.suffix : "") ?? ""} />
                )}
              </p>
              <p className="t-eyebrow mt-3 text-ink-muted">{s.label}</p>
              <span className="sr-only">
                {("raw" in s ? s.raw : "") || `${("value" in s ? s.value : 0)}${("suffix" in s ? s.suffix : "") || ""}`} {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Signature tours: batched card entrances */}
      <Dune variant="rose-100" />
      <section className="section bg-surface-alt" aria-label={home.tours.ariaLabel}>
        <div className="container-liger">
          <p className="t-eyebrow text-rose-600">{home.tours.eyebrow}</p>
          <WordScrub
            as="h2"
            className="t-h2 mt-4 max-w-3xl"
            text={home.tours.h2}
          />
          <Batch className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featured.map((tour) => (
              <TourCard
                key={tour.slug}
                tour={tour}
                locale={locale}
                labels={{ viewTour: dict.tourDetail.viewTour, viewTourAria: dict.tourDetail.viewTourAria }}
              />
            ))}
          </Batch>
          <Batch className="mt-12" y={16}>
            <div>
              <Link href={localePath(locale, "/tours")} className="btn btn--primary">
                {home.tours.cta}
              </Link>
            </div>
          </Batch>
        </div>
      </section>

      {/* 4. Flagship: pinned landscape band, script line scrubs while pinned */}
      <PinnedQuote
        image="/imagery/web/deadvlei-blue-sky.webp"
        alt={home.pinned.imageAlt}
        quote={home.pinned.quote}
      />
      <Dune variant="rose-200" />

      {/* 5. Why Liger: rose-200 panel, batched script numbers */}
      <section className="section bg-[#F0DAD5]" aria-label={home.why.ariaLabel}>
        <div className="container-liger">
          <p className="t-eyebrow text-rose-700">{home.why.eyebrow}</p>
          <WordScrub as="h2" className="t-h2 mt-4 max-w-3xl" text={home.why.h2} />
          <Batch className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
            {home.why.items.map((item) => (
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
      <section className="section" aria-label={home.activities.ariaLabel}>
        <div className="container-liger">
          <p className="t-eyebrow text-rose-600">{home.activities.eyebrow}</p>
          <WordScrub as="h2" className="t-h2 mt-4 max-w-3xl" text={home.activities.h2} />
          <Batch className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeActivities.map((a) => (
              <Link
                key={a.slug}
                href={localePath(locale, "/activities")}
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
              <Link href={localePath(locale, "/activities")} className="btn btn--ghost">
                {home.activities.cta}
              </Link>
            </div>
          </Batch>
        </div>
      </section>

      {/* 7. Stay: image entrances + scrubbed heading */}
      <section className="section bg-surface-alt" aria-label={home.stay.eyebrow}>
        <div className="container-liger">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <ImgReveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
                  <Image
                    src="/imagery/crops/thatched-chalets-hillside-16x9.webp"
                    alt={home.stay.imageAlt1}
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
                    alt={home.stay.imageAlt2}
                    fill
                    loading="lazy"
                    sizes="(min-width: 640px) 33vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </ImgReveal>
            </div>
            <div>
              <p className="t-eyebrow text-rose-600">{home.stay.eyebrow}</p>
              <WordScrub as="h2" className="t-h2 mt-4" text={home.stay.h2} />
              <p className="t-body mt-6 text-ink-muted">{home.stay.p}</p>
              <Link
                href={localePath(locale, "/tours")}
                className="t-button mt-8 inline-block text-brand underline decoration-2 underline-offset-[6px] transition-colors duration-[240ms] hover:text-brand-hover"
              >
                {home.stay.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials: sliding carousel widget, auto-advance + swipe + dots */}
      <section className="section" aria-label={home.testimonials.ariaLabel}>
        <div className="container-narrow">
          <p className="t-eyebrow text-rose-600">{home.testimonials.eyebrow}</p>
          <WordScrub as="h2" className="t-h2 mt-4" text={home.testimonials.h2} />
          <div className="mt-12">
            <Batch y={20}>
              <TestimonialCarousel quotes={dict.testimonials} dict={dict} />
            </Batch>
          </div>
        </div>
      </section>

      {/* 8b. FAQ: plain crawlable Q+A, FAQPage schema in head */}
      <Dune variant="rose-100" />
      <section className="section bg-surface-alt" aria-label={home.faq.ariaLabel}>
        <div className="container-liger">
          <p className="t-eyebrow text-rose-600">{home.faq.eyebrow}</p>
          <WordScrub as="h2" className="t-h2 mt-4 max-w-3xl" text={home.faq.h2} />
          <Batch
            className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2"
            selector=":scope > div"
          >
            {home.faq.items.map((item) => (
              <div key={item.q} className="border-t-2 border-rose-700/30 pt-6">
                <h3 className="t-h4">{item.q}</h3>
                <p className="t-small mt-3 text-ink-muted">{item.a}</p>
              </div>
            ))}
          </Batch>
        </div>
      </section>

      {/* 9. Final CTA: night, drifting sun disc + gradient disc pattern, scrubbed script line */}
      <Dune variant="night" />
      <section className="section on-dark relative overflow-hidden" aria-label={home.cta.h2}>
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
          <WordScrub as="h2" className="t-h2 mx-auto max-w-3xl text-rose-100" text={home.cta.h2} />
          <p className="t-script mx-auto mt-4 max-w-2xl font-script text-3xl leading-snug text-rose-200 md:text-4xl">
            {home.cta.script}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={localePath(locale, "/contact")} className="btn btn--primary">
              {home.cta.primaryCta}
            </Link>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              {home.cta.whatsappCta}
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
