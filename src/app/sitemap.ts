import type { MetadataRoute } from "next";
import { getDict, locales } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ligertours.com";

/* One sitemap entry per route per language, with hreflang alternates.
   English keeps the clean unprefixed URL and is x-default. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/tours", priority: 0.9 },
    { path: "/activities", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/gallery", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/brand", priority: 0.3 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  const tourSlugs = getDict("en").tours.map((t) => `/tours/${t.slug}`);
  const allRoutes = [
    ...staticRoutes,
    ...tourSlugs.map((p) => ({ path: p, priority: 0.8 })),
  ];

  const urlFor = (locale: string, path: string) =>
    locale === "en" ? `${siteUrl}${path || "/"}` : `${siteUrl}/${locale}${path}`;

  const alternates = (path: string) => {
    const languages: Record<string, string> = {};
    for (const l of locales) languages[l] = urlFor(l, path);
    languages["x-default"] = urlFor("en", path);
    return { languages };
  };

  return allRoutes.flatMap((r) =>
    locales.map((locale) => ({
      url: urlFor(locale, r.path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r.priority,
      alternates: alternates(r.path),
    }))
  );
}
