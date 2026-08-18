# Image register

Last audited: 18 August 2026

This register records every raster image that is currently published by the website. The audit checks the source pixels, not only the visible desktop crop. No active content image contains a face, facial profile, eyes, nose, mouth, hairline or reflected/background face.

## Replacements

| Page | Section | Old asset | New asset | Purpose | Alt text | Source | Usage-rights status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Hero | `/images/community/hero-community.webp` | `/images/community/community-support-table.webp` | Welcoming first-contact and support-planning scene | Hands gathered around a community support table with a route sheet, notebooks and refreshments | AI-generated for this project, 18 August 2026 | AI-generated; final use subject to client approval |
| Home | Languages | `/images/community/languages-conversation.webp` | `/images/community/communication-choice-table.webp` | Communication choice and accessible first contact | Hands using communication symbol cards, a telephone and a notebook around a community table | AI-generated for this project, 18 August 2026 | AI-generated; final use subject to client approval |
| Home and Support Groups | Peer support | `/images/community/peer-support.webp` | `/images/community/peer-support-table.webp` | Shared peer-support activity with accessible seating | Hands of peer-support participants around a shared table with notebooks, refreshments and accessible seating | AI-generated for this project, 18 August 2026 | AI-generated; final use subject to client approval |
| Home and Support Groups | Inclusive community | `/images/community/inclusive-community.webp` | `/images/community/inclusive-activity-table.webp` | Inclusive group activity and community connection | Hands sharing information cards and creative materials at an accessible community table | AI-generated for this project, 18 August 2026 | AI-generated; final use subject to client approval |
| Home | Why I-Care | `/images/home/why-i-care.webp` | `/images/home/support-route-review.webp` | One-to-one support route review | Two people reviewing a simple support route with a phone, notebook and refreshments nearby | AI-generated for this project, 18 August 2026 | AI-generated; final use subject to client approval |
| Our Team | Hero and introduction | Community photographs containing faces | `/images/community/team-support-plan.webp` | Anonymised team coordination and support planning | Team members reviewing an anonymised support plan, calendar and referral cards | AI-generated for this project, 18 August 2026 | AI-generated; final use subject to client approval |
| Service cards and Family Support | Family support | `/images/services/family-support.webp` | `/images/services/family-planning-table.webp` | Shared family planning and practical support | Hands arranging a shared family calendar and home planning materials | AI-generated for this project, 18 August 2026 | AI-generated; final use subject to client approval |

## Retained face-free assets

| Page or component | Asset | Purpose and current alt text | Source | Usage-rights status |
| --- | --- | --- | --- | --- |
| Global header and footer | `/brand/i-care-logo.png` | I-Care Services CIC brand mark | Client-provided project asset | Client-provided; ownership and usage rights to be confirmed by client |
| Health & Social Care | `/images/services/health-social-care.webp` | Hands reviewing a care plan with a calendar and organised support notes | Existing project asset; no source record found in repository | Unverified; client confirmation required before final legal sign-off |
| Welfare & Money | `/images/services/welfare-support.webp` | A welfare support desk with forms, a calculator and a hand completing paperwork | Existing project asset; no source record found in repository | Unverified; client confirmation required before final legal sign-off |
| Housing & Legal Support | `/images/services/housing-support.webp` | House keys beside an organised tenancy folder in a welcoming home setting | Existing project asset; no source record found in repository | Unverified; client confirmation required before final legal sign-off |
| General Health | `/images/services/general-health.webp` | A calm health planning desk with a wellbeing journal, water and health essentials | Existing project asset; no source record found in repository | Unverified; client confirmation required before final legal sign-off |
| Mental Health & Wellbeing | `/images/services/mental-health.webp` | A private and calm support room prepared for a confidential conversation | Existing project asset; no source record found in repository | Unverified; client confirmation required before final legal sign-off |
| Sexual Health | `/images/services/sexual-health.webp` | Private health information materials with a shield symbol and inclusive ribbon | Existing project asset; no source record found in repository | Unverified; client confirmation required before final legal sign-off |
| Creative Wellbeing Support | `/images/services/art-therapy.webp` | Hands painting in a sketchbook surrounded by watercolours and art materials | Existing project asset; no source record found in repository | Unverified; client confirmation required before final legal sign-off |
| Additional Support | `/images/services/additional-support.webp` | Hands organising community support folders beside a laptop, telephone and route cards | Existing project asset; no source record found in repository | Unverified; client confirmation required before final legal sign-off |
| Social sharing | `/opengraph-image` | Code-generated I-Care Services CIC brand graphic | Generated by `src/app/opengraph-image.tsx` | Original project graphic |

## Technical notes

- Content photographs are stored as compressed WebP files.
- Responsive image containers reserve their aspect ratio before loading, preventing layout movement.
- The home hero is priority-loaded. Below-the-fold images use Next.js lazy loading.
- Images use responsive `sizes` values and meaningful alt text. The logo has descriptive brand alt text.
- The source and rights of retained legacy service images need documentary confirmation; this register does not claim that they are licensed.
