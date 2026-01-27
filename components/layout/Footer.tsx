import Link from 'next/link';

const pageLinks = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/articles', label: 'Articles' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Request a Demo' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/company/ardenus/', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer
      className="relative z-10 -mt-52 border-t-0 border-white/10 bg-black md:border-t"
      style={{ fontFamily: "'Edgecutting', sans-serif" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Page Links including Request a Demo */}
            <nav className="flex flex-col gap-4">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-underline w-fit text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Column - Follow Us, LinkedIn at top, then Privacy/Terms aligned with Request a Demo */}
            <div className="flex flex-col items-end text-right">
              <p className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                Follow Us
              </p>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-4 text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
              {/* Gap to align with Request a Demo on left */}
              <div className="mt-auto flex flex-col items-end gap-4">
                <Link
                  href="/privacy"
                  className="text-sm text-[#4f4f4f] transition-colors duration-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-[#4f4f4f] transition-colors duration-300 hover:text-white"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright - Centered on Mobile */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#4f4f4f]">
              Copyright 2026 Ardenus LLC. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12">
          {/* Left Column - Page Links including Request a Demo */}
          <nav className="flex flex-col gap-5">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline w-fit text-base text-[#a0a0a0] transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Column - LinkedIn at top, Privacy/Terms in middle, Copyright at bottom */}
          <div className="flex flex-col items-end text-right">
            {/* Social Media */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#4f4f4f]">
                Follow Us
              </p>
              <div className="flex justify-end gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links - centered vertically */}
            <div className="my-auto flex flex-col items-end gap-3">
              <Link
                href="/privacy"
                className="text-sm text-[#4f4f4f] transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[#4f4f4f] transition-colors duration-300 hover:text-white"
              >
                Terms of Use
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-sm text-[#4f4f4f]">
              Copyright 2026 Ardenus LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
