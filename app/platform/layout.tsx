import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'Explore the Ardenus platform - Intelligence, Engine, and Core products for complete business automation.',
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
