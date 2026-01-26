import { Metadata } from 'next';
import Link from 'next/link';
import { LogoReveal } from '@/components/layout';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Insights, guides, and updates from our team.',
};

const articles = [
  {
    id: 1,
    slug: 'future-of-enterprise-software',
    title: 'The Future of Enterprise Software: Trends to Watch',
    summary:
      "Discover the key trends shaping enterprise software in 2024 and beyond. From AI integration to low-code platforms, learn what's driving innovation.",
    category: 'Industry',
    date: 'Jan 15, 2024',
  },
  {
    id: 2,
    slug: 'maximizing-roi-with-automation',
    title: 'Maximizing ROI with Intelligent Automation',
    summary:
      'Learn how businesses are achieving 10x returns through smart automation strategies. Real case studies and actionable insights included.',
    category: 'Insights',
    date: 'Jan 10, 2024',
  },
  {
    id: 3,
    slug: 'building-data-driven-culture',
    title: 'Building a Data-Driven Culture in Your Organization',
    summary:
      'Practical steps to transform your company into a data-first enterprise. Strategies for leadership buy-in and team adoption.',
    category: 'Guide',
    date: 'Jan 5, 2024',
  },
  {
    id: 4,
    slug: 'security-best-practices-2024',
    title: 'Security Best Practices for 2024',
    summary:
      'Stay ahead of threats with our comprehensive guide to enterprise security. Updated for the latest vulnerabilities and solutions.',
    category: 'Security',
    date: 'Dec 28, 2023',
  },
  {
    id: 5,
    slug: 'scaling-startup-to-enterprise',
    title: 'Scaling from Startup to Enterprise: A Tech Guide',
    summary:
      'Technical considerations when scaling your infrastructure. From microservices to database optimization strategies.',
    category: 'Technical',
    date: 'Dec 20, 2023',
  },
  {
    id: 6,
    slug: 'remote-work-collaboration-tools',
    title: 'Remote Work: Choosing the Right Collaboration Tools',
    summary:
      'A comprehensive comparison of collaboration platforms for distributed teams. Find the right fit for your organization.',
    category: 'Productivity',
    date: 'Dec 15, 2023',
  },
];

export default function ArticlesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-py-lg bg-black pt-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-display-1 uppercase tracking-tight text-white">
              Articles
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Articles List */}
      <section className="border-t border-white/10 bg-black pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-white/10">
            {articles.map((article, index) => (
              <FadeIn key={article.id} delay={index * 0.1}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block py-8 first:pt-0 last:pb-0"
                >
                  <article className="grid gap-6 sm:grid-cols-12 sm:items-center">
                    {/* Image */}
                    <div className="sm:col-span-4">
                      <div className="img-grayscale aspect-[16/10] overflow-hidden bg-[#1a1a1a] transition-transform duration-500 group-hover:scale-[1.02]">
                        <div
                          className="h-full w-full transition-all duration-500"
                          style={{
                            backgroundImage: `linear-gradient(${135 + index * 30}deg, #2a2a2a, #1a1a1a)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="sm:col-span-8">
                      <h2 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-[#a0a0a0] sm:text-2xl">
                        {article.title}
                      </h2>
                      <p className="mt-3 line-clamp-2 text-[#a0a0a0]">
                        {article.summary}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-sm text-[#4f4f4f]">
                        <span className="border border-white/10 px-3 py-1">
                          {article.category}
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <LogoReveal />
    </>
  );
}
