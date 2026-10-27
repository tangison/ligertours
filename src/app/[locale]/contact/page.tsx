import type { Metadata } from "next";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import ContactForm from "@/components/site/contact-form";
import { WordScrub, Batch, DriftY } from "@/components/site/scroll-craft";
import {
  company,
  getDict,
  locales,
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
  return pageMeta(locale as Locale, "/contact", dict.meta.contact);
}

export default async function ContactPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const t = dict.contactPage;

  return (
    <>
      <PageHeader
        image="/imagery/web/safari-vehicle-red-sand.webp"
        alt={t.pageHeaderAlt}
        eyebrow={t.eyebrow}
        title={t.title}
      />

      <section className="section" aria-label={t.formH2}>
        <div className="container-liger grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <h2 className="t-h2">{t.formH2}</h2>
            <p className="t-body mt-4 max-w-xl text-ink-muted">{t.formLead}</p>
            <div className="mt-10">
              <ContactForm dict={dict} />
            </div>
          </Reveal>

          <Reveal delay={120} className="self-start">
            <Batch
              className="rounded-[var(--radius-lg)] bg-surface-tint p-8"
              y={16}
              selector=":scope > *"
            >
              <h2 className="t-h3">{t.panelH2}</h2>
              <dl className="mt-6 grid gap-6">
                <div>
                  <dt className="t-eyebrow text-rose-700">{t.phone}</dt>
                  <dd className="mt-1">
                    <a
                      href={company.phoneHref}
                      className="t-body text-ink underline decoration-rose-300 underline-offset-4 transition-colors duration-[240ms] hover:text-brand"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-rose-700">{t.whatsapp}</dt>
                  <dd className="mt-1">
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-body text-ink underline decoration-rose-300 underline-offset-4 transition-colors duration-[240ms] hover:text-brand"
                    >
                      {t.chatWithUs}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-rose-700">{t.email}</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${company.email}`}
                      className="t-body break-all text-ink underline decoration-rose-300 underline-offset-4 transition-colors duration-[240ms] hover:text-brand"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-rose-700">{t.whereWeAre}</dt>
                  <dd className="t-body mt-1 text-ink-muted">{company.address}</dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-rose-700">{t.hours}</dt>
                  <dd className="t-body mt-1 text-ink-muted">{company.hours}</dd>
                </div>
              </dl>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Windhoek%2C%20Namibia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost mt-8 w-full"
              >
                {t.mapCta}
              </a>
            </Batch>
          </Reveal>
        </div>
      </section>

      <Dune variant="night" />
      <section className="section on-dark relative overflow-hidden" aria-label={t.seasonAria}>
        {/* Drifting desert sun over the night band: the day ending on plan-ahead urgency */}
        <DriftY className="absolute -right-20 top-6" percent={6}>
          <div className="sun-disc opacity-60" aria-hidden="true" />
        </DriftY>
        <div className="container-liger relative z-10 text-center">
          <WordScrub
            as="h2"
            className="t-h2 mx-auto max-w-3xl text-rose-100"
            text={t.seasonH2}
          />
          <Reveal>
            <p className="t-lead mx-auto mt-4 max-w-2xl text-ink-on-dark">{t.seasonLead}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
