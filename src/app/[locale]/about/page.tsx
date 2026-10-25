import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import { Batch, ImgReveal, WordScrub } from "@/components/site/scroll-craft";
import {
  company,
  getDict,
  locales,
  localePath,
  type Locale,
} from "@/lib/content";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(locale as Locale);
  return pageMeta(locale as Locale, "/about", dict.meta.about);
}

export default async function AboutPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const t = dict.aboutPage;

  return (
    <>
      <PageHeader
        image="/imagery/web/thatched-chalets-hillside.webp"
        alt={t.pageHeaderAlt}
        eyebrow={t.eyebrow}
        title={t.title}
      />

      {/* Founder story */}
      <section className="section" aria-label={t.storyEyebrow}>
        <div className="container-liger grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="t-eyebrow text-rose-600">{t.storyEyebrow}</p>
            <WordScrub as="h2" className="t-h2 mt-4" text={t.storyH2} />
            <div className="prose-liger mt-6 grid gap-4">
              {t.story.map((p) => (
                <p key={p.slice(0, 24)} className="t-body text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <ImgReveal className="arch-wrap relative order-1 mx-auto w-full max-w-[420px] lg:order-2">
            {/* Desert sun behind the arch, on the image side */}
            <div className="sun-disc -right-14 top-16 md:-right-20" aria-hidden="true" />
            <div className="arch relative z-10">
              <Image
                src="/imagery/crops/tropic-capricorn-group-4x5.webp"
                alt={t.storyImageAlt}
                fill
                sizes="(min-width: 1024px) 420px, 86vw"
                className="object-cover"
              />
            </div>
          </ImgReveal>
        </div>
      </section>

      {/* Mission and vision */}
      <Dune variant="rose-200" />
      <section className="section bg-[#F0DAD5]" aria-label={t.missionEyebrow}>
        <div className="container-liger grid gap-10 md:grid-cols-2">
          <Reveal className="rounded-[var(--radius-lg)] bg-surface p-10">
            <p className="t-eyebrow text-rose-600">{t.missionEyebrow}</p>
            <p className="t-lead mt-4 text-ink">{t.mission}</p>
          </Reveal>
          <Reveal delay={80} className="rounded-[var(--radius-lg)] bg-surface p-10">
            <p className="t-eyebrow text-rose-600">{t.visionEyebrow}</p>
            <p className="t-lead mt-4 text-ink">{t.vision}</p>
          </Reveal>
        </div>
      </section>

      {/* From our trips: staggered arch trio of authentic journey photographs */}
      <section className="section" aria-label={t.moments.eyebrow}>
        <div className="container-liger">
          <Reveal>
            <p className="t-eyebrow text-rose-600">{t.moments.eyebrow}</p>
          </Reveal>
          <WordScrub as="h2" className="t-h2 mt-4 max-w-3xl" text={t.moments.h2} />
          <p className="t-body mt-6 max-w-2xl text-ink-muted">{t.moments.lead}</p>
          <Batch className="mt-12 grid gap-6 sm:grid-cols-3 lg:gap-10" stagger={0.09}>
            <ImgReveal className="arch-wrap">
              <div className="sun-disc -left-10 bottom-8" aria-hidden="true" />
              <div className="arch relative z-10">
                <Image
                  src="/imagery/crops/coast-beach-group-4x5.webp"
                  alt={t.moments.alt1}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 30vw, 86vw"
                  className="object-cover"
                />
              </div>
            </ImgReveal>
            <ImgReveal delay={0.1} className="arch-wrap sm:mt-14">
              <div className="arch relative z-10">
                <Image
                  src="/imagery/crops/overland-road-stop-4x5.webp"
                  alt={t.moments.alt2}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 30vw, 86vw"
                  className="object-cover"
                />
              </div>
            </ImgReveal>
            <ImgReveal delay={0.2} className="arch-wrap">
              <div className="sun-disc -right-10 top-8" aria-hidden="true" />
              <div className="arch relative z-10">
                <Image
                  src="/imagery/crops/sand-buried-ruins-4x5.webp"
                  alt={t.moments.alt3}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 30vw, 86vw"
                  className="object-cover"
                />
              </div>
            </ImgReveal>
          </Batch>
        </div>
      </section>

      {/* Values grid */}
      <Dune variant="rose-50" />
      <section className="section" aria-label={t.valuesEyebrow}>
        <div className="container-liger">
          <Reveal>
            <p className="t-eyebrow text-rose-600">{t.valuesEyebrow}</p>
          </Reveal>
          <WordScrub as="h2" className="t-h2 mt-4 max-w-3xl" text={t.valuesH2} />
          <Batch className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {t.values.map((v, i) => (
              <div key={v.title} className="border-t-2 border-rose-700/30 pt-6">
                <span className="font-script text-4xl text-rose-700" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h4 mt-3">{v.title}</h3>
                <p className="t-body mt-3 text-ink-muted">{v.body}</p>
              </div>
            ))}
            <div className="self-end">
              <div className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
                <p className="t-body text-ink">
                  {t.panel} {company.phone}.
                </p>
                <a href={localePath(locale, "/contact")} className="btn btn--primary mt-6">
                  {t.planCta}
                </a>
              </div>
            </div>
          </Batch>
        </div>
      </section>
    </>
  );
}
