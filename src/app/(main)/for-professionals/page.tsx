"use client";

import { motion } from "framer-motion";
import { Building2, Download, GraduationCap, HeartPulse, House, Scale, Stethoscope } from "lucide-react";

import { ProfessionalReferralForm } from "@/components/forms/ProfessionalReferralForm";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

const professionalTypes = [
  [Stethoscope, "GPs & Primary Care", "Joined-up community support beyond the consultation."],
  [HeartPulse, "Social Workers", "Responsive specialist input for complex client needs."],
  [House, "Housing Officers", "Practical wellbeing and welfare support alongside housing work."],
  [GraduationCap, "Schools & Education", "Early support for young people and their families."],
  [Scale, "Probation & Justice", "Person-centred pathways supporting stability and rehabilitation."],
  [Building2, "NHS Trusts", "Community follow-up that supports safer discharge and continuity."],
] as const;

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero title="For Professionals" subtitle="Seamless referral pathways for health and social care professionals" eyebrow="Professional referrals" />
      <section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <AnimatedSection className="mx-auto max-w-3xl text-center"><h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">Trusted by Professionals Across London</h2><p className="mt-6 leading-8 text-text-secondary">I-Care Services ICC works alongside GPs, social workers, NHS trusts, housing officers, schools, probation services, and voluntary sector organisations to provide specialist community support for their clients.</p></AnimatedSection>
        <AnimatedSection variant="staggerContainer" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{professionalTypes.map(([Icon,title,description])=><motion.article key={title} variants={fadeInUp} className="interactive-card rounded-3xl border border-cream-dark bg-white p-6"><Icon size={28} className="text-purple" /><h3 className="mt-4 font-heading text-xl font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-7 text-text-secondary">{description}</p></motion.article>)}</AnimatedSection>
      </div></section>
      <section className="bg-cream-dark"><div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <AnimatedSection variant="slideInLeft" className="grid grid-cols-2 gap-4">{[["48hr","Average response time"],["100%","Referral acknowledgement rate"],["7","Specialist services available"],["Free","No cost to clients"]].map(([number,label])=><div key={label} className="rounded-3xl bg-white p-6"><p className="font-heading text-4xl font-extrabold text-purple">{number}</p><p className="mt-2 text-sm font-semibold text-text-secondary">{label}</p></div>)}</AnimatedSection>
        <AnimatedSection variant="slideInRight"><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">Why refer to us</p><h2 className="mt-4 font-heading text-4xl font-extrabold text-navy">A Dependable Extension of Your Team</h2><ul className="mt-7 space-y-4">{["Dedicated professional referral pathway","Named keyworker assigned to each referral","Regular progress updates provided","Collaborative working and joint assessments","Specialist services not available elsewhere","Fully GDPR compliant data handling","CQC-aligned practice standards"].map((item)=><li key={item} className="flex gap-3 font-semibold text-navy"><span className="text-coral">✓</span>{item}</li>)}</ul></AnimatedSection>
      </div></section>
      <section className="bg-cream"><div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"><AnimatedSection className="mb-10 text-center"><h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">Make a Referral</h2><p className="mt-4 text-text-secondary">Secure, confidential referral form for registered professionals</p></AnimatedSection><ProfessionalReferralForm /></div></section>
      <section className="bg-cream-dark px-4 py-20 text-center sm:px-6 lg:px-8"><AnimatedSection className="mx-auto max-w-3xl"><h2 className="font-heading text-4xl font-extrabold text-navy">Want to Partner With Us?</h2><p className="mt-5 leading-8 text-text-secondary">We actively seek collaborative relationships with organisations that share our commitment to community wellbeing. Whether you&apos;re interested in a formal partnership, MOU, or simply want to discuss joint working, we&apos;d love to hear from you.</p><Button href="/contact" variant="secondary" className="mt-7">Get In Touch</Button></AnimatedSection></section>
      <section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><AnimatedSection><h2 className="font-heading text-4xl font-extrabold text-navy">Download Resources</h2></AnimatedSection><AnimatedSection variant="staggerContainer" className="mt-10 grid gap-5 lg:grid-cols-3">{[["Referral Criteria & Eligibility Guide","Who we support and the information needed for referral.","/downloads/referral-criteria.pdf"],["Service Information Pack","A concise overview of all seven I-Care services.","/downloads/service-information-pack.pdf"],["Data Sharing Agreement Template","A starting template for secure partnership working.","/downloads/data-sharing-template.pdf"]].map(([title,description,href])=><motion.article key={title} variants={fadeInUp} className="interactive-card rounded-3xl border border-cream-dark p-6"><Download size={28} className="text-coral" /><h3 className="mt-5 font-heading text-xl font-extrabold text-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p><a href={href} download className="interactive-button mt-6 inline-flex rounded-full border-2 border-navy px-4 py-2.5 text-sm font-bold text-navy">Download PDF</a></motion.article>)}</AnimatedSection></div></section>
    </>
  );
}
