import type { MetadataRoute } from "next";
import { tours } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ligertoursnamibia.com";

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
  ].map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const tourRoutes = tours.map((t) => ({
    url: `${siteUrl}/tours/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...tourRoutes];
}
