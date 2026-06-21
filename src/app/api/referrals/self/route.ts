import { NextRequest, NextResponse } from "next/server";

import { selfReferralSchema } from "@/lib/formSchemas";
import {
  auditSubmission,
  parseAndValidate,
  referralReference,
} from "@/lib/server/formHandling";

export async function POST(request: NextRequest) {
  const result = await parseAndValidate(request, selfReferralSchema);
  if (result.response) return result.response;

  const data = result.data;
  const reference = referralReference("SELF");

  auditSubmission("self_referral.submitted", {
    reference,
    serviceCount: String(data.services.length),
    urgency: data.urgency ?? "not-provided",
  });

  return NextResponse.json({ ok: true, reference });
}
