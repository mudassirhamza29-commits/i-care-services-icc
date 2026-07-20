import { NextRequest, NextResponse } from "next/server";

import { selfReferralSchema } from "@/lib/formSchemas";
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
  const result = await parseAndValidate(request, selfReferralSchema);
  if (result.response) return result.response;

  const data = result.data;
  const reference = referralReference("SELF");

  try {
    const delivery = await deliverSubmission({
      kind: "self-referral",
      reference,
      submittedAt: new Date().toISOString(),
      payload: data,
      metadata: {},
    });

    auditSubmission("self_referral.delivered", {
      reference,
      provider: delivery.provider,
      status: String(delivery.status),
    });

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    const publicError = publicDeliveryError(error);
    auditSubmission("self_referral.delivery_failed", {
      reference,
      code: publicError.code,
    });

    return NextResponse.json(
      { error: publicError.message, code: publicError.code },
      { status: publicError.status },
    );
  }
}
