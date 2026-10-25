import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import TourCard from "@/components/site/tour-card";
import { Batch, WordScrub } from "@/components/site/scroll-craft";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import {
  company,
  getDict,
  locales,
  type Locale,
} from "@/lib/content";
import { localePath } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(locale as Locale);
  return pageMeta(locale as Locale, "/tours", dict.meta.tours);
}

export default async function ToursPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const t = dict.toursPage;

  /* The long-haul tour is identified by slug so eyebrow wording can vary per locale. */
  const longSlug = "24-days-namibia-discovery";
  const short = dict.tours.filter((tour) => tour.slug !== longSlug);
  const long = dict.tours.filter((tour) => tour.slug === longSlug);
  const cardLabels = {
    viewTour: dict.tourDetail.viewTour,
    viewTourAria: dict.tourDetail.viewTourAria,
  };

  return (
    <>
      <PageHeader
        image="/imagery/web/red-dunes-valley-plain.webp"
        alt={t.pageHeaderAlt}
        eyebrow={t.eyebrow}
        title={t.title}
      />

      <section className="section" aria-label={t.eyebrow}>
        <div className="container-liger">
          <Reveal>
            <p className="t-lead max-w-3xl text-ink-muted">{t.lead}</p>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="t-h3 text-rose-700">{t.multiDay}</h2>
          </Reveal>
          <Batch className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {short.map((tour) => (
              <TourCard key={tour.slug} tour={tour} locale={locale} labels={cardLabels} />
            ))}
          </Batch>

          <Reveal className="mt-20">
            <h2 className="t-h3 text-rose-700">{t.longHaul}</h2>
          </Reveal>
          <Batch className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {long.map((tour) => (
              <TourCard key={tour.slug} tour={tour} locale={locale} labels={cardLabels} />
            ))}
            <div className="self-center">
              <div className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
                <h3 className="t-h4">{t.customTitle}</h3>
                <p className="t-body mt-3 text-ink-muted">{t.customBody}</p>
              </div>
            </div>
          </Batch>
        </div>
      </section>

      <Dune variant="night" />
      <section className="section on-dark" aria-label={t.enquireAria}>
        <div className="container-liger text-center">
          <WordScrub
            as="h2"
            className="t-h2 mx-auto max-w-3xl text-rose-100"
            text={t.notSureH2}
          />
          <Reveal>
            <p className="t-lead mx-auto mt-4 max-w-2xl text-ink-on-dark">
              {t.notSureLead}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={localePath(locale, "/contact")} className="btn btn--primary">
                {t.planCta}
              </Link>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                {t.whatsappCta}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
