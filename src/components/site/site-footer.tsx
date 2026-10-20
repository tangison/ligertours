/* Footer: night background, on-dark logo, contact details, nav, small print.
   Copyright: current calendar year + official entity name (on point, per checklist). */

import Link from "next/link";
import { company, nav } from "@/lib/content";
import Dune from "./dune";

export default function SiteFooter() {
  return (
    <>
      <Dune variant="night" />
      <footer className="on-dark bg-night text-ink-on-dark">
        <div className="container-liger grid gap-12 pb-10 pt-16 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div>
            <img
              src="/brand/logos/svg/liger-tours-on-dark.svg"
              alt="Liger Tours Namibia"
              width={2560}
              height={841}
              loading="lazy"
              className="h-auto w-[200px]"
            />
            <p className="prose-liger mt-6 text-[15px] leading-relaxed text-ink-muted-on-dark">
              Locally owned tour operator based in Windhoek, registered with the
              Namibia Tourism Board. Guided tours across Namibia: desert, coast,
              canyon and wildlife.
            </p>
          </div>

          <nav aria-label="Footer" className="grid content-start gap-3">
            <h2 className="t-eyebrow text-rose-400">Explore</h2>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="t-body w-fit text-ink-on-dark transition-colors duration-[240ms] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/brand"
              className="t-body w-fit text-ink-muted-on-dark transition-colors duration-[240ms] hover:text-white"
            >
              Brand
            </Link>
          </nav>

          <div className="grid content-start gap-3">
            <h2 className="t-eyebrow text-rose-400">Contact</h2>
            <a
              href={company.phoneHref}
              className="t-body w-fit text-ink-on-dark transition-colors duration-[240ms] hover:text-white"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="t-body w-fit break-all text-ink-on-dark transition-colors duration-[240ms] hover:text-white"
            >
              {company.email}
            </a>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="t-body w-fit text-ink-on-dark transition-colors duration-[240ms] hover:text-white"
            >
              WhatsApp: {company.phone}
            </a>
            <p className="t-body text-ink-muted-on-dark">{company.address}</p>
            <p className="t-small text-ink-muted-on-dark">{company.hours}</p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-liger flex flex-col gap-4 py-6 pb-24 md:flex-row md:items-center md:justify-between md:pb-6">
            <div className="grid gap-1">
              <p className="t-small text-ink-muted-on-dark">
                &copy; 2026 {company.legalName}. All rights reserved.
              </p>
              <p className="t-small text-ink-muted-on-dark">{company.registered}</p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/privacy-policy"
                className="t-small text-ink-muted-on-dark transition-colors duration-[240ms] hover:text-white"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms"
                className="t-small text-ink-muted-on-dark transition-colors duration-[240ms] hover:text-white"
              >
                Terms
              </Link>
              <a
                href="https://studio.tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                className="t-small text-ink-muted-on-dark transition-colors duration-[240ms] hover:text-white"
              >
                Made by Tangison Studio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
