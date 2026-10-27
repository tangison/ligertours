import type { Metadata } from "next";
import { getDict, locales, type Locale } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import Reveal from "@/components/site/reveal";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(locale as Locale);
  const meta = pageMeta(locale as Locale, "/accessibility", {
    title: dict.accessibility.title,
    description: dict.meta.accessibility.description,
  });
  return { ...meta, robots: { index: true, follow: true } };
}

export default async function AccessibilityPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const t = dict.accessibility;

  return (
    <>
      <section className="section" aria-label={t.title}>
        <div className="container-narrow">
          <p className="t-eyebrow text-rose-700">{t.legalEyebrow}</p>
          <h1 className="t-h1 mt-3">{t.title}</h1>
          <p className="t-small mt-4 text-ink-muted">{t.lastUpdated}</p>
          <div className="mt-12 grid gap-10">
            {t.sections.map((s) => (
              <Reveal key={s.h} as="section">
                <h2 className="t-h3">{s.h}</h2>
                <div className="mt-4 grid gap-4">
                  {s.p.map((p) => (
                    <p key={p.slice(0, 24)} className="t-body text-ink-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
