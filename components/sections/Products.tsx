'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

const products = [
  {
    number: '01',
    title: 'Analytics Platform',
    description:
      'Comprehensive data analytics solution that transforms raw data into actionable insights.',
    features: [
      'Real-time dashboards',
      'Custom reporting',
      'AI-powered predictions',
      'Data visualization',
    ],
    href: '/platform#analytics',
  },
  {
    number: '02',
    title: 'Automation Suite',
    description:
      'Streamline your workflows with intelligent automation that saves time and reduces errors.',
    features: [
      'Workflow builder',
      'Task automation',
      'Integration hub',
      'Smart scheduling',
    ],
    href: '/platform#automation',
  },
  {
    number: '03',
    title: 'Collaboration Hub',
    description:
      'Unite your team with powerful collaboration tools designed for the modern workplace.',
    features: [
      'Team messaging',
      'Document sharing',
      'Video conferencing',
      'Project tracking',
    ],
    href: '/platform#collaboration',
  },
  {
    number: '04',
    title: 'Security Center',
    description:
      'Enterprise-grade security that protects your data and ensures compliance.',
    features: [
      'Threat detection',
      'Access control',
      'Audit logging',
      'Compliance tools',
    ],
    href: '/platform#security',
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="section-py-xl border-t border-white/10 bg-[#1a1a1a]"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
              What We Offer
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-display-2 mt-4 uppercase tracking-tight text-white">
              Our Products
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg mt-6 max-w-2xl text-[#a0a0a0]">
              A comprehensive suite of tools designed to help your business
              thrive in the digital age.
            </p>
          </FadeIn>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product, index) => (
            <SlideIn
              key={product.number}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <Link
                href={product.href}
                className="group block border border-white/10 bg-black p-8 transition-all duration-300 hover:border-white/20 sm:p-10"
              >
                {/* Number */}
                <span className="text-xs tracking-widest text-[#4f4f4f]">
                  {product.number}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-xl font-medium text-white transition-colors duration-300 group-hover:text-[#a0a0a0]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[#a0a0a0]">{product.description}</p>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[#4f4f4f]"
                    >
                      <span className="h-px w-3 bg-white/20" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link Arrow */}
                <div className="mt-8 flex items-center gap-2 text-sm text-white">
                  Learn more
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
                </div>
              </Link>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
