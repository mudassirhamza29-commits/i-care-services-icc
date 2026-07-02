import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Social Care Support",
  description: "Guidance and signposting for health and social care services.",
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
          title: "Social Care Process Guidance",
          description:
            "Plain-English information about social care routes, assessments and what evidence may be useful.",
        },
        {
          title: "Care Coordination",
          description:
            "Support to organise information and make conversations between services easier to follow.",
        },
        {
          title: "Health Advocacy",
          description:
            "Help preparing what you want to say so your concerns, preferences and questions are clearly heard.",
        },
        {
          title: "Appropriate Signposting",
          description:
            "Guidance towards relevant services when another route is better placed to help.",
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
        { question: "Is the service free?", answer: "Access details are explained before support begins." },
        { question: "How quickly will you respond?", answer: "We review requests as soon as possible, but this service is not monitored 24/7." },
      ]}
      isSensitive={false}
    />
  );
}
