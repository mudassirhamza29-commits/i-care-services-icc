import { NextRequest, NextResponse } from "next/server";

import { professionalReferralSchema } from "@/lib/formSchemas";
import {
  auditSubmission,
  parseAndValidate,
  referralReference,
} from "@/lib/server/formHandling";

export async function POST(request: NextRequest) {
  const result = await parseAndValidate(request, professionalReferralSchema);
  if (result.response) return result.response;

  const data = result.data;
  const reference = referralReference("PRO");

  auditSubmission("professional_referral.submitted", {
    reference,
    organisationType: data.organisationType,
    serviceCount: String(data.services.length),
    urgency: data.urgency,
  });

  return NextResponse.json({ ok: true, reference });
}
