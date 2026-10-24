import { NextResponse, type NextRequest } from "next/server";

/* Locale routing, hand-rolled (no runtime i18n dependency):
   - English keeps the super clean unprefixed URLs (/tours) and is rewritten
     internally to /en/tours, where the pre-rendered pages live.
   - German and French are real URL segments: /de/tours, /fr/tours.
   - Static assets, APIs and metadata files pass through untouched. */

import { locales, defaultLocale } from "@/lib/content";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const first = pathname.split("/")[1];
  if ((locales as readonly string[]).includes(first)) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
