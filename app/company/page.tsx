import { Metadata } from 'next';
import Image from 'next/image';
import { LogoReveal } from '@/components/layout';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Learn about our mission, values, and the team behind our products.',
};

const teamMembers = [
  {
    name: 'Felix Wood',
    role: 'Co-Founder, CEO',
    social: 'https://www.linkedin.com/in/felixwood01/',
    image: '/leadership/felix.jpg',
    bgColor: 'bg-black',
  },
  {
    name: 'Francis Nguyen',
    role: 'Co-Founder, President',
    social: 'https://www.linkedin.com/in/francisvnguyen/',
    image: '/leadership/francis.jpg',
    bgColor: 'bg-black',
  },
  {
    name: 'Richard King',
    role: 'CTO',
    social: 'https://www.linkedin.com/in/richardking7/',
    image: '/leadership/richard.jpg',
    bgColor: 'bg-black',
  },
  {
    name: 'Uku Pyle',
    role: 'Chief Product Officer',
    social: 'https://www.linkedin.com/in/uku-pyle/',
    image: '/leadership/uku.jpg',
    bgColor: 'bg-black',
  },
  {
    name: 'Brent Bingham',
    role: 'Strategic Advisor',
    social: 'https://www.linkedin.com/in/brent-binghameclipse/',
    image: '/leadership/brent.png',
    bgColor: 'bg-white',
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero Section with Mission */}
      <section className="bg-black pt-32 pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-display-1 tracking-tight text-white">
              Mission
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body-lg mt-8 text-[#a0a0a0]">
              The physical economy is built by people, but it is slowed by complexity. We believe that true intelligence doesn't replace the human workforce; it creates a new caliber of operator.
            </p>
          </FadeIn>

          <div className="mt-16 space-y-12">
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-xl font-medium text-white" style={{ textTransform: 'none' }}>Creating Order from Chaos</h3>
                <p className="mt-4 text-body-lg text-[#a0a0a0]">
                  We are building the infrastructure that creates order out of physical chaos—automating the logistics and data so your teams have the clarity, speed, and foresight to execute perfectly.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-xl font-medium text-white" style={{ textTransform: 'none' }}>Scaling Human Capability</h3>
                <p className="mt-4 text-body-lg text-[#a0a0a0]">
                  We don't just optimize operations; we scale human capability. Our mission is to amplify what your teams can achieve, giving them the tools to operate at their highest potential.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative bg-black py-32 sm:py-40 lg:py-48">
        {/* Top gradient fade */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48"
          style={{
            background: 'linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(0 0 0 / 0.8) 30%, transparent 100%)',
          }}
        />

        {/* Bottom gradient fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48"
          style={{
            background: 'linear-gradient(to top, rgb(0 0 0) 0%, rgb(0 0 0 / 0.8) 30%, transparent 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <h2 className="text-display-2 tracking-tight text-white">
              Leadership
            </h2>
          </FadeIn>

          {/* Team Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="group">
                  {/* Image */}
                  <div className={`relative aspect-square overflow-hidden ${member.bgColor}`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-all duration-500 group-hover:scale-105"
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
