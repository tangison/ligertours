import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import WhatsAppFloat from "@/components/site/whatsapp-float";
import { company } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ligertoursnamibia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Liger Tours Namibia | Guided Namibia Tours from Windhoek",
    template: "%s | Liger Tours Namibia",
  },
  description:
    "Locally owned tour operator in Windhoek. Guided Namibia tours to Sossusvlei, Etosha, Swakopmund and the Kalahari, planned around your dates and group.",
  applicationName: "Liger Tours Namibia",
  keywords: [
    "Namibia tours",
    "Windhoek tour operator",
    "Sossusvlei tour",
    "Etosha safari",
    "Namibia safari",
    "Liger Tours Namibia",
  ],
  authors: [{ name: company.legalName, url: siteUrl }],
  openGraph: {
    type: "website",
    siteName: "Liger Tours Namibia",
    title: "Liger Tours Namibia | Guided Namibia Tours from Windhoek",
    description:
      "Guided Namibia tours to Sossusvlei, Etosha, Swakopmund and the Kalahari, planned by a local registered operator.",
    url: siteUrl,
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liger Tours Namibia logo on a rose background",
      },
    ],
    locale: "en_NA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liger Tours Namibia | Guided Namibia Tours from Windhoek",
    description:
      "Guided Namibia tours to Sossusvlei, Etosha, Swakopmund and the Kalahari, planned by a local registered operator.",
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

export const viewport: Viewport = {
  themeColor: "#744642",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/TouristAttraction",
  name: company.legalName,
  description:
    "Locally owned tour operator in Windhoek offering guided Namibia tours: Sossusvlei, Etosha, Swakopmund, Kalahari, Damaraland and day activities around the capital.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
