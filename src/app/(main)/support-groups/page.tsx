import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, MessageCircleHeart, Rainbow, Sparkles, UsersRound, Waypoints } from "lucide-react";

import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Support Groups & Community",
  description: "Peer-led and community support for connection, shared experience, disability, migration, identity, faith and wellbeing.",
  alternates: { canonical: "/support-groups" },
};

const groups = [
  {
    title: "Monthly Peer Support",
    description: "A regular space for shared experience, encouragement and connection with people who understand.",
    icon: MessageCircleHeart,
  },
  {
    title: "Muslim in the City",
    description: "Specialist group support for Muslim people living with chronic disabilities and their peers.",
    icon: Sparkles,
  },
  {
    title: "Migrant & Refugee Support",
    description: "Support for BMEA migrants and refugees facing health inequalities and barriers to services, with dignity at the centre.",
    icon: Waypoints,
  },
  {
    title: "Disability Support",
    description: "Community connection, practical information and appropriate signposting for disabled people and peers.",
    icon: HeartHandshake,
  },
  {
    title: "LGBTQ+ Support",
    description: "A safe, respectful space for questions about sexuality, identity, wellbeing or belonging.",
    icon: Rainbow,
  },
  {
    title: "Faith & Pastoral Support",
    description: "Inclusive conversation about faith, spirituality, purpose or personal struggles with belief.",
    icon: UsersRound,
  },
];

export default function SupportGroupsPage() {
  return (
    <>
      <PageHero
        title="Support Groups & Community"
        subtitle="Connection, shared experience and a place where you do not have to explain everything from the beginning"
        eyebrow="You are welcome here"
        accentColor="#F4A261"
        serviceImage="/images/community/peer-support.webp"
        serviceImageAlt="A diverse group of adults listening to one another in a welcoming community space"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">More than an appointment</p>
            <h2 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">Sometimes support begins with belonging.</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Our groups bring people together around shared experiences,
              community connection and practical support. Contact us before
              attending so we can explain which groups are currently available
              and whether they are the right fit for you.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map(({ title, description, icon: Icon }, index) => (
              <AnimatedSection key={title} className={`interactive-card rounded-[2rem] p-7 ${index % 3 === 0 ? "bg-[#fff1e8]" : index % 3 === 1 ? "bg-cream-dark" : "bg-[#f4eff8]"}`}>
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-purple shadow-sm">
                  <Icon size={25} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-3xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <AnimatedSection variant="slideInLeft" className="relative aspect-[4/3] overflow-hidden rounded-[2rem_5rem_2rem_2rem] shadow-[var(--shadow-hover)]">
            <Image
              src="/images/community/inclusive-community.webp"
              alt="People from different cultures connecting at an inclusive community gathering"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>
          <AnimatedSection variant="slideInRight">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">Inclusive by design</p>
            <h2 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.045em] text-navy">Come as you are.</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Groups may support people affected by migration, disability,
              health inequality, loneliness, identity questions or faith. We
              listen without judgement and explain confidentiality and
              safeguarding limits clearly.
            </p>
            <p className="mt-5 text-sm font-semibold leading-7 text-text-secondary">
              Group availability can change. We do not promise a place or a
              particular group until the team has confirmed the current route.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
