import type { Metadata, Viewport } from 'next';
import { fontMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ardenus',
  description: 'We Build the Systems You Don\u2019t See',
  metadataBase: new URL('https://ardenus.com'),
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ardenus.com',
    siteName: 'Ardenus',
    title: 'Ardenus',
    description: 'We Build the Systems You Don\u2019t See',
    images: [
      {
        url: '/og-ardenus.png',
        width: 1200,
        height: 630,
        alt: 'Ardenus',
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontMono.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-black">
        {children}
      </body>
    </html>
  );
}
