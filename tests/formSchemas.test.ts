import test from "node:test";
import assert from "node:assert/strict";

import {
  contactSchema,
  professionalReferralSchema,
  selfReferralSchema,
} from "../src/lib/formSchemas";

const startedAt = Date.now() - 5000;

test("contact schema accepts a valid enquiry", () => {
  const result = contactSchema.safeParse({
    name: "Test User",
    email: "test@example.com",
    phone: "",
    subject: "General Enquiry",
    message: "This is a useful message with enough detail to submit.",
    consent: true,
    website: "",
    startedAt,
  });

  assert.equal(result.success, true);
});

test("contact schema rejects honeypot spam", () => {
  const result = contactSchema.safeParse({
    name: "Spam User",
    email: "spam@example.com",
    subject: "General Enquiry",
    message: "This is a spam message with enough detail to submit.",
    consent: true,
    website: "bot-site",
    startedAt,
  });

  assert.equal(result.success, false);
});

test("self referral crisis requires emergency confirmation", () => {
  const result = selfReferralSchema.safeParse({
    firstName: "A",
    lastName: "Person",
    dateOfBirth: "1990-01-01",
    phone: "020 8040 0433",
    email: "",
    postcode: "HA7 2DB",
    services: ["mental-health"],
    urgency: "Crisis",
    supportDetails:
      "I need support and this text is long enough for validation to pass.",
    accurate: true,
    dataConsent: true,
    website: "",
    startedAt,
  });

  assert.equal(result.success, false);
  assert.match(
    JSON.stringify(result.error?.flatten().fieldErrors),
    /not for emergencies/,
  );
});

test("professional emergency referral requires emergency confirmation", () => {
  const result = professionalReferralSchema.safeParse({
    professionalName: "Professional User",
    role: "Support Worker",
    organisation: "Example Organisation",
    organisationType: "Voluntary Sector",
    professionalEmail: "pro@example.com",
    professionalPhone: "020 8040 0433",
    clientFirstName: "Client",
    clientLastName: "Person",
    clientDob: "1990-01-01",
    clientEmail: "",
    clientPostcode: "HA7 2DB",
    services: ["housing-support"],
    urgency: "Emergency",
    reason:
      "This referral reason is deliberately long enough to satisfy the minimum length requirement.",
    clientConsent: "Yes",
    safeguarding: "No",
    professionalDeclaration: true,
    consentDeclaration: true,
    website: "",
    startedAt,
  });

  assert.equal(result.success, false);
  assert.match(
    JSON.stringify(result.error?.flatten().fieldErrors),
    /emergency referrals/,
  );
});
