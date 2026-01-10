'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Navigation({ onLogoClick }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === '/';

  // Handle hydration - only run client-side code after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleDropdownToggle = (dropdown) => {
    if (dropdown === 'solutions') {
      if (solutionsOpen) {
        // If already open, close it
        setSolutionsOpen(false);
      } else {
        // If closed, open it and close all others
        setSolutionsOpen(true);
        setWhoWeAreOpen(false);
        setResourcesOpen(false);
        setLanguageOpen(false);
      }
    } else if (dropdown === 'products') {
      if (whoWeAreOpen) {
        setWhoWeAreOpen(false);
      } else {
        setWhoWeAreOpen(true);
        setSolutionsOpen(false);
        setResourcesOpen(false);
        setLanguageOpen(false);
      }
    } else if (dropdown === 'resources') {
      if (resourcesOpen) {
        setResourcesOpen(false);
      } else {
        setResourcesOpen(true);
        setSolutionsOpen(false);
        setWhoWeAreOpen(false);
        setLanguageOpen(false);
      }
    } else if (dropdown === 'language') {
      if (languageOpen) {
        setLanguageOpen(false);
      } else {
        setLanguageOpen(true);
        setSolutionsOpen(false);
        setWhoWeAreOpen(false);
        setResourcesOpen(false);
      }
    }
  };

  const closeAllDropdowns = () => {
    setSolutionsOpen(false);
    setWhoWeAreOpen(false);
    setResourcesOpen(false);
    setLanguageOpen(false);
  };
  
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      // Check if scrolled past hero section (viewport height)
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);
  
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (onLogoClick) {
        setTimeout(() => onLogoClick(), 100);
      }
    } else {
      router.push('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
    setMobileMenuOpen(false);
  };

  const whoWeAreItems = [
    {
      title: 'Retention Intelligence',
      description: 'Predict and prevent customer churn',
      link: '/products/retention-intelligence'
    },
    {
      title: 'Valuation Engine',
      description: 'Revenue forecasting and customer prioritization',
      link: '/products/valuation-engine'
    },
    {
      title: 'Ardenus Core',
      description: 'Your intelligent automation backbone',
      link: '/products/ardenus-core'
    },
  ];

  const solutionsItems = [
    {
      title: 'Operational Efficiency',
      description: 'Streamline field and internal operations',
      link: '#'
    },
    {
      title: 'Growth & Retention',
      description: 'Uncover hidden revenue opportunities using your data',
      link: '#'
    },
    {
      title: 'Enterprise API',
      description: 'Connect your existing ecosystem',
      link: '#'
    },
  ];

  const resourcesItems = [
    { 
      title: 'Documentation', 
      description: 'Guides and technical resources',
      link: '#'
    },
    { 
      title: 'Case Studies', 
      description: 'See our work in action',
      link: '#'
    },
    { 
      title: 'Blog', 
      description: 'Latest insights and updates',
      link: '#'
    },
  ];

  const languages = [
    'Arabic (عربى)',
    'Danish (Dansk)',
    'Dutch (Nederlands)',
    'English',
    'French (Français)',
    'Greek (Ελληνικά)',
    'Hebrew (עברית)',
    'Japanese (日本語)',
    'Korean (한국어)',
    'Norwegian (Norsk)',
    'Polish (Polski)',
    'Portuguese (Português)',
    'Romanian (Română)',
    'Spanish (Español)'
  ];

  return (
    <>
      {/* Hidden SVG Filter for glass effect */}
      <svg className='hidden'>
        <defs>
          <filter
            id='glass-blur'
            x='0'
            y='0'
            width='100%'
            height='100%'
            filterUnits='objectBoundingBox'
          >
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.003 0.007'
              numOctaves='1'
              result='turbulence'
            />
            <feDisplacementMap
              in='SourceGraphic'
              in2='turbulence'
              scale='200'
              xChannelSelector='R'
              yChannelSelector='G'
            />
          </filter>
        </defs>
      </svg>

      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 pt-4">
        <div className="relative rounded-lg overflow-hidden">
          {/* Bend Layer (Backdrop blur with distortion) */}
          <div
            className="absolute inset-0 backdrop-blur-xl z-0"
            style={{
              filter: 'url(#glass-blur)',
            }}
          />

          {/* Face Layer (Main glow) */}
          <div
            className="absolute inset-0 z-10"
            style={{
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)',
            }}
          />

          <div className="relative z-30 max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" onClick={handleHomeClick} className="flex items-center flex-shrink-0">
              <img
                src={mounted && isScrolled ? "/ArdenusLogoBlue.png" : "/ArdenusLogoWhite.png"}
                alt="Logo"
                className="h-20 w-auto transition-all duration-500"
                suppressHydrationWarning
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Continuous hover area for all dropdowns - no gaps */}
              <div className="flex items-center gap-8 h-20 relative">
                {/* Solutions */}
                <div className="relative h-20 flex items-center">
                  <button 
                    onClick={() => handleDropdownToggle('solutions')}
                    className={`text-base font-light transition-colors duration-500 flex items-center gap-1 ${mounted && isScrolled ? 'text-[#122b3e] hover:text-[#1a3a50]' : 'text-white hover:text-gray-300'}`}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Solutions
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Who we are */}
                <div className="relative h-20 flex items-center">
                  <button 
                    onClick={() => handleDropdownToggle('products')}
                    className={`text-base font-light transition-colors duration-500 flex items-center gap-1 ${mounted && isScrolled ? 'text-[#122b3e] hover:text-[#1a3a50]' : 'text-white hover:text-gray-300'}`}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Products
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${whoWeAreOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Resources */}
                <div className="relative h-20 flex items-center">
                  <button 
                    onClick={() => handleDropdownToggle('resources')}
                    className={`text-base font-light transition-colors duration-500 flex items-center gap-1 ${mounted && isScrolled ? 'text-[#122b3e] hover:text-[#1a3a50]' : 'text-white hover:text-gray-300'}`}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    Resources
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${resourcesOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <button className={`text-base font-light transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e] hover:text-[#1a3a50]' : 'text-white hover:text-gray-300'}`}
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                Enterprise
              </button>
              <button className={`text-base font-light transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e] hover:text-[#1a3a50]' : 'text-white hover:text-gray-300'}`}
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                Investors
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="relative h-20 flex items-center">
                <button 
                  onClick={() => handleDropdownToggle('language')}
                  className={`transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e] hover:text-[#1a3a50]' : 'text-white hover:text-gray-300'}`}
                >
                  <Globe className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
              <Button
                className={`rounded-none px-8 py-2 text-sm font-light shadow-lg hover:shadow-xl transition-all duration-500 ${
                  mounted && isScrolled
                    ? 'bg-[#122b3e] text-white border border-[#122b3e] hover:bg-white hover:text-[#122b3e]'
                    : 'bg-white text-[#122b3e] border border-white hover:bg-[#122b3e] hover:text-white hover:border-[#122b3e]'
                }`}
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#122b3e] border-t border-[#0d1f2c]">
              <div className="px-6 py-4 space-y-1">
                <button
                  className="block w-full text-left py-3 text-base text-white hover:text-gray-300 transition-colors"
                >
                  Solutions
                </button>
                <button
                  className="block w-full text-left py-3 text-base text-white hover:text-gray-300 transition-colors"
                >
                  Products
                </button>
                <button
                  className="block w-full text-left py-3 text-base text-white hover:text-gray-300 transition-colors"
                >
                  Resources
                </button>
                <button
                  className="block w-full text-left py-3 text-base text-white hover:text-gray-300 transition-colors"
                >
                  Enterprise
                </button>
                <button
                  className="block w-full text-left py-3 text-base text-white hover:text-gray-300 transition-colors"
                >
                  Investors
                </button>
                <Button 
                  className="w-full mt-3 bg-white hover:bg-gray-100 text-[#122b3e] rounded-none px-10 py-3 text-sm font-light shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Invisible backdrop to close dropdowns when clicking outside */}
      {(solutionsOpen || whoWeAreOpen || resourcesOpen || languageOpen) && (
        <div 
          className="fixed inset-0 z-40"
          style={{ top: '6.5rem' }}
          onClick={closeAllDropdowns}
        />
      )}

      {/* Dropdown Menus - Full width bars underneath nav */}
      {solutionsOpen && (
        <div
          className="absolute top-full left-0 right-0 px-4 lg:px-6 z-50"
          style={{ paddingTop: '8px' }}
        >
          <div className="relative rounded-lg overflow-hidden">
            {/* Bend Layer (Backdrop blur with distortion) */}
            <div
              className="absolute inset-0 backdrop-blur-xl z-0"
              style={{
                filter: 'url(#glass-blur)',
              }}
            />

            {/* Face Layer (Main glow) */}
            <div
              className="absolute inset-0 z-10"
              style={{
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="relative z-30 max-w-[1920px] mx-auto px-8 lg:px-16">
              <div className="flex justify-start gap-0 py-8">
                {solutionsItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className={`py-4 px-8 border-r last:border-r-0 hover:bg-white/5 transition-all duration-500 ${mounted && isScrolled ? 'border-[#122b3e]/20' : 'border-white/20'}`}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    <h3 className={`font-medium text-base mb-1 transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm font-light transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]/70' : 'text-white/70'}`}>
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {whoWeAreOpen && (
        <div
          className="absolute top-full left-0 right-0 px-4 lg:px-6 z-50"
          style={{ paddingTop: '8px' }}
        >
          <div className="relative rounded-lg overflow-hidden">
            {/* Bend Layer (Backdrop blur with distortion) */}
            <div
              className="absolute inset-0 backdrop-blur-xl z-0"
              style={{
                filter: 'url(#glass-blur)',
              }}
            />

            {/* Face Layer (Main glow) */}
            <div
              className="absolute inset-0 z-10"
              style={{
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="relative z-30 max-w-[1920px] mx-auto px-8 lg:px-16">
              <div className="flex justify-start gap-0 py-8">
                {whoWeAreItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    onClick={closeAllDropdowns}
                    className={`py-4 px-8 border-r last:border-r-0 hover:bg-white/5 transition-all duration-500 ${mounted && isScrolled ? 'border-[#122b3e]/20' : 'border-white/20'}`}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    <h3 className={`font-medium text-base mb-1 transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm font-light transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]/70' : 'text-white/70'}`}>
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {resourcesOpen && (
        <div
          className="absolute top-full left-0 right-0 px-4 lg:px-6 z-50"
          style={{ paddingTop: '8px' }}
        >
          <div className="relative rounded-lg overflow-hidden">
            {/* Bend Layer (Backdrop blur with distortion) */}
            <div
              className="absolute inset-0 backdrop-blur-xl z-0"
              style={{
                filter: 'url(#glass-blur)',
              }}
            />

            {/* Face Layer (Main glow) */}
            <div
              className="absolute inset-0 z-10"
              style={{
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="relative z-30 max-w-[1920px] mx-auto px-8 lg:px-16">
              <div className="flex justify-start gap-0 py-8">
                {resourcesItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className={`py-4 px-8 border-r last:border-r-0 hover:bg-white/5 transition-all duration-500 ${mounted && isScrolled ? 'border-[#122b3e]/20' : 'border-white/20'}`}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    <h3 className={`font-medium text-base mb-1 transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm font-light transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]/70' : 'text-white/70'}`}>
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Language Dropdown */}
      {languageOpen && (
        <div
          className="absolute top-full left-0 right-0 px-4 lg:px-6 z-50"
          style={{ paddingTop: '8px' }}
        >
          <div className="relative rounded-lg overflow-hidden">
            {/* Bend Layer (Backdrop blur with distortion) */}
            <div
              className="absolute inset-0 backdrop-blur-xl z-0"
              style={{
                filter: 'url(#glass-blur)',
              }}
            />

            {/* Face Layer (Main glow) */}
            <div
              className="absolute inset-0 z-10"
              style={{
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="relative z-30 max-w-[1920px] mx-auto px-8 lg:px-16">
              <div className="grid grid-cols-5 gap-0 py-8">
                {languages.map((language, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      // Handle language selection here
                      closeAllDropdowns();
                    }}
                    className="py-4 px-8 hover:bg-white/5 transition-all text-left"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    <span className={`text-sm font-light underline transition-colors duration-500 ${mounted && isScrolled ? 'text-[#122b3e]' : 'text-white'}`}>{language}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}