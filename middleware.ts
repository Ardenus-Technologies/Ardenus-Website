import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory rate limiter (per-IP, resets on deploy)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 30; // 30 requests per minute per IP (tightened)

// Known bot/scraper user-agent patterns
const BOT_PATTERNS = [
  /curl/i,
  /wget/i,
  /python-requests/i,
  /scrapy/i,
  /httpclient/i,
  /java\//i,
  /libwww/i,
  /httpunit/i,
  /nutch/i,
  /phpcrawl/i,
  /mj12bot/i,
  /semrush/i,
  /ahrefsbot/i,
  /dotbot/i,
  /rogerbot/i,
  /blexbot/i,
  /bytespider/i,
  /gptbot/i,
  /claudebot/i,
  /ccbot/i,
  /chatgpt-user/i,
  /anthropic-ai/i,
  /cohere-ai/i,
  /ia_archiver/i,
  /archive\.org_bot/i,
  /petalbot/i,
  /dataforseo/i,
  /headlesschrome/i,
  /phantomjs/i,
  /slimerjs/i,
];

function isBot(ua: string): boolean {
  return BOT_PATTERNS.some((pattern) => pattern.test(ua));
}

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
  // Clean stale entries periodically
  if (rateLimit.size > 500) cleanupStaleEntries();

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  const ua = request.headers.get('user-agent') || '';

  // Block non-standard methods
  const allowed = ['GET', 'HEAD', 'OPTIONS'];
  if (!allowed.includes(request.method)) {
    return new NextResponse(null, { status: 405 });
  }

  // Block known bots and scrapers
  if (isBot(ua)) {
    return new NextResponse(null, { status: 403 });
  }

  // Block empty user-agents (most scrapers)
  if (!ua || ua.length < 10) {
    return new NextResponse(null, { status: 403 });
  }

  // Rate limiting
  if (isRateLimited(ip)) {
    return new NextResponse(null, {
      status: 429,
      headers: {
        'Retry-After': '60',
      },
    });
  }

  const response = NextResponse.next();

  // Remove server info leaks
  response.headers.delete('server');
  response.headers.delete('x-powered-by');

  // Anti-scraping headers
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  response.headers.set('Pragma', 'no-cache');

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.png|logo.png|og-ardenus.png|apple-touch-icon.png|icon-192.png|robots.txt).*)',
  ],
};
