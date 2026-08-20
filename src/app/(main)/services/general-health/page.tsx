import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Health Support",
  description: "Plain-English health access information and signposting.",
  alternates: { canonical: "/services/general-health" },
};

export default function GeneralHealthPage() {
  return (
    <ServicePageTemplate
      slug="general-health"
      title="General Health"
      color="#F4845F"
      description="Accessible health guidance that helps you understand care, access the NHS and manage your wellbeing."
      whatWeOffer={[
        {
          title: "Specialist and Holistic Health Support",
          description:
            "Help identifying appropriate specialist or holistic health routes and preparing questions for a suitably qualified health professional.",
        },
        {
          title: "Understanding Diagnostics",
          description:
            "Plain-English support to understand diagnostic pathways, terminology and useful questions to take back to your qualified healthcare professional.",
        },
        {
          title: "Medical Report Review",
          description:
            "Help reading the structure and wording of a medical report and preparing questions. We do not reinterpret results, diagnose conditions or replace clinical advice.",
        },
        {
          title: "Disabilities and Health Inequalities",
          description:
            "Support to better understand disabilities, barriers to care and health inequalities, and to make your access needs and concerns heard.",
        },
        {
          title: "General Health Check-Up / Health MOT",
          description:
            "Help exploring or arranging a general health check-up, sometimes called a Health MOT, through an appropriate qualified provider.",
        },
        {
          title: "GP Registration",
          description:
            "Help understanding registration steps, common barriers and what information a GP practice may ask for.",
        },
        {
          title: "Health Screening Guidance",
          description:
            "Plain-English information about screening invitations, questions to ask and where to find official guidance.",
        },
        {
          title: "Long-Term Condition Support",
          description:
            "Support preparing for appointments, keeping track of concerns and understanding care conversations.",
        },
        {
          title: "Medication Guidance",
          description:
            "Help organising medication questions for a pharmacist, GP or other qualified health professional.",
        },
        {
          title: "Health Literacy Support",
          description:
            "Help making letters, forms and health information easier to understand before taking the next step.",
        },
      ]}
      whoIsItFor={["People struggling to understand health access routes", "Anyone preparing questions about a long-term health condition", "People who need health information explained in plain English"]}
      whatToExpect={[
        { step: 1, title: "Understand", description: "We listen to your health access concerns and priorities." },
        { step: 2, title: "Explain", description: "We make information and available routes easier to understand." },
        { step: 3, title: "Connect", description: "We help you approach the appropriate health service." },
        { step: 4, title: "Build Confidence", description: "We support informed questions and future self-advocacy." },
      ]}
      faqs={[
        { question: "Can you help me register with a GP?", answer: "Yes. We can explain the registration process and help you address common access barriers." },
        { question: "Is interpretation support available?", answer: "Tell us about any communication needs when you contact us, and we will explain what support may be available." },
      ]}
      isSensitive={false}
    />
  );
}
