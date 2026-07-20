import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sexual Health Support",
  description: "Inclusive sexual health information and signposting with clear safeguarding limits.",
  alternates: { canonical: "/services/sexual-health" },
};

export default function SexualHealthPage() {
  return (
    <ServicePageTemplate
      slug="sexual-health"
      title="Sexual Health"
      color="#F4845F"
      description="Inclusive, judgement-free information and support focused on safety, dignity and healthy relationships."
      whatWeOffer={[
        {
          title: "Sexual Health Information",
          description:
            "Respectful information that helps people understand questions, concerns and possible next steps.",
        },
        {
          title: "STI Testing and Clinic Signposting",
          description:
            "Guidance towards appropriate testing, clinic or official health information routes.",
        },
        {
          title: "Relationship Support Signposting",
          description:
            "Support identifying safe, respectful routes for relationship concerns or difficult conversations.",
        },
        {
          title: "LGBTQ+ Information Routes",
          description:
            "Signposting to inclusive information and services, with final wording pending organisational confirmation.",
        },
        {
          title: "Contraception Information",
          description:
            "Plain-English information and signposting to qualified health services for contraception advice.",
        },
      ]}
      whoIsItFor={["Anyone with questions or concerns about sexual health", "LGBTQ+ individuals seeking inclusive information", "Young people needing clear, respectful signposting", "Anyone who needs a judgement-free first conversation"]}
      whatToExpect={[
        { step: 1, title: "Private Contact", description: "You choose how much you want to share initially." },
        { step: 2, title: "Clarify Needs", description: "We listen and identify the information or support required." },
        { step: 3, title: "Offer Options", description: "We provide guidance and appropriate signposting." },
        { step: 4, title: "Follow Your Lead", description: "Further support happens only with your agreement." },
      ]}
      faqs={[
        { question: "Is the service completely confidential?", answer: "Information is handled carefully, but confidentiality has safeguarding and immediate safety limits. We explain those limits clearly." },
        { question: "Is the service LGBTQ+ inclusive?", answer: "We aim to provide respectful, non-judgemental information and signposting for everyone who contacts us." },
        { question: "Can I engage anonymously?", answer: "You can ask general questions before sharing detailed personal information. We will explain when details are needed to provide support." },
      ]}
      isSensitive
      confidentialityNote="Your information is handled carefully. Safeguarding or immediate safety concerns may limit confidentiality."
    />
  );
}
