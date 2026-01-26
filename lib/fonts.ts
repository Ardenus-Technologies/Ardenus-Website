import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';

/**
 * Main sans-serif font for body text
 * Inter is a highly legible font optimized for screens
 *
 * To change: Replace with your brand font
 * Example fonts: Poppins, DM Sans, Plus Jakarta Sans, Outfit
 */
export const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

/**
 * Heading/display font for titles and emphasis
 * Playfair Display is an elegant serif font for headings
 *
 * To change: Replace with your brand heading font
 * Example fonts: Fraunces, Sora, Space Grotesk, Cabinet Grotesk
 */
export const fontHeading = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

/**
 * Monospace font for code snippets
 */
export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});
