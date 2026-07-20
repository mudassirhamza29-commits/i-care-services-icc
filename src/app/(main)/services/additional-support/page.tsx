import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Additional Support",
  description: "Flexible first-contact guidance for connected or unclear support needs.",
  alternates: { canonical: "/services/additional-support" },
};

export default function AdditionalSupportPage() {
  return (
    <ServicePageTemplate
      slug="additional-support"
      title="Additional Support"
      color="#F4845F"
      description="Flexible guidance for needs that do not fit neatly within a single service."
      whatWeOffer={[
        {
          title: "Needs-Led Guidance",
          description:
            "A flexible first conversation when the issue does not fit neatly into one service area.",
        },
        {
          title: "Practical Problem Solving",
          description:
            "Help breaking a situation into smaller steps and deciding what needs attention first.",
        },
        {
          title: "Service Coordination",
          description:
            "Support organising information when several services, forms or conversations are involved.",
        },
        {
          title: "Advocacy and Signposting",
          description:
            "Help preparing questions, explaining concerns and identifying appropriate support routes.",
        },
        {
          title: "Follow-Up Planning",
          description:
            "A clearer plan for what happens next, including what information to gather before follow-up.",
        },
      ]}
      whoIsItFor={[
        "Anyone unsure which service is right for them",
        "People facing several connected challenges",
        "Anyone who needs practical guidance and a clear starting point",
      ]}
      whatToExpect={[
        {
          step: 1,
          title: "Tell Us What Is Happening",
          description: "You can describe the situation in your own words.",
        },
        {
          step: 2,
          title: "Clarify Priorities",
          description: "We identify what needs attention first.",
        },
        {
          step: 3,
          title: "Connect Support",
          description: "We bring together the most relevant guidance and services.",
        },
        {
          step: 4,
          title: "Review",
          description: "We stay in touch and adjust support as needs change.",
        },
      ]}
      faqs={[
        {
          question: "What if I do not know which service I need?",
          answer:
            "That is exactly what this service is for. Start by telling us what is happening and we will help identify the right support.",
        },
        {
          question: "Can you help with more than one issue?",
          answer:
            "Yes. We can look at connected needs together and coordinate practical next steps.",
        },
      ]}
      isSensitive={false}
    />
  );
}
