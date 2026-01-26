import { Metadata } from 'next';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Our privacy policy explains how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <section className="section-py-xl bg-black pt-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          {/* Left Column - Label */}
          <FadeIn className="md:col-span-3">
            <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
              Privacy Policy
            </span>
          </FadeIn>

          {/* Right Column - Content */}
          <div className="md:col-span-9">
            <FadeIn delay={0.1}>
              <p className="text-sm text-[#4f4f4f]">
                Last updated: January 1, 2024
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 space-y-8">
                {/* Section 1 */}
                <div>
                  <h2 className="text-xl font-medium text-white">
                    1. Introduction
                  </h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    This Privacy Policy describes how Company Name ("we," "us,"
                    or "our") collects, uses, and shares information about you
                    when you use our websites, mobile applications, and other
                    online products and services (collectively, the "Services")
                    or when you otherwise interact with us.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-xl font-medium text-white">
                    2. Information We Collect
                  </h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We collect information you provide directly to us, such as
                    when you create an account, make a purchase, or contact us
                    for support. This information may include:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Name and contact information
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Account credentials
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Payment information
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Communications you send to us
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Any other information you choose to provide
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-xl font-medium text-white">
                    3. How We Use Your Information
                  </h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We use the information we collect to:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Provide, maintain, and improve our Services
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Process transactions and send related information
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Send promotional communications (with your consent)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Respond to your comments and questions
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      Protect against fraudulent or illegal activity
                    </li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-xl font-medium text-white">
                    4. Information Sharing
                  </h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We do not sell your personal information. We may share
                    information about you in the following circumstances:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      With service providers who perform services on our behalf
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      To comply with legal obligations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      To protect our rights and the rights of others
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      In connection with a merger or acquisition
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-white/20" />
                      With your consent
                    </li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-xl font-medium text-white">
                    5. Data Security
                  </h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We implement appropriate technical and organizational
                    measures to protect the security of your personal
                    information. However, no method of transmission over the
                    Internet or electronic storage is completely secure, so we
                    cannot guarantee absolute security.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-xl font-medium text-white">
                    6. Your Rights
                  </h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    Depending on your location, you may have certain rights
                    regarding your personal information, including the right to
                    access, correct, delete, or port your data. To exercise
                    these rights, please contact us using the information below.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-xl font-medium text-white">
                    7. Contact Us
                  </h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <p className="mt-4 text-[#a0a0a0]">
                    Email: privacy@company.com
                    <br />
                    Address: 123 Main Street, Suite 100, City, State 12345
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
