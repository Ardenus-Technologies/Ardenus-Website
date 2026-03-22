import type { Metadata, Viewport } from 'next';
import { fontSans, fontMono } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ardenus',
  description: 'Ardenus',
  metadataBase: new URL('https://ardenus.com'),
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ardenus.com',
    siteName: 'Ardenus',
    title: 'Ardenus',
    description: 'Ardenus',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ardenus',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
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
    <html
      lang="en"
      className={cn(fontSans.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body className="h-screen w-screen overflow-hidden bg-black">
        {children}
      </body>
    </html>
  );
}
