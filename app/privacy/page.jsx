'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        <h1 
          className="text-4xl md:text-5xl font-medium text-[#1a2332] mb-8"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Privacy Policy
        </h1>

        <p 
          className="text-sm text-gray-500 mb-12"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Last updated: November 25, 2025
        </p>

        <div 
          className="space-y-8 text-gray-600 font-light leading-relaxed"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company details</li>
              <li><strong>Company Information:</strong> Business details, industry, company size</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our services</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to improve your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our services, updates, and promotional offers</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your requests and provide customer support</li>
              <li>Monitor and analyze usage patterns to improve our services</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">3. Information Sharing</h2>
            <p className="mb-4">We do not sell your personal data. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (with appropriate safeguards)</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">4. Data Security</h2>
            <p className="mb-4">We take data security seriously and implement industry-standard measures:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>SOC 2 Type II Compliance:</strong> We maintain SOC 2 certification for data security</li>
              <li><strong>Encryption:</strong> Data is encrypted at rest and in transit using industry-standard protocols</li>
              <li><strong>Access Controls:</strong> Strict access controls and authentication requirements</li>
              <li><strong>Regular Audits:</strong> Ongoing security assessments and penetration testing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@backendflows.com" className="text-[#1a2332] hover:underline">
                privacy@backendflows.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">6. Cookies</h2>
            <p className="mb-4">We use cookies and similar tracking technologies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Track your online activity to show relevant ads</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Disabling certain cookies may limit site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or sending you an email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">10. Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
            <p className="font-medium text-[#1a2332]">Backend Flows</p>
            <p>
              Email:{' '}
              <a href="mailto:felix@backendflows.com" className="text-[#1a2332] hover:underline">
                felix@backendflows.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+12084036478" className="text-[#1a2332] hover:underline">
                (208) 403-6478
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

