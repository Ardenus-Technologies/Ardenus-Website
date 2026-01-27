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
      className="relative z-10 -mt-52 border-t border-white/10 bg-black"
      style={{ fontFamily: "'Edgecutting', sans-serif" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Page Links */}
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

            {/* Right Column - Social & Legal */}
            <div className="flex flex-col items-end gap-4 text-right">
              <p className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                Follow Us
              </p>
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
              <a
                href="mailto:contact@ardenus.com"
                className="text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
              >
                contact@ardenus.com
              </a>
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

          {/* Copyright - Centered on Mobile */}
          <div className="mt-12 text-center">
            <p className="text-xs text-[#4f4f4f]">
              Copyright 2026 Ardenus LLC. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12">
          {/* Left Column - Page Links */}
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

          {/* Right Column - Social & Legal */}
          <div className="flex flex-col items-end gap-12 text-right">
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

            {/* Legal Links */}
            <div className="flex flex-col items-end gap-3">
              <a
                href="mailto:contact@ardenus.com"
                className="text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
              >
                contact@ardenus.com
              </a>
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
            <p className="text-xs text-[#4f4f4f]">
              Copyright 2026 Ardenus LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
