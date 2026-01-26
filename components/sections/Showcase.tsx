'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const showcaseImagesAll = [
  { id: 1, src: '/software/core-screenshot-left.png', alt: 'Core Dashboard' },
  { id: 2, src: '/software/solutions-first-left.png', alt: 'Solutions Overview' },
  { id: 3, src: '/software/solutions-api-right.png', alt: 'API Integration' },
  { id: 4, src: '/software/solutions-growth-left.png', alt: 'Growth Metrics' },
  { id: 5, src: '/software/engine-screenshot-right.png', alt: 'Engine Analytics' },
];

const showcaseImagesTop = [
  { id: 1, src: '/software/core-screenshot-left.png', alt: 'Core Dashboard' },
  { id: 2, src: '/software/solutions-first-left.png', alt: 'Solutions Overview' },
  { id: 3, src: '/software/solutions-api-right.png', alt: 'API Integration' },
];

const showcaseImagesBottom = [
  { id: 4, src: '/software/solutions-growth-left.png', alt: 'Growth Metrics' },
  { id: 5, src: '/software/engine-screenshot-right.png', alt: 'Engine Analytics' },
  { id: 6, src: '/software/core-screenshot-right.png', alt: 'Core Analytics' },
];

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const xTop = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const xBottom = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="section-py-lg overflow-hidden bg-black pb-24 sm:pb-32"
    >
      {/* Desktop Version - Single Row */}
      <motion.div style={{ x }} className="hidden gap-6 pl-8 md:flex">
        {showcaseImagesAll.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-video w-[480px] flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-left-top"
              sizes="480px"
              priority={index < 2}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Version - Two Rows */}
      <div className="md:hidden">
        {/* Top Row - Scrolls Left */}
        <motion.div style={{ x: xTop }} className="flex gap-4 pl-4">
          {showcaseImagesTop.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-video w-[280px] flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-left-top"
                sizes="280px"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row - Scrolls Right (opposite direction) */}
        <motion.div style={{ x: xBottom }} className="mt-4 flex gap-4 pl-4">
          {showcaseImagesBottom.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-video w-[280px] flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-left-top"
                sizes="280px"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Showcase;
