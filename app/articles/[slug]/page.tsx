import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/animations/FadeIn';

// Article data - in production, this would come from a CMS or database
const articles: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    content: string[];
  }
> = {
  'future-of-enterprise-software': {
    title: 'The Future of Enterprise Software: Trends to Watch',
    category: 'Industry',
    date: 'Jan 15, 2024',
    content: [
      'The enterprise software landscape is evolving at an unprecedented pace. As we look toward the future, several key trends are emerging that will reshape how businesses operate and compete.',
      '## AI-Powered Everything',
      "Artificial intelligence is no longer a nice-to-have—it's becoming table stakes for enterprise software. From predictive analytics to automated customer service, AI is being woven into every aspect of business operations.",
      'Companies that fail to embrace AI-powered tools risk falling behind competitors who can process data faster, make better decisions, and provide superior customer experiences.',
      '## The Rise of Low-Code Platforms',
      'Low-code and no-code platforms are democratizing software development. Business users can now build custom applications without deep technical expertise, accelerating digital transformation initiatives.',
      'This shift is enabling organizations to respond more quickly to market changes and reduce their dependence on scarce developer resources.',
      '## Cloud-Native Architecture',
      'The move to cloud-native architecture continues to accelerate. Microservices, containers, and serverless computing are becoming standard approaches for building scalable, resilient applications.',
      'Organizations that modernize their infrastructure gain significant advantages in terms of agility, cost efficiency, and the ability to innovate rapidly.',
      '## Security as a Priority',
      'With cyber threats becoming more sophisticated, security is moving from an afterthought to a foundational concern. Zero-trust architectures and built-in security features are becoming essential requirements for enterprise software.',
      '## Looking Ahead',
      'The future of enterprise software is bright for organizations willing to embrace change. By staying informed about these trends and making strategic technology investments, businesses can position themselves for long-term success.',
    ],
  },
  'maximizing-roi-with-automation': {
    title: 'Maximizing ROI with Intelligent Automation',
    category: 'Insights',
    date: 'Jan 10, 2024',
    content: [
      'Intelligent automation is transforming how businesses operate, delivering measurable returns on investment that go far beyond simple cost savings.',
      '## Understanding the Full Value',
      'When evaluating automation ROI, many organizations focus solely on labor cost reduction. While this is certainly a benefit, the true value of automation extends much further.',
      '**Quality improvements** often deliver the most significant returns. Automated processes are consistent and error-free, reducing costly mistakes and rework.',
      '**Speed gains** enable businesses to serve customers faster and respond more quickly to market opportunities.',
      '**Employee satisfaction** increases when workers are freed from repetitive tasks to focus on more meaningful work.',
      '## Case Study: Financial Services',
      'A mid-size financial services firm implemented intelligent automation across their loan processing workflow. The results were impressive:',
      '- Processing time reduced from 5 days to 4 hours',
      '- Error rates dropped by 94%',
      '- Employee satisfaction scores increased by 35%',
      '- Overall ROI of 380% within the first year',
      '## Getting Started',
      'To maximize your automation ROI, start by identifying high-volume, rule-based processes that currently require significant manual effort. These are typically the best candidates for initial automation projects.',
      'Build a strong business case that accounts for all sources of value, not just labor savings. And invest in change management to ensure successful adoption across your organization.',
    ],
  },
  'building-data-driven-culture': {
    title: 'Building a Data-Driven Culture in Your Organization',
    category: 'Guide',
    date: 'Jan 5, 2024',
    content: [
      'Becoming a truly data-driven organization requires more than just investing in analytics tools. It demands a fundamental shift in how decisions are made at every level.',
      '## Start with Leadership',
      'Cultural change must begin at the top. Leaders need to model data-driven decision-making in their own work and consistently ask for data to support recommendations from their teams.',
      'When executives regularly reference data in their communications and decisions, it sends a powerful signal about organizational priorities.',
      '## Democratize Data Access',
      "For a data-driven culture to flourish, data can't be locked away in silos accessible only to analysts. Employees at all levels need access to relevant data and the tools to explore it.",
      'Self-service analytics platforms enable business users to answer their own questions without waiting for IT or data team support.',
      '## Invest in Data Literacy',
      "Access to data isn't enough if people don't know how to use it effectively. Organizations need to invest in training programs that build data literacy across the workforce.",
      'This includes teaching people how to:',
      '- Identify relevant data sources',
      '- Understand basic statistical concepts',
      '- Interpret visualizations correctly',
      '- Recognize bias and data quality issues',
      '## Celebrate Data Wins',
      'Recognize and celebrate instances where data-driven decisions led to positive outcomes. Sharing these success stories helps reinforce the value of the approach and encourages others to follow suit.',
      '## Be Patient',
      "Cultural change takes time. Don't expect overnight transformation. Focus on making incremental progress and building momentum over months and years.",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.content[0],
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-black">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div
          className="absolute inset-0 bg-[#1a1a1a]"
          style={{
            backgroundImage: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Article Header */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24">
          <FadeIn>
            <div className="flex items-center gap-3 text-sm">
              <span className="border border-white/20 bg-white/5 px-3 py-1 text-white">
                {article.category}
              </span>
              <span className="text-[#4f4f4f]">{article.date}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-display-3 mt-4 text-white">{article.title}</h1>
          </FadeIn>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="prose prose-lg prose-invert max-w-none">
            {article.content.map((block, index) => {
              if (block.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="mt-12 text-2xl font-medium text-white first:mt-0"
                  >
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('**') && block.endsWith('**')) {
                return (
                  <p key={index} className="font-medium text-white">
                    {block.replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (block.startsWith('- ')) {
                return (
                  <li key={index} className="text-[#a0a0a0]">
                    {block.replace('- ', '')}
                  </li>
                );
              }
              return (
                <p key={index} className="text-[#a0a0a0]">
                  {block}
                </p>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
