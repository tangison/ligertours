"use client";

/* Custom branded 404 with recovery navigation (checklist: mandatory route).
   Client component so it can detect the locale from the URL and localize. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import Dune from "@/components/site/dune";
import {
  getDict,
  locales,
  localePath,
  type Locale,
} from "@/lib/content";

export default function NotFound() {
  const pathname = usePathname() || "/";
  const first = pathname.split("/")[1] as Locale;
  const locale: Locale = (locales as readonly string[]).includes(first)
    ? first
    : "en";
  const dict = getDict(locale);
  const t = dict.notFound;

  return (
    <>
      <section className="section on-dark relative overflow-hidden" aria-label={t.title}>
        <div className="sun-disc -left-24 bottom-0 opacity-60" aria-hidden="true" />
        <div className="container-liger relative z-10 py-20 text-center md:py-28">
          <p className="font-script text-6xl text-rose-400 md:text-8xl" aria-hidden="true">
            404
          </p>
          <h1 className="t-h2 mx-auto mt-6 max-w-2xl text-rose-100">{t.h1}</h1>
          <p className="t-lead mx-auto mt-4 max-w-xl text-ink-on-dark">{t.lead}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={localePath(locale, "/")} className="btn btn--primary">
              {t.back}
            </Link>
            <Link href={localePath(locale, "/tours")} className="btn btn--ghost">
              {t.viewTours}
            </Link>
          </div>
          <nav aria-label="Recovery" className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {dict.nav.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
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
