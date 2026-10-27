/* Shared, locale-independent data: company facts + locale registry + types.
   Facts are real (from the client brand kit and the live site). */

export const company = {
  name: "Liger Tours Namibia",
  legalName: "Liger Tours Namibia",
  phone: "+264 81 472 2552",
  phoneHref: "tel:+264814722552",
  whatsapp: "https://wa.me/264814722552",
  email: "info@ligertours.com",
  city: "Windhoek",
  country: "Namibia",
  address: "Windhoek, Namibia",
  domain: "ligertours.com",
  url: "https://ligertours.com",
  registered: "Registered with the Namibia Tourism Board (NTB)",
  hours: "Monday to Saturday, 08:00 to 17:00 (CAT)",
} as const;

export const locales = ["en", "de", "fr", "af", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  af: "Afrikaans",
  pt: "Português",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_NA",
  de: "de_DE",
  fr: "fr_FR",
  af: "af_ZA",
  pt: "pt_PT",
};

/* External URL for a locale: English keeps the clean unprefixed URL,
   German and French live under /de and /fr. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === defaultLocale ? `${clean || "/"}` : `/${locale}${clean}`;
}

/* Strip the locale prefix from a browser pathname ("/de/tours" -> "/tours"). */
export function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}

export type Tour = {
  slug: string;
  name: string;
  metaTitle: string;
  route: string;
  eyebrow: string;
  blurb: string;
  description: string[];
  duration?: string;
  image: string;
  alt: string;
  highlights: string[];
};

export type Activity = {
  slug: string;
  name: string;
  duration: string;
  location: string;
  description: string;
  image: string;
  alt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  country: string;
};

export type GalleryPhoto = { src: string; alt: string; tall?: boolean };
