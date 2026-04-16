import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  const isPublicRoute =
    pathname === "/sign-in" || pathname === "/sign-up";

  const isProtectedRoute =
    pathname.startsWith("/student") ||
    pathname.startsWith("/mentor") ||
    pathname.startsWith("/recruiter") ||
    pathname.startsWith("/admin");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    "/student/:path*",
    "/mentor/:path*",
    "/recruiter/:path*",
    "/admin/:path*",
  ],
};