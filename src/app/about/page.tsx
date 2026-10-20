import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import { Batch, ImgReveal, WordScrub } from "@/components/site/scroll-craft";
import { about, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Liger Tours Namibia",
  description:
    "Liger Tours Namibia is a locally owned, NTB registered tour company in Windhoek. Meet the team, our mission and the values behind every guided route.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        image="/imagery/web/thatched-chalets-hillside.webp"
        alt="Row of thatched chalets on stilts below a rocky red hillside"
        eyebrow="About us"
        title="Local, and proud of it."
      />

      {/* Founder story */}
      <section className="section" aria-label="Our story">
        <div className="container-liger grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="t-eyebrow text-rose-600">Our story</p>
            <WordScrub
              as="h2"
              className="t-h2 mt-4"
              text="Built by people who grew up with this land."
            />
            <div className="prose-liger mt-6 grid gap-4">
              {about.story.map((p) => (
                <p key={p.slice(0, 24)} className="t-body text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <ImgReveal className="arch-wrap relative order-1 mx-auto w-full max-w-[420px] lg:order-2">
            <div className="sun-disc -right-14 top-16 md:-right-20" aria-hidden="true" />
            <div className="arch relative z-10">
              <Image
                src="/imagery/crops/gemsbok-golden-light-4x5.webp"
                alt="Gemsbok oryx with long straight horns standing on a grassy ridge in golden light"
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
      <section className="section bg-[#F0DAD5]" aria-label="Mission and vision">
        <div className="container-liger grid gap-10 md:grid-cols-2">
          <Reveal className="rounded-[var(--radius-lg)] bg-surface p-10">
            <p className="t-eyebrow text-rose-600">Our mission</p>
            <p className="t-lead mt-4 text-ink">{about.mission}</p>
          </Reveal>
          <Reveal delay={80} className="rounded-[var(--radius-lg)] bg-surface p-10">
            <p className="t-eyebrow text-rose-600">Our vision</p>
            <p className="t-lead mt-4 text-ink">{about.vision}</p>
          </Reveal>
        </div>
      </section>

      {/* Values grid */}
      <Dune variant="rose-50" />
      <section className="section" aria-label="What makes us different">
        <div className="container-liger">
          <Reveal>
            <p className="t-eyebrow text-rose-600">What makes us different</p>
          </Reveal>
          <WordScrub
            as="h2"
            className="t-h2 mt-4 max-w-3xl"
            text="Five things we will not compromise."
          />
          <Batch className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {about.values.map((v, i) => (
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
                  Registered with the Namibia Tourism Board and based in
                  Windhoek. {company.phone}.
                </p>
                <a href="/contact" className="btn btn--primary mt-6">
                  Plan my trip
                </a>
              </div>
            </div>
          </Batch>
        </div>
      </section>
    </>
  );
}
