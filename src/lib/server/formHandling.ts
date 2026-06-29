import { randomUUID } from "crypto";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { ZodError, ZodType } from "zod";

const MIN_SUBMIT_MS = 2500;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const buckets = new Map<string, { count: number; resetAt: number }>();

export function clientKey(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

export function rateLimit(request: NextRequest) {
  const key = clientKey(request);
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return null;
  }

  if (current.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait and try again." },
      { status: 429 },
    );
  }

  current.count += 1;
  return null;
}

export async function parseAndValidate<T extends { startedAt: number }>(
  request: NextRequest,
  schema: ZodType<T>,
) {
  const rateLimited = rateLimit(request);
  if (rateLimited) return { response: rateLimited };

  const body = await request.json().catch(() => null);
  if (!body) {
    return {
      response: NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      ),
    };
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return {
      response: validationResponse(parsed.error),
    };
  }

  if (Date.now() - parsed.data.startedAt < MIN_SUBMIT_MS) {
    return {
      response: NextResponse.json(
        { error: "Submission blocked by spam protection." },
        { status: 400 },
      ),
    };
  }

  return { data: parsed.data };
}

export function validationResponse(error: ZodError) {
  return NextResponse.json(
    {
      error: "Please correct the highlighted fields.",
      fields: error.flatten().fieldErrors,
    },
    { status: 422 },
  );
}

export function referralReference(prefix: "SELF" | "PRO") {
  return `IC-${prefix}-${new Date().getFullYear()}-${randomUUID()
    .slice(0, 8)
    .toUpperCase()}`;
}

export function contactReference() {
  return `IC-CONTACT-${new Date().getFullYear()}-${randomUUID()
    .slice(0, 8)
    .toUpperCase()}`;
}

export function auditSubmission(event: string, metadata: Record<string, string>) {
  console.info(
    JSON.stringify({
      event,
      at: new Date().toISOString(),
      ...metadata,
    }),
  );
}
