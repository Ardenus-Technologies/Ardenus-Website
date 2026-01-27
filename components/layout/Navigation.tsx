'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/articles', label: 'Articles' },
  { href: '/company', label: 'Company' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md"
      >
        <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="relative h-8 w-48"
          >
            <Image
              src="/logo.png"
              alt="Ardenus Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-sm uppercase tracking-wider transition-colors duration-300 hover:text-white ${
                  isActive(link.href) ? 'text-white' : 'text-[#a0a0a0]'
                }`}
                style={{ fontFamily: "'Edgecutting', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary rounded-none">
              Request a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="h-px w-6 bg-white"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="h-px w-6 bg-white"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="h-px w-6 bg-white"
              />
            </div>
          </button>
        </nav>

      </motion.header>

      {/* Scroll Progress Bar - animates with nav */}
      <motion.div
        style={{ scaleX }}
        initial={{ top: 80 }}
        animate={{ top: isVisible ? 80 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 right-0 z-50 h-px origin-left bg-white"
      />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl uppercase tracking-wider transition-opacity duration-300 hover:opacity-50 ${
                      isActive(link.href) ? 'text-white' : 'text-[#a0a0a0]'
                    }`}
                    style={{ fontFamily: "'Edgecutting', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary rounded-none text-sm"
                >
                  Request a Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
