import Link from 'next/link';

const pageLinks = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/articles', label: 'Articles' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://instagram.com', label: 'Instagram' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column - Page Links */}
          <div>
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
          </div>

          {/* Right Column - Social & Legal */}
          <div className="flex flex-col gap-12 md:items-end md:text-right">
            {/* Social Media */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#4f4f4f]">
                Follow Us
              </p>
              <div className="flex gap-6 md:justify-end">
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
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="mailto:hello@company.com"
                className="text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
              >
                hello@company.com
              </a>
              <div className="flex gap-6">
                <Link
                  href="/privacy"
                  className="text-sm text-[#4f4f4f] transition-colors duration-300 hover:text-white"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-[#4f4f4f] transition-colors duration-300 hover:text-white"
                >
                  Terms
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-[#4f4f4f]">
              © {currentYear} Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
