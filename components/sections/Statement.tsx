'use client';

import { FadeIn } from '@/components/animations/FadeIn';

export function Statement() {
  return (
    <section id="statement" className="section-py-xl bg-black">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p
            className="text-display-3 text-center leading-tight text-white"
            style={{
              fontFamily: "'Edgecutting', sans-serif",
              textTransform: 'none',
            }}
          >
            Computer vision for precision. Predictive analytics for expansion.
            Automation for scale. The complete AI-powered operating system for
            the modern pest control enterprise.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export default Statement;
