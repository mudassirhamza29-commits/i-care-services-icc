import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export default function ArtTherapyPage() {
  return (
    <ServicePageTemplate
      slug="art-therapy"
      title="Art Therapy"
      color="#5B3FA6"
      description="Person-centred creative support for emotional expression and healing."
      whatWeOffer={[
        "Guided creative expression",
        "Emotional exploration through art",
        "Confidence and self-esteem support",
        "Trauma-informed creative sessions",
        "Reflective one-to-one support",
      ]}
      whoIsItFor={[
        "People who find it difficult to express feelings through words",
        "Anyone seeking a gentle and creative therapeutic approach",
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
          description: "A practitioner helps you explore feelings at your pace.",
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
            "No. Art therapy is about expression and reflection, not artistic skill or producing a finished piece.",
        },
        {
          question: "What materials are used?",
          answer:
            "Sessions may use drawing, painting, collage or other accessible creative materials based on your preferences.",
        },
        {
          question: "Can I combine art therapy with other support?",
          answer:
            "Yes. Art therapy can complement counselling, mentoring and other person-centred support.",
        },
      ]}
      isSensitive={false}
    />
  );
}
