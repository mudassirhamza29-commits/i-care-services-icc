import { NextRequest, NextResponse } from "next/server";

import { contactSchema } from "@/lib/formSchemas";
import {
  auditSubmission,
  contactReference,
  parseAndValidate,
} from "@/lib/server/formHandling";
import {
  deliverSubmission,
  publicDeliveryError,
} from "@/lib/server/submissionDelivery";

export async function POST(request: NextRequest) {
  const result = await parseAndValidate(request, contactSchema);
  if (result.response) return result.response;

  const data = result.data;
  const reference = contactReference();

  try {
    const delivery = await deliverSubmission({
      kind: "contact",
      reference,
      submittedAt: new Date().toISOString(),
      payload: data,
      metadata: {},
    });

    auditSubmission("contact.delivered", {
      reference,
      provider: delivery.provider,
      status: String(delivery.status),
    });

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    const publicError = publicDeliveryError(error);
    auditSubmission("contact.delivery_failed", {
      reference,
      code: publicError.code,
    });

    return NextResponse.json(
      { error: publicError.message, code: publicError.code },
      { status: publicError.status },
    );
  }
}
