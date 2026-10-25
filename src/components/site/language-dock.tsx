"use client";

/* Side language dock: a fixed globe button on the right edge of the viewport
   that slides open a language panel. This is THE language switcher on desktop
   (the header pills were removed once languages outgrew them) and a second
   entry point on mobile next to the drawer pills.

   Behaviour: click toggles, Escape closes, outside click closes, route change
   closes. Links preserve the current path and carry hrefLang. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  localeNames,
  locales,
  localePath,
  stripLocale,
  type Dict,
  type Locale,
} from "@/lib/content";

export default function LanguageDock({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const cleanPath = stripLocale(pathname);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onClick);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed right-0 top-1/2 z-[85] -translate-y-1/2">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={dict.langDock.open}
        title={dict.langDock.open}
        className={`lang-dock-btn group flex h-12 w-12 items-center justify-center rounded-l-[var(--radius-pill)] border border-line bg-surface/95 shadow-[var(--shadow-2)] backdrop-blur transition-all duration-[240ms] ${
          open ? "translate-x-0" : "translate-x-[3px] hover:translate-x-0"
        }`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-brand transition-transform duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[18deg]"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      </button>

      <div
        data-open={open}
        className="lang-dock-panel on-dark absolute right-[calc(100%+10px)] top-1/2 w-[230px] -translate-y-1/2 rounded-[var(--radius-md)] border border-rose-100/15 bg-night/95 p-4 shadow-[var(--shadow-2)] backdrop-blur"
      >
        <p className="t-eyebrow px-1 pb-3 text-rose-200" aria-hidden="true">
          {dict.langDock.heading}
        </p>
        <nav aria-label={dict.a11y.languages} className="grid gap-0.5">
          {locales.map((l) => {
            const current = l === locale;
            return (
              <Link
                key={l}
                href={localePath(l, cleanPath)}
                hrefLang={l}
                prefetch={false}
                aria-current={current ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-[var(--radius-sm)] px-3 py-2.5 transition-colors duration-[240ms] ${
                  current
                    ? "bg-rose-50 text-night"
                    : "text-rose-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="t-button">{localeNames[l]}</span>
                {current ? (
                  <span className="t-eyebrow text-[10px] text-brand">
                    {dict.langDock.current}
                  </span>
                ) : (
                  <span className="t-eyebrow text-[10px] text-rose-300/70">
                    {l.toUpperCase()}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
