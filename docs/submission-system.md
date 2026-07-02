# I-Care Services Submission System

The website has three production form endpoints:

- `POST /api/contact`
- `POST /api/referrals/self`
- `POST /api/referrals/professional`

Each endpoint validates data server-side, applies spam controls, generates a
reference number where appropriate, and delivers the submission to a configured
HTTPS webhook or CRM endpoint.

The public forms are currently minimised for first contact. They collect a
name, preferred contact method and detail, service area, brief message, consent,
and an emergency-boundary check. They do not collect date of birth, ethnicity,
detailed health information, sexual-health detail, financial documents or
safeguarding narratives through the public website.

## Required Environment Variables

Set these in Vercel or the hosting platform:

```bash
SUBMISSION_WEBHOOK_URL=https://your-secure-provider.example/submissions
SUBMISSION_WEBHOOK_SECRET=long-random-secret
```

`SUBMISSION_WEBHOOK_URL` must be HTTPS in production. The site will return a
clear error instead of pretending a submission succeeded when delivery is not
configured.

`SUBMISSION_WEBHOOK_SECRET` is optional but strongly recommended. When present,
the site signs each request with:

```text
X-Icare-Signature: sha256=<hex hmac>
```

The HMAC input is the exact JSON request body and the algorithm is SHA-256.

## Payload Shape

The webhook receives:

```json
{
  "kind": "contact | self-referral | professional-referral",
  "reference": "IC-CONTACT-2026-ABCDEFGH",
  "submittedAt": "2026-06-29T00:00:00.000Z",
  "payload": {},
  "metadata": {}
}
```

## Security Notes

- Use a provider that is approved to receive the type of data being collected.
- Do not send sensitive referral data to a personal inbox.
- Use HTTPS only.
- Verify the HMAC signature at the receiving endpoint.
- Restrict receiver access to authorised staff only.
- Retain records according to the organisation's reviewed data protection policy.
- If special-category collection is later required, complete the DPIA/provider
  decision first and extend this document before collecting that data.

This document is implementation guidance, not legal advice.
