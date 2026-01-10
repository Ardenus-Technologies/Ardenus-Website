'use client'

import React, { useRef, useEffect, useState } from 'react';

const integrationTools = [
  { name: 'N8N', logo: 'https://n8n.io/favicon.ico' },
  { name: 'Slack', logo: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png' },
  { name: 'Google Sheets', logo: 'https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png' },
  { name: 'Make', logo: 'https://www.make.com/en/favicon.ico' },
  { name: 'Zapier', logo: 'https://cdn.zapier.com/zapier/images/favicon.ico' },
  { name: 'Airtable', logo: 'https://airtable.com/images/favicon/baymax/favicon-32x32.png' },
  { name: 'HubSpot', logo: 'https://www.hubspot.com/favicon.ico' },
  { name: 'LinkedIn', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/e1afefa46_LinkedIn_logo_initials.png' },
  { name: 'Gmail', logo: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico' },
  { name: 'Salesforce', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/1767c6df9_Salesforcecom_logosvg.png', wider: true },
  { name: 'Stripe', logo: 'https://stripe.com/favicon.ico' },
  { name: 'Google Docs', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/fd353c525_image.png', taller: true },
  { name: 'Pipedrive', logo: 'https://cdn.pipedrive.com/favicon.ico' },
  { name: 'Notion', logo: 'https://www.notion.so/images/favicon.ico' },
];

export default function IntegrationsCarousel() {
  const scrollRef = useRef(null);
  const [position, setPosition] = useState(0);
  const animationRef = useRef(null);
  const speed = 1;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const animate = () => {
      setPosition(prev => {
        const halfWidth = scrollContainer.scrollWidth / 2;
        let newPos = prev + speed;
        if (newPos >= halfWidth) {
          newPos = newPos - halfWidth;
        }
        return newPos;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const ToolItem = ({ tool }) => (
    <div 
      className="flex items-center bg-white border border-gray-200 rounded-full p-2 pr-3 md:p-3 md:pr-5 shadow-sm flex-shrink-0 min-w-[80px] md:min-w-[120px]"
    >
      <img 
        src={tool.logo} 
        alt={tool.name} 
        className={`${tool.wider ? 'w-5 h-3 md:w-8 md:h-5 object-contain' : tool.taller ? 'w-3 h-4 md:w-5 md:h-6 object-contain' : 'w-4 h-4 md:w-6 md:h-6'} mr-2 md:mr-3 pointer-events-none`}
        draggable={false}
      />
      <span 
        className="text-xs md:text-sm font-medium text-[#1a2332] whitespace-nowrap"
        style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
      >
        {tool.name}
      </span>
    </div>
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p 
            className="text-sm text-gray-500 tracking-wider uppercase"
            style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            Integrates With Your Favorite Tools
          </p>
        </div>

        <div className="overflow-hidden relative select-none">
          <div 
            ref={scrollRef}
            className="flex items-center gap-3 md:gap-8"
            style={{ transform: `translateX(-${position}px)` }}
          >
            {integrationTools.map((tool, index) => (
              <ToolItem key={`first-${index}`} tool={tool} />
            ))}
            {integrationTools.map((tool, index) => (
              <ToolItem key={`second-${index}`} tool={tool} />
            ))}
            {integrationTools.map((tool, index) => (
              <ToolItem key={`third-${index}`} tool={tool} />
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}