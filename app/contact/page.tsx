'use client';

import { useState, useEffect, FormEvent } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { LogoReveal } from '@/components/layout/LogoReveal';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Full Page Section with Background */}
      <section className="relative min-h-screen w-full pt-32 pb-20">
        {/* Background Image */}
        <Image
          src="/pexels-ali-goode-2151511157-32995528.jpg"
          alt="Background"
          fill
          className="object-cover z-0 blur-sm"
          priority
        />
        {/* Heavy Dark Overlay */}
        <div className="absolute inset-0 bg-black/[0.93] z-[1]" />
        {/* Bottom gradient fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48"
          style={{
            background: 'linear-gradient(to top, rgb(0 0 0) 0%, rgb(0 0 0 / 0.8) 30%, transparent 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <FadeIn>
            <h1 className="text-display-1 tracking-tight text-white mb-12">
              Request a Demo
            </h1>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-[700px]">
              <div className="bg-white/5 backdrop-blur-sm p-8">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Name Row */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm text-[#a0a0a0]"
                          >
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="mt-2 w-full border border-white/10 bg-black/50 px-4 py-3 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm text-[#a0a0a0]"
                          >
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="mt-2 w-full border border-white/10 bg-black/50 px-4 py-3 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Business Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mt-2 w-full border border-white/10 bg-black/50 px-4 py-3 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          Phone Number (optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="mt-2 w-full border border-white/10 bg-black/50 px-4 py-3 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="mt-2 w-full border border-white/10 bg-black/50 px-4 py-3 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                        />
                      </div>

                      {/* Job Title */}
                      <div>
                        <label
                          htmlFor="jobTitle"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          required
                          className="mt-2 w-full border border-white/10 bg-black/50 px-4 py-3 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                        />
                      </div>

                      {/* State */}
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          State *
                        </label>
                        <select
                          id="state"
                          name="state"
                          required
                          className="mt-2 w-full appearance-none border border-white/10 bg-black/50 px-4 py-3 pr-10 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a0a0a0'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                        >
                          <option value="">Select your state</option>
                          {usStates.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Business Improvement Goals */}
                      <div>
                        <label
                          htmlFor="goals"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          Business Improvement Goals *
                        </label>
                        <textarea
                          id="goals"
                          name="goals"
                          rows={4}
                          required
                          className="mt-2 w-full border border-white/10 bg-black/50 px-4 py-3 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-primary w-full rounded-none disabled:opacity-50"
                      >
                        {isLoading ? 'Submitting...' : 'Submit'}
                      </button>

                      {/* Privacy Notice */}
                      <p className="text-center text-xs text-[#4f4f4f]">
                        By submitting this form, you agree to our{' '}
                        <Link
                          href="/privacy"
                          scroll={true}
                          className="link-underline text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                        >
                          Privacy Policy
                        </Link>
                        {' '}and{' '}
                        <Link
                          href="/terms"
                          scroll={true}
                          className="link-underline text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                        >
                          Terms of Use
                        </Link>
                        .
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center border border-white/20 bg-white/5">
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-6 text-xl font-medium text-white">
                        Thank you!
                      </h3>
                      <p className="mt-2 text-[#a0a0a0]">
                        We've received your request and will be in touch within 24
                        hours to schedule your demo.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <LogoReveal />
    </>
  );
}
