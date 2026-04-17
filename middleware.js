import { NextResponse } from 'next/server';

/** Apex host for production (matches app/layout.js SITE_URL). */
const CANONICAL_HOST = 'themeandcolor.com';

/**
 * Production URL normalization (Vercel: uses `host` + `x-forwarded-proto`):
 * - HTTP → HTTPS (301)
 * - www → apex (301)
 * - `http://www…` → one 301 to `https://` apex (path + query preserved)
 * Skipped in development so localhost works over HTTP.
 */
export function middleware(request) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase() ?? '';
  const proto = request.headers.get('x-forwarded-proto');
  const isInsecure = proto === 'http';
  const isWwwCanonical = host === `www.${CANONICAL_HOST}`;

  if (!isInsecure && !isWwwCanonical) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  if (isInsecure) {
    url.protocol = 'https:';
  }
  if (isWwwCanonical) {
    url.hostname = CANONICAL_HOST;
  }
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)',
};
