import { NextRequest, NextResponse } from "next/server";

import { contactSchema } from "@/lib/formSchemas";
import { auditSubmission, parseAndValidate } from "@/lib/server/formHandling";

export async function POST(request: NextRequest) {
  const result = await parseAndValidate(request, contactSchema);
  if (result.response) return result.response;

  const data = result.data;
  auditSubmission("contact.submitted", {
    subject: data.subject,
    emailDomain: data.email.split("@")[1] ?? "unknown",
  });

  return NextResponse.json({ ok: true });
}
