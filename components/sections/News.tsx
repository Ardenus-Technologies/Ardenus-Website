'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    slug: 'ai-opportunity-pest-control',
    title: 'The AI Opportunity: Why Pest Control is the Next Frontier for Intelligent Operations',
    summary:
      "The pest control industry generates billions annually—yet operates on technology from the last decade. That's about to change.",
    category: 'Thought Leadership',
    date: 'Jan 14, 2026',
    image: '/articles/ai-opportunity.jpg',
  },
  {
    id: 2,
    slug: 'understanding-customer-churn',
    title: 'The Silent Exodus: Understanding Customer Churn in Pest Control',
    summary:
      "Customer churn isn't a marketing problem—it's an operational blind spot that AI can finally illuminate.",
    category: 'Customer Intelligence',
    date: 'Jan 12, 2026',
    image: '/articles/roach1.jpg',
  },
  {
    id: 3,
    slug: 'seasonal-intelligence-competitive-advantage',
    title: 'Predict the Swarm: How Seasonal Intelligence Becomes Competitive Advantage',
    summary:
      'Every pest has a pattern. The companies that see it first win the season.',
    category: 'Data & Analytics',
    date: 'Jan 10, 2026',
    image: '/articles/bees1.jpg',
  },
];

export function News() {
  return (
    <section id="news" className="section-py-xl bg-black">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <FadeIn>
              <h2 className="text-display-2 mt-4 tracking-tight text-white">
                News & Articles
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link
              href="/articles"
              scroll={true}
              className="group hidden sm:inline-flex items-center gap-2 border border-white/30 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-white"
            >
              See All Articles
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </FadeIn>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/articles/${article.slug}`} className="group block">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#a0a0a0]" style={{ textTransform: 'none' }}>
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[#a0a0a0]">
                    {article.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-[#4f4f4f]">
                    <span className="border border-white/10 px-2 py-1">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <FadeIn className="mt-12 text-center sm:hidden">
          <Link
            href="/articles"
            scroll={true}
            className="group inline-flex items-center gap-2 border border-white/30 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-white"
          >
            See All Articles
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export default News;
