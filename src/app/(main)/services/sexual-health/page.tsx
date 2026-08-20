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
      description="Your health deserves privacy, respect and honest information. We offer a judgement-free first conversation and appropriate healthcare referral."
      whatWeOffer={[
        {
          title: "Sexual Health Information",
          description:
            "Respectful information that helps people understand questions, concerns and possible next steps.",
        },
        {
          title: "HIV/AIDS Support",
          description:
            "Respectful support for people living with HIV or AIDS and for those affected around them, including family members, partners and carers, without judgement or assumptions.",
        },
        {
          title: "Specialist Support Services",
          description:
            "Help understanding and accessing appropriate specialist HIV services, qualified healthcare advice and trusted community organisations.",
        },
        {
          title: "HIV Peer Support",
          description:
            "A route towards appropriate peer support, where available, for shared understanding, practical encouragement and connection.",
        },
        {
          title: "Rapid HIV Testing Access",
          description:
            "Help finding an appropriate provider for rapid HIV testing and understanding where to access qualified healthcare advice.",
        },
        {
          title: "Specialist and LGBTQ+ Routes",
          description:
            "Inclusive information and referral to appropriate sexual-health, relationship and LGBTQ+ community services.",
        },
        {
          title: "Sexuality, Faith and Religion",
          description:
            "A dedicated, non-judgemental space to explore how sexuality, faith, religion, identity and belonging may intersect, with your values and choices kept at the centre.",
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
        { question: "Can I talk about sexuality and religion together?", answer: "Yes. You can talk about sexuality, faith, religion, identity or belonging without pressure to take a particular view. We listen respectfully and help you consider support that fits your circumstances." },
        { question: "Can I engage anonymously?", answer: "You can ask general questions before sharing detailed personal information. We will explain when details are needed to provide support." },
      ]}
      isSensitive
      confidentialityNote="Your information is handled carefully. Safeguarding or immediate safety concerns may limit confidentiality."
    />
  );
}
