import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Wellbeing Support",
  description: "Creative wellbeing activities for expression, reflection and support signposting.",
};

export default function ArtTherapyPage() {
  return (
    <ServicePageTemplate
      slug="art-therapy"
      title="Creative Wellbeing Support"
      color="#5B3FA6"
      description="Person-centred creative activities for emotional expression, reflection and wellbeing."
      whatWeOffer={[
        "Guided creative activities",
        "Emotional expression through creative work",
        "Confidence and self-esteem support",
        "Reflective one-to-one guidance",
        "Signposting to regulated therapy where needed",
      ]}
      whoIsItFor={[
        "People who find it difficult to express feelings through words",
        "Anyone seeking a gentle creative approach",
        "People working through stress, loss, trauma or emotional change",
      ]}
      whatToExpect={[
        {
          step: 1,
          title: "Initial Conversation",
          description: "We explore what you hope to gain from creative support.",
        },
        {
          step: 2,
          title: "Creative Approach",
          description: "You choose materials and activities that feel comfortable.",
        },
        {
          step: 3,
          title: "Supported Expression",
          description: "A support worker helps you reflect at your pace.",
        },
        {
          step: 4,
          title: "Reflection",
          description: "Together, we review insights and agree helpful next steps.",
        },
      ]}
      faqs={[
        {
          question: "Do I need artistic experience?",
          answer:
            "No. Creative wellbeing support is about expression and reflection, not artistic skill or producing a finished piece.",
        },
        {
          question: "What materials are used?",
          answer:
            "Sessions may use drawing, painting, collage or other accessible creative materials based on your preferences.",
        },
        {
          question: "Can I combine creative support with other support?",
          answer:
            "Yes. It can sit alongside mentoring, wellbeing guidance and signposting to regulated services where appropriate.",
        },
      ]}
      isSensitive={false}
    />
  );
}
