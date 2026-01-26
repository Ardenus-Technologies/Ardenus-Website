'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';
import Image from 'next/image';

const integrations = [
  { name: 'Slack', icon: '/icons/slack.png' },
  { name: 'Salesforce', icon: '/icons/salesforce.png' },
  { name: 'HubSpot', icon: '/icons/hubspot.png' },
  { name: 'Stripe', icon: '/icons/stripe.png' },
  { name: 'Notion', icon: '/icons/notion.png' },
  { name: 'Zapier', icon: '/icons/zapier.png' },
  { name: 'Airtable', icon: '/icons/airtable.png' },
  { name: 'Briostack', icon: '/icons/briostack.png' },
  { name: 'Excel', icon: '/icons/excel.png' },
  { name: 'FactSet', icon: '/icons/factset.png' },
  { name: 'FieldRoutes', icon: '/icons/fieldroutes.png' },
  { name: 'Google Drive', icon: '/icons/googledrive.png' },
  { name: 'GorillaDesk', icon: '/icons/gorilladesk.png' },
  { name: 'Jobber', icon: '/icons/jobber.png' },
  { name: 'Make', icon: '/icons/make.png' },
  { name: 'OpenAI', icon: '/icons/openai.png' },
  { name: 'Outlook', icon: '/icons/outlook.png' },
  { name: 'PestPac', icon: '/icons/pestpac.png' },
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-black"
    >
      <div className="section-py-xl relative z-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <FadeIn>
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

          {/* Icon Grid - 6 columns, 3 rows */}
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:gap-12">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex aspect-square items-center justify-center p-4"
              >
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={80}
                  height={80}
                  className="h-auto w-full max-w-[80px] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
