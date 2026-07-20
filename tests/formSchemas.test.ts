import test from "node:test";
import assert from "node:assert/strict";

import {
  contactSchema,
  professionalReferralSchema,
  selfReferralSchema,
} from "../src/lib/formSchemas";

const startedAt = Date.now() - 5000;

test("contact schema accepts a valid minimised enquiry", () => {
  const result = contactSchema.safeParse({
    name: "Test User",
    contactMethod: "Email",
    contactDetail: "test@example.com",
    subject: "General enquiry",
    serviceArea: "Housing Support",
    message: "Please contact me about support options.",
    isEmergency: "No",
    consent: true,
    website: "",
    startedAt,
  });

  assert.equal(result.success, true);
});

test("contact schema rejects honeypot spam", () => {
  const result = contactSchema.safeParse({
    name: "Spam User",
    contactMethod: "Email",
    contactDetail: "spam@example.com",
    subject: "General enquiry",
    serviceArea: "Housing Support",
    message: "This is a spam message with enough detail to submit.",
    isEmergency: "No",
    consent: true,
    website: "bot-site",
    startedAt,
  });

  assert.equal(result.success, false);
});

test("self referral blocks emergency submissions", () => {
  const result = selfReferralSchema.safeParse({
    name: "A Person",
    preferredName: "",
    contactMethod: "Phone",
    contactDetail: "020 8040 0433",
    serviceArea: "Mental Health",
    message: "I need someone to contact me about support.",
    isEmergency: "Yes",
    consent: true,
    website: "",
    startedAt,
  });

  assert.equal(result.success, false);
  assert.match(
    JSON.stringify(result.error?.flatten().fieldErrors),
    /emergency and crisis guidance/,
  );
});

test("professional referral blocks emergency submissions", () => {
  const result = professionalReferralSchema.safeParse({
    professionalName: "Professional User",
    role: "Support Worker",
    organisation: "Example Organisation",
    contactMethod: "Email",
    contactDetail: "pro@example.com",
    clientName: "Client initials",
    serviceArea: "Housing Support",
    reason: "Please contact me to discuss a possible referral.",
    isEmergency: "Yes",
    clientConsent: "Yes",
    professionalDeclaration: true,
    consentDeclaration: true,
    website: "",
    startedAt,
  });

  assert.equal(result.success, false);
  assert.match(
    JSON.stringify(result.error?.flatten().fieldErrors),
    /emergency and crisis guidance/,
  );
});

test("contact detail must match the selected contact method", () => {
  const result = contactSchema.safeParse({
    name: "Taylor Example",
    contactMethod: "Email",
    contactDetail: "020 8040 0433",
    subject: "General enquiry",
    serviceArea: "Housing Support",
    message: "Please contact me about the available support.",
    isEmergency: "No",
    consent: true,
    website: "",
    startedAt: Date.now() - 5000,
  });

  assert.equal(result.success, false);
  if (!result.success) {
    assert.ok(result.error.flatten().fieldErrors.contactDetail);
  }
});

test("professional referrals without consent require a stated basis", () => {
  const result = professionalReferralSchema.safeParse({
    professionalName: "Alex Professional",
    role: "Support worker",
    organisation: "Example Organisation",
    contactMethod: "Email",
    contactDetail: "alex@example.org",
    clientName: "AB",
    serviceArea: "Welfare Support",
    reason: "The client may benefit from first-contact support.",
    isEmergency: "No",
    clientConsent: "No",
    professionalDeclaration: true,
    consentDeclaration: true,
    website: "",
    startedAt: Date.now() - 5000,
  });

  assert.equal(result.success, false);
  if (!result.success) {
    assert.ok(result.error.flatten().fieldErrors.authorityBasis);
  }
});
