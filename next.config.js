/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
    remotePatterns: [],
  },

  // Suppress all server identification
  poweredByHeader: false,

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), browsing-topics=(), accelerometer=(), autoplay=(), encrypted-media=(), gyroscope=(), magnetometer=(), midi=(), payment=(), picture-in-picture=(), usb=(), xr-spatial-tracking=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "font-src 'self'",
              "connect-src 'self' https://api.ipify.org",
              "frame-ancestors 'none'",
              "base-uri 'none'",
              "form-action 'none'",
              "object-src 'none'",
              "media-src 'none'",
              "worker-src 'none'",
              "manifest-src 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
