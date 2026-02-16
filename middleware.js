import { NextResponse } from 'next/server';

/**
 * Enforce HTTPS: permanent (301) redirect from HTTP to HTTPS.
 * Preserves path and query string. Vercel-compatible (uses x-forwarded-proto).
 * Skipped in development so localhost works over HTTP.
 */
export function middleware(request) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }
  const proto = request.headers.get('x-forwarded-proto');
  if (proto === 'http') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)',
};
