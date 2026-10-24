/* Locale registry + dictionary resolver.
   Dict = typeof en: German and French dictionaries are checked against the
   English shape at compile time, so no string can be missed. */

import { de } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { company, locales, defaultLocale, type Locale } from "./shared";

export * from "./shared";

export type Dict = typeof en;

const dicts: Record<Locale, Dict> = { en, de, fr };

export function getDict(locale: Locale): Dict {
  return dicts[locale] ?? dicts[defaultLocale];
}

export { company, locales, defaultLocale };
export type { Locale };
