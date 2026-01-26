import { Metadata } from 'next';
import { FadeIn } from '@/components/animations/FadeIn';
import { LogoReveal } from '@/components/layout/LogoReveal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Ardenus Privacy Policy - How we collect, use, and disclose personal information.',
};

export default function PrivacyPage() {
  return (
    <>
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
              <p className="text-sm text-[#4f4f4f]">Last updated: January 2026</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 space-y-8">
                {/* Introduction */}
                <div>
                  <p className="text-[#a0a0a0]">
                    Ardenus LLC ("Ardenus," "Company," "we," "our," or "us") respects your privacy and is committed to handling personal information responsibly and in accordance with applicable laws. This Ardenus Privacy Policy (this "Privacy Policy" or this "Policy") describes how we collect, use, and disclose personal information relating to individuals outside of our organization, including through our website located at www.ardenus.com or other websites in the Ardenus group of companies that link to this Privacy Policy (collectively, the "Site"), as well as through offline interactions, business operations, and recruiting activities.
                  </p>
                  <p className="mt-4 text-[#a0a0a0]">
                    This Privacy Policy also serves as our Notice at Collection of Personal Information under the California Consumer Privacy Act (CCPA). It describes the categories of personal information we collect, the purposes for which the information is used, and your rights under California law.
                  </p>
                </div>

                {/* Section 1 */}
                <div>
                  <h2 className="text-xl font-medium text-white">1. Scope of This Policy</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    This Policy applies to personal information we collect about:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="pl-6">Visitors to our website;</li>
                    <li className="pl-6">Individuals who contact us or communicate with us;</li>
                    <li className="pl-6">Business contacts and vendors;</li>
                    <li className="pl-6">Job applicants; and</li>
                    <li className="pl-6">Other individuals whose personal information we process in the course of our operations.</li>
                  </ul>
                  <p className="mt-4 text-[#a0a0a0]">
                    This Policy does not apply to our employees, contractors, or personnel.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-xl font-medium text-white">2. Categories of Personal Information We Collect</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    Depending on the nature of your interaction with us, we may collect the following categories of personal information:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="pl-6"><strong className="text-white">Identifiers:</strong> name, email address, phone number, mailing address, and job title.</li>
                    <li className="pl-6"><strong className="text-white">Professional Information:</strong> employer, role, and other business contact details.</li>
                    <li className="pl-6"><strong className="text-white">Communications:</strong> contents of emails or inquiries.</li>
                    <li className="pl-6"><strong className="text-white">Recruitment Information:</strong> resumes, cover letters, employment history, education background, references, and other information submitted during the application process.</li>
                    <li className="pl-6"><strong className="text-white">Technical Information (from our website):</strong> IP address, browser type, device information, access time.</li>
                    <li className="pl-6"><strong className="text-white">Visual Information:</strong> Video footage from security cameras at our physical sites, which may capture images of individuals on or near our premises.</li>
                    <li className="pl-6"><strong className="text-white">Other:</strong> any other information you voluntarily provide to us.</li>
                  </ul>
                  <p className="mt-4 text-[#a0a0a0]">
                    We do not collect sensitive personal information unless required or permitted under applicable law (e.g., for background checks in recruiting, if applicable).
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-xl font-medium text-white">3. How We Collect Personal Information</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We collect personal information through:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="pl-6">Website contact forms or direct email correspondence;</li>
                    <li className="pl-6">Job applications submitted through our Site or third-party recruiting tools;</li>
                    <li className="pl-6">Business meetings, proposals, and vendor relationships;</li>
                    <li className="pl-6">Conferences, events, or referrals;</li>
                    <li className="pl-6">Public sources such as LinkedIn or professional directories; and</li>
                    <li className="pl-6">Security and IT systems (e.g., email logs, visitor logs, basic analytics tools and session cookies used to understand website performance and security).</li>
                    <li className="pl-6">Security cameras operating at our physical premises, which may record video footage for safety and security purposes.</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-xl font-medium text-white">4. How We Use Personal Information</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We use personal information for the following business purposes:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="pl-6">Responding to inquiries or requests for information;</li>
                    <li className="pl-6">Evaluating job applications and recruiting candidates;</li>
                    <li className="pl-6">Managing and performing our contractual relationships;</li>
                    <li className="pl-6">Engaging vendors, suppliers, and consultants;</li>
                    <li className="pl-6">Ensuring network and information security;</li>
                    <li className="pl-6">To maintain the safety and physical security of our personnel, visitors, assets, information, and facilities;</li>
                    <li className="pl-6">Complying with legal obligations or responding to lawful requests; and</li>
                    <li className="pl-6">Maintaining internal records and business operations.</li>
                  </ul>
                  <p className="mt-4 text-[#a0a0a0]">
                    We do not sell or share personal information for advertising or marketing purposes.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-xl font-medium text-white">5. Disclosure of Personal Information</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We may disclose personal information to:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="pl-6">Service providers who assist with website hosting, IT support, recruiting, communications, and operations.</li>
                    <li className="pl-6">Legal or regulatory authorities when required to comply with law, legal process, or government requests.</li>
                    <li className="pl-6">Professional advisers such as legal counsel, auditors, or insurers.</li>
                    <li className="pl-6">Authorized third parties in connection with a corporate transaction (e.g., merger, acquisition).</li>
                  </ul>
                  <p className="mt-4 text-[#a0a0a0]">
                    All such disclosures are made under appropriate legal and confidentiality safeguards.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-xl font-medium text-white">6. Your California Privacy Rights (CCPA)</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="pl-6"><strong className="text-white">Right to Know:</strong> You may request that we disclose the categories and specific pieces of personal information we have collected about you.</li>
                    <li className="pl-6"><strong className="text-white">Right to Delete:</strong> You may request the deletion of your personal information, subject to legal exceptions.</li>
                    <li className="pl-6"><strong className="text-white">Right to Correct:</strong> You may request that we correct inaccurate information about you.</li>
                    <li className="pl-6"><strong className="text-white">Right to Non-Discrimination:</strong> You will not be discriminated against for exercising your rights.</li>
                  </ul>
                  <p className="mt-4 text-[#a0a0a0]">
                    We do not sell personal information and have no actual knowledge of selling or sharing the personal information of individuals under 16 years of age.
                  </p>
                  <p className="mt-4 text-[#a0a0a0]">
                    To exercise your CCPA rights, please contact us at{' '}
                    <a
                      href="mailto:legal@ardenus.com"
                      className="text-white transition-colors duration-300 hover:text-[#a0a0a0]"
                    >
                      legal@ardenus.com
                    </a>
                    . We may verify your identity before responding to your request. If you use an authorized agent to submit a request, we may require the agent to provide proof that you gave them signed permission. We may also ask you to verify your identity directly with us.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-xl font-medium text-white">7. Data Retention</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We retain personal information only as long as necessary for the purposes described in this Policy or as required by law. Retention periods may vary depending on the type of data and our legal obligations.
                  </p>
                  <p className="mt-4 text-[#a0a0a0]">
                    Examples:
                  </p>
                  <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                    <li className="pl-6">Inquiry correspondence is typically retained for up to 36 months.</li>
                    <li className="pl-6">Recruiting data may be retained in accordance with applicable employment laws, including for evaluation for future opportunities, except where a candidate expresses a preference that we not use their data for that purpose.</li>
                    <li className="pl-6">Business contact records may be retained for the duration of our relationship and a reasonable period thereafter.</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-xl font-medium text-white">8. Data Security</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We implement reasonable physical, administrative, and technical safeguards to protect personal information from unauthorized access, use, or disclosure. These safeguards are designed in accordance with industry standards and our legal obligations.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-xl font-medium text-white">9. Third-Party Websites and Services</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    Our website may contain links to third-party websites, job application platforms, or services not controlled by us. We are not responsible for the privacy practices or content of such third parties.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-xl font-medium text-white">10. Changes to This Policy</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    We may update this Privacy Policy from time to time to reflect changes in legal requirements or our practices. The "Last Updated" date at the top of this Policy will indicate when it was most recently revised. Material changes will be posted prominently on our website.
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-xl font-medium text-white">11. Contact Us</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    If you have any questions or requests regarding this Privacy Policy or your personal information, please contact us at:
                  </p>
                  <p className="mt-4 text-[#a0a0a0]">
                    Ardenus LLC
                    <br />
                    <a
                      href="mailto:legal@ardenus.com"
                      className="text-white transition-colors duration-300 hover:text-[#a0a0a0]"
                    >
                      legal@ardenus.com
                    </a>
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-xl font-medium text-white">12. International Data Transfers</h2>
                  <p className="mt-4 text-[#a0a0a0]">
                    If we transfer personal information outside the United States, we do so in accordance with applicable data protection laws and with appropriate safeguards in place, such as contractual clauses or other mechanisms approved by relevant authorities.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
    <LogoReveal />
    </>
  );
}
