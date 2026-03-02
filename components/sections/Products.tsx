'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

const products = [
  {
    title: 'Platform',
    description:
      'Comprehensive data analytics solution that transforms raw data into actionable insights.',
    features: [
      'Real-time dashboards',
      'Custom reporting',
      'AI-powered predictions',
      'Data visualization',
    ],
    href: '/platform',
    isEmpty: false,
    mobileOrder: 'order-1 sm:order-none',
  },
  {
    title: '',
    description: '',
    features: [],
    href: '',
    isEmpty: true,
    windowImage: '/capabilities-window-1.png',
    windowType: 'macos',
    mobileOrder: 'order-2 sm:order-none',
  },
  {
    title: '',
    description: '',
    features: [],
    href: '',
    isEmpty: true,
    windowImage: '/capabilities-window-2.png',
    windowType: 'windows',
    windowBg: '/capabilities-bg-windows.jpg',
    mobileOrder: 'order-4 sm:order-none',
  },
  {
    title: 'Solutions',
    description:
      'Streamline your workflows with intelligent automation that saves time and reduces errors.',
    features: [
      'Automated Workflows',
      'Predictive Churn Analysis',
      'Revenue Forecasting',
      'Enterprise Security',
    ],
    href: '/solutions',
    isEmpty: false,
    mobileOrder: 'order-3 sm:order-none',
  },
];

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1]);

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute -inset-20 -z-10 will-change-transform">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/products-bg-blurred.jpg)',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/90" />
      </motion.div>

      {/* Top gradient fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48"
        style={{
          background:
            'linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(0 0 0 / 0.8) 30%, transparent 100%)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48"
        style={{
          background:
            'linear-gradient(to top, rgb(0 0 0) 0%, rgb(0 0 0 / 0.8) 30%, transparent 100%)',
        }}
      />

      <div className="section-py-xl relative z-10 pb-32 sm:pb-40 lg:pb-48">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16">
            <FadeIn>
              <h2 className="text-display-2 mt-4 tracking-tight text-white">
                Capabilities
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body-lg mt-6 max-w-2xl text-[#a0a0a0]">
                Essential tools for modern business growth.
              </p>
            </FadeIn>
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product, index) => (
              <SlideIn
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
                className={product.mobileOrder}
              >
                {product.isEmpty ? (
                  <div className="relative h-full min-h-[280px] overflow-hidden p-8 sm:p-10">
                    {/* Background */}
                    <Image
                      src={product.windowBg || '/capabilities-bg.jpg'}
                      alt="Capabilities background"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Centered Image */}
                    <div className="relative flex h-full items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`relative aspect-[16/10] w-[85%] overflow-hidden shadow-2xl ${product.windowType === 'macos' ? 'rounded-sm' : ''}`}
                      >
                        {product.windowImage && (
                          <Image
                            src={product.windowImage}
                            alt="Application screenshot"
                            fill
                            className="object-cover object-left-top"
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={product.href}
                    className="group block bg-black/50 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-black/40 sm:p-10"
                  >
                    {/* Title */}
                    <h3 className="text-xl font-medium text-[#a0a0a0] transition-colors duration-300 group-hover:text-white">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-[#4f4f4f] transition-colors duration-300 group-hover:text-[#a0a0a0]">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="pl-6 text-sm text-[#4f4f4f] transition-colors duration-300 group-hover:text-[#a0a0a0]"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link Arrow */}
                    <div className="mt-8 inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm text-[#a0a0a0] transition-all duration-300 group-hover:border-white group-hover:text-white">
                      Explore {product.title}
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
                )}
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
