'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import MissionStatement from '@/components/MissionStatement'
import GridSection from '@/components/GridSection'
import OurProcess from '@/components/OurProcess'
import SolutionsSection from '@/components/SolutionsSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [animationKey, setAnimationKey] = useState(0)

  const resetAnimations = () => {
    setAnimationKey(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onLogoClick={resetAnimations} />
      <HeroSection key={`hero-${animationKey}`} />
      <WhatWeDoSection key={`whatwedo-${animationKey}`} />
      <MissionStatement key={`mission-${animationKey}`} />
      <OurProcess key={`process-${animationKey}`} />
      <GridSection key={`grid-${animationKey}`} />
      <SolutionsSection key={`solutions-${animationKey}`} />
      <Footer />
    </div>
  )
}

