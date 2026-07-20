# I-Care Services CIC launch decisions

Last updated: 20 July 2026

## Confirmed

- Legal name: I-CARE SERVICES CIC.
- Company number: 16861714.
- Registered office: 48 Bellamy Drive, Stanmore, England, HA7 2DB.
- Public phone and email in `CONTACT_INFO` are approved.
- All listed support services are approved.
- Support provided by I-Care Services CIC is free to access.
- No public response-time commitment or opening-hours claim is to be shown.
- Team content uses role-based functions only; no names, photographs, titles,
  qualifications or registrations are published.
- News content remains hidden from search until real articles are approved.

## Required before the forms can receive live submissions

- Configure a secure approved receiving endpoint as `SUBMISSION_WEBHOOK_URL` in
  Vercel production and preview environments.
- Configure `SUBMISSION_WEBHOOK_SECRET` and verify the receiver validates the
  `X-Icare-Signature` HMAC before accepting a submission.
- Confirm the receiving provider, its UK GDPR processor terms, data location,
  access controls and deletion process.

## Organisational records to maintain outside the website

- Adopt and maintain an internal retention schedule for enquiries, referrals,
  safeguarding records and complaints.
- Record the Article 6 lawful basis and Article 9 condition used for each type
  of special-category processing.
- Maintain an appropriate policy document where required by the Data Protection
  Act 2018.
- Assign internal owners for privacy requests, safeguarding concerns and
  complaints.
- Obtain qualified UK legal review of public policies and regulated-service
  wording before relying on them as legal advice or evidence of compliance.

## Future launch update

- Set `NEXT_PUBLIC_SITE_URL` to the approved custom HTTPS domain when connected.
- Re-run canonical, sitemap, robots, form-delivery, accessibility and security
  checks after the custom domain is active.
