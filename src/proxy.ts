import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ar"];
const LEGACY_PATHS = [
  "menu",
  "blog",
  "about",
  "contact",
  "faq",
  "knowledge-hub",
  "midye-dolma",
  "cig-kofte",
  "yalanci",
  "turkish-wraps",
  "guides",
];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url), 308);
  }

  if (first && !locales.includes(first) && LEGACY_PATHS.includes(first)) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url), 308);
  }

  const locale = locales.includes(first) ? first : "en";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-midyaji-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.cookies.set("locale", locale, { path: "/" });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
