import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import { getDict, locales, type Locale } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(locale as Locale);
  return pageMeta(locale as Locale, "/brand", dict.meta.brand);
}

const colourRows = [
  { name: "rose-50 / bg", hex: "#FBF4F2", use: "Default page background" },
  { name: "rose-100 / surface-alt", hex: "#F6E8E4", use: "Alternate sections" },
  { name: "rose-200 / surface-tint", hex: "#F0DAD5", use: "Feature panels, arch backgrounds" },
  { name: "rose-300 / border", hex: "#E3C3BE", use: "Borders, dividers" },
  { name: "rose-400", hex: "#CDA9A4", use: "Sun discs, arch outline, decorative" },
  { name: "rose-500", hex: "#B58B88", use: "Decorative only" },
  { name: "rose-600", hex: "#996660", use: "Large display text only" },
  { name: "rose-700 / brand", hex: "#744642", use: "Buttons, links, headings accent" },
  { name: "rose-800 / brand-hover", hex: "#523431", use: "Hover, strong panels" },
  { name: "rose-900 / ink", hex: "#2F1E1C", use: "Body text" },
  { name: "night", hex: "#1F1613", use: "Dark sections, footer" },
  { name: "acacia", hex: "#483E22", use: "Logo tree colour, focus ring on light" },
  { name: "sunrise", hex: "#F58A3A", use: "Tiny accents on dark only, focus ring" },
];

/* The use column is brand documentation; localized via dict lookup map below. */
const colourUseKeys: Record<string, string> = {
  "#FBF4F2": "useBg",
  "#F6E8E4": "useAlt",
  "#F0DAD5": "useTint",
  "#E3C3BE": "useBorder",
  "#CDA9A4": "useDiscs",
  "#B58B88": "useDeco",
  "#996660": "useDisplay",
  "#744642": "useBrand",
  "#523431": "useHover",
  "#2F1E1C": "useInk",
  "#1F1613": "useNight",
  "#483E22": "useAcacia",
  "#F58A3A": "useSunrise",
};

/* Imagery credits for the freely licensed photographs (names are not translated). */
const credits = [
  {
    file: "Elephant family at Gemsbokvlakte waterhole",
    by: "Christoph Strässler, Wikimedia Commons",
    licence: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Elephant_family_at_Gemsbokvlakte_waterhole,_Etosha_National_Park,_Namibia.jpg",
  },
  {
    file: "Köcherbaumwald (Quiver Tree Forest)",
    by: "Hans Stieglitz, Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:K%C3%B6cherbaumwald-01.jpg",
  },
  {
    file: "Fish River Canyon",
    by: "Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Fish_River_Canyon_Namibia.jpg",
  },
  {
    file: "Bushman's Paradise at Spitzkoppe",
    by: "Hansueli Krapf, Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Bushman%27s_Paradise_at_Spitzkoppe_28.06.2008_11-14-40.jpg",
  },
  {
    file: "Jetty, Swakopmund",
    by: "Diego Delso, Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jetty,_Swakopmund,_Namibia,_2018-08-04,_DD_62.jpg",
  },
  {
    file: "Sundown at Swakopmund Jetty",
    by: "Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Sundown_at_Swakopmund_Jetty,_Namibia.jpg",
  },
  {
    file: "Observing space (night sky)",
    by: "Jonatan Pie, via Wikimedia Commons",
    licence: "CC0 1.0",
    href: "https://commons.wikimedia.org/wiki/File:Observing_space_(Unsplash).jpg",
  },
  {
    file: "Christuskirche, Windhoek",
    by: "Harald Süpfle, Wikimedia Commons",
    licence: "CC BY-SA 2.5",
    href: "https://commons.wikimedia.org/w/index.php?curid=536658",
  },
  {
    file: "Potjie over coals",
    by: "vastateparksstaff, Flickr",
    licence: "CC BY 2.0",
    href: "https://www.flickr.com/photos/37922399@N05/9201699045",
  },
  {
    file: "Flamingos wading",
    by: "Pexels contributor",
    licence: "Pexels License",
    href: "https://www.pexels.com",
  },
  {
    file: "Kalahari red sands",
    by: "Unsplash contributor",
    licence: "Unsplash License",
    href: "https://unsplash.com",
  },
];

