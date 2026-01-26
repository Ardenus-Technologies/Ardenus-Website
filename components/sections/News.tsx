'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    slug: 'future-of-enterprise-software',
    title: 'The Future of Enterprise Software: Trends to Watch',
    summary:
      'Discover the key trends shaping enterprise software in 2024 and beyond.',
    category: 'Industry',
    date: 'Jan 15, 2024',
  },
  {
    id: 2,
    slug: 'maximizing-roi-with-automation',
    title: 'Maximizing ROI with Intelligent Automation',
    summary:
      'Learn how businesses are achieving 10x returns through smart automation strategies.',
    category: 'Insights',
    date: 'Jan 10, 2024',
  },
  {
    id: 3,
    slug: 'building-data-driven-culture',
    title: 'Building a Data-Driven Culture in Your Organization',
    summary:
      'Practical steps to transform your company into a data-first enterprise.',
    category: 'Guide',
    date: 'Jan 5, 2024',
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
              <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                Latest Updates
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-display-2 mt-4 uppercase tracking-tight text-white">
                News & Articles
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link
              href="/articles"
              className="link-underline hidden text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white sm:block"
            >
              View all
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
                <div className="img-grayscale relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(${135 + index * 45}deg, #2a2a2a, #1a1a1a)`,
                    }}
                  />
                  {/* <Image src={article.image} alt={article.title} fill className="object-cover" /> */}
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#a0a0a0]">
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
            className="link-underline text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
          >
            View all articles
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export default News;
