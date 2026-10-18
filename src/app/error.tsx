"use client";

/* Branded 500 fallback screen (checklist: mandatory route). */

import Link from "next/link";
import { company } from "@/lib/content";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="section on-dark relative overflow-hidden" aria-label="Server error">
      <div className="sun-disc -right-24 top-10 opacity-60" aria-hidden="true" />
      <div className="container-liger relative z-10 py-20 text-center md:py-28">
        <p className="font-script text-6xl text-rose-400 md:text-8xl" aria-hidden="true">
          500
        </p>
        <h1 className="t-h2 mx-auto mt-6 max-w-2xl text-rose-100">
          Something broke down on our side.
        </h1>
        <p className="t-lead mx-auto mt-4 max-w-xl text-ink-on-dark">
          Like any good safari vehicle, the page will be repaired shortly. Try
          again, and if it keeps happening, WhatsApp us and we will sort it out
          by hand.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button type="button" onClick={reset} className="btn btn--primary">
            Try again
          </button>
          <Link href="/" className="btn btn--ghost">
            Back to the start
          </Link>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
