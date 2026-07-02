import { z } from "zod";

export const antiSpamSchema = z.object({
  website: z.string().max(0, "Spam protection failed").optional(),
  startedAt: z.number().int().positive(),
});

const contactMethod = z.enum(["Phone", "Email"]);
const emergencyStatus = z.enum(["No", "Yes"]);

const minimumContactFields = {
  name: z.string().trim().min(2, "Please enter your name"),
  contactMethod,
  contactDetail: z
    .string()
    .trim()
    .min(5, "Please enter the phone number or email address we should use")
    .max(120, "Please keep contact details brief"),
  serviceArea: z.string().trim().min(1, "Please select a service area"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters")
    .max(700, "Please keep this to 700 characters"),
  isEmergency: emergencyStatus,
  consent: z.literal(true, {
    error: "Consent is required to submit this form",
  }),
};

function blockEmergencySubmission<T extends { isEmergency: "No" | "Yes" }>(
  data: T,
  ctx: z.RefinementCtx,
) {
  if (data.isEmergency === "Yes") {
    ctx.addIssue({
      code: "custom",
      path: ["isEmergency"],
      message:
        "Please use the emergency and crisis guidance instead of submitting this form.",
    });
  }
}

export const contactSchema = antiSpamSchema
  .extend({
    ...minimumContactFields,
    subject: z.string().trim().min(1, "Please select a subject"),
  })
  .superRefine(blockEmergencySubmission);

export const selfReferralSchema = antiSpamSchema
  .extend({
    ...minimumContactFields,
    preferredName: z.string().trim().max(80).optional(),
  })
  .superRefine(blockEmergencySubmission);

export const professionalReferralSchema = antiSpamSchema
  .extend({
    professionalName: z.string().trim().min(2, "Please enter your name"),
    role: z.string().trim().min(2, "Please enter your role"),
    organisation: z.string().trim().min(2, "Please enter your organisation"),
    contactMethod,
    contactDetail: z
      .string()
      .trim()
      .min(5, "Please enter the phone number or email address we should use")
      .max(120, "Please keep contact details brief"),
    clientName: z.string().trim().max(120).optional(),
    serviceArea: z.string().trim().min(1, "Please select a service area"),
    reason: z
      .string()
      .trim()
      .min(10, "Please provide at least 10 characters")
      .max(700, "Please keep this to 700 characters"),
    isEmergency: emergencyStatus,
    clientConsent: z.enum(["Yes", "No", "Client lacks capacity"], {
      error: "Please confirm the consent position",
    }),
    professionalDeclaration: z.literal(true, {
      error: "Confirmation is required",
    }),
    consentDeclaration: z.literal(true, {
      error: "Confirmation is required",
    }),
  })
  .superRefine(blockEmergencySubmission);

export type ContactSubmission = z.infer<typeof contactSchema>;
export type SelfReferralSubmission = z.infer<typeof selfReferralSchema>;
export type ProfessionalReferralSubmission = z.infer<
  typeof professionalReferralSchema
>;
