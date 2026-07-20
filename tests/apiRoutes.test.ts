import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { NextRequest } from "next/server";

import { POST as contactPost } from "../src/app/api/contact/route";

function setEnv(key: string, value: string | undefined) {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}

test("contact API validates and delivers to webhook", async () => {
  const previousUrl = process.env.SUBMISSION_WEBHOOK_URL;
  const previousAllow = process.env.ALLOW_INSECURE_SUBMISSION_WEBHOOK;
  const previousNodeEnv = process.env.NODE_ENV;
  let delivered = false;

  const server = createServer((request, response) => {
    delivered = request.method === "POST" && request.url === "/submissions";
    request.resume();
    response.writeHead(204);
    response.end();
  });

  await new Promise<void>((resolve) => server.listen(0, resolve));
  const address = server.address() as AddressInfo;

  setEnv("ALLOW_INSECURE_SUBMISSION_WEBHOOK", "true");
  setEnv("NODE_ENV", "test");
  setEnv(
    "SUBMISSION_WEBHOOK_URL",
    `http://127.0.0.1:${address.port}/submissions`,
  );

  const request = new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Integration Test",
      contactMethod: "Email",
      contactDetail: "integration@example.com",
      subject: "General enquiry",
      serviceArea: "Housing Support",
      message: "This integration message is long enough to pass validation.",
      isEmergency: "No",
      consent: true,
      website: "",
      startedAt: Date.now() - 5000,
    }),
  });

  const response = await contactPost(request);
  const body = (await response.json()) as { ok?: boolean; reference?: string };

  assert.equal(response.status, 200);
  assert.equal(body.ok, true);
  assert.match(String(body.reference), /^IC-CONTACT-\d{4}-[A-F0-9]{8}$/);
  assert.equal(delivered, true);

  await new Promise<void>((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );

  setEnv("SUBMISSION_WEBHOOK_URL", previousUrl);
  setEnv("ALLOW_INSECURE_SUBMISSION_WEBHOOK", previousAllow);
  setEnv("NODE_ENV", previousNodeEnv);
});

test("contact API rejects cross-site submissions", async () => {
  const request = new NextRequest("https://icare.example/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://attacker.example",
      Host: "icare.example",
      "Sec-Fetch-Site": "cross-site",
    },
    body: "{}",
  });

  const response = await contactPost(request);
  assert.equal(response.status, 403);
});

test("contact API rejects oversized submissions", async () => {
  const request = new NextRequest("https://icare.example/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": "20001",
      Origin: "https://icare.example",
      Host: "icare.example",
    },
    body: "{}",
  });

  const response = await contactPost(request);
  assert.equal(response.status, 413);
});
