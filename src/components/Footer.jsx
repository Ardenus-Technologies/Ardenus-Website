'use client'

import React from 'react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      router.push('/');
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  const handlePolicyClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Solutions', id: 'solutions' },
    { label: 'Products', id: 'our-process' },
    { label: 'Resources', id: 'resources' },
    { label: 'Enterprise', id: 'enterprise' },
    { label: 'Investors', id: 'investors' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and LinkedIn */}
        <div className="flex items-center justify-between pb-8 border-b border-gray-200">
          <img 
            src="/ArdenusLogoBlue.png"
            alt="Ardenus"
            className="h-24 md:h-28"
          />
          <a 
            href="https://www.linkedin.com/company/backend-flows/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0077b5] transition-colors mt-3"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Bottom section with copyright and nav links */}
        <div className="pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p 
              className="text-sm text-[#1a2332] font-light"
              style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              © 2025 Ardenus.
            </p>
            <p 
              className="text-sm text-gray-400 font-light"
              style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-[#1a2332] hover:text-[#0077b5] transition-colors font-light"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/faq"
                onClick={handlePolicyClick}
                className="text-sm text-gray-400 hover:text-[#1a2332] transition-colors font-light"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                FAQ
              </Link>
              <Link
                href="/privacy"
                onClick={handlePolicyClick}
                className="text-sm text-gray-400 hover:text-[#1a2332] transition-colors font-light"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={handlePolicyClick}
                className="text-sm text-gray-400 hover:text-[#1a2332] transition-colors font-light"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}