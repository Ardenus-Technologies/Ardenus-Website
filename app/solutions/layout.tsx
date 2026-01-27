import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Discover how Ardenus solves operational efficiency, customer retention, and growth challenges for pest control businesses.',
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
