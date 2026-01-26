'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const showcaseImages = [
  { id: 1, src: '/placeholder-1.jpg', alt: 'Showcase 1' },
  { id: 2, src: '/placeholder-2.jpg', alt: 'Showcase 2' },
  { id: 3, src: '/placeholder-3.jpg', alt: 'Showcase 3' },
  { id: 4, src: '/placeholder-4.jpg', alt: 'Showcase 4' },
  { id: 5, src: '/placeholder-5.jpg', alt: 'Showcase 5' },
];

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="section-py-lg overflow-hidden bg-black"
    >
      {/* Horizontal Scrolling Gallery */}
      <motion.div style={{ x }} className="flex gap-6 pl-4 sm:pl-8">
        {showcaseImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="img-grayscale relative aspect-[4/3] w-[300px] flex-shrink-0 overflow-hidden rounded-none sm:w-[400px] md:w-[500px]"
          >
            {/* Placeholder gradient - replace with actual images */}
            <div
              className="absolute inset-0 bg-[#1a1a1a]"
              style={{
                backgroundImage: `linear-gradient(${45 + index * 30}deg, #2a2a2a, #1a1a1a)`,
              }}
            />
            {/* <Image src={image.src} alt={image.alt} fill className="object-cover" /> */}
          </motion.div>
        ))}
      </motion.div>

      {/* Caption */}
      <div className="mx-auto mt-16 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-body-lg max-w-2xl text-[#a0a0a0]">
            Our work spans across industries, delivering exceptional results for
            clients worldwide. From startups to enterprises, we bring ideas to
            life.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export default Showcase;
