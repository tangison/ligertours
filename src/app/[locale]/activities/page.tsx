import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import { ImgReveal, WordScrub } from "@/components/site/scroll-craft";
import { company, localePath, getDict, locales, type Locale } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(locale as Locale);
  return pageMeta(locale as Locale, "/activities", dict.meta.activities);
}

export default async function ActivitiesPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const t = dict.activitiesPage;

  return (
    <>
      <PageHeader
        image="/imagery/web/gemsbok-golden-light.webp"
        alt={t.pageHeaderAlt}
        eyebrow={t.eyebrow}
        title={t.title}
      />

      <section className="section" aria-label={t.eyebrow}>
        <div className="container-liger">
          <Reveal>
            <p className="t-lead max-w-3xl text-ink-muted">{t.lead}</p>
          </Reveal>

          <div className="mt-16 grid gap-16 lg:gap-24">
            {dict.activities.map((a, i) => (
              <Reveal key={a.slug}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <ImgReveal className="arch-wrap relative mx-auto w-full max-w-[420px]">
                    {/* Sun disc only on left-hand arches: the desert sun lights the image */}
                    {i % 2 === 0 && (
                      <div className="sun-disc -left-14 bottom-8 md:-left-20" aria-hidden="true" />
                    )}
                    <div className="arch relative z-10">
                      <Image
                        src={a.image}
                        alt={a.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 420px, 86vw"
                        className="object-cover"
                      />
                    </div>
                  </ImgReveal>
                  <div>
                    <p className="t-eyebrow text-rose-700">
                      {a.duration} &middot; {a.location}
                    </p>
                    <h2 className="t-h3 mt-3">{a.name}</h2>
                    <p className="t-body mt-4 max-w-xl text-ink-muted">{a.description}</p>
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-button mt-6 inline-block text-brand underline decoration-2 underline-offset-[6px] transition-colors duration-[240ms] hover:text-brand-hover"
                    >
                      {t.addToTrip}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Dune variant="night" />
      <section className="section on-dark" aria-label={t.addAria}>
        <div className="container-liger text-center">
          <WordScrub
            as="h2"
            className="t-h2 mx-auto max-w-3xl text-rose-100"
            text={t.addH2}
          />
          <Reveal>
            <p className="t-lead mx-auto mt-4 max-w-2xl text-ink-on-dark">
              {t.addLead}
            </p>
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
