import { NextRequest, NextResponse } from "next/server";

import { professionalReferralSchema } from "@/lib/formSchemas";
import {
  auditSubmission,
  parseAndValidate,
  referralReference,
} from "@/lib/server/formHandling";
import {
  deliverSubmission,
  publicDeliveryError,
} from "@/lib/server/submissionDelivery";

export async function POST(request: NextRequest) {
  const result = await parseAndValidate(request, professionalReferralSchema);
  if (result.response) return result.response;

  const data = result.data;
  const reference = referralReference("PRO");

  try {
    const delivery = await deliverSubmission({
      kind: "professional-referral",
      reference,
      submittedAt: new Date().toISOString(),
      payload: data,
      metadata: {},
    });

    auditSubmission("professional_referral.delivered", {
      reference,
      provider: delivery.provider,
      status: String(delivery.status),
    });

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    const publicError = publicDeliveryError(error);
    auditSubmission("professional_referral.delivery_failed", {
      reference,
      code: publicError.code,
    });

    return NextResponse.json(
      { error: publicError.message, code: publicError.code },
      { status: publicError.status },
    );
  }
}
