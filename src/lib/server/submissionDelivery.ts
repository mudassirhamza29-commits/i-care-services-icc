import { createHmac } from "crypto";

export type SubmissionKind =
  | "contact"
  | "self-referral"
  | "professional-referral";

export interface SubmissionEnvelope<T> {
  kind: SubmissionKind;
  reference: string;
  submittedAt: string;
  payload: T;
  metadata: Record<string, string>;
}

export interface DeliveryResult {
  delivered: boolean;
  provider: "webhook";
  status: number;
}

const DEFAULT_TIMEOUT_MS = 8000;

export class SubmissionDeliveryError extends Error {
  constructor(
    message: string,
    public readonly code:
      | "DELIVERY_NOT_CONFIGURED"
      | "DELIVERY_CONFIG_INVALID"
      | "DELIVERY_FAILED",
    public readonly status = 503,
  ) {
    super(message);
    this.name = "SubmissionDeliveryError";
  }
}

function getWebhookUrl() {
  return process.env.SUBMISSION_WEBHOOK_URL?.trim();
}

function assertWebhookUrl(rawUrl: string | undefined) {
  if (!rawUrl) {
    throw new SubmissionDeliveryError(
      "Submission delivery is not configured. Please contact us by phone or email.",
      "DELIVERY_NOT_CONFIGURED",
    );
  }

  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new SubmissionDeliveryError(
      "Submission delivery is not configured correctly.",
      "DELIVERY_CONFIG_INVALID",
    );
  }

  const allowHttp =
    process.env.NODE_ENV !== "production" &&
    process.env.ALLOW_INSECURE_SUBMISSION_WEBHOOK === "true";

  if (url.protocol !== "https:" && !(allowHttp && url.protocol === "http:")) {
    throw new SubmissionDeliveryError(
      "Submission delivery must use a secure HTTPS endpoint.",
      "DELIVERY_CONFIG_INVALID",
    );
  }

  return url.toString();
}

function signBody(body: string) {
  const secret = process.env.SUBMISSION_WEBHOOK_SECRET;
  if (!secret) return undefined;

  return createHmac("sha256", secret).update(body).digest("hex");
}

export async function deliverSubmission<T>(
  envelope: SubmissionEnvelope<T>,
): Promise<DeliveryResult> {
  const webhookUrl = assertWebhookUrl(getWebhookUrl());
  const body = JSON.stringify(envelope);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
  const signature = signBody(body);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "I-Care-Services-Website/1.0",
        ...(signature ? { "X-Icare-Signature": `sha256=${signature}` } : {}),
      },
      body,
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new SubmissionDeliveryError(
        "Submission delivery failed. Please try again or contact us directly.",
        "DELIVERY_FAILED",
        502,
      );
    }

    return {
      delivered: true,
      provider: "webhook",
      status: response.status,
    };
  } catch (error) {
    if (error instanceof SubmissionDeliveryError) throw error;
    throw new SubmissionDeliveryError(
      "Submission delivery failed. Please try again or contact us directly.",
      "DELIVERY_FAILED",
      502,
    );
  } finally {
    clearTimeout(timeout);
  }
}

export function publicDeliveryError(error: unknown) {
  if (error instanceof SubmissionDeliveryError) {
    return {
      message: error.message,
      status: error.status,
      code: error.code,
    };
  }

  return {
    message: "Submission delivery failed. Please try again or contact us directly.",
    status: 500,
    code: "DELIVERY_FAILED",
  };
}
