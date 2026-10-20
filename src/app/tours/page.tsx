import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import TourCard from "@/components/site/tour-card";
import { Batch, WordScrub } from "@/components/site/scroll-craft";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import { tours, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Namibia Tours: Dunes, Wildlife, Coast",
  description:
    "Seven guided Namibia tours from Windhoek: signature dune and safari routes, southern canyon journeys, cultural routes and a 24-day discovery circuit.",
};

export default function ToursPage() {
  const short = tours.filter((t) => t.eyebrow !== "24 days");
  const long = tours.filter((t) => t.eyebrow === "24 days");

  return (
    <>
      <PageHeader
        image="/imagery/web/red-dunes-valley-plain.webp"
        alt="Red dunes rising above a green and gravel plain under a clear sky"
        eyebrow="Tours"
        title="Choose your Namibia."
      />

      <section className="section" aria-label="All tours">
        <div className="container-liger">
          <Reveal>
            <p className="t-lead max-w-3xl text-ink-muted">
              Every route starts and ends in Windhoek and is shaped around your
              dates and group. Durations are confirmed with you at enquiry, so
              nothing on this page is a guess.
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="t-h3 text-rose-700">Multi-day routes</h2>
          </Reveal>
          <Batch className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {short.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </Batch>

          <Reveal className="mt-20">
            <h2 className="t-h3 text-rose-700">The long haul</h2>
          </Reveal>
          <Batch className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {long.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
            <div className="self-center">
              <div className="rounded-[var(--radius-lg)] bg-surface-tint p-8">
                <h3 className="t-h4">None of them quite right?</h3>
                <p className="t-body mt-3 text-ink-muted">
                  Tell us what you want to see and how long you have. We build
                  custom routes every week.
                </p>
              </div>
            </div>
          </Batch>
        </div>
      </section>

      <Dune variant="night" />
      <section className="section on-dark" aria-label="Enquire">
        <div className="container-liger text-center">
          <WordScrub
            as="h2"
            className="t-h2 mx-auto max-w-3xl text-rose-100"
            text="Not sure which route yet?"
          />
          <Reveal>
            <p className="t-lead mx-auto mt-4 max-w-2xl text-ink-on-dark">
              Send us your dates and interests. We will reply with an honest
              recommendation, even if it is a shorter trip than you asked for.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn--primary">
                Plan my trip
              </Link>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                WhatsApp us now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
