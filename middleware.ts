import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory rate limiter (per-IP, resets on deploy)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 60; // 60 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function cleanupStaleEntries() {
  const now = Date.now();
  for (const [ip, entry] of rateLimit) {
    if (now > entry.resetTime) rateLimit.delete(ip);
  }
}

export function middleware(request: NextRequest) {
  // Clean stale entries on each request instead of setInterval
  if (rateLimit.size > 1000) cleanupStaleEntries();

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  // Block non-standard methods
  const allowed = ['GET', 'HEAD', 'OPTIONS'];
  if (!allowed.includes(request.method)) {
    return new NextResponse(null, { status: 405 });
  }

  // Rate limiting
  if (isRateLimited(ip)) {
    return new NextResponse('Rate limit exceeded', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain',
      },
    });
  }

  const response = NextResponse.next();

  // Remove server info leaks
  response.headers.delete('server');

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.png|fonts/|logo.png|og-image.png).*)',
  ],
};
