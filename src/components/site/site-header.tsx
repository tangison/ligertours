"use client";

/* Fixed header. Over a hero: transparent with the on-dark logo.
   After 80px: rose-50 with the primary-rose logo and a hairline rose-300 border.
   Brand bar (4px, rose-700, sampled from the logo) fixed at the very top, CLS 0.
   Languages live in the side LanguageDock (globe button) on every breakpoint;
   the mobile drawer keeps its own pill set for one-handed reach.
   Mobile: full-screen drawer on night with the on-dark logo, a site search
   (tours, activities, pages) and a WhatsApp button. */

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
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
import LanguageDock from "./language-dock";

type SearchHit = { name: string; sub: string; href: string; group: string };

export default function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const cleanPath = stripLocale(pathname);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      setQuery("");
      /* Let the drawer paint before pulling focus, so screen reader users
         land on the search straight away. */
      const t = setTimeout(() => searchRef.current?.focus(), 260);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* SVG brand marks (vector, user-supplied artwork): rose primary on light,
     cream mono over photos/night. Aspect 2560x841 -> 150px wide = 49px tall, CLS 0. */
  const logoSrc = scrolled
    ? "/brand/logos/svg/liger-tours-primary-rose.svg"
    : "/brand/logos/svg/liger-tours-mono-cream.svg";

  /* Drawer search index, built from the dictionary in the active language. */
  const index = useMemo<SearchHit[]>(() => {
    const items: SearchHit[] = [];
    for (const p of dict.nav)
      items.push({ name: p.label, sub: dict.search.pages, href: p.href, group: "pages" });
    items.push({
      name: dict.footer.faq,
      sub: dict.faqPage.eyebrow,
      href: "/faq",
      group: "pages",
    });
    for (const t of dict.tours)
      items.push({ name: t.name, sub: t.route, href: `/tours/${t.slug}`, group: "tours" });
    for (const a of dict.activities)
      items.push({
        name: a.name,
        sub: `${a.location} \u00B7 ${a.duration}`,
        href: "/activities",
        group: "activities",
      });
    return items;
  }, [dict]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const hits = index.filter((i) =>
      `${i.name} ${i.sub}`.toLowerCase().includes(q)
    );
    /* pages first, then tours, then activities; cap the list for the drawer. */
    const rank = { pages: 0, tours: 1, activities: 2 } as Record<string, number>;
    return hits
      .sort((a, b) => (rank[a.group] ?? 3) - (rank[b.group] ?? 3))
      .slice(0, 8);
  }, [index, query]);

  const goFirstResult = () => {
    if (results.length === 0) return;
    setOpen(false);
    router.push(localePath(locale, results[0].href));
  };

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
              prefetch={false}
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
                  prefetch={false}
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

              <Link
                href={localePath(locale, "/contact")}
                className="btn btn--primary ml-2"
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

      {/* Side language dock: globe button on the right edge, every breakpoint */}
      <LanguageDock locale={locale} dict={dict} />

      {/* Mobile drawer: full-screen on night, search first */}
      <div
        id="mobile-drawer"
        data-open={open}
        className="nav-drawer on-dark fixed inset-0 z-[90] lg:hidden"
        role="dialog"
        aria-modal={open}
        aria-label={dict.a11y.menuOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto px-[var(--gutter)] pb-10 pt-28">
          <img
            src="/brand/logos/svg/liger-tours-mono-cream.svg"
            alt="Liger Tours Namibia"
            width={2560}
            height={841}
            className="h-auto w-[180px]"
          />

          {/* Site search: appears as soon as the navigation toggler opens */}
          <div className="drawer-search relative mt-8">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-rose-200"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={searchRef}
              type="search"
              className="field"
              placeholder={dict.search.placeholder}
              aria-label={dict.search.label}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  goFirstResult();
                }
              }}
              autoComplete="off"
            />
          </div>

          {query.trim().length >= 2 && (
            <div className="mt-3" role="group" aria-label={dict.search.label}>
              {results.length === 0 ? (
                <p className="t-small px-1 py-3 text-ink-muted-on-dark">
                  {dict.search.noResults}
                </p>
              ) : (
                <ul className="grid">
                  {results.map((r) => (
                    <li key={r.group + r.href + r.name}>
                      <Link
                        href={localePath(locale, r.href)}
                        prefetch={false}
                        onClick={() => setOpen(false)}
                        className="drawer-search-result block rounded-[var(--radius-sm)] px-3 py-3"
                        aria-label={dict.search.resultAria.replace("{name}", r.name)}
                      >
                        <span className="t-eyebrow block text-rose-300">
                          {r.group === "pages"
                            ? dict.search.pages
                            : r.group === "tours"
                              ? dict.search.tours
                              : dict.search.activities}
                        </span>
                        <span className="t-body mt-0.5 block text-rose-50">
                          {r.name}
                        </span>
                        {r.group !== "pages" && (
                          <span className="t-small mt-0.5 block text-ink-muted-on-dark">
                            {r.sub}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <nav aria-label="Mobile" className="mt-8 grid gap-6">
            {dict.nav.map((item, i) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                prefetch={false}
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
                className={`t-eyebrow flex h-11 items-center justify-center rounded-full border-2 px-3.5 transition-colors duration-[240ms] ${
                  l === locale
                    ? "border-rose-50 bg-rose-50 text-night"
                    : "border-rose-200 text-rose-100 hover:border-rose-50 hover:text-white"
                }`}
              >
                {localeNames[l]}
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-4 pt-10">
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
