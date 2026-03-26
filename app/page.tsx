'use client';

import { useEffect, useRef, useState } from 'react';

const WORDS = ['We', 'Build', 'the', 'Systems', 'You', "Don't", 'See'];
// Reveal order: key words first, connectors fill in later
// Lower number = appears earlier in scroll
const REVEAL_ORDER = [4, 1, 6, 2, 5, 3, 0];
//                    We=4 Build=1 the=6 Systems=2 You=5 Don't=3 See=0

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [ip, setIp] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const lockedRef = useRef(false);

  // Force scroll to top on mount (handles reload)
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  // Fetch IP
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((r) => r.json())
      .then((d) => setIp(d.ip))
      .catch(() => setIp('0.0.0.0'));
  }, []);

  // Disable right-click, text selection, drag, and source-view shortcuts
  useEffect(() => {
    const blockContext = (e: MouseEvent) => e.preventDefault();
    const blockDrag = (e: DragEvent) => e.preventDefault();
    const blockSelect = (e: Event) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      // Block Ctrl+U (view source), Ctrl+S (save), Ctrl+Shift+I (devtools),
      // Ctrl+Shift+J (console), Ctrl+Shift+C (inspect), F12
      if (
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', blockContext);
    window.addEventListener('dragstart', blockDrag);
    document.addEventListener('selectstart', blockSelect);
    window.addEventListener('keydown', blockKeys);
    return () => {
      window.removeEventListener('contextmenu', blockContext);
      window.removeEventListener('dragstart', blockDrag);
      document.removeEventListener('selectstart', blockSelect);
      window.removeEventListener('keydown', blockKeys);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (lockedRef.current) return;
      if (!containerRef.current) return;

      const scrollTop = window.scrollY;
      const docHeight =
        containerRef.current.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // Lock when fully scrolled
      if (progress >= 0.99) {
        lockedRef.current = true;
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map scroll progress to word opacities
  // Words start revealing at ~15% scroll and are all fully visible by ~55%
  const getWordOpacity = (index: number) => {
    const order = REVEAL_ORDER[index];
    const wordStart = 0.1 + order * 0.06;
    const wordEnd = wordStart + 0.15;
    if (scrollProgress < wordStart) return 0;
    if (scrollProgress > wordEnd) return 1;
    return (scrollProgress - wordStart) / (wordEnd - wordStart);
  };

  // Logo: starts centered, opacity 1 → fades after words begin
  const logoSectionOpacity =
    scrollProgress < 0.05
      ? 1
      : Math.max(0, 1 - (scrollProgress - 0.05) / 0.1);

  // Copyright: fades in at the end
  const copyrightOpacity = Math.max(0, (scrollProgress - 0.65) / 0.15);

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed header */}
      <header
        className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-6 pt-8 sm:px-12 sm:pt-12 lg:px-16"
        style={{ opacity: copyrightOpacity }}
      >
        <img
          src="/logo.png"
          alt="Ardenus"
          className="h-4 w-auto opacity-30 sm:h-5 lg:h-6"
        />
        <a
          href="https://www.linkedin.com/company/ardenus/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ardenus on LinkedIn"
          className="text-sm tracking-wider text-white/25 transition-colors duration-300 hover:text-white/50"
        >
          [&nbsp;&nbsp;in&nbsp;&nbsp;]
        </a>
      </header>

      {/* Scroll container — tall to create scroll distance */}
      <div className="h-[500vh]">
        {/* Centered icon — first thing you see (crops to just the icon from the logo) */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ opacity: logoSectionOpacity }}
        >
          <div className="h-8 w-10 overflow-hidden sm:h-10 sm:w-12 lg:h-12 lg:w-14">
            <img
              src="/logo.png"
              alt=""
              className="h-full max-w-none"
              style={{ width: 'auto' }}
            />
          </div>
        </div>

        {/* Word-by-word reveal — sticky centered */}
        <div className="fixed inset-0 flex items-center justify-center px-6">
          <h1 className="max-w-xl text-center text-2xl leading-relaxed tracking-tight sm:max-w-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-relaxed">
            {WORDS.map((word, i) => (
              <span
                key={i}
                className="inline-block transition-none"
                style={{
                  opacity: getWordOpacity(i),
                  color: `rgba(255, 255, 255, ${0.5 + getWordOpacity(i) * 0.4})`,
                }}
              >
                {word}
                {i < WORDS.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>
        </div>

        {/* Founders + Copyright — fades in at the end */}
        <div
          className="fixed bottom-0 left-0 right-0 px-6 pb-8 sm:px-12 sm:pb-12 lg:px-16"
          style={{ opacity: copyrightOpacity }}
        >
          {/* Founders */}
          <div className="mb-6">
            <span className="mb-3 block text-xs tracking-wider text-white/40 sm:mb-0 sm:text-sm">
              //Founders
            </span>
            <div className="mt-2 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-12 sm:gap-y-2">
              <a
                href="https://www.linkedin.com/in/felixwood01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider text-white/30 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-white/60 sm:text-sm"
              >
                Felix Wood
              </a>
              <a
                href="https://www.linkedin.com/in/francisvnguyen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider text-white/30 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-white/60 sm:text-sm"
              >
                Francis Nguyen
              </a>
              <a
                href="https://www.linkedin.com/in/uku-pyle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider text-white/30 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-white/60 sm:text-sm"
              >
                Uku Pyle
              </a>
              <a
                href="https://www.linkedin.com/in/richardking7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider text-white/30 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-white/60 sm:text-sm"
              >
                Richard King
              </a>
            </div>
          </div>

          {/* Copyright row */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs tracking-wider text-white/20 sm:text-sm">
              2026 Ardenus Technologies. All rights reserved
            </p>
            {ip && (
              <p className="text-xs tracking-wider text-white/20 sm:text-sm">
                {ip}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
