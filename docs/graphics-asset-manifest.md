# Graphics asset manifest

All graphics in this release are original, code-native React/CSS/SVG compositions. They are rendered by `src/components/graphics/GraphicScene.tsx` from the central configuration in `src/lib/graphics.ts`. No stock photography, generated raster imagery, third-party logos, embedded text, or human figures are used.

The graphics repeat information that is already present in nearby HTML, so they are decorative and exposed as `aria-hidden="true"`. Process graphics have a matching semantic ordered list in `ProcessPathway.tsx`.

| Route | Graphic variant | Layout | Purpose | Accessibility |
| --- | --- | --- | --- | --- |
| `/` | `home` | Connected hub | Nine routes converging on one support hub | Decorative; nearby heading and service links provide the meaning |
| `/services` | `services` | Visual atlas | Overview of the nine distinct support routes | Decorative; service grid provides the labels and destinations |
| `/get-support` | `get-support` | Pathway | First contact, review and next-step route | Decorative; form and guidance remain primary |
| `/for-professionals` | `professional` | Referral bridge | Consent-aware route from professional referral to review | Decorative; process is repeated as an ordered list |
| `/resources` | `resources` | Library | Organised practical guides and categories | Decorative; resource titles remain HTML |
| `/contact` | `contact` | Signals | Phone, email, message and location routes | Decorative; contact details and form remain HTML |
| `/about` | `about` | Roots | Community commitment growing into connected support | Decorative; values and approach remain HTML |
| `/team` | `team` | Branch network | Connected support functions without portraits | Decorative; support functions remain HTML |
| `/news` | `news` | Bulletin | Reviewed publishing workflow and empty state | Decorative; empty-state message remains HTML |
| `/services/health-social-care` | `health-social-care` | Route map | Care navigation checkpoints and coordination | Decorative; offer and process text remain HTML |
| `/services/welfare-support` | `welfare-support` | Paper collage | Review, evidence, calculation and organised next steps | Decorative; no real forms or personal data |
| `/services/housing-support` | `housing-support` | Cutaway home | Tenancy, repairs, key and safe-route concepts | Decorative; does not imply accommodation provision |
| `/services/general-health` | `general-health` | Orbital toolkit | Appointments, reminders and health-information tools | Decorative; does not imply diagnosis or treatment |
| `/services/mental-health` | `mental-health` | Calm doorway | Private first conversation and a clear referral route | Decorative; emergency and service-boundary text remain prominent |
| `/services/family-support` | `family-support` | Modular home | Communication, planning and safeguarding support | Decorative; no family figures or portraits |
| `/services/sexual-health` | `sexual-health` | Privacy emblem | Discreet information, consent and secure signposting | Decorative; no explicit or identity-implying imagery |
| `/services/art-therapy` | `art-therapy` | Creative canvas | Materials, reflection and expression through activity | Decorative; avoids clinical-treatment claims |
| `/services/additional-support` | `additional-support` | Branching map | Finding the first priority where concerns overlap | Decorative; service options remain HTML |
| `/privacy-policy` | `privacy` | Policy panel | Controlled sharing and protected information | Decorative; policy text remains authoritative |
| `/cookies` | `cookies` | Policy panel | Necessary and optional preference controls | Decorative; cookie table and controls remain HTML |
| `/accessibility-statement` | `accessibility` | Policy panel | Keyboard, text size, contrast and reduced motion | Decorative; statement remains HTML |
| `/safeguarding` | `safeguarding` | Policy panel | Protection, alert and emergency routes | Decorative; emergency information has priority |
| `/complaints` | `complaints` | Policy panel | Feedback, review and next-step loop | Decorative; no outcome is promised |
| `/terms` | `terms` | Policy panel | Boundaries, checkpoints and external links | Decorative; terms remain HTML |
| `/data-protection` | `data-protection` | Policy panel | Data minimisation, access and retention concepts | Decorative; policy remains HTML |
| `404` | `not-found` | Wrong-turn map | Clear routes back to Home, Services and Get Support | Decorative; recovery links remain HTML |
| Global error state | `contact` | Signals | Calm recovery route with retry action | Decorative; error message and retry control remain HTML |

## Removed raster assets

The following repetitive photo assets were removed: `public/images/home/why-i-care.webp` and all ten files previously stored under `public/images/services/`. The logo remains the only raster brand asset used by the interface.

## Asset ownership

The geometric scenes are original implementation assets created for this codebase. Lucide icons are used under the dependency's licence. No external image licence or attribution is required for the new compositions.
