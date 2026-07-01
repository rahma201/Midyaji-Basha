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

const LEGACY_PRODUCT_PATHS: Record<string, string> = {
  "midye-dolma": "/menu/turkish-stuffed-mussels",
  "stuffed-mussels": "/menu/turkish-stuffed-mussels",
  "cig-kofte": "/menu/cig-kofte-sandwich",
  yalanci: "/menu/yalanji-fatteh",
  "turkish-wraps": "/menu/cig-kofte-meal",
};

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];

  if (parts.includes("knowledge-hub")) {
    const newPath = pathname.replace("knowledge-hub", "guides");
    return NextResponse.redirect(new URL(newPath, request.url), 308);
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url), 308);
  }

  if (first && !locales.includes(first) && LEGACY_PRODUCT_PATHS[first]) {
    return NextResponse.redirect(
      new URL(`/en${LEGACY_PRODUCT_PATHS[first]}`, request.url),
      308,
    );
  }

  if (
    first &&
    locales.includes(first) &&
    parts[1] === "menu" &&
    parts[2] &&
    LEGACY_PRODUCT_PATHS[parts[2]]
  ) {
    return NextResponse.redirect(
      new URL(`/${first}${LEGACY_PRODUCT_PATHS[parts[2]]}`, request.url),
      308,
    );
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
