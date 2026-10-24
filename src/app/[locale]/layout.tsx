import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import WhatsAppFloat from "@/components/site/whatsapp-float";
import {
  company,
  getDict,
  locales,
  localeNames,
  ogLocales,
  type Locale,
} from "@/lib/content";
import { localePath } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ligertoursnamibia.com";

/* Root layout lives inside [locale] so <html lang> matches the URL segment.
   Unknown locales are rejected in the component body (notFound), so the
   branded [locale]/not-found renders with the default locale chrome. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = getDict(locale as Locale);
  const path = "/";
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.home.title,
      template: "%s | Liger Tours Namibia",
    },
    description: dict.meta.home.description,
    applicationName: company.name,
    keywords: [
      "Namibia tours",
      "Windhoek tour operator",
      "Sossusvlei tour",
      "Etosha safari",
      "Namibia safari",
      "Liger Tours Namibia",
    ],
    authors: [{ name: company.legalName, url: siteUrl }],
    alternates: {
      canonical: localePath(locale as Locale, path),
      languages: {
        en: localePath("en", path),
        de: localePath("de", path),
        fr: localePath("fr", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: company.name,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: localePath(locale as Locale, path),
      locale: ogLocales[locale as Locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
      images: [
        {
          url: "/brand/og-image.png",
          width: 1200,
          height: 630,
          alt: "Liger Tours Namibia logo on a rose background",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: ["/brand/og-image.png"],
    },
    icons: {
      icon: [
        { url: "/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicons/favicon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: "/favicons/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#744642",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const dict = getDict(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/TouristAttraction",
    name: company.legalName,
    description: dict.meta.home.description,
    url: siteUrl,
    telephone: "+264814722552",
    email: company.email,
    image: `${siteUrl}/brand/og-image.png`,
    logo: `${siteUrl}/brand/og-image.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Windhoek",
      addressCountry: "NA",
    },
    areaServed: "Namibia",
    priceRange: "On request",
    openingHours: "Mo-Sa 08:00-17:00",
    availableLanguage: locales.map((l) => localeNames[l]),
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Marks JS availability so scroll reveals only hide content when they can run */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }}
        />
        <link
          rel="preload"
          href="/fonts/KaushanScript-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Archivo-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SchibstedGrotesk-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-bg text-ink">
        <a
          href="#main"
          className="t-button absolute left-4 top-4 z-[200] -translate-y-24 rounded-[var(--radius-pill)] bg-brand px-5 py-3 text-white transition-transform duration-[240ms] focus:translate-y-0"
        >
          {dict.a11y.skip}
        </a>
        <SiteHeader locale={locale} dict={dict} />
        <main id="main" className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <SiteFooter locale={locale} dict={dict} />
        <WhatsAppFloat label={`${dict.footer.whatsappLabel}: ${company.phone}`} />
      </body>
    </html>
  );
}
