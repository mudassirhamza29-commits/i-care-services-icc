import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export default function SexualHealthPage() {
  return (
    <ServicePageTemplate
      slug="sexual-health"
      title="Sexual Health"
      color="#F4845F"
      description="Inclusive, judgement-free information and support focused on safety, dignity and healthy relationships."
      whatWeOffer={["Sexual health information", "STI testing and clinic signposting", "Relationship support", "LGBTQ+ inclusive guidance", "Contraception information"]}
      whoIsItFor={["Anyone with questions or concerns about sexual health", "LGBTQ+ individuals seeking inclusive support", "Young people needing clear, respectful information", "Anyone who needs a judgement-free space"]}
      whatToExpect={[
        { step: 1, title: "Private Contact", description: "You choose how much you want to share initially." },
        { step: 2, title: "Clarify Needs", description: "We listen and identify the information or support required." },
        { step: 3, title: "Offer Options", description: "We provide guidance and trusted specialist signposting." },
        { step: 4, title: "Follow Your Lead", description: "Further support happens only with your agreement." },
      ]}
      faqs={[
        { question: "Is the service completely confidential?", answer: "Yes. Your privacy is treated with the strictest confidence, subject only to immediate safeguarding risks." },
        { question: "Is the service LGBTQ+ inclusive?", answer: "Yes. Our support is fully inclusive, affirming and free from judgement." },
        { question: "Can I engage anonymously?", answer: "Anonymous initial engagement is possible. We will explain if any details are needed for a particular referral or service." },
      ]}
      isSensitive
      confidentialityNote="Your information is held in the strictest confidence. Support is non-judgemental, fully inclusive, and an anonymous initial option is available."
    />
  );
}
