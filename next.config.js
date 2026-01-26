/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    // Add domains for external images if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Modern image formats for better performance
    formats: ['image/avif', 'image/webp'],
  },

  // Experimental features (if needed)
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['framer-motion', 'gsap'],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
