'use client';

import { useRef } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const integrations = [
  { name: 'Slack', icon: '/icons/slack.webp' },
  { name: 'Salesforce', icon: '/icons/salesforce.webp' },
  { name: 'HubSpot', icon: '/icons/hubspot.webp' },
  { name: 'Stripe', icon: '/icons/stripe.webp' },
  { name: 'Notion', icon: '/icons/notion.webp' },
  { name: 'Zapier', icon: '/icons/zapier.webp' },
  { name: 'Airtable', icon: '/icons/airtable.webp' },
  { name: 'Briostack', icon: '/icons/briostack.webp' },
  { name: 'Excel', icon: '/icons/excel.webp' },
  { name: 'FactSet', icon: '/icons/factset.webp' },
  { name: 'FieldRoutes', icon: '/icons/fieldroutes.webp' },
  { name: 'Google Drive', icon: '/icons/googledrive.webp' },
  { name: 'GorillaDesk', icon: '/icons/gorilladesk.webp' },
  { name: 'Jobber', icon: '/icons/jobber.webp' },
  { name: 'Make', icon: '/icons/make.webp' },
  { name: 'OpenAI', icon: '/icons/openai.webp' },
  { name: 'Outlook', icon: '/icons/outlook.webp' },
  { name: 'PestPac', icon: '/icons/pestpac.webp' },
];

export function Integrations() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true });

  return (
    <section id="integrations" className="relative overflow-hidden bg-black">
      <div className="section-py-xl relative z-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <FadeIn>
              <h2 className="text-display-2 mt-4 tracking-tight text-white">
                Integrations
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body-lg mx-auto mt-6 whitespace-nowrap text-[#a0a0a0]">
                Connect with the tools you already use. We integrate seamlessly
                with 2,000+ tools.
              </p>
            </FadeIn>
          </div>

          {/* Icon Grid - 6 columns, 3 rows */}
          <div
            ref={gridRef}
            className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:gap-12"
          >
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className={`flex aspect-square cursor-pointer items-center justify-center p-4 transition-transform duration-100 hover:scale-150 ${
                  isInView ? 'integration-fade-in' : 'opacity-0 scale-90'
                }`}
                style={
                  { '--stagger-delay': `${index * 30}ms` } as React.CSSProperties
                }
              >
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-auto w-full max-w-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
