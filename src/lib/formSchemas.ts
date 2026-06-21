import { z } from "zod";

const ukPhone =
  /^(?:(?:\+44\s?\d{4}|0\d{4})\s?\d{6}|(?:\+44\s?\d{3}|0\d{3})\s?\d{3}\s?\d{4})$/;
const ukPostcode = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

export const antiSpamSchema = z.object({
  website: z.string().max(0, "Spam protection failed").optional(),
  startedAt: z.number().int().positive(),
});

export const contactSchema = antiSpamSchema.extend({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters")
    .max(1000, "Please keep your message to 1000 characters"),
  consent: z.literal(true, {
    error: "Consent is required to send your enquiry",
  }),
});

export const selfReferralSchema = antiSpamSchema
  .extend({
    firstName: z.string().trim().min(1, "First name is required"),
    lastName: z.string().trim().min(1, "Last name is required"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    gender: z.string().optional(),
    ethnicity: z.string().optional(),
    phone: z.string().trim().regex(ukPhone, "Enter a valid UK phone number"),
    email: z.union([
      z.literal(""),
      z.string().email("Enter a valid email address"),
    ]),
    postcode: z.string().trim().regex(ukPostcode, "Enter a valid UK postcode"),
    services: z.array(z.string()).min(1, "Select at least one service"),
    supportMethods: z.array(z.string()).optional(),
    urgency: z.string().optional(),
    crisisConfirmation: z.boolean().optional(),
    supportDetails: z
      .string()
      .trim()
      .min(20, "Please provide at least 20 characters")
      .max(1000, "Please keep this to 1000 characters"),
    accurate: z.literal(true, {
      error: "Please confirm the information is accurate",
    }),
    dataConsent: z.literal(true, { error: "Consent is required to submit" }),
    phoneConsent: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.urgency === "Crisis" && !data.crisisConfirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["crisisConfirmation"],
        message:
          "Please confirm you understand this form is not for emergencies.",
      });
    }
  });

const required = (label: string) =>
  z.string().trim().min(1, `${label} is required`);
const optionalEmail = z.union([
  z.literal(""),
  z.string().email("Enter a valid email"),
]);

export const professionalReferralSchema = antiSpamSchema
  .extend({
    professionalName: required("Full name"),
    role: required("Role"),
    organisation: required("Organisation"),
    organisationType: required("Organisation type"),
    professionalEmail: z.string().email("Enter a valid professional email"),
    professionalPhone: required("Direct phone number"),
    clientFirstName: required("Client first name"),
    clientLastName: required("Client last name"),
    clientDob: required("Client date of birth"),
    clientGender: z.string().optional(),
    clientPhone: z.string().optional(),
    clientEmail: optionalEmail,
    clientPostcode: required("Client postcode"),
    services: z.array(z.string()).min(1, "Select at least one service"),
    urgency: required("Urgency level"),
    emergencyConfirmation: z.boolean().optional(),
    reason: z
      .string()
      .trim()
      .min(50, "Please provide at least 50 characters")
      .max(2000),
    background: z.string().max(2000).optional(),
    clientConsent: required("Client consent status"),
    safeguarding: required("Safeguarding status"),
    safeguardingDetails: z.string().optional(),
    professionalDeclaration: z.literal(true, {
      error: "Confirmation is required",
    }),
    consentDeclaration: z.literal(true, { error: "Confirmation is required" }),
  })
  .superRefine((data, ctx) => {
    if (
      data.safeguarding === "Yes" &&
      (!data.safeguardingDetails ||
        data.safeguardingDetails.trim().length < 20)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["safeguardingDetails"],
        message:
          "Provide at least 20 characters about the safeguarding concern",
      });
    }

    if (data.urgency === "Emergency" && !data.emergencyConfirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["emergencyConfirmation"],
        message:
          "Please confirm you understand emergency referrals must use emergency services.",
      });
    }
  });

export type ContactSubmission = z.infer<typeof contactSchema>;
export type SelfReferralSubmission = z.infer<typeof selfReferralSchema>;
export type ProfessionalReferralSubmission = z.infer<
  typeof professionalReferralSchema
>;
