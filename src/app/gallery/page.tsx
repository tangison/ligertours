import type { Metadata } from "next";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import Dune from "@/components/site/dune";
import GalleryGrid, { type GalleryPhoto } from "@/components/site/gallery-grid";
import { WordScrub } from "@/components/site/scroll-craft";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery: Namibia in Pictures",
  description:
    "Dunes, wildlife and lodges from Liger Tours Namibia trips: Sossusvlei clay pans, Kalahari sands, Etosha wildlife and the accommodation you sleep in.",
};

const photos: GalleryPhoto[] = [
  {
    src: "/imagery/crops/safari-vehicle-red-sand-1x1.webp",
    alt: "Open safari vehicle with two guests driving over red sand at golden hour",
  },
  {
    src: "/imagery/crops/gemsbok-golden-light-1x1.webp",
    alt: "Gemsbok oryx with long straight horns standing on a grassy ridge in golden light",
    tall: true,
  },
  {
    src: "/imagery/crops/deadvlei-blue-sky-16x9.webp",
    alt: "Dead acacia trees on a white clay pan below red dunes and a deep blue sky",
  },
  {
    src: "/imagery/crops/giraffes-walking-savanna-1x1.webp",
    alt: "Three giraffes walking in a line past green acacia trees",
  },
  {
    src: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
    alt: "Timber lodge cabin with a green roof on a red sand dune under a blue sky",
    tall: true,
  },
  {
    src: "/imagery/crops/deadvlei-warm-light-1x1.webp",
    alt: "Bare dead trees on pale clay with a red dune rising behind",
  },
  {
    src: "/imagery/crops/red-dunes-valley-plain-16x9.webp",
    alt: "Red dunes rising above a green and gravel plain under a clear sky",
  },
  {
    src: "/imagery/crops/thatched-chalets-hillside-1x1.webp",
    alt: "Row of thatched chalets on stilts below a rocky red hillside",
    tall: true,
  },
  {
    src: "/imagery/crops/rhino-and-ostrich-grassland-1x1.webp",
    alt: "A rhino grazing in green grass with an ostrich beside it",
  },
  {
    src: "/imagery/crops/gemsbok-golden-light-16x9.webp",
    alt: "Gemsbok oryx on a grassy ridge in golden evening light",
  },
  {
    src: "/imagery/crops/safari-vehicle-red-sand-16x9.webp",
    alt: "Safari tracks across red sand at golden hour",
  },
  {
    src: "/imagery/crops/deadvlei-blue-sky-4x5.webp",
    alt: "Dead acacia trees and red dunes under a deep blue sky",
    tall: true,
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        image="/imagery/web/deadvlei-warm-light.webp"
        alt="Bare dead trees on pale clay with a red dune rising behind"
        eyebrow="Gallery"
        title="The country, unedited."
      />
      <section className="section" aria-label="Photo gallery">
        <div className="container-liger">
          <Reveal>
            <p className="t-lead mb-12 max-w-3xl text-ink-muted">
              Photographs from our trips, used exactly as they came off the
              camera. Select any image to open it, then move with the arrow keys
              and close with Escape.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <GalleryGrid photos={photos} />
          </Reveal>
        </div>
      </section>
      <Dune variant="night" />
      <section className="section on-dark" aria-label="See it yourself">
        <div className="container-liger text-center">
          <WordScrub as="h2" className="t-h2 mx-auto max-w-3xl text-rose-100" text="Better in person." />
          <Reveal>
            <p className="t-lead mx-auto mt-4 max-w-2xl text-ink-on-dark">
              Every photograph here was taken on a Liger route. Come and take
              your own.
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
                WhatsApp us now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
