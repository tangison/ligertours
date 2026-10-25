import type { Metadata } from "next";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import GalleryGrid from "@/components/site/gallery-grid";
import { WordScrub } from "@/components/site/scroll-craft";
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
  return pageMeta(locale as Locale, "/gallery", dict.meta.gallery);
}

export default async function GalleryPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const t = dict.galleryPage;

  return (
    <>
      <PageHeader
        image="/imagery/web/deadvlei-warm-light.webp"
        alt={t.pageHeaderAlt}
        eyebrow={t.eyebrow}
        title={t.title}
      />
      <section className="section" aria-label={t.eyebrow}>
        <div className="container-liger">
          <Reveal>
            <p className="t-lead mb-12 max-w-3xl text-ink-muted">{t.lead}</p>
          </Reveal>
          <Reveal delay={80}>
            <GalleryGrid
              photos={t.photos}
              labels={{
                open: dict.a11y.lightboxOpen,
                prev: dict.a11y.lightboxPrev,
                next: dict.a11y.lightboxNext,
                close: dict.a11y.lightboxClose,
              }}
            />
          </Reveal>
        </div>
      </section>
      <Dune variant="night" />
      <section className="section on-dark" aria-label={t.seeAria}>
        <div className="container-liger text-center">
          <WordScrub as="h2" className="t-h2 mx-auto max-w-3xl text-rose-100" text={t.seeH2} />
          <Reveal>
            <p className="t-lead mx-auto mt-4 max-w-2xl text-ink-on-dark">{t.seeLead}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={localePath(locale, "/contact")} className="btn btn--primary">
                {t.planCta}
              </a>
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
