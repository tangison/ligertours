import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import { activities, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Day Activities Around Windhoek",
  description:
    "Game drives, township tours, San-guided walks, cooking classes, Spitzkoppe hiking and stargazing around Windhoek, with local guides.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        image="/imagery/web/gemsbok-golden-light.webp"
        alt="Gemsbok oryx with long straight horns standing on a grassy ridge in golden light"
        eyebrow="Activities"
        title="Make one day count."
      />

      <section className="section" aria-label="All activities">
        <div className="container-liger">
          <Reveal>
            <p className="t-lead max-w-3xl text-ink-muted">
              Day experiences you can book on their own or add to any tour.
              Everything here runs with local guides, in small groups, at times
              of day that make sense for the light and the wildlife.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-16 lg:gap-24">
            {activities.map((a, i) => (
              <Reveal key={a.slug}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="arch-wrap relative mx-auto w-full max-w-[420px]">
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
                  </div>
                  <div>
                    <p className="t-eyebrow text-rose-600">
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
                      Book this activity
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Dune variant="night" />
      <section className="section on-dark" aria-label="Add an activity to your tour">
        <div className="container-liger text-center">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-3xl text-rose-100">
              Add any of these to your tour.
            </h2>
            <p className="t-lead mx-auto mt-4 max-w-2xl text-ink-on-dark">
              Most guests book one or two day experiences around a longer route.
              Tell us what caught your eye and we will fit it into the plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn btn--primary">
                Plan my trip
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                WhatsApp us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
