"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { scaleIn } from "@/lib/animations";

interface TeamMember {
  name: string;
  initials: string;
  role: string;
  bio: string;
  specialisms: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "David Okonkwo",
    initials: "DO",
    role: "Founder & Director",
    bio: "David founded I-Care to make specialist support easier to reach and more human. He leads the organisation with a focus on partnership, quality and lasting community impact.",
    specialisms: ["Health & Social Care", "Leadership"],
  },
  {
    name: "Amara Thompson",
    initials: "AT",
    role: "Head of Mental Health",
    bio: "Amara brings a compassionate, trauma-informed approach to emotional wellbeing. She helps people feel safe, understood and actively involved in their recovery.",
    specialisms: ["Psychology", "Counselling", "Trauma"],
  },
  {
    name: "James Osei",
    initials: "JO",
    role: "Housing & Welfare Specialist",
    bio: "James supports people facing housing insecurity, benefit challenges and complex systems. His practical advocacy helps clients understand their rights and take confident action.",
    specialisms: ["Housing Law", "Welfare", "Advocacy"],
  },
  {
    name: "Fatima Al-Hassan",
    initials: "FA",
    role: "Family Support Coordinator",
    bio: "Fatima works alongside families during pressure, change and crisis. She coordinates sensitive support that recognises each family member's voice and circumstances.",
    specialisms: ["Family", "Child Support", "Crisis"],
  },
  {
    name: "Sarah Mitchell",
    initials: "SM",
    role: "Community Outreach Lead",
    bio: "Sarah builds trusted relationships with residents, community groups and partner organisations. She creates welcoming routes into support for people who may otherwise feel excluded.",
    specialisms: ["Outreach", "Peer Support", "Engagement"],
  },
  {
    name: "Marcus Greene",
    initials: "MG",
    role: "Counsellor & Peer Support Lead",
    bio: "Marcus combines professional counselling skills with a strong belief in the value of lived experience. He supports people to recognise their strengths and build meaningful next steps.",
    specialisms: ["Counselling", "Mentoring", "Lived Experience"],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="Dedicated professionals united by a passion for community support"
        eyebrow="The people behind I-Care"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              Expertise with empathy
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              One Team, Many Specialisms
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
              Our team combines experience across health and social care,
              mental health, housing, welfare and family support. We work
              together so every person receives thoughtful, joined-up guidance
              rather than being passed from service to service.
            </p>
          </AnimatedSection>

          <AnimatedSection
            variant="staggerContainer"
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                variants={scaleIn}
                className="interactive-card group flex flex-col rounded-[2rem] border border-cream-dark bg-white p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-navy to-purple font-heading text-xl font-extrabold text-white shadow-lg"
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="interactive-button flex h-10 w-10 items-center justify-center rounded-full border border-cream-dark text-navy hover:border-purple hover:bg-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                  >
                    <Linkedin size={18} aria-hidden="true" />
                  </a>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-extrabold text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-extrabold text-coral">
                  {member.role}
                </p>
                <p className="mt-5 flex-1 text-sm leading-7 text-text-secondary">
                  {member.bio}
                </p>
                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={`${member.name} specialisms`}
                >
                  {member.specialisms.map((specialism) => (
                    <li
                      key={specialism}
                      className="rounded-full bg-orange/15 px-3 py-1.5 text-xs font-bold text-coral"
                    >
                      {specialism}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimatedSection
          variant="scaleIn"
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-cream px-6 py-14 text-center sm:px-10 lg:py-16"
        >
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-24 h-56 w-56 rounded-full border-[42px] border-orange/15"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[48px] border-purple/10"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              Join the team
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Want to Make a Difference?
            </h2>
            <p className="mt-5 leading-8 text-text-secondary">
              We welcome thoughtful, community-minded people who believe
              support should be compassionate, inclusive and practical.
            </p>
            <Button href="/contact" className="mt-8 gap-2 px-7 text-base">
              Contact Us
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
