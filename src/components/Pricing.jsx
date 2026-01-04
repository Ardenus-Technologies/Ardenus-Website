'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const plans = [
    {
      badge: 'ACCELERATE',
      badgeColor: 'bg-blue-600',
      title: 'Accelerate',
      price: 'Starting at $12,500',
      subtitle: 'One-time setup + $4,000/month',
      description: 'Custom pricing based on your automation needs',
      sectionTitle: 'Progressive AI Integration Partnership',
      sectionDescription: 'Integrate AI automations progressively to increase revenue and save time. We automate your business with intelligent workflows.',
      features: [
        'Comprehensive automation assessment',
        'Custom AI workflow development',
        'Progressive automation rollout',
        'Integration with existing tools',
        'Monthly performance reviews',
        'Continuous optimization',
        'ROI tracking and analytics',
        'Priority support'
      ],
      buttonText: 'Book Discovery Call',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      badge: 'TRANSFORM',
      badgeColor: 'bg-[#1a2332]',
      title: 'Transform',
      price: 'Custom Pricing',
      subtitle: 'Tailored to your transformation goals',
      description: 'Complete AI transformation with employee training',
      sectionTitle: 'Enterprise AI Transformation Partnership',
      sectionDescription: 'AI automation integration plus extensive live training and coaching for employees. Teaching AI efficiency boosts productivity 300-500% on average.',
      features: [
        'Everything in Accelerate',
        'Extensive live AI training for employees',
        'Ongoing coaching and support',
        'Custom AI efficiency workshops',
        'Team productivity optimization',
        'Advanced AI tool implementation',
        'Executive strategy sessions',
        'White-glove onboarding',
        'Dedicated transformation team'
      ],
      buttonText: 'Schedule Consultation',
      buttonStyle: 'bg-[#1a2332] hover:bg-[#2a3342]',
      highlighted: true
    }
  ];

  return (
    <section id="pricing" ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-gray-500 text-center mb-8 tracking-wider uppercase"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          TRANSPARENT PRICING
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a2332] text-center max-w-5xl mx-auto leading-[1.15] mb-8"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Partner With Us for Continuous AI Innovation
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16 font-light leading-[1.8]"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          We become your dedicated AI automation partner, continuously optimizing your business and keeping you at the forefront of AI development.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 + (index * 0.15), 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className={`bg-white rounded-3xl border ${plan.highlighted ? 'border-[#1a2332] shadow-xl' : 'border-gray-100 shadow-sm'} p-6 hover:shadow-2xl transition-all duration-500 flex flex-col`}
            >
              <div className={`${plan.badgeColor} text-white text-xs font-medium px-3 py-1.5 rounded-full w-fit mb-4 tracking-wide`}>
                {plan.badge}
              </div>

              <h3 
                className="text-2xl font-medium text-[#1a2332] mb-3"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                {plan.title}
              </h3>

              <div className="mb-4">
                <p 
                  className="text-4xl font-medium text-[#1a2332] mb-1"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {plan.price}
                </p>
                <p 
                  className="text-sm text-gray-500 font-light"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {plan.subtitle}
                </p>
              </div>

              <p 
                className="text-base text-gray-600 font-light mb-4 leading-[1.6]"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                {plan.description}
              </p>

              <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                <h4 
                  className="text-base font-medium text-[#1a2332] mb-2"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {plan.sectionTitle}
                </h4>
                <p 
                  className="text-sm text-gray-600 font-light leading-[1.6]"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {plan.sectionDescription}
                </p>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-2 text-base text-gray-600 font-light leading-[1.5]"
                    style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                  >
                    <Check className="w-4 h-4 text-[#1a2332] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`${plan.buttonStyle} text-white rounded-full w-full py-4 text-sm font-normal shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}