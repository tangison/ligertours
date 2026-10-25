/* Shared metadata builder: canonical + hreflang alternates + OG per locale.
   English canonicals stay clean (no prefix); other locales carry their segment.
   The hreflang set is generated from the locale registry so every added
   language (de, fr, af, pt, ...) is picked up automatically. */

import type { Metadata } from "next";
import { company, locales, localePath, ogLocales, defaultLocale, type Locale } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ligertoursnamibia.com";

function alternatesFor(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${siteUrl}${localePath(l, path)}`;
  languages["x-default"] = `${siteUrl}${localePath(defaultLocale, path)}`;
  return languages;
}

export function pageMeta(
  locale: Locale,
  path: string,
  meta: { title: string; description: string }
): Metadata {
  const ogImage = {
    url: "/brand/og-image.png",
    width: 1200,
    height: 630,
    alt: "Liger Tours Namibia logo on a rose background",
  };
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(locale, path),
      languages: alternatesFor(path),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localePath(locale, path),
      siteName: company.name,
      locale: ogLocales[locale],
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/brand/og-image.png"],
    },
  };
}

/* Per-page hreflang set without OG (for robots-blocked or simple pages). */
export function pageAlternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: alternatesFor(path),
  };
}