export default async function BrandPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDict(locale);
  const t = dict.brandPage;

  const useDict: Record<string, string> = {
    useBg: t.colourUseBg,
    useAlt: t.colourUseAlt,
    useTint: t.colourUseTint,
    useBorder: t.colourUseBorder,
    useDiscs: t.colourUseDiscs,
    useDeco: t.colourUseDeco,
    useDisplay: t.colourUseDisplay,
    useBrand: t.colourUseBrand,
    useHover: t.colourUseHover,
    useInk: t.colourUseInk,
    useNight: t.colourUseNight,
    useAcacia: t.colourUseAcacia,
    useSunrise: t.colourUseSunrise,
  };

  return (
    <>
      <PageHeader
        image="/imagery/web/deadvlei-blue-sky.webp"
        alt={t.pageHeaderAlt}
        eyebrow={t.eyebrow}
        title={t.title}
        priority={false}
      />

      <section className="section" aria-label={t.logoH2}>
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">{t.logoH2}</h2>
            <p className="t-body mt-4 max-w-3xl text-ink-muted">{t.logoBody}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-[var(--radius-lg)] bg-surface p-8">
              <p className="t-eyebrow text-rose-600">{t.onLight}</p>
              <div className="mt-6 flex items-center justify-center rounded-[var(--radius-md)] bg-rose-50 p-8">
                <Image
                  src="/brand/logos/light-bg/liger-tours-primary-rose-800w.png"
                  alt="Liger Tours Namibia primary logo for light backgrounds"
                  width={280}
                  height={112}
                  className="h-auto w-[280px]"
                />
              </div>
            </Reveal>
            <Reveal delay={80} className="on-dark rounded-[var(--radius-lg)] bg-night p-8">
              <p className="t-eyebrow text-rose-400">{t.onDark}</p>
              <div className="mt-6 flex items-center justify-center rounded-[var(--radius-md)] bg-night p-8">
                <Image
                  src="/brand/logos/dark-bg/liger-tours-on-dark-800w.png"
                  alt="Liger Tours Namibia logo for dark backgrounds"
                  width={280}
                  height={112}
                  className="h-auto w-[280px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt" aria-label={t.coloursH2}>
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">{t.coloursH2}</h2>
            <p className="t-body mt-4 max-w-3xl text-ink-muted">{t.coloursBody}</p>
          </Reveal>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-rose-300">
                  <th scope="col" className="t-eyebrow py-3 pr-4 text-ink">{t.swatch}</th>
                  <th scope="col" className="t-eyebrow py-3 pr-4 text-ink">{t.colourName}</th>
                  <th scope="col" className="t-eyebrow py-3 pr-4 text-ink">{t.colourHex}</th>
                  <th scope="col" className="t-eyebrow py-3 text-ink">{t.colourUse}</th>
                </tr>
              </thead>
              <tbody>
                {colourRows.map((c) => (
                  <tr key={c.hex} className="border-b border-line">
                    <td className="py-3 pr-4">
                      <span
                        className="inline-block h-9 w-14 rounded-[var(--radius-sm)] border border-rose-300"
                        style={{ backgroundColor: c.hex }}
                        aria-hidden="true"
                      />
                    </td>
                    <td className="t-small py-3 pr-4 font-semibold">{c.name}</td>
                    <td className="t-small py-3 pr-4">{c.hex}</td>
                    <td className="t-small py-3 text-ink-muted">{useDict[colourUseKeys[c.hex]]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" aria-label={t.typeH2}>
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">{t.typeH2}</h2>
            <p className="t-body mt-4 max-w-3xl text-ink-muted">{t.typeBody}</p>
          </Reveal>
          <div className="mt-10 grid gap-6">
            <Reveal className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
              <p className="t-eyebrow text-rose-600">{t.typeRows[0].label}</p>
              <p className="t-h2 mt-4 font-script text-rose-700">{t.typeRows[0].sample}</p>
              <p className="t-small mt-4 text-ink-muted">{t.typeRows[0].note}</p>
            </Reveal>
            <Reveal delay={80} className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
              <p className="t-eyebrow text-rose-600">{t.typeRows[1].label}</p>
              <p className="t-h3 mt-4">{t.typeRows[1].sample}</p>
              <p className="t-small mt-4 text-ink-muted">{t.typeRows[1].note}</p>
            </Reveal>
            <Reveal delay={160} className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
              <p className="t-eyebrow text-rose-600">{t.typeRows[2].label}</p>
              <p className="t-body mt-4 max-w-[62ch]">{t.typeRows[2].sample}</p>
              <p className="t-small mt-4 text-ink-muted">{t.typeRows[2].note}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt" aria-label={t.devicesH2}>
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">{t.devicesH2}</h2>
            <p className="t-body mt-4 max-w-3xl text-ink-muted">{t.devicesBody}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="rounded-[var(--radius-lg)] bg-surface p-6 text-center">
              <div className="arch mx-auto w-28 overflow-hidden">
                <Image
                  src="/imagery/crops/gemsbok-golden-light-1x1.webp"
                  alt=""
                  width={112}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="t-small mt-4 text-ink-muted">{t.deviceCaptions[0]}</p>
            </Reveal>
            <Reveal delay={80} className="rounded-[var(--radius-lg)] bg-surface p-6 text-center">
              <div className="relative mx-auto h-[112px] w-28">
                <span className="sun-disc left-2 top-0 !w-20" aria-hidden="true" />
              </div>
              <p className="t-small mt-4 text-ink-muted">{t.deviceCaptions[1]}</p>
            </Reveal>
            <Reveal delay={160} className="rounded-[var(--radius-lg)] bg-surface p-6 text-center">
              <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block h-16 w-full" aria-hidden="true">
                <path d="M0,96 C240,40 420,40 640,88 C860,136 1040,150 1240,88 C1340,58 1400,52 1440,60 L1440,160 L0,160 Z" fill="#744642" />
              </svg>
              <p className="t-small mt-4 text-ink-muted">{t.deviceCaptions[2]}</p>
            </Reveal>
            <Reveal delay={240} className="rounded-[var(--radius-lg)] bg-surface p-6 text-center">
              <p className="t-eyebrow text-rose-600">{t.lockupKicker}</p>
              <p className="font-script text-2xl text-rose-700">{t.lockupScript}</p>
              <p className="t-small mt-4 text-ink-muted">{t.deviceCaptions[3]}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-label={t.creditsH2}>
        <div className="container-narrow">
          <Reveal>
            <h2 className="t-h2">{t.creditsH2}</h2>
            <p className="t-body mt-4 text-ink-muted">{t.creditsBody}</p>
          </Reveal>
          <Reveal delay={80} className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <tbody>
                {credits.map((c) => (
                  <tr key={c.file} className="border-b border-line">
                    <td className="t-small py-3 pr-4 font-semibold">{c.file}</td>
                    <td className="t-small py-3 pr-4 text-ink-muted">{c.by}</td>
                    <td className="t-small py-3 pr-4 text-ink-muted">{c.licence}</td>
                    <td className="t-small py-3">
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand underline decoration-2 underline-offset-4 hover:text-brand-hover"
                      >
                        Source
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </>
  );
}
