import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
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
  return pageMeta(locale as Locale, "/faq", dict.meta.faq);
}

export default async function FaqPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const t = dict.faqPage;

  /* FAQPage schema: every question on the page, crawlable in every locale (AEO). */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.groups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        image="/imagery/web/red-dunes-valley-plain.webp"
        alt={t.pageHeaderAlt}
        eyebrow={t.eyebrow}
        title={t.title}
      />

      <section className="section" aria-label={t.eyebrow}>
        <div className="container-narrow">
          <Reveal>
            <p className="t-lead text-ink-muted">{t.lead}</p>
          </Reveal>

          {t.groups.map((group) => (
            <div key={group.h} className="mt-16 first:mt-12">
              <Reveal>
                <h2 className="t-h3 text-rose-700">{group.h}</h2>
              </Reveal>
              <Batch
                className="mt-8 grid gap-x-12 gap-y-10"
                selector=":scope > div"
              >
                {group.items.map((item) => (
                  <div
                    key={item.q}
                    className="border-t-2 border-rose-700/30 pt-6"
                  >
                    <h3 className="t-h4">{item.q}</h3>
                    <p className="t-body mt-3 text-ink-muted">{item.a}</p>
                  </div>
                ))}
              </Batch>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA: night band, sun disc, script line */}
      <Dune variant="night" />
      <section className="section on-dark relative overflow-hidden" aria-label={t.ctaH2}>
        <div className="sun-disc -right-24 -top-10 opacity-70" aria-hidden="true" />
        <div className="container-liger relative z-10 py-10 text-center md:py-16">
          <WordScrub
            as="h2"
            className="t-h2 mx-auto max-w-3xl text-rose-100"
            text={t.ctaH2}
          />
          <p className="t-script mx-auto mt-4 max-w-2xl font-script text-3xl leading-snug text-rose-200 md:text-4xl">
            {t.ctaScript}
          </p>
          <p className="t-lead mx-auto mt-6 max-w-xl text-ink-on-dark">
            {t.ctaLead}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={localePath(locale, "/contact")} className="btn btn--primary">
              {t.ctaPrimary}
            </Link>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              {t.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
