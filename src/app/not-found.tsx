/* Custom branded 404 with recovery navigation (checklist: mandatory route). */

import Link from "next/link";
import Dune from "@/components/site/dune";
import { nav } from "@/lib/content";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <section className="section on-dark relative overflow-hidden" aria-label="Page not found">
        <div className="sun-disc -left-24 bottom-0 opacity-60" aria-hidden="true" />
        <div className="container-liger relative z-10 py-20 text-center md:py-28">
          <p className="font-script text-6xl text-rose-400 md:text-8xl" aria-hidden="true">
            404
          </p>
          <h1 className="t-h2 mx-auto mt-6 max-w-2xl text-rose-100">
            This track does not go anywhere.
          </h1>
          <p className="t-lead mx-auto mt-4 max-w-xl text-ink-on-dark">
            The page you were looking for has moved or never existed. The routes
            below all lead somewhere good.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn btn--primary">
              Back to the start
            </Link>
            <Link href="/tours" className="btn btn--ghost">
              View tours
            </Link>
          </div>
          <nav aria-label="Recovery" className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="t-button text-rose-200 underline decoration-2 underline-offset-[6px] transition-colors duration-[240ms] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <Dune variant="rose-50" />
    </>
  );
}
