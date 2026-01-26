import { Metadata } from 'next';
import { ScrollProgress, LogoReveal } from '@/components/layout';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Tailored solutions for your industry and business needs.',
};

const solutions = [
  {
    number: '01',
    title: 'Enterprise',
    subtitle: 'Scale your operations with enterprise-grade solutions',
    features: [
      {
        number: '01',
        title: 'Scalable Infrastructure',
        description:
          'Cloud-native architecture that grows with your business needs.',
      },
      {
        number: '02',
        title: 'Advanced Security',
        description:
          'Enterprise-grade security with SOC 2 compliance and encryption.',
      },
      {
        number: '03',
        title: 'Dedicated Support',
        description:
          '24/7 dedicated support team with guaranteed response times.',
      },
      {
        number: '04',
        title: 'Custom Integrations',
        description:
          'Bespoke integrations with your existing enterprise systems.',
      },
    ],
  },
  {
    number: '02',
    title: 'Startups',
    subtitle: 'Accelerate growth with tools built for innovation',
    features: [
      {
        number: '01',
        title: 'Rapid Deployment',
        description:
          'Get up and running in minutes with our quick-start guides.',
      },
      {
        number: '02',
        title: 'Flexible Pricing',
        description: 'Pay-as-you-grow pricing that scales with your success.',
      },
      {
        number: '03',
        title: 'API First',
        description:
          'Comprehensive APIs for building custom solutions and integrations.',
      },
      {
        number: '04',
        title: 'Community Support',
        description: 'Active community forums and extensive documentation.',
      },
    ],
  },
  {
    number: '03',
    title: 'Agencies',
    subtitle: 'Deliver exceptional results for your clients',
    features: [
      {
        number: '01',
        title: 'White Label Options',
        description:
          'Customize the platform with your branding for client-facing use.',
      },
      {
        number: '02',
        title: 'Multi-Client Management',
        description: 'Manage all your clients from a single dashboard.',
      },
      {
        number: '03',
        title: 'Reporting Tools',
        description: 'Generate branded reports to showcase results to clients.',
      },
      {
        number: '04',
        title: 'Partner Program',
        description:
          'Join our partner program for exclusive benefits and support.',
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <ScrollProgress />

      {/* Intro Section */}
      <section className="section-py-lg bg-black pt-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <FadeIn className="md:col-span-3">
              <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                Solutions
              </span>
            </FadeIn>
            <div className="md:col-span-9">
              <FadeIn delay={0.1}>
                <h1 className="text-display-1 uppercase tracking-tight text-white">
                  Tailored for Your Needs
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-body-lg mt-8 text-[#a0a0a0]">
                  Whether you're a growing startup or an established enterprise,
                  we have solutions designed specifically for your industry and
                  scale.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Modules */}
      {solutions.map((solution, index) => (
        <section
          key={solution.number}
          className={`border-t border-white/10 ${index % 2 === 0 ? 'bg-black' : 'bg-[#1a1a1a]'}`}
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
                  <span className="text-xs tracking-widest text-[#4f4f4f]">
                    {solution.number}
                  </span>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="text-display-2 mt-4 uppercase tracking-tight text-white">
                    {solution.title}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
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
                    <div className="img-grayscale aspect-[16/9] overflow-hidden bg-[#1a1a1a]">
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
            </div>

            {/* Feature Grid */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {solution.features.map((feature, fIndex) => (
                <FadeIn key={feature.number} delay={0.1 * fIndex}>
                  <div className="border border-white/10 bg-black p-6 transition-all duration-300 hover:border-white/20">
                    <span className="text-xs tracking-widest text-[#4f4f4f]">
                      {feature.number}
                    </span>
                    <h3 className="mt-3 text-lg font-medium text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#a0a0a0]">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-py-xl border-t border-white/10 bg-black">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <Link href="/contact" className="btn btn-primary">
              Find Your Solution
            </Link>
          </FadeIn>
        </div>
      </section>

      <LogoReveal />
    </>
  );
}
