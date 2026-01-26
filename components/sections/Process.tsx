'use client';

import { FadeIn } from '@/components/animations/FadeIn';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, goals, and challenges through in-depth consultations and research.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Our team develops a comprehensive strategy tailored to your specific needs and objectives.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'We execute the plan with precision, ensuring seamless integration with your existing systems.',
  },
  {
    number: '04',
    title: 'Optimization',
    description:
      'Continuous monitoring and refinement to maximize performance and deliver lasting results.',
  },
];

export function Process() {
  return (
    <section id="process" className="section-py-xl bg-black">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky Label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <FadeIn>
                <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                  How We Work
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-display-2 mt-4 uppercase tracking-tight text-white">
                  Our Process
                </h2>
              </FadeIn>
            </div>
          </div>

          {/* Process Cards */}
          <div className="space-y-6 lg:col-span-9">
            {processSteps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.15}>
                <div className="group border border-white/10 bg-[#1a1a1a] p-8 transition-all duration-300 hover:border-white/20 sm:p-10">
                  {/* Content */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
