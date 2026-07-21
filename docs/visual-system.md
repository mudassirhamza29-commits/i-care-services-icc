# Community pathways visual system

## Direction

The site now uses an object-led editorial system built from geometric forms, gentle depth, curved routes, connected nodes, rounded layers and restrained service accents. Deep navy, cream, orange and coral keep every route recognisably I-Care; teal, sky, lavender, green, amber, plum and slate blue distinguish service families.

No photographs or human imagery are used. Important language, process details and legal boundaries remain HTML rather than being embedded in graphics.

## Components

- `GraphicScene` renders route-specific hero, card and spot compositions from one central configuration.
- `ProcessPathway` presents meaningful multi-step routes as a semantic ordered list that adapts from vertical mobile steps to connected desktop paths.
- `PageHero` selects the correct route composition and supports compact policy panels.
- `GRAPHIC_CONFIG` owns each route's layout, accent and icon set so future artwork can be changed in one place.

## Page changes

- Home: nine-route support hub, nine distinct service previews, community-roots feature art, three-stage contact path and open-door CTA detail.
- Services index: visual service atlas, unique card artwork and four-stage support path.
- Service pages: nine unique hero compositions, varied offer symbols, route-specific process graphics and distinct related-service cards.
- Get Support and Contact: supportive graphics placed beside, never behind, task-critical forms.
- Professionals: referral bridge and consent-aware five-stage pathway.
- Resources: organised library hero and category-specific guide covers.
- About and Team: roots and function-network compositions with distinct supporting symbols and no fabricated portraits.
- News: publication-workflow empty-state artwork without invented articles.
- Policies: compact, topic-specific title panels for privacy, cookies, accessibility, safeguarding, complaints, terms and data protection.
- System states: a clear-route 404, a restrained loading state and a recoverable error state.

## Accessibility and performance treatment

- Decorative graphics are hidden from assistive technology; all meaning is repeated in nearby text.
- Process routes use real ordered lists and retain readable content when CSS is unavailable.
- Graphics reserve their aspect ratio to prevent layout shift and contain no remote requests.
- Motion stays in the existing animation system, respects `prefers-reduced-motion`, and uses only opacity/transform effects.
- The system has no canvas, video, image CDN, tracking code or additional runtime dependency.

## Visual review artifacts

The local review set contains 26 desktop and 26 mobile route captures plus labelled and title-free service-hero contact sheets under `.codex/visual-audit/final/`. These are QA artifacts and are intentionally excluded from the production bundle.
