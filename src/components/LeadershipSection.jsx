'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const team = [
    {
      name: 'Francis Nguyen',
      role: 'Co-Founder & CEO',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/72189e1cc_francis.jpg',
      linkedin: 'https://www.linkedin.com/in/francisvnguyen/'
    },
    {
      name: 'Felix Wood',
      role: 'Co-Founder & COO',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/eb963541e_felix.jpg',
      linkedin: 'https://www.linkedin.com/in/felixwood01/'
    },
    {
      name: 'Uku Pyle',
      role: 'CTO',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/c128625a7_uku.jpg',
      linkedin: 'https://www.linkedin.com/in/uku-pyle/'
    }
  ];

  return (
    <section id="leadership" ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-gray-500 text-center mb-8 tracking-wider uppercase"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          LEADERSHIP TEAM
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-8"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a2332] text-center max-w-5xl mx-auto leading-[1.15] mb-6"
            style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            Meet the Team Behind
          </h2>
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/5b57026a0_BF_LogoCircle_BlockWhiteBlueTransCropped.png"
            alt="Backend Flows"
            className="h-10 md:h-14 lg:h-20"
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-20 font-light leading-[1.8]"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Our leadership team brings decades of combined experience in AI, automation, and business transformation.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 + (index * 0.1), 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className="flex flex-col items-center"
            >
              <div className="w-11/12 aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-6 shadow-sm hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 
                className="text-2xl font-medium text-[#1a2332] mb-2 text-center"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                {member.name}
              </h3>
              
              <p 
                className="text-base text-gray-600 font-light text-center"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                {member.role}
              </p>
              
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-[#1a2332] hover:text-[#0077b5] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}