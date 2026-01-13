/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false,
  },
  images: {
    domains: ['qtrypzzcjebvfcihiynt.supabase.co'],
    unoptimized: false,
  },
}

module.exports = nextConfig

