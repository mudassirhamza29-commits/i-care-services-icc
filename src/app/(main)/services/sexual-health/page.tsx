import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sexual Health Support",
  description: "Inclusive sexual health information and signposting with clear safeguarding limits.",
};

export default function SexualHealthPage() {
  return (
    <ServicePageTemplate
      slug="sexual-health"
      title="Sexual Health"
      color="#F4845F"
      description="Inclusive, judgement-free information and support focused on safety, dignity and healthy relationships."
      whatWeOffer={["Sexual health information", "STI testing and clinic signposting", "Relationship support", "LGBTQ+ inclusive guidance", "Contraception information"]}
      whoIsItFor={["Anyone with questions or concerns about sexual health", "LGBTQ+ individuals seeking inclusive information", "Young people needing clear, respectful signposting", "Anyone who needs a judgement-free first conversation"]}
      whatToExpect={[
        { step: 1, title: "Private Contact", description: "You choose how much you want to share initially." },
        { step: 2, title: "Clarify Needs", description: "We listen and identify the information or support required." },
        { step: 3, title: "Offer Options", description: "We provide guidance and appropriate signposting." },
        { step: 4, title: "Follow Your Lead", description: "Further support happens only with your agreement." },
      ]}
      faqs={[
        { question: "Is the service completely confidential?", answer: "Information is handled carefully, but confidentiality has safeguarding and immediate safety limits. We explain those limits clearly." },
        { question: "Is the service LGBTQ+ inclusive?", answer: "【CONTENT NEEDED: confirm LGBTQ+ inclusion statement and any staff training or policy wording】" },
        { question: "Can I engage anonymously?", answer: "【CONTENT NEEDED: confirm whether anonymous initial engagement is operationally available】" },
      ]}
      isSensitive
      confidentialityNote="Your information is handled carefully. Safeguarding or immediate safety concerns may limit confidentiality."
    />
  );
}
