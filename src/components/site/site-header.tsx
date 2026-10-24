"use client";

/* Fixed header. Over a hero: transparent with the on-dark logo.
   After 80px: rose-50 with the primary-rose logo and a hairline rose-300 border.
   Brand bar (4px, rose-700, sampled from the logo) fixed at the very top, CLS 0.
   Language switcher: EN / DE / FR pills, preserves the current path.
   Mobile: full-screen drawer on night with the on-dark logo and WhatsApp button. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  company,
  localeNames,
  localePath,
  locales,
  stripLocale,
  type Dict,
  type Locale,
} from "@/lib/content";
import ScrollProgress from "./scroll-progress";

export default function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const cleanPath = stripLocale(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* SVG brand marks (vector, user-supplied artwork): rose primary on light,
     cream mono over photos/night. Aspect 2560x841 -> 150px wide = 49px tall, CLS 0. */
  const logoSrc = scrolled
    ? "/brand/logos/svg/liger-tours-primary-rose.svg"
    : "/brand/logos/svg/liger-tours-mono-cream.svg";

  const langPill = (l: Locale) =>
    `t-eyebrow flex h-9 min-w-9 items-center justify-center rounded-full px-2 transition-colors duration-[240ms] ${
      l === locale
        ? scrolled
          ? "bg-brand text-white"
          : "bg-rose-50 text-night"
        : scrolled
          ? "text-ink hover:text-brand"
          : "text-rose-100 hover:text-white"
    }`;

  return (
    <>
      <ScrollProgress />
      <div className="fixed inset-x-0 top-0 z-[100]">
        {/* Brand bar: 4px, dominant accent from the logo artwork, zero layout shift */}
        <div className="h-1 w-full bg-brand" aria-hidden="true" />
        <header
          className={`site-header ${scrolled ? "is-scrolled" : ""} ${
            open ? "" : "bg-transparent"
          }`}
        >
          <div className="container-liger flex h-[72px] items-center justify-between gap-4">
            <Link
              href={localePath(locale, "/")}
              className={`relative shrink-0 transition-opacity duration-[240ms] ${open ? "pointer-events-none opacity-0" : "z-10"}`}
              aria-label={dict.a11y.homeLink}
            >
              <img
                src={logoSrc}
                alt="Liger Tours Namibia"
                width={2560}
                height={841}
                fetchPriority="high"
                decoding="async"
                className="h-auto w-[150px]"
              />
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
              {dict.nav.map((item) => (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  aria-current={cleanPath === item.href ? "page" : undefined}
                  className={`t-button pb-1 pt-1 transition-colors duration-[240ms] ${
                    cleanPath === item.href
                      ? "text-brand underline decoration-2 underline-offset-8"
                      : ""
                  } ${
                    scrolled
                      ? "text-ink hover:text-brand"
                      : "text-rose-50 hover:text-rose-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <nav
                aria-label={dict.a11y.languages}
                className="ml-1 flex items-center gap-1"
              >
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={localePath(l, cleanPath)}
                    hrefLang={l}
                    prefetch={false}
                    aria-current={l === locale ? "true" : undefined}
                    aria-label={localeNames[l]}
                    className={langPill(l)}
                  >
                    {l.toUpperCase()}
                  </Link>
                ))}
              </nav>

              <Link
                href={localePath(locale, "/contact")}
                className="btn btn--primary ml-1"
              >
                {dict.header.planTrip}
              </Link>
            </nav>

            <button
              type="button"
              className={`relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-md lg:hidden ${
                scrolled || open ? "text-ink" : "text-rose-50"
              } ${open ? "text-rose-50" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? dict.a11y.menuClose : dict.a11y.menuOpen}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`h-[2px] w-6 bg-current transition-transform duration-[240ms] ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
                aria-hidden="true"
              />
              <span
                className={`h-[2px] w-6 bg-current transition-opacity duration-[240ms] ${
                  open ? "opacity-0" : ""
                }`}
                aria-hidden="true"
              />
              <span
                className={`h-[2px] w-6 bg-current transition-transform duration-[240ms] ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile drawer: full-screen on night */}
      <div
        id="mobile-drawer"
        data-open={open}
        className="nav-drawer on-dark fixed inset-0 z-[90] lg:hidden"
        role="dialog"
        aria-modal={open}
        aria-label={dict.a11y.menuOpen}
      >
        <div className="flex h-full flex-col px-[var(--gutter)] pb-10 pt-28">
          <img
            src="/brand/logos/svg/liger-tours-mono-cream.svg"
            alt="Liger Tours Namibia"
            width={2560}
            height={841}
            className="h-auto w-[180px]"
          />
          <nav aria-label="Mobile" className="mt-10 grid gap-6">
            {dict.nav.map((item, i) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="t-h2 text-rose-100 transition-colors duration-[240ms] hover:text-white"
                style={{ transitionDelay: `${i * 30}ms` }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav
            aria-label={dict.a11y.languages}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {locales.map((l) => (
              <Link
                key={l}
                href={localePath(l, cleanPath)}
                hrefLang={l}
                prefetch={false}
                aria-current={l === locale ? "true" : undefined}
                aria-label={localeNames[l]}
                onClick={() => setOpen(false)}
                className={`t-eyebrow flex h-11 items-center justify-center rounded-full border-2 px-3.5 text-[11px] transition-colors duration-[240ms] ${
                  l === locale
                    ? "border-rose-50 bg-rose-50 text-night"
                    : "border-rose-200 text-rose-100 hover:border-rose-50 hover:text-white"
                }`}
              >
                {localeNames[l]}
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-4">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary w-full"
            >
              {dict.header.whatsapp}
            </a>
            <a href={company.phoneHref} className="t-body text-center text-rose-200">
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
