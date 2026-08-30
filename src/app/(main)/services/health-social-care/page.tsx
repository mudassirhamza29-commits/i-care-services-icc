import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Social Care Support",
  description: "Guidance and signposting for health and social care services.",
  alternates: { canonical: "/services/health-social-care" },
};

export default function HealthSocialCarePage() {
  return (
    <ServicePageTemplate
      slug="health-social-care"
      title="Health & Social Care"
      color="#F4845F"
      description="Practical support to understand services, coordinate care and make sure your voice is heard."
      whatWeOffer={[
        {
          title: "NHS Navigation",
          description:
            "Help understanding appointments, letters, services and the questions to ask when speaking with health teams.",
        },
        {
          title: "Community Care Services",
          description:
            "Plain-English help understanding community care services, assessments and what information may be useful.",
        },
        {
          title: "Care Packages and Coordination",
          description:
            "Help understanding possible care-package routes and making conversations between services easier to follow.",
        },
        {
          title: "Health Advocacy",
          description:
            "Help preparing what you want to say so your concerns, preferences and questions are clearly heard.",
        },
        {
          title: "Community Resources and Signposting",
          description:
            "Connection to useful community resources and relevant services when another route is better placed to help.",
        },
      ]}
      whoIsItFor={[
        "Adults navigating health or social care services",
        "Unpaid carers seeking practical guidance",
        "People recently discharged from hospital",
      ]}
      whatToExpect={[
        { step: 1, title: "Listen", description: "We understand your current care and concerns." },
        { step: 2, title: "Map Services", description: "We identify services, processes and questions to raise." },
        { step: 3, title: "Coordinate", description: "We help connect professionals and clarify next steps." },
        { step: 4, title: "Advocate", description: "We support you to be heard throughout your care." },
      ]}
      faqs={[
        { question: "Do I need a GP referral?", answer: "You can use the contact routes shown on this website to ask about support. We will explain the most appropriate next step." },
        { question: "Is the service free?", answer: "We offer free, confidential, impartial advice without judgment. Private one-to-one support is available where needed. If an independent private service is an appropriate option, any separate cost is explained before referral." },
        { question: "How quickly will you respond?", answer: "We review requests as soon as possible, but this service is not monitored 24/7." },
      ]}
      isSensitive={false}
    />
  );
}
