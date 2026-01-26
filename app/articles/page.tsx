import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LogoReveal } from '@/components/layout';
import { FadeIn } from '@/components/animations/FadeIn';
import { ScrollToTop } from '@/components/utils/ScrollToTop';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Insights, guides, and updates from the Ardenus team.',
};

const articles = [
  {
    id: 1,
    slug: 'ai-opportunity-pest-control',
    title: 'The AI Opportunity: Why Pest Control is the Next Frontier for Intelligent Operations',
    summary:
      "The pest control industry generates billions annually—yet operates on technology from the last decade. That's about to change.",
    category: 'Thought Leadership',
    date: 'Jan 14, 2026',
    readTime: '4 min read',
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
    readTime: '5 min read',
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
    readTime: '5 min read',
    image: '/articles/bees1.jpg',
  },
  {
    id: 4,
    slug: 'hidden-cost-disconnected-systems',
    title: 'The Hidden Cost of Disconnected Systems: Why Your Software Stack Drains Productivity',
    summary:
      "Disconnected systems don't just waste time—they make invisible mistakes that compound daily.",
    category: 'Technology',
    date: 'Jan 8, 2026',
    readTime: '4 min read',
    image: '/articles/money1.jpg',
  },
  {
    id: 5,
    slug: 'technology-creates-elite-field-performance',
    title: "Your Best Technician's Secret: How Technology Creates Elite Field Performance",
    summary:
      "The gap between your top performer and average isn't skill—it's information access.",
    category: 'Workforce',
    date: 'Jan 6, 2026',
    readTime: '5 min read',
    image: '/articles/pestTech.jpg',
  },
  {
    id: 6,
    slug: 'smart-scheduling-reduces-windshield-time',
    title: 'The Route to Profitability: How Smart Scheduling Reduces Windshield Time',
    summary:
      "Your technicians spend more time driving than treating. AI is changing that equation—and the savings compound faster than you think.",
    category: 'Operations',
    date: 'Jan 4, 2026',
    readTime: '5 min read',
    image: '/articles/article4.jpg',
  },
  {
    id: 7,
    slug: 'data-driven-pricing-pest-control',
    title: 'Pricing in the Dark: Why Data-Driven Pricing Matters for Pest Control',
    summary:
      "Your pricing was set years ago based on gut feel. Meanwhile, your costs changed, your value increased, and your competitors moved. Time to catch up.",
    category: 'Revenue Intelligence',
    date: 'Jan 2, 2026',
    readTime: '6 min read',
    image: '/articles/article5.jpg',
  },
];

export default function ArticlesPage() {
  return (
    <>
      <ScrollToTop />
      {/* Page Header */}
      <section className="section-py-lg bg-black pt-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-display-1 uppercase tracking-tight text-white">
              News & Articles
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Articles List */}
      <section className="bg-black pb-24">
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
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a] transition-transform duration-500 group-hover:scale-[1.02]">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-all duration-500"
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
                        <span>{article.readTime}</span>
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
