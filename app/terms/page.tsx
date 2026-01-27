import { Metadata } from 'next';
import { FadeIn } from '@/components/animations/FadeIn';
import { LogoReveal } from '@/components/layout/LogoReveal';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms and conditions for using the Ardenus website and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="section-py-xl bg-black pt-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Left Column - Label */}
            <FadeIn className="md:col-span-3">
              <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                Terms of Use
              </span>
            </FadeIn>

            {/* Right Column - Content */}
            <div className="md:col-span-9">
              <FadeIn delay={0.1}>
                <p className="text-sm text-[#4f4f4f]">
                  Last updated: January 2026
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 space-y-8">
                  {/* Introduction */}
                  <div>
                    <p className="text-[#a0a0a0]">
                      The following terms and conditions (the "Agreement")
                      govern all use of the www.ardenus.com (the "Site"). The
                      Site is owned and operated by Ardenus LLC ("Ardenus"). The
                      Site is offered subject to your (and the organization you
                      represent) (together, "User" or "You") acceptance without
                      modification of all of the terms and conditions contained
                      herein and all other operating rules, policies and
                      procedures that may be published from time to time on the
                      Site by Ardenus. BY USING OR ACCESSING ANY PART OF THE
                      SITE, YOU AGREE TO ALL OF THE TERMS AND CONDITIONS
                      CONTAINED HEREIN; IF YOU DO NOT AGREE, DO NOT USE OR
                      ACCESS THE SITE.
                    </p>
                    <p className="mt-4 text-[#a0a0a0]">
                      Ardenus reserves the right, at its sole discretion, to
                      modify or replace any of the terms or conditions of this
                      Agreement at any time. It is User's responsibility to
                      check this Agreement periodically for changes. User's
                      continued use of the Site following the posting of any
                      changes to this Agreement constitutes acceptance of those
                      changes.
                    </p>
                  </div>

                  {/* Section 1 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      1. Access
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      Subject to the terms and conditions of this Agreement, the
                      Site is solely for User's personal use. Ardenus may
                      change, suspend or discontinue the Site at any time,
                      including the availability of any feature, database, or
                      content. Ardenus may also impose limits on certain
                      features and services or restrict User's access to parts
                      or all of the Site without notice or liability.
                    </p>
                    <p className="mt-4 text-[#a0a0a0]">
                      User certifies to Ardenus that if User is an individual
                      (i.e., not a corporation) User is at least 18 years of
                      age. User also certifies that it is legally permitted to
                      use the Site, and takes full responsibility for the
                      selection and use of the Site. This Agreement is void
                      where prohibited by law, and the right to access the Site
                      is revoked in such jurisdictions.
                    </p>
                    <p className="mt-4 text-[#a0a0a0]">
                      If User desires to access any of the products or services
                      that Ardenus offers through the Site (the "Services"),
                      User must enter into a separate agreement with respect to
                      such access and nothing in this Agreement shall be deemed
                      to provide any right or license to use or access such
                      Services. Additional information regarding the Services
                      and any applicable fees can be found at www.ardenus.com.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      2. Use of the Site
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      You agree to use the Site only for lawful purposes and in
                      accordance with these Terms. You agree not to:
                    </p>
                    <ul className="mt-4 space-y-2 text-[#a0a0a0]">
                      <li className="pl-6">
                        Use the Site in any way that violates any applicable
                        federal, state, local, or international law or
                        regulation;
                      </li>
                      <li className="pl-6">
                        Use the Site to transmit or procure the sending of any
                        advertising or promotional material without our prior
                        written consent;
                      </li>
                      <li className="pl-6">
                        Impersonate or attempt to impersonate Ardenus, an
                        Ardenus employee, another user, or any other person or
                        entity;
                      </li>
                      <li className="pl-6">
                        Engage in any conduct that restricts or inhibits
                        anyone's use or enjoyment of the Site;
                      </li>
                      <li className="pl-6">
                        Attempt to gain unauthorized access to, interfere with,
                        damage, or disrupt any parts of the Site, the server on
                        which the Site is stored, or any server, computer, or
                        database connected to the Site;
                      </li>
                      <li className="pl-6">
                        Use any robot, spider, or other automatic device,
                        process, or means to access the Site for any purpose,
                        including monitoring or copying any of the material on
                        the Site;
                      </li>
                      <li className="pl-6">
                        Introduce any viruses, Trojan horses, worms, logic
                        bombs, or other material that is malicious or
                        technologically harmful.
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      3. Intellectual Property Rights
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      The Site and its entire contents, features, and
                      functionality (including but not limited to all
                      information, software, text, displays, images, video,
                      audio, and the design, selection, and arrangement thereof)
                      are owned by Ardenus, its licensors, or other providers of
                      such material and are protected by United States and
                      international copyright, trademark, patent, trade secret,
                      and other intellectual property or proprietary rights
                      laws.
                    </p>
                    <p className="mt-4 text-[#a0a0a0]">
                      The Ardenus name, logo, and all related names, logos,
                      product and service names, designs, and slogans are
                      trademarks of Ardenus or its affiliates or licensors. You
                      must not use such marks without the prior written
                      permission of Ardenus. All other names, logos, product and
                      service names, designs, and slogans on the Site are the
                      trademarks of their respective owners.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      4. User Submissions
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      If you submit any information, ideas, concepts, or other
                      materials to Ardenus through the Site or by any other
                      means ("Submissions"), you grant Ardenus a non-exclusive,
                      royalty-free, perpetual, irrevocable, and fully
                      sublicensable right to use, reproduce, modify, adapt,
                      publish, translate, create derivative works from,
                      distribute, and display such Submissions throughout the
                      world in any media. You represent and warrant that you own
                      or control all rights in and to your Submissions and that
                      your Submissions do not violate these Terms or any
                      applicable law.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      5. Third-Party Links
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      The Site may contain links to third-party websites or
                      resources. These links are provided for your convenience
                      only. Ardenus has no control over the contents of those
                      sites or resources and accepts no responsibility for them
                      or for any loss or damage that may arise from your use of
                      them. If you decide to access any of the third-party
                      websites linked to the Site, you do so entirely at your
                      own risk and subject to the terms and conditions of use
                      for such websites.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      6. Disclaimer of Warranties
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
                      BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS
                      OR IMPLIED. NEITHER ARDENUS NOR ANY PERSON ASSOCIATED WITH
                      ARDENUS MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT
                      TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY,
                      ACCURACY, OR AVAILABILITY OF THE SITE.
                    </p>
                    <p className="mt-4 text-[#a0a0a0]">
                      WITHOUT LIMITING THE FOREGOING, NEITHER ARDENUS NOR ANYONE
                      ASSOCIATED WITH ARDENUS REPRESENTS OR WARRANTS THAT THE
                      SITE, ITS CONTENT, OR ANY SERVICES OBTAINED THROUGH THE
                      SITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR
                      UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE
                      SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF
                      VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SITE OR
                      ANY SERVICES OBTAINED THROUGH THE SITE WILL OTHERWISE MEET
                      YOUR NEEDS OR EXPECTATIONS.
                    </p>
                    <p className="mt-4 text-[#a0a0a0]">
                      ARDENUS HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND,
                      WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE,
                      INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
                      MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
                      PARTICULAR PURPOSE.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      7. Limitation of Liability
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL
                      ARDENUS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE
                      PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE
                      LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY,
                      ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR
                      INABILITY TO USE, THE SITE, ANY WEBSITES LINKED TO IT, ANY
                      CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY
                      DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR
                      PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO PERSONAL
                      INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF
                      REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
                      SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND
                      WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF
                      CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      8. Indemnification
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      You agree to defend, indemnify, and hold harmless Ardenus,
                      its affiliates, licensors, and service providers, and its
                      and their respective officers, directors, employees,
                      contractors, agents, licensors, suppliers, successors, and
                      assigns from and against any claims, liabilities, damages,
                      judgments, awards, losses, costs, expenses, or fees
                      (including reasonable attorneys' fees) arising out of or
                      relating to your violation of these Terms or your use of
                      the Site.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      9. Governing Law and Jurisdiction
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      These Terms and any dispute or claim arising out of or
                      related to these Terms, their subject matter, or their
                      formation (in each case, including non-contractual
                      disputes or claims) shall be governed by and construed in
                      accordance with the laws of the State of Delaware without
                      giving effect to any choice or conflict of law provision
                      or rule. Any legal suit, action, or proceeding arising out
                      of or related to these Terms or the Site shall be
                      instituted exclusively in the federal courts of the United
                      States or the courts of the State of Delaware, and you
                      waive any objection to the exercise of jurisdiction over
                      you by such courts and to venue in such courts.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      10. Waiver and Severability
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      No waiver by Ardenus of any term or condition set out in
                      these Terms shall be deemed a further or continuing waiver
                      of such term or condition or a waiver of any other term or
                      condition, and any failure of Ardenus to assert a right or
                      provision under these Terms shall not constitute a waiver
                      of such right or provision.
                    </p>
                    <p className="mt-4 text-[#a0a0a0]">
                      If any provision of these Terms is held by a court or
                      other tribunal of competent jurisdiction to be invalid,
                      illegal, or unenforceable for any reason, such provision
                      shall be eliminated or limited to the minimum extent such
                      that the remaining provisions of the Terms will continue
                      in full force and effect.
                    </p>
                  </div>

                  {/* Section 11 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      11. Entire Agreement
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      These Terms and our Privacy Policy constitute the sole and
                      entire agreement between you and Ardenus regarding the
                      Site and supersede all prior and contemporaneous
                      understandings, agreements, representations, and
                      warranties, both written and oral, regarding the Site.
                    </p>
                  </div>

                  {/* Section 12 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      12. Export Control
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      You agree to comply with all applicable export and
                      re-export control laws and regulations, including the
                      Export Administration Regulations maintained by the U.S.
                      Department of Commerce, trade and economic sanctions
                      maintained by the Treasury Department's Office of Foreign
                      Assets Control, and the International Traffic in Arms
                      Regulations maintained by the Department of State. You
                      represent and warrant that you are not located in, under
                      the control of, or a national or resident of any country
                      to which the United States has embargoed goods or
                      services.
                    </p>
                  </div>

                  {/* Section 13 */}
                  <div>
                    <h2 className="text-xl font-medium text-white">
                      13. U.S. Government Rights
                    </h2>
                    <p className="mt-4 text-[#a0a0a0]">
                      The Site and any related documentation are "Commercial
                      Items," as that term is defined at 48 C.F.R. Section
                      2.101, consisting of "Commercial Computer Software" and
                      "Commercial Computer Software Documentation," as such
                      terms are used in 48 C.F.R. Section 12.212 or 48 C.F.R.
                      Section 227.7202, as applicable. The Site is being
                      licensed to U.S. Government end users only as Commercial
                      Items and with only those rights as are granted to all
                      other end users pursuant to the terms and conditions
                      herein.
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
