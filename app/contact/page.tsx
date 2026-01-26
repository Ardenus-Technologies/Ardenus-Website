'use client';

import { useState, FormEvent } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const benefits = [
  'Personalized demo of all features',
  'Custom pricing for your needs',
  'Implementation roadmap',
  'Direct access to our team',
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section className="section-py-xl bg-black pt-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <FadeIn>
              <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                Get Started
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-display-1 mt-4 uppercase tracking-tight text-white">
                Request a Demo
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body-lg mt-8 text-[#a0a0a0]">
                See how our platform can transform your business. Fill out the
                form and one of our specialists will reach out to schedule a
                personalized demo.
              </p>
            </FadeIn>

            {/* Benefits List */}
            <FadeIn delay={0.3}>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-white/30" />
                    <span className="text-[#a0a0a0]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right Column - Form */}
          <FadeIn delay={0.4}>
            <div className="border border-white/10 bg-[#1a1a1a] p-8">
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
                          First name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white transition-colors duration-300 placeholder:text-[#4f4f4f] focus:border-white/30 focus:outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          Last name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white transition-colors duration-300 placeholder:text-[#4f4f4f] focus:border-white/30 focus:outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-[#a0a0a0]"
                      >
                        Work email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white transition-colors duration-300 placeholder:text-[#4f4f4f] focus:border-white/30 focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm text-[#a0a0a0]"
                      >
                        Company name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white transition-colors duration-300 placeholder:text-[#4f4f4f] focus:border-white/30 focus:outline-none"
                        placeholder="Acme Inc."
                      />
                    </div>

                    {/* Phone & Company Size Row */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white transition-colors duration-300 placeholder:text-[#4f4f4f] focus:border-white/30 focus:outline-none"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="companySize"
                          className="block text-sm text-[#a0a0a0]"
                        >
                          Company size
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white transition-colors duration-300 focus:border-white/30 focus:outline-none"
                        >
                          <option value="">Select...</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-[#a0a0a0]"
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white transition-colors duration-300 placeholder:text-[#4f4f4f] focus:border-white/30 focus:outline-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-primary w-full disabled:opacity-50"
                    >
                      {isLoading ? 'Submitting...' : 'Request Demo'}
                    </button>

                    {/* Privacy Notice */}
                    <p className="text-center text-xs text-[#4f4f4f]">
                      By submitting this form, you agree to our{' '}
                      <Link
                        href="/privacy"
                        className="link-underline text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                      >
                        Privacy Policy
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
