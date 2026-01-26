'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'Slack', logo: 'SL' },
  { name: 'Salesforce', logo: 'SF' },
  { name: 'HubSpot', logo: 'HS' },
  { name: 'Stripe', logo: 'ST' },
  { name: 'Notion', logo: 'NT' },
  { name: 'Figma', logo: 'FG' },
  { name: 'GitHub', logo: 'GH' },
  { name: 'Zapier', logo: 'ZP' },
  { name: 'Mailchimp', logo: 'MC' },
  { name: 'Intercom', logo: 'IC' },
  { name: 'Jira', logo: 'JR' },
  { name: 'Asana', logo: 'AS' },
];

export function Integrations() {
  return (
    <section className="section-py-xl border-t border-white/10 bg-[#1a1a1a]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
              Ecosystem
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-display-2 mt-4 uppercase tracking-tight text-white">
              Integrations
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg mx-auto mt-6 max-w-2xl text-[#a0a0a0]">
              Connect with the tools you already use. Our platform integrates
              seamlessly with your favorite apps.
            </p>
          </FadeIn>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group flex aspect-square items-center justify-center border border-white/10 bg-black p-6 transition-all duration-300 hover:border-white/20"
            >
              {/* Placeholder logo - replace with actual logos */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl font-light text-[#4f4f4f] transition-colors duration-300 group-hover:text-white">
                  {integration.logo}
                </span>
                <span className="text-xs text-[#4f4f4f] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {integration.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;
