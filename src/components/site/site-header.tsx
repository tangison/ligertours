"use client";

/* Fixed header. Over a hero: transparent with the on-dark logo.
   After 80px: rose-50 with the primary-rose logo and a hairline rose-300 border.
   Brand bar (4px, rose-700, sampled from the logo) fixed at the very top, CLS 0.
   Mobile: full-screen drawer on night with the on-dark logo and WhatsApp button. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/content";
import ScrollProgress from "./scroll-progress";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
              href="/"
              className={`relative shrink-0 transition-opacity duration-[240ms] ${open ? "pointer-events-none opacity-0" : "z-10"}`}
              aria-label="Liger Tours Namibia: home"
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

            <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`t-button pb-1 pt-1 transition-colors duration-[240ms] ${
                    pathname === item.href
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
              <Link href="/contact" className="btn btn--primary ml-2">
                Plan my trip
              </Link>
            </nav>

            <button
              type="button"
              className={`relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-md lg:hidden ${
                scrolled || open ? "text-ink" : "text-rose-50"
              } ${open ? "text-rose-50" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
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
        aria-label="Menu"
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
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="t-h2 text-rose-100 transition-colors duration-[240ms] hover:text-white"
                style={{ transitionDelay: `${i * 30}ms` }}
                onClick={() => setOpen(false)}
              >
                {item.label}
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
              WhatsApp us now
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
