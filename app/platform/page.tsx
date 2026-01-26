import { Metadata } from 'next';
import { ScrollProgress, LogoReveal } from '@/components/layout';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Explore our comprehensive platform and product offerings.',
};

const products = [
  {
    number: '01',
    title: 'Analytics Platform',
    description:
      'Transform raw data into actionable insights with our powerful analytics tools.',
    content: {
      subheading: 'Data-Driven Decisions',
      paragraphs: [
        'Our analytics platform provides real-time visibility into every aspect of your business operations. With customizable dashboards and advanced visualization tools, you can monitor KPIs, track trends, and identify opportunities as they emerge.',
        'Leverage AI-powered predictive analytics to forecast outcomes and make proactive decisions. Our machine learning algorithms continuously learn from your data to provide increasingly accurate predictions.',
      ],
      features: [
        'Real-time data streaming and processing',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced filtering and segmentation capabilities',
        'Automated report generation and scheduling',
        'Role-based access controls and data governance',
      ],
    },
  },
  {
    number: '02',
    title: 'Automation Suite',
    description:
      'Streamline operations and eliminate manual tasks with intelligent automation.',
    content: {
      subheading: 'Work Smarter, Not Harder',
      paragraphs: [
        'Our automation suite helps you identify and eliminate bottlenecks in your workflows. Using a visual workflow builder, you can create complex automation rules without writing a single line of code.',
        'Connect your favorite tools and create seamless data flows across your entire tech stack. Our integration hub supports hundreds of popular applications out of the box.',
      ],
      features: [
        'Visual workflow designer with conditional logic',
        'Pre-built automation templates for common use cases',
        'Trigger-based actions and scheduled tasks',
        'Error handling and retry mechanisms',
        'Detailed audit logs and performance metrics',
      ],
    },
  },
  {
    number: '03',
    title: 'Collaboration Hub',
    description:
      'Unite your team with tools designed for seamless communication and productivity.',
    content: {
      subheading: 'Better Together',
      paragraphs: [
        'Break down silos and foster collaboration across teams with our integrated communication platform. From instant messaging to video conferencing, all your collaboration needs are covered.',
        'Share documents, manage projects, and track progress in one unified workspace. Our collaboration hub keeps everyone aligned and moving toward common goals.',
      ],
      features: [
        'Threaded conversations and channels',
        'HD video conferencing with screen sharing',
        'Real-time document collaboration',
        'Project boards with customizable views',
        'Mobile apps for iOS and Android',
      ],
    },
  },
];

export default function PlatformPage() {
  return (
    <>
      <ScrollProgress />

      {/* Intro Section */}
      <section className="section-py-lg bg-black pt-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <FadeIn className="md:col-span-3">
              <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                Our Platform
              </span>
            </FadeIn>
            <div className="md:col-span-9">
              <FadeIn delay={0.1}>
                <h1 className="text-display-1 uppercase tracking-tight text-white">
                  A Complete Solution for Modern Business
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-body-lg mt-8 text-[#a0a0a0]">
                  Our platform combines powerful tools for analytics,
                  automation, and collaboration into one seamless experience.
                  Built for scale, designed for simplicity.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Products List */}
      {products.map((product, index) => (
        <section
          key={product.number}
          id={product.title.toLowerCase().replace(/\s+/g, '-')}
          className={`border-t border-white/10 ${index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-black'}`}
        >
          <div className="section-py-xl mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <FadeIn>
              <span className="text-xs tracking-widest text-[#4f4f4f]">
                {product.number}
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-display-2 mt-4 uppercase tracking-tight text-white">
                {product.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body-lg mt-6 max-w-2xl text-[#a0a0a0]">
                {product.description}
              </p>
            </FadeIn>

            {/* Two-column image grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[0, 1].map((imgIndex) => (
                <FadeIn key={imgIndex} delay={0.3 + imgIndex * 0.1}>
                  <div className="img-grayscale aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: `linear-gradient(${135 + (index + imgIndex) * 45}deg, #2a2a2a, #1a1a1a)`,
                      }}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Detailed content */}
            <div className="mt-16 max-w-3xl">
              <FadeIn>
                <h3 className="text-xl font-medium text-white">
                  {product.content.subheading}
                </h3>
              </FadeIn>
              {product.content.paragraphs.map((paragraph, pIndex) => (
                <FadeIn key={pIndex} delay={0.1 * (pIndex + 1)}>
                  <p className="mt-4 text-[#a0a0a0]">{paragraph}</p>
                </FadeIn>
              ))}
              <FadeIn delay={0.3}>
                <ul className="mt-8 space-y-3">
                  {product.content.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="pl-6 text-[#a0a0a0]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-py-xl border-t border-white/10 bg-black">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <Link href="/contact" className="btn btn-primary">
              Get Started Today
            </Link>
          </FadeIn>
        </div>
      </section>

      <LogoReveal />
    </>
  );
}
