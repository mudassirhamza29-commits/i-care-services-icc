import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Wellbeing Support",
  description: "Creative wellbeing activities and art therapy delivered by a trained Art Therapist.",
  alternates: { canonical: "/services/art-therapy" },
};

export default function ArtTherapyPage() {
  return (
    <ServicePageTemplate
      slug="art-therapy"
      title="Creative Wellbeing Support"
      color="#5B3FA6"
      description="Person-centred creative activities for emotional expression, reflection and wellbeing."
      whatWeOffer={[
        {
          title: "Art Therapy",
          description:
            "Art Therapy is delivered by a trained Art Therapist, offering a supported creative space for expression, reflection and emotional wellbeing.",
        },
        {
          title: "Guided Creative Activities",
          description:
            "Gentle creative exercises that help people reflect, slow down and express what may be hard to put into words.",
        },
        {
          title: "Emotional Expression Through Creative Work",
          description:
            "Support using drawing, colour, collage or other accessible methods as a way into conversation and reflection.",
        },
        {
          title: "Confidence and Self-Esteem Support",
          description:
            "Activities focused on recognising strengths, building confidence and exploring personal goals.",
        },
        {
          title: "Reflective One-to-One Guidance",
          description:
            "A supportive space to talk through what comes up during creative work and decide useful next steps.",
        },
        {
          title: "Regulated Therapy Signposting",
          description:
            "Signposting to regulated therapy routes where a clinical or specialist therapeutic service is needed.",
        },
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
          description: "A trained Art Therapist helps you reflect at your pace.",
        },
        {
          step: 4,
          title: "Reflection",
          description: "Together, we review insights and agree helpful next steps.",
        },
      ]}
      faqs={[
        {
          question: "Who delivers Art Therapy?",
          answer:
            "Art Therapy is delivered by a trained Art Therapist. We will explain the form of support and any relevant professional or referral arrangements before it begins.",
        },
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
