# TASKS.md

> Current project status and task tracking for the Cadillac Woods Campground site.

## Current Status

Static-first Memorial Day launch rebuild is locally implemented. The launch path is a fast,
truthful Next.js site with Campspot deep links, real contact information, conservative
content, and Sanity preserved only as a future CMS lane.

## Completed In Current Rebuild

- [x] Centralized static content in `lib/site-content.ts`
- [x] Removed old fake rates from active UI
- [x] Removed camper WiFi, free WiFi, cable TV, sewer hookup, and real-time availability claims
- [x] Added real contact information:
  - `(231) 825-2012`
  - `cadillacwoodsmi@gmail.com`
  - `23163 M115, Tustin, MI 49688`
- [x] Rebuilt Home around arrival, stay selection, Campspot booking details, local basecamp context, gallery preview, and Book/Call CTAs
- [x] Rebuilt Stays as a decision page with RV, rustic/tent, and cabin paths
- [x] Rebuilt Amenities with available-now, recreation-nearby, coming-soon, and good-to-know groupings
- [x] Rebuilt Map as an honest “map coming soon” helper instead of a broken image
- [x] Rebuilt Policies with conservative FAQ copy
- [x] Rebuilt Gallery with real photos and accessible lightbox
- [x] Rebuilt Contact as direct call/email/directions/Campspot paths with no fake form delivery
- [x] Added persistent mobile Book/Call action bar
- [x] Rewrote guest-facing copy to remove implementation/demo language from active pages
- [x] Added premium motion pass: header condensation, section reveals, animated FAQ panels, gallery dialog entrance, card/image micro-interactions, and scroll-triggered mobile action bar
- [x] Imported current Campspot starting-rate/site-card details into the static content layer:
  - Rustic Tent Site: starting at `$25.00/night`, 7 available locations, pet-friendly, fits vehicles up to 30 feet
  - 30 AMP/Water RV Site: starting at `$45.00/night`, 22 available locations, 30-amp/back-in/pet-friendly/picnic table, ask about rig fit up to 42 feet
  - 30/50 AMP/Water RV Site: starting at `$45.00/night`, 5 available locations, 50-amp/back-in/pet-friendly/picnic table, ask about rig fit up to 42 feet
  - Cabin/log-cabin variants: starting at `$75.00/night`, 6 lodging locations total, with electricity/fire pit/microwave/mini fridge/patio listing context
- [x] Added Campspot site mix and price-range details: 40 all sites, 6 lodging, 34 RV sites, 34 tent sites, `$25-$75`
- [x] Added Campspot park features: Bathrooms, Clubhouse, Dump Station, Garbage, General Store, Laundry as additional cost, Mini-Golf, Pavilion, Playground, Showers, Special Events
- [x] Added Campspot nearby activities without turning hiking into a campground-trail promise: Biking, Boating, Breweries, Fishing, Golfing, Hiking, Historic Sites, Live Music, OHV Trails, Paddling, Restaurants, Shopping, State Parks, Wildlife Watching, Wineries
- [x] Added Campspot site amenity filter counts while keeping the no-sewer/no-cable/no-camper-WiFi guardrails
- [x] Added Campspot monthly-rate deal copy with phone-first booking guidance
- [x] Added Campspot review details and category ratings, including the weak WiFi score as a reason not to market WiFi
- [x] Added Campspot map link while keeping the exact map image blocked until an owned/approved asset is supplied
- [x] Added Campspot photo note: six Campspot listing photos are acknowledged but not copied until approved
- [x] Added sister-in-law follow-up edits:
  - Header now uses a nav-safe Cadillac Woods tree mark instead of the old monogram or squeezed full logo
  - RV fit copy now says ask about rigs up to 42 feet
  - Rustic ask-about list includes parking
  - Heated pool was removed from Coming Soon
  - The planning note section was reframed as “Good to know” so it helps guests without reading like a drawback list
  - Policy FAQ now uses the owner-approved WiFi and sewer/dump-station/honey-wagon wording
  - Home “Before you book” uses the requested `$25-$75 a night` wording
  - Home guest note now uses a real Google review snippet and Google review summary found through the live Google result
- [x] Imported owner-supplied photos from `new-photos` into `public/images/brand`, `public/images/accommodations/new`, `public/images/amenities/new`, and `public/images/gallery/new`
- [x] Rebuilt Policies around current Campspot cancellation, refund, terms, check-in/checkout, vehicle, conduct, pet, cabin, fire/grill, and removal/no-refund rules
- [x] Removed production build ignores for TypeScript and ESLint
- [x] Updated Vitest unit-test collection so E2E specs are not loaded by `npm run test:unit`
- [x] Kept Sanity files as future context, but removed Sanity as a launch blocker
- [x] Ran current-Chrome visual smoke for Home, Stays, Amenities, Map, Policies, Gallery, and Contact
- [x] Completed polish pass from fast-audit follow-up:
  - Replaced squeezed header logo lockup with a nav-safe tree mark plus typed Cadillac Woods wordmark
  - Replaced footer `CW` monogram with the full supplied logo in a larger brand block
  - Split `$25-$75` content from sentence copy so the site no longer renders `$25-$75/night a night`
  - Normalized the requested starting-rate sentence across Home, Stays, Map, and booking-truth sections
  - Changed amenity display to `Good to know`
  - Added a compact Stays comparison matrix before detailed stay cards
  - Reduced oversized Stays image/card treatment
  - Reworked Gallery into curated Arrival, Sites, Cabins, Amenities, and Events categories
  - Replaced the generic map fallback with a clearly non-exact illustrated orientation graphic
  - Grouped Policies FAQ into booking/rates, arrival/sites, pets/conduct, and utilities/services sections with smoother accordion animation

