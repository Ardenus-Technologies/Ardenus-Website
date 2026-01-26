'use client';

import { FadeIn } from '@/components/animations/FadeIn';

export function Statement() {
  return (
    <section
      id="statement"
      className="section-py-xl border-t border-white/10 bg-black"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          {/* Label */}
          <FadeIn className="md:col-span-3">
            <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
              Our Mission
            </span>
          </FadeIn>

          {/* Large Text */}
          <FadeIn delay={0.2} className="md:col-span-9">
            <p className="text-display-3 leading-tight text-white">
              We believe in creating technology that empowers businesses to
              achieve more. Our platform combines cutting-edge innovation with
              intuitive design to deliver solutions that make a real difference.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Statement;
