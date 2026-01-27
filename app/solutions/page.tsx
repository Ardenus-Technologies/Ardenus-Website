'use client';

import { LogoReveal } from '@/components/layout';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

const solutions = [
  {
    number: '01',
    title: 'Operational Efficiency',
    subtitle: 'Streamline field and internal operations',
    images: ['/software/solutions-first-left.png', '/solutions-new-2.png'],
    overlays: [
      [
        { title: 'Automated Workflows', description: 'Eliminate manual data entry and repetitive tasks with intelligent automation that learns from your processes.' },
        { title: 'Real-Time Insights', description: 'Get instant visibility into field operations with live dashboards and AI-powered analytics.' },
      ],
      [
        { title: 'Resource Optimization', description: 'Maximize technician efficiency with intelligent routing and scheduling algorithms.' },
        { title: 'Seamless Integration', description: 'Connect with your existing tools and systems through our comprehensive API and pre-built integrations.' },
      ],
    ],
  },
  {
    number: '02',
    title: 'Growth & Retention',
    subtitle: 'Uncover hidden revenue opportunities using your data',
    images: ['/software/solutions-growth-left.png', '/software/solutions-growth-right.png'],
    overlays: [
      [
        { title: 'Predictive Churn Analysis', description: 'Identify at-risk customers before they leave with AI-powered predictive models and intervention strategies.' },
        { title: 'Revenue Forecasting', description: 'Generate accurate revenue projections with machine learning models that analyze historical patterns and market signals.' },
      ],
      [
        { title: 'Customer Segmentation', description: 'Discover high-value customer segments and tailor your approach to maximize retention and growth.' },
        { title: 'Upsell Opportunities', description: 'Identify the right time to expand customer relationships with intelligent upsell and cross-sell recommendations.' },
      ],
    ],
  },
  {
    number: '03',
    title: 'Enterprise API',
    subtitle: 'Connect your existing ecosystem',
    images: ['/software/solutions-api-left.png', '/software/solutions-api-right.png'],
    overlays: [
      [
        { title: 'RESTful & GraphQL APIs', description: 'Choose the API architecture that works best for your needs with comprehensive REST and GraphQL support.' },
        { title: 'Webhooks & Events', description: 'Real-time notifications and event-driven architecture to keep your systems in sync automatically.' },
      ],
      [
        { title: 'SDK & Libraries', description: 'Pre-built SDKs in Python, JavaScript, Go, and more to accelerate your integration timeline.' },
        { title: 'Enterprise Security', description: 'OAuth 2.0, API key management, rate limiting, and comprehensive audit logs for enterprise-grade security.' },
      ],
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] w-full pt-32 pb-20">
        <Image
          src="/686c2aff881c223b6fbcee79_m71 home pest control .jpg"
          alt="Pest control service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        {/* Bottom gradient fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48"
          style={{
            background: 'linear-gradient(to top, rgb(0 0 0) 0%, rgb(0 0 0 / 0.8) 30%, transparent 100%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-display-1 tracking-tight text-white">
              Intelligent<br />Tools for Every Stage of Growth
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body-lg mt-8 max-w-3xl text-white/80">
              From operational efficiency to revenue intelligence, our solutions are designed to solve the specific challenges facing modern pest control operators.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solution Modules */}
      {solutions.map((solution, index) => (
        <section
          key={solution.number}
          className="bg-black"
        >
          <div className="section-py-xl mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Two-column layout */}
            <div
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <FadeIn>
                  <h2 className="text-display-2 tracking-tight text-white">
                    {solution.title}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-body-lg mt-6 text-[#a0a0a0]">
                    {solution.subtitle}
                  </p>
                </FadeIn>
              </div>

              {/* Images Side */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                {[0, 1].map((imgIndex) => (
                  <FadeIn key={imgIndex} delay={0.3 + imgIndex * 0.1}>
                    <div className="group relative aspect-[16/9] overflow-hidden bg-[#1a1a1a] cursor-pointer">
                      {/* Image */}
                      {solution.images ? (
                        <Image
                          src={solution.images[imgIndex]}
                          alt={`${solution.title} screenshot ${imgIndex + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-left-top transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="h-full w-full transition-all duration-500 group-hover:blur-sm"
                          style={{
                            backgroundImage: `linear-gradient(${135 + (index + imgIndex) * 45}deg, #2a2a2a, #1a1a1a)`,
                          }}
                        />
                      )}

                      {/* Dim overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/80" />

                      {/* Text overlay */}
                      <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {solution.overlays[imgIndex].map((item, itemIndex) => (
                          <div key={itemIndex} className={itemIndex === 1 ? 'mt-6' : ''}>
                            <h4 className="text-xl font-medium text-white" style={{ textTransform: 'none' }}>
                              {item.title}
                            </h4>
                            <p className="mt-2 text-base text-white/80">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
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
