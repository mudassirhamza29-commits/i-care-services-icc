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
        "NHS navigation",
        "Social care process guidance",
        "Care coordination",
        "Health advocacy",
        "Specialist signposting",
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
        { question: "Do I need a GP referral?", answer: "【CONTENT NEEDED: confirm whether people can self-refer without a GP or professional referral】" },
        { question: "Is the service free?", answer: "【CONTENT NEEDED: confirm whether support is free to access】" },
        { question: "How quickly will you respond?", answer: "【CONTENT NEEDED: response-time commitment in working days】" },
      ]}
      isSensitive={false}
    />
  );
}
