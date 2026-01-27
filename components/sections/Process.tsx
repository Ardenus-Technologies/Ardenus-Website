'use client';

import { memo } from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Audit processes, identify ROI opportunities, map integrations, and define metrics.',
    image: '/monarch-butterfly-egg-hatch-baby-caterpillar.jpg',
  },
  {
    number: '02',
    title: 'Pilot',
    description:
      'Design workflows, train AI models, integrate tools, and create dashboards.',
    image: '/insect-invertebrates-monarch-butterfly-larvae.jpg',
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Launch systems, train your team, and establish monitoring and feedback.',
    image: '/cocoon-butterfly-insect-animal-39862.jpeg',
  },
  {
    number: '04',
    title: 'Optimization',
    description:
      'Monthly reviews, continuous improvements, scaling, and priority support included.',
    image: '/monarch-butterfly.jpg',
  },
];

const ProcessCard = memo(function ProcessCard({
  step,
  index
}: {
  step: typeof processSteps[0];
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="group relative overflow-hidden p-8 sm:p-10 will-change-transform">
        {/* Background Image using Next.js Image */}
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
          loading={index < 2 ? 'eager' : 'lazy'}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/85 transition-colors duration-300 group-hover:bg-black/75" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
          <span className="text-xs tracking-widest text-[#4f4f4f]">
            {step.number}
          </span>
          <div>
            <h3 className="text-xl font-medium text-white">
              {step.title}
            </h3>
            <p className="mt-3 max-w-xl text-[#a0a0a0]">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
});

export function Process() {
  return (
    <section id="process" className="section-py-xl bg-black">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky Label */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <FadeIn>
                <h2 className="text-display-2 mt-4 tracking-tight text-white">
                  Our Process
                </h2>
              </FadeIn>
            </div>
          </div>

          {/* Process Cards */}
          <div className="space-y-6 lg:col-span-8">
            {processSteps.map((step, index) => (
              <ProcessCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
