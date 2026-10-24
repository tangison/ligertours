"use client";

/* Branded 500 fallback screen (checklist: mandatory route).
   Client component so it can detect the locale from the URL and localize. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  company,
  getDict,
  locales,
  localePath,
  type Locale,
} from "@/lib/content";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname() || "/";
  const first = pathname.split("/")[1] as Locale;
  const locale: Locale = (locales as readonly string[]).includes(first)
    ? first
    : "en";
  const dict = getDict(locale);
  const t = dict.errorPage;

  return (
    <section className="section on-dark relative overflow-hidden" aria-label={t.h1}>
      <div className="sun-disc -right-24 top-10 opacity-60" aria-hidden="true" />
      <div className="container-liger relative z-10 py-20 text-center md:py-28">
        <p className="font-script text-6xl text-rose-400 md:text-8xl" aria-hidden="true">
          500
        </p>
        <h1 className="t-h2 mx-auto mt-6 max-w-2xl text-rose-100">{t.h1}</h1>
        <p className="t-lead mx-auto mt-4 max-w-xl text-ink-on-dark">{t.lead}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button type="button" onClick={reset} className="btn btn--primary">
            {t.tryAgain}
          </button>
          <Link href={localePath(locale, "/")} className="btn btn--ghost">
            {t.back}
          </Link>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            {t.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
