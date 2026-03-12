import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getPreferredLocale, isValidLocale } from "@/lib/i18n";

function getCountryCode(request: NextRequest) {
  return request.headers.get("x-vercel-ip-country") ?? request.headers.get("cf-ipcountry");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameLocale = pathname.split("/")[1];

  if (isValidLocale(pathnameLocale)) {
    const response = NextResponse.next();
    response.cookies.set("preferred-locale", pathnameLocale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365
    });

    return response;
  }

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const localeCookie = request.cookies.get("preferred-locale")?.value;
  const cookieLocale = localeCookie && isValidLocale(localeCookie) ? localeCookie : null;
  const locale =
    cookieLocale ??
    getPreferredLocale({
      country: getCountryCode(request),
      acceptLanguage: request.headers.get("accept-language")
    });

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;

  const response = NextResponse.redirect(url);
  response.cookies.set("preferred-locale", locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365
  });

  return response;
}

export const config = {
  matcher: ["/", "/en", "/pt"]
};
