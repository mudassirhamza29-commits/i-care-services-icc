import test from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";

import {
  deliverSubmission,
  SubmissionDeliveryError,
} from "../src/lib/server/submissionDelivery";

const baseEnvelope = {
  kind: "contact" as const,
  reference: "IC-CONTACT-2026-TEST1234",
  submittedAt: new Date().toISOString(),
  payload: { message: "hello" },
  metadata: { subject: "General Enquiry" },
};

function setEnv(key: string, value: string | undefined) {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}

test("delivery fails honestly when webhook is not configured", async () => {
  const previous = process.env.SUBMISSION_WEBHOOK_URL;
  delete process.env.SUBMISSION_WEBHOOK_URL;

  await assert.rejects(
    () => deliverSubmission(baseEnvelope),
    (error) =>
      error instanceof SubmissionDeliveryError &&
      error.code === "DELIVERY_NOT_CONFIGURED",
  );

  if (previous) process.env.SUBMISSION_WEBHOOK_URL = previous;
});

test("delivery rejects insecure webhook in production", async () => {
  const previousUrl = process.env.SUBMISSION_WEBHOOK_URL;
  const previousNodeEnv = process.env.NODE_ENV;
  setEnv("SUBMISSION_WEBHOOK_URL", "http://example.com/submissions");
  setEnv("NODE_ENV", "production");

  await assert.rejects(
    () => deliverSubmission(baseEnvelope),
    (error) =>
      error instanceof SubmissionDeliveryError &&
      error.code === "DELIVERY_CONFIG_INVALID",
  );

  setEnv("SUBMISSION_WEBHOOK_URL", previousUrl);
  setEnv("NODE_ENV", previousNodeEnv);
});

test("delivery posts signed payload to configured webhook", async () => {
  const secret = "test-secret";
  const previousUrl = process.env.SUBMISSION_WEBHOOK_URL;
  const previousSecret = process.env.SUBMISSION_WEBHOOK_SECRET;
  const previousAllow = process.env.ALLOW_INSECURE_SUBMISSION_WEBHOOK;
  const previousNodeEnv = process.env.NODE_ENV;

  setEnv("SUBMISSION_WEBHOOK_SECRET", secret);
  setEnv("ALLOW_INSECURE_SUBMISSION_WEBHOOK", "true");
  setEnv("NODE_ENV", "test");

  let receivedBody = "";
  let receivedSignature = "";

  const server = createServer((request, response) => {
    receivedSignature = String(request.headers["x-icare-signature"] ?? "");
    request.on("data", (chunk) => {
      receivedBody += chunk;
    });
    request.on("end", () => {
      response.writeHead(204);
      response.end();
    });
  });

  await new Promise<void>((resolve) => server.listen(0, resolve));
  const address = server.address();
  assert.ok(address && typeof address === "object");
  const addressInfo = address as AddressInfo;
  setEnv(
    "SUBMISSION_WEBHOOK_URL",
    `http://127.0.0.1:${addressInfo.port}/submissions`,
  );

  const result = await deliverSubmission(baseEnvelope);
  assert.equal(result.delivered, true);
  assert.equal(result.status, 204);

  const expectedSignature = createHmac("sha256", secret)
    .update(receivedBody)
    .digest("hex");
  assert.equal(receivedSignature, `sha256=${expectedSignature}`);
  assert.equal(JSON.parse(receivedBody).reference, baseEnvelope.reference);

  await new Promise<void>((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );

  setEnv("SUBMISSION_WEBHOOK_URL", previousUrl);
  setEnv("SUBMISSION_WEBHOOK_SECRET", previousSecret);
  setEnv("ALLOW_INSECURE_SUBMISSION_WEBHOOK", previousAllow);
  setEnv("NODE_ENV", previousNodeEnv);
});
