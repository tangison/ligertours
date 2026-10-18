import type { Metadata } from "next";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand: Colours, Type and Logo Rules",
  description:
    "The Liger Tours Namibia brand system: colour tokens from the logo artwork, the three typefaces, logo usage rules and the signature graphic devices.",
  robots: { index: true, follow: true },
};

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

const typeRows = [
  { role: "H1 / hero", font: "Kaushan Script", note: "Brush script echoing the logo lettering. Large sizes only, sentence case, never bold or uppercase." },
  { role: "H2 to H4, labels, buttons", font: "Archivo", note: "Variable width and weight. Wide and heavy for impact. Uppercase only for eyebrows, labels and buttons." },
  { role: "Body, captions, forms", font: "Schibsted Grotesk", note: "Regular for reading, semibold for emphasis. Maximum 62 characters per line." },
];

export default function BrandPage() {
  return (
    <>
      <PageHeader
        image="/imagery/web/deadvlei-blue-sky.webp"
        alt="Dead acacia trees on a white clay pan below red dunes and a deep blue sky"
        eyebrow="Brand"
        title="The Liger brand, on one page."
        priority={false}
      />

      <section className="section" aria-label="Logo">
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">Logo</h2>
            <p className="t-body mt-4 max-w-3xl text-ink-muted">
              One logo, supplied variants only. The full lockup never sits in a
              box, chip or circle, is never recoloured, stretched or restyled,
              and never lands on a busy photo without a dusk overlay. Clear
              space around the logo equals one third of the tree canopy height.
              Below 140px wide, switch to the wordmark or icon file.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-[var(--radius-lg)] bg-surface p-8">
              <p className="t-eyebrow text-rose-600">On light backgrounds</p>
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
              <p className="t-eyebrow text-rose-400">On dark backgrounds</p>
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

      <section className="section bg-surface-alt" aria-label="Colour tokens">
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">Colour</h2>
            <p className="t-body mt-4 max-w-3xl text-ink-muted">
              Every value is sampled from the logo artwork: the rose of the
              lettering and sunrise, the olive of the acacia, the near-black
              night for dark sections. Rose is the brand; components use the
              semantic tokens, not raw hex.
            </p>
          </Reveal>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-rose-300">
                  <th scope="col" className="t-eyebrow py-3 pr-4 text-ink">Swatch</th>
                  <th scope="col" className="t-eyebrow py-3 pr-4 text-ink">Token</th>
                  <th scope="col" className="t-eyebrow py-3 pr-4 text-ink">Hex</th>
                  <th scope="col" className="t-eyebrow py-3 text-ink">Use</th>
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
                    <td className="t-small py-3 text-ink-muted">{c.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Typography">
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">Typography</h2>
            <p className="t-body mt-4 max-w-3xl text-ink-muted">
              Three families, all free licences, self-hosted with font-display
              swap. Two roles on screen at once is the norm; the script is
              reserved so it keeps its impact.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6">
            <Reveal className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
              <p className="t-eyebrow text-rose-600">H1 / hero: Kaushan Script</p>
              <p className="t-h2 mt-4 font-script text-rose-700">Namibia, unhurried.</p>
              <p className="t-small mt-4 text-ink-muted">{typeRows[0].note}</p>
            </Reveal>
            <Reveal delay={80} className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
              <p className="t-eyebrow text-rose-600">Headings and UI: Archivo</p>
              <p className="t-h3 mt-4">Desert, coast, canyon and wildlife.</p>
              <p className="t-small mt-4 text-ink-muted">{typeRows[1].note}</p>
            </Reveal>
            <Reveal delay={160} className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
              <p className="t-eyebrow text-rose-600">Body: Schibsted Grotesk</p>
              <p className="t-body mt-4 max-w-[62ch]">
                Plain sentences that name real places, real durations and what
                the guest actually does. Left aligned, generous line height,
                nothing smaller than 14px.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt" aria-label="Signature devices">
        <div className="container-liger">
          <Reveal>
            <h2 className="t-h2">Signature devices</h2>
            <p className="t-body mt-4 max-w-3xl text-ink-muted">
              Four repeating elements carry the identity: arch-masked photos
              with a thin offset outline, overlapping sun discs peeking from
              behind photos (never more than two per viewport), curved dune
              dividers coloured as the next section, and the headline lockup of
              an Archivo kicker above one script phrase.
            </p>
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
              <p className="t-small mt-4 text-ink-muted">Arch mask, 4:5</p>
            </Reveal>
            <Reveal delay={80} className="rounded-[var(--radius-lg)] bg-surface p-6 text-center">
              <div className="relative mx-auto h-[112px] w-28">
                <span className="sun-disc left-2 top-0 !w-20" aria-hidden="true" />
              </div>
              <p className="t-small mt-4 text-ink-muted">Sun discs, max 2</p>
            </Reveal>
            <Reveal delay={160} className="rounded-[var(--radius-lg)] bg-surface p-6 text-center">
              <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block h-16 w-full" aria-hidden="true">
                <path d="M0,96 C240,40 420,40 640,88 C860,136 1040,150 1240,88 C1340,58 1400,52 1440,60 L1440,160 L0,160 Z" fill="#744642" />
              </svg>
              <p className="t-small mt-4 text-ink-muted">Dune divider</p>
            </Reveal>
            <Reveal delay={240} className="rounded-[var(--radius-lg)] bg-surface p-6 text-center">
              <p className="t-eyebrow text-rose-600">Guided by locals</p>
              <p className="font-script text-2xl text-rose-700">Namibia, unhurried.</p>
              <p className="t-small mt-4 text-ink-muted">Headline lockup</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
