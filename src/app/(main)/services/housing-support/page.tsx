import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing Support",
  description: "Practical housing guidance, signposting and first-contact support.",
  alternates: { canonical: "/services/housing-support" },
};

export default function HousingSupportPage() {
  return (
    <ServicePageTemplate
      slug="housing-support"
      title="Housing Support"
      color="#E8574A"
      description="Early, practical housing guidance to help you protect your home and move towards safe accommodation."
      whatWeOffer={[
        {
          title: "Homelessness Prevention",
          description:
            "Early guidance to understand notices, risk factors and the next practical steps to protect housing stability.",
        },
        {
          title: "Council Housing Support",
          description:
            "Help understanding housing applications, evidence requests and communication with housing teams.",
        },
        {
          title: "Landlord Dispute Guidance",
          description:
            "Support organising the facts, records and questions before contacting appropriate housing advice routes.",
        },
        {
          title: "Temporary Accommodation Support",
          description:
            "Guidance for people trying to understand temporary accommodation processes and available signposting.",
        },
        {
          title: "Housing Pathway Planning",
          description:
            "A clear look at possible next steps, documents to gather and services that may need to be involved.",
        },
      ]}
      whoIsItFor={["People at risk of homelessness or eviction", "Tenants experiencing landlord disputes", "Anyone living in unsafe or unsuitable accommodation"]}
      whatToExpect={[
        { step: 1, title: "Assess Risk", description: "We establish what is happening and how urgent it is." },
        { step: 2, title: "Review Options", description: "We explain rights, duties and available housing routes." },
        { step: 3, title: "Take Action", description: "We help with contact, evidence and practical applications." },
        { step: 4, title: "Stay Connected", description: "We support you as your housing situation develops." },
      ]}
      faqs={[
        { question: "Can you help if I am being evicted?", answer: "Contact us as early as you can so we can understand the notice, explain options and connect you with appropriate housing advice routes." },
        { question: "Can you find emergency accommodation?", answer: "We do not directly provide accommodation, but we can signpost emergency routes and help you approach the relevant council or service." },
      ]}
      isSensitive={false}
    />
  );
}
