'use client'

import React from 'react';

export default function MissionStatement() {
  return (
    <section className="py-24 md:py-32 pb-8 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-10 xl:px-12">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#122b3e]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', lineHeight: '1.3' }}
          >
            We create <span className="text-[#babbbb]">AI-integrated</span> software that mobilize fragmented information into real-time intelligence, ensuring modern enterprises maintain a decisive operational edge.
          </h2>
        </div>
      </div>
    </section>
  );
}

