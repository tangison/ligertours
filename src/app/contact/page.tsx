import type { Metadata } from "next";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import ContactForm from "@/components/site/contact-form";
import { WordScrub, Batch, DriftY } from "@/components/site/scroll-craft";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact and Enquiries",
  description:
    "Plan your Namibia tour: phone +264 81 472 2552, WhatsApp or email info@ligertoursnamibia.com. We reply within one working day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        image="/imagery/web/safari-vehicle-red-sand.webp"
        alt="Open safari vehicle with two guests driving over red sand at golden hour"
        eyebrow="Contact"
        title="Tell us your dates."
      />

      <section className="section" aria-label="Contact form and details">
        <div className="container-liger grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <h2 className="t-h2">Send an enquiry</h2>
            <p className="t-body mt-4 max-w-xl text-ink-muted">
              The more you tell us, the better the first reply. Dates, group
              size, the places you already know you want: all of it helps us
              come back with something real rather than a brochure.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120} className="self-start">
            <Batch
              className="rounded-[var(--radius-lg)] bg-surface-tint p-8"
              y={16}
              selector=":scope > *"
            >
              <h2 className="t-h3">Reach us directly</h2>
              <dl className="mt-6 grid gap-6">
                <div>
                  <dt className="t-eyebrow text-rose-600">Phone</dt>
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
                  <dt className="t-eyebrow text-rose-600">WhatsApp</dt>
                  <dd className="mt-1">
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-body text-ink underline decoration-rose-300 underline-offset-4 transition-colors duration-[240ms] hover:text-brand"
                    >
                      Chat with us
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-rose-600">Email</dt>
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
                  <dt className="t-eyebrow text-rose-600">Where we are</dt>
                  <dd className="t-body mt-1 text-ink-muted">
                    {company.address}
                  </dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-rose-600">Hours</dt>
                  <dd className="t-body mt-1 text-ink-muted">{company.hours}</dd>
                </div>
              </dl>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Windhoek%2C%20Namibia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost mt-8 w-full"
              >
                Open the map
              </a>
            </Batch>
          </Reveal>
        </div>
      </section>

      <Dune variant="night" />
      <section className="section on-dark relative overflow-hidden" aria-label="Planning ahead">
        <DriftY className="absolute -right-20 top-6" percent={6}>
          <div className="sun-disc opacity-60" aria-hidden="true" />
        </DriftY>
        <div className="container-liger relative z-10 text-center">
          <WordScrub
            as="h2"
            className="t-h2 mx-auto max-w-3xl text-rose-100"
            text="The best months book out early."
          />
          <Reveal>
            <p className="t-lead mx-auto mt-4 max-w-2xl text-ink-on-dark">
              May to October is high season in Namibia, and the best lodges
              around Etosha and Sossusvlei fill months ahead. The earlier you
              enquire, the better the trip we can build.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
