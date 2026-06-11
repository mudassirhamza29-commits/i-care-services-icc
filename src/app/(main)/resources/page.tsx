"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { CTABanner } from "@/components/home/CTABanner";
import { ResourceLibrary } from "@/components/resources/ResourceLibrary";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";

const organisations = [
  ["Samaritans","samaritans.org","Mental Health Crisis","https://www.samaritans.org/"],
  ["Shelter","shelter.org.uk","Housing Support","https://www.shelter.org.uk/"],
  ["Citizens Advice","citizensadvice.org.uk","Welfare & Legal","https://www.citizensadvice.org.uk/"],
  ["Mind","mind.org.uk","Mental Health","https://www.mind.org.uk/"],
  ["NHS 111","111.nhs.uk","Health Advice","https://111.nhs.uk/"],
  ["Turn2us","turn2us.org.uk","Benefits & Grants","https://www.turn2us.org.uk/"],
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Resources" subtitle="Helpful guides, information, and signposting to support you" eyebrow="Clear information, practical next steps" />
      <section className="bg-cream"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"><AnimatedSection className="mb-10 text-center"><h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">Browse Our Resource Library</h2><p className="mx-auto mt-4 max-w-2xl leading-8 text-text-secondary">Straightforward information designed to help you understand your options and prepare for the next conversation.</p></AnimatedSection><ResourceLibrary /></div></section>
      <section className="bg-navy text-white"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><AnimatedSection className="text-center"><h2 className="font-heading text-4xl font-extrabold text-cream sm:text-5xl">Other Useful Organisations</h2></AnimatedSection><AnimatedSection variant="staggerContainer" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{organisations.map(([name,website,category,href])=><motion.article key={name} variants={fadeInUp} className="rounded-3xl bg-white p-6 text-navy"><span className="rounded-full bg-orange/15 px-3 py-1 text-xs font-bold text-coral">{category}</span><h3 className="mt-5 font-heading text-2xl font-extrabold">{name}</h3><p className="mt-1 text-sm text-text-secondary">{website}</p><a href={href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-purple">Visit Website <ExternalLink size={16} /></a></motion.article>)}</AnimatedSection></div></section>
      <CTABanner />
    </>
  );
}
