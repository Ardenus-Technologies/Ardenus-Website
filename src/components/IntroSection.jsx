'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsletterDialog from './NewsletterDialog';

export default function IntroSection() {
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-[#1a2332] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            Transform Your Business
            <br />
            with AI Innovation
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-[1.8]"
            style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            We go beyond building automations to deliver full-scale AI transformation. We integrate custom AI solutions and educate your employees to unlock new growth, increase revenue, and streamline repetitive tasks.
          </motion.p>

          {/* Stats Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { stat: '80%', label: 'Less Admin Work', delay: 0.2 },
              { stat: '70+', label: 'Hours Saved/Month', delay: 0.3 },
              { stat: '24/7', label: 'Operating Agents', delay: 0.4 }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-500"
              >
                <h3 
                  className="text-5xl font-medium text-[#1a2332] mb-4 leading-tight"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {item.stat}
                </h3>
                <p 
                  className="text-gray-600 font-light leading-[1.6]"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#1a2332] hover:bg-[#2a3342] text-white rounded-full px-10 py-7 text-base font-normal group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button 
                onClick={() => setNewsletterOpen(true)}
                className="bg-[#1a2332] hover:bg-[#2a3342] text-white rounded-full px-10 py-7 text-base font-normal shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Our Weekly Newsletter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <NewsletterDialog open={newsletterOpen} onOpenChange={setNewsletterOpen} />
    </section>
  );
}

