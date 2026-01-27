import Link from 'next/link';

const pageLinks = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/articles', label: 'Articles' },
  { href: '/company', label: 'Company' },
];

const ctaLink = { href: '/contact', label: 'Request a Demo' };

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
            {/* Left Column - Page Links, Follow Us, LinkedIn */}
            <div className="flex flex-col gap-4">
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
              <p className="mt-4 text-xs uppercase tracking-widest text-[#4f4f4f]">
                Follow Us
              </p>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline w-fit text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Column - Request a Demo, Privacy, Terms */}
            <div className="flex flex-col items-end gap-4 text-right">
              <Link
                href={ctaLink.href}
                className="link-underline text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
              >
                {ctaLink.label}
              </Link>
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
            <p className="text-sm text-[#4f4f4f]">
              Copyright 2026 Ardenus LLC. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop Layout - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-12">
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

          {/* Center Column - Legal Links */}
          <div className="flex flex-col items-center gap-3">
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

          {/* Right Column - Social, CTA & Copyright */}
          <div className="flex flex-col items-end gap-5 text-right">
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

            {/* Request a Demo */}
            <Link
              href={ctaLink.href}
              className="link-underline text-base text-[#a0a0a0] transition-colors duration-300 hover:text-white"
            >
              {ctaLink.label}
            </Link>

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
