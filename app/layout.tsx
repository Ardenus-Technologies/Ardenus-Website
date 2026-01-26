import type { Metadata, Viewport } from 'next';
import { fontSans, fontHeading, fontMono } from '@/lib/fonts';
import { SmoothScrollProvider } from '@/components/providers/SmoothScroll';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { PageLoader } from '@/components/layout/PageLoader';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Company Name',
    template: '%s | Company Name',
  },
  description: 'Your company tagline or description goes here.',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Company Name',
    title: 'Company Name',
    description: 'Your company tagline or description goes here.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Company Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Name',
    description: 'Your company tagline or description goes here.',
    images: ['/og-image.png'],
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
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
      className={cn(fontSans.variable, fontHeading.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">
        <PageLoader />
        <SmoothScrollProvider lerp={0.1} duration={1.2}>
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
