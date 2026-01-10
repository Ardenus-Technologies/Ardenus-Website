'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        <h1 
          className="text-4xl md:text-5xl font-medium text-[#1a2332] mb-8"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Terms of Service
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
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using Backend Flows services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
            <p>
              We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">2. Services Description</h2>
            <p className="mb-4">Backend Flows provides custom AI automation development services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom workflow automation design and implementation</li>
              <li>AI model development and training</li>
              <li>Integration with third-party platforms and tools</li>
              <li>Ongoing optimization and support</li>
              <li>Training and documentation</li>
            </ul>
            <p className="mt-4">Service specifications and deliverables will be detailed in individual service agreements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">3. User Obligations</h2>
            <p className="mb-4">As a user of Backend Flows services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information during registration and project setup</li>
              <li>Maintain the security of your account credentials and access tokens</li>
              <li>Use our services only for lawful purposes and in compliance with all applicable regulations</li>
              <li>Not attempt to reverse engineer, decompile, or access source code of our proprietary systems</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              <strong>Our Property:</strong> Backend Flows retains all rights, title, and interest in our proprietary systems, code, methodologies, and general automation frameworks. This includes any improvements or modifications we make during service delivery.
            </p>
            <p className="mb-4">
              <strong>Your Property:</strong> You retain all rights to your data, business processes, and proprietary information. We claim no ownership over your data or business logic.
            </p>
            <p>
              <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to use the custom automations we build for your business, as long as your service agreement remains in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">5. Payment Terms</h2>
            <p className="mb-4">
              <strong>Setup Fees:</strong> One-time setup fees are due upon signing the service agreement. Work begins after payment is received.
            </p>
            <p className="mb-4">
              <strong>Monthly Fees:</strong> Ongoing monthly fees are billed on the first day of each month and are due within 15 days of invoice date.
            </p>
            <p className="mb-4">
              <strong>Late Payments:</strong> Accounts with payments more than 30 days overdue may have services suspended until payment is received.
            </p>
            <p>
              <strong>Refund Policy:</strong> Subject to our ROI guarantee, refunds are issued on a case-by-case basis as outlined in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">6. ROI Guarantee</h2>
            <p className="mb-4">
              Backend Flows guarantees measurable return on investment within 6 months of implementation, as defined in your service agreement. If we fail to deliver the agreed-upon metrics:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We will refund monthly fees paid during the first 6 months</li>
              <li>We will continue working at no additional cost until ROI targets are met</li>
            </ul>
            <p className="mt-4">
              This guarantee requires active participation from your team and adherence to implementation recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">7. Warranties and Disclaimers</h2>
            <p className="mb-4">
              Backend Flows provides services with professional care and expertise. However, we provide services "as is" without warranties of any kind, express or implied, except as explicitly stated in individual service agreements.
            </p>
            <p className="mb-4">We do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uninterrupted or error-free operation of automations</li>
              <li>Specific business outcomes beyond agreed ROI metrics</li>
              <li>Compatibility with all future third-party platform updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law, Backend Flows shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Data loss resulting from third-party platform failures</li>
            </ul>
            <p className="mt-4">
              Our total liability shall not exceed the fees paid to Backend Flows in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">9. Termination</h2>
            <p className="mb-4">
              <strong>By You:</strong> You may terminate your service agreement with 30 days written notice. You will remain responsible for payment through the notice period.
            </p>
            <p className="mb-4">
              <strong>By Us:</strong> We may terminate services with 30 days notice or immediately for material breach of these terms.
            </p>
            <p>
              <strong>Upon Termination:</strong> You will receive exports of your data and configuration. Access to our proprietary systems will be revoked. Any prepaid fees will be prorated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">10. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives termination of the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by the laws of the State of North Carolina, without regard to conflict of law principles.
            </p>
            <p>
              Any disputes shall be resolved through binding arbitration in Chapel Hill, North Carolina, except that either party may seek injunctive relief in court for intellectual property violations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">12. Entire Agreement</h2>
            <p>
              These Terms, together with any service agreements, constitute the entire agreement between you and Backend Flows regarding our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#1a2332] mb-4">13. Contact</h2>
            <p className="mb-4">For questions about these Terms of Service, contact:</p>
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

