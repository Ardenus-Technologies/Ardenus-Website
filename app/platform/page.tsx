'use client';

import { LogoReveal } from '@/components/layout';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    number: '01',
    title: 'Ardenus Intelligence',
    description:
      'Turn your data into actionable intelligence. Predict outcomes, identify opportunities, and make confident decisions backed by AI-powered analysis.',
    images: ['/intelligence-new-1.png', '/intelligence-new-2.png'],
    content: {
      subheading: 'Decision Intelligence',
      paragraphs: [
        'Ardenus Intelligence analyzes patterns across your operations to surface insights that matter. Know which customers are at risk before they churn, discover which neighborhoods offer the best expansion potential, and receive confidence-scored recommendations that empower your team to act decisively.',
      ],
      features: [
        'Churn risk prediction and early warnings',
        'Market expansion opportunity scoring',
        'Neighborhood targeting recommendations',
        'Customer lifetime value forecasting',
        'Confidence-scored action suggestions',
      ],
    },
  },
  {
    number: '02',
    title: 'Ardenus Engine',
    description:
      'Eliminate manual tasks and reduce operational overhead. Ardenus Engine automates the repetitive work so your team can focus on what matters.',
    images: [
      '/software/core-screenshot-left.png',
      '/software/core-screenshot-right.png',
    ],
    content: {
      subheading: 'Workflow Automation',
      paragraphs: [
        'From automated service reminders to intelligent routing, Ardenus Engine handles the operational complexity. Set up trigger-based workflows that respond to events in real-time, ensuring nothing falls through the cracks and every customer touchpoint is optimized.',
      ],
      features: [
        'Automated service reminders and follow-ups',
        'Smart scheduling and route optimization',
        'Trigger-based customer communications',
        'Task assignment and escalation workflows',
      ],
    },
  },
  {
    number: '03',
    title: 'Ardenus Core',
    description:
      'See everything in one place. Ardenus Core aggregates data from every system, giving you complete visibility into your operations from a single command center.',
    images: ['/core-new-1.png', '/core-new-2.png'],
    content: {
      subheading: 'Data Aggregation Hub',
      paragraphs: [
        'No more switching between tools or reconciling data across platforms. Ardenus Core connects to your CRM, scheduling software, payment systems, and field tools to create one unified view. Real-time dashboards surface the metrics that matter, making it easy to monitor performance across every branch and team.',
      ],
      features: [
        'Unified data from all your systems',
        'Real-time operational dashboards',
        'Cross-platform data synchronization',
        'Single source of truth for reporting',
      ],
    },
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] w-full pb-20 pt-32">
        <Image
          src="/platform-hero.webp"
          alt="Pest control technician"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        {/* Bottom gradient fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48"
          style={{
            background:
              'linear-gradient(to top, rgb(0 0 0) 0%, rgb(0 0 0 / 0.8) 30%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-display-1 tracking-tight text-white">
              The Complete
              <br />
              AI-Powered Operating System
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body-lg mt-8 max-w-3xl text-white/80">
              Our platform combines powerful tools for analytics, automation,
              and collaboration into one seamless experience. Built for scale,
              designed for simplicity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products List */}
      {products.map((product, index) => (
        <section
          key={product.number}
          id={product.title.toLowerCase().replace(/\s+/g, '-')}
          className="bg-black"
        >
          <div className="section-py-xl mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <FadeIn>
              <h2 className="text-display-2 tracking-tight text-white">
                {product.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body-lg mt-6 max-w-2xl text-[#a0a0a0]">
                {product.description}
              </p>
            </FadeIn>

            {/* Two-column image grid */}
            <div className="mt-12 grid items-start gap-6 sm:grid-cols-2">
              {[0, 1].map((imgIndex) => (
                <FadeIn key={imgIndex} delay={0.3 + imgIndex * 0.1}>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1a1a]">
                    {product.images ? (
                      <Image
                        src={product.images[imgIndex]}
                        alt={`${product.title} screenshot ${imgIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'left top',
                        }}
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `linear-gradient(${135 + (index + imgIndex) * 45}deg, #2a2a2a, #1a1a1a)`,
                        }}
                      />
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Detailed content */}
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <div>
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
              </div>
              <FadeIn delay={0.3}>
                <ul className="space-y-2">
                  {product.content.features.map((feature, fIndex) => (
                    <li key={fIndex} className="pl-6 text-[#a0a0a0]">
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
      <section className="section-py-xl bg-black">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <Link href="/contact" className="btn btn-primary rounded-none">
              Request a Demo
            </Link>
          </FadeIn>
        </div>
      </section>

      <LogoReveal />
    </>
  );
}
