import { Metadata } from 'next';
import { LogoReveal } from '@/components/layout';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Learn about our mission, values, and the team behind our products.',
};

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    social: 'https://linkedin.com',
  },
  {
    name: 'Michael Roberts',
    role: 'CTO & Co-Founder',
    social: 'https://linkedin.com',
  },
  {
    name: 'Emily Watson',
    role: 'VP of Engineering',
    social: 'https://linkedin.com',
  },
  {
    name: 'David Kim',
    role: 'VP of Product',
    social: 'https://linkedin.com',
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Sales',
    social: 'https://linkedin.com',
  },
  {
    name: 'James Wilson',
    role: 'VP of Marketing',
    social: 'https://linkedin.com',
  },
  {
    name: 'Ana Garcia',
    role: 'Head of Design',
    social: 'https://linkedin.com',
  },
  {
    name: 'Chris Brown',
    role: 'Head of Customer Success',
    social: 'https://linkedin.com',
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-py-lg bg-black pt-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-display-1 uppercase tracking-tight text-white">
              Company
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-white/10 bg-black pb-24">
        <div className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <FadeIn className="md:col-span-3">
              <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
                Our Mission
              </span>
            </FadeIn>
            <div className="space-y-6 md:col-span-9">
              <FadeIn delay={0.1}>
                <p className="text-body-lg text-[#a0a0a0]">
                  We started this company with a simple belief: technology
                  should empower people, not overwhelm them. Too many businesses
                  struggle with complex, disconnected tools that create more
                  problems than they solve.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-body-lg text-[#a0a0a0]">
                  Our mission is to build software that just works—intuitive,
                  powerful, and designed around how real teams actually operate.
                  We believe that when technology gets out of the way, people
                  can focus on what matters most: doing great work.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-body-lg text-[#a0a0a0]">
                  Today, thousands of companies trust our platform to run their
                  operations. But we're just getting started. We're committed to
                  continuous innovation and to helping our customers succeed in
                  an ever-changing business landscape.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-py-xl border-t border-white/10 bg-[#1a1a1a]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-[#4f4f4f]">
              Our People
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-display-2 mt-4 uppercase tracking-tight text-white">
              Meet the Team
            </h2>
          </FadeIn>

          {/* Team Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="group">
                  {/* Image */}
                  <div className="img-grayscale relative aspect-square overflow-hidden bg-black">
                    <div
                      className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(${135 + index * 30}deg, #2a2a2a, #1a1a1a)`,
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-white">{member.name}</h3>
                      <p className="text-sm text-[#4f4f4f]">{member.role}</p>
                    </div>
                    <a
                      href={member.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center border border-white/10 text-xs text-[#4f4f4f] transition-all duration-300 hover:border-white/30 hover:text-white"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      in
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <LogoReveal />
    </>
  );
}