## Content Rules

- Campspot handles current rates and availability.
- Screenshot feedback is the trusted owner-note reference for this launch.
- External web sources can support local-area positioning, but must not override owner notes.
- Do not claim:
  - Free WiFi or camper WiFi
  - Cable TV
  - Sewer hookups
  - Real-time availability on this site
  - Rates beyond the current Campspot starting-rate details unless owner-provided
  - Exact park map image without a real owned/approved asset
  - Campspot gallery photos without owner approval
  - Fake form delivery
  - Lakefront sites or private beach/waterfront campground

## Still Needed Before Public Launch

- [ ] Confirm Vercel `NEXT_PUBLIC_CAMPSPOT_BASE_URL` uses the current Campspot listing URL
- [ ] Confirm whether `NEXT_PUBLIC_SITE_URL` should be `https://www.cadillacwoodsmi.com`
- [ ] Provide or approve a real public park map asset
- [ ] Provide the owner rate sheet only if it should override or supplement the current Campspot starting-rate details
- [ ] Owner sign-off on current Campspot policy details and any missing office-hours/payment details
- [ ] Confirm whether social links exist before adding them
- [ ] Run manual or authorized viewport-resize visual QA at 390px, 768px, 1024px, and 1440px. Existing-Chrome current-viewport QA passed, but Chrome policy blocked the temporary responsive matrix page.
- [x] Deploy polished site to production after local checks pass
- [x] Restore Playwright package/config so E2E coverage remains available while Vitest unit tests stay scoped to `tests/unit`

## Future CMS Lane

Sanity remains the likely future CMS, but it is intentionally not required for the
Memorial Day launch. When ready, migrate the typed static content into Sanity models:

- Site settings and contact info
- Stay types
- Amenities
- Policies/FAQ
- Gallery images
- Local highlights
- Coming-soon items

Before enabling CMS-backed rendering, keep local fallback content so the site does not
fail when Sanity env vars or content are missing.

## Verification Commands

```bash
npm run typecheck -- --incremental false
npm run lint
npm run test:unit
npm run build
npm run dev
```

Visual smoke should cover Home, Stays, Amenities, Map, Policies, Gallery, and Contact
at mobile, tablet, desktop, and the current Chrome viewport.

Latest local verification:

- `npm run typecheck -- --incremental false` passed
- `npm run lint` passed
- `npm run test:unit` passed
- `npm run build` passed
- Polish pass local verification:
  - `npm run typecheck -- --incremental false` passed
  - `npm run lint` passed
  - `npm run test:unit` passed
  - `npm run build` passed
  - Build warning only: Browserslist/caniuse-lite data is stale
  - Static grep found no rendered-source matches for malformed rate wording, old amenity casing, heated pool, planning-section labels, demo copy, or concept copy in active app/content files
  - Local HTTP checks confirmed Home returns `200` and serves `/_next/static/css/app/layout.css`
- Owner follow-up Chrome smoke passed in the existing Chrome session:
  - Header logo image renders from the supplied Cadillac Woods logo
  - Heated pool is absent
  - RV fit says 42 feet
  - Rustic ask-about includes parking
  - Amenities uses “Good to know” for the practical planning section
  - Home “Before you book” uses the requested `$25-$75 a night` copy
  - Home shows `4.5 from 286 Google reviews` plus a real Google review snippet
  - Policies use the owner-approved WiFi and sewer/dump-station/honey-wagon wording
  - Gallery includes the new owner-supplied photos
  - CSS was verified loaded (`387` stylesheet rules), sticky header height was normal, and no site-owned console issues were present
- Guest-facing copy sweep passed in existing Chrome across Home, Stays, Amenities, Map, Policies, Gallery, and Contact with no rendered matches for demo/concept/internal-language terms
- Existing Chrome current-viewport smoke covered Home, Stays, Amenities, Map, Policies, Gallery, and Contact
- Existing Chrome interaction checks passed:
  - Policy accordion opens with a 0.5s `max-height`/opacity transition and exposes the current cancellation-policy copy
  - Stay Finder switches to Cabins and shows the `$75/night` plus 6-lodging-location Campspot facts
  - Gallery opens and closes the image dialog
  - Map CTA points to the Campspot map URL
- `/favicon.ico` now returns `200 image/svg+xml`; Home returns `200 text/html`
- The only Chrome console errors seen during the current smoke were from installed browser extensions, not site-owned resources
