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
    default: 'Ardenus',
    template: '%s | Ardenus',
  },
  description:
    'The complete AI-powered operating system for pest control businesses. Intelligence, automation, and analytics in one platform.',
  keywords: [
    'pest control software',
    'AI automation',
    'business intelligence',
    'field service management',
  ],
  authors: [{ name: 'Ardenus Technologies' }],
  creator: 'Ardenus Technologies',
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
    title: 'Ardenus: The New Standard in Intelligent Pest Defense',
    description:
      'The complete AI-powered operating system for pest control businesses. Intelligence, automation, and analytics in one platform.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ardenus: The New Standard in Intelligent Pest Defense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ardenus: The New Standard in Intelligent Pest Defense',
    description:
      'The complete AI-powered operating system for pest control businesses.',
    images: ['/og-image.png'],
    creator: '@ardenus',
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
        <SmoothScrollProvider lerp={0.15} duration={0.8}>
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
