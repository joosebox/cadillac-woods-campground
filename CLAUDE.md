# CLAUDE.md

> Operating guide for Claude Code when working on this repository.  
> **Prime directive:** Act as senior tech lead + hands-on engineer. Default to action. Ask questions only when something blocks progress.

## 1) Project Snapshot
- **Product:** Modern, fast, accessible campground website
- **MVP:** "Book Now" deep-links to Campspot Consumer Site  
- **Future:** Campspot Online Booking API for embedded booking
- **Non-goals:** Custom checkout now, plugin bloat

## 2) Tech Stack & Standards
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui components
- Sanity CMS for content management
- Vercel hosting with ISR
- GA4 analytics (gated by env)
- Vitest + React Testing Library + Playwright
- ESLint + Prettier + Husky
- WCAG 2.1 AA accessibility
- Lighthouse ≥ 90 targets

## 3) Repository Layout
```
/app                    # Next.js app router pages
  /(marketing)/        # Marketing pages group
  /api/revalidate/     # ISR webhook endpoint
  layout.tsx           # Root layout with GA4
  sitemap.ts           # Dynamic sitemap
  robots.ts            # Robots.txt generator
/components            # React components
  book-now-button.tsx  # CTA with analytics
  header.tsx           # Navigation header
  footer.tsx           # Site footer
/lib                   # Utilities
  analytics.ts         # GA4 tracking
  cms.ts              # Sanity client & queries
  seo.ts              # SEO utilities
  utils.ts            # Helper functions
/sanity/schemas       # Content models
/tests
  /unit               # Vitest unit tests
  /e2e                # Playwright E2E tests
/public               # Static assets
```

## 4) Env & Secrets
```bash
NEXT_PUBLIC_CAMPSPOT_BASE_URL  # Campspot booking URL
NEXT_PUBLIC_GA4_ID             # Google Analytics ID
NEXT_PUBLIC_SITE_NAME          # Site name
NEXT_PUBLIC_SITE_PHONE         # Contact phone
NEXT_PUBLIC_SITE_ADDRESS       # Physical address
NEXT_PUBLIC_SANITY_PROJECT_ID  # Sanity project
SANITY_API_TOKEN               # Sanity read token
SANITY_REVALIDATE_SECRET       # Webhook secret
```
- `.env.local` locally; Vercel env vars in production
- Never commit secrets
- Fail gracefully if missing

## 5) Default Flow
1. Read CLAUDE.md + TASKS.md  
2. Check lint/typecheck status
3. Verify tests pass
4. Implement requested changes
5. Run tests and linting
6. Update TASKS.md with progress

## 6) Campspot Integration Rules
- **MVP:** Deep-link Book Now buttons to Campspot consumer site
- **Tracking:** GA4 event tracking on all CTAs
- **Rates:** Show "From $X" only; Campspot is source of truth
- **Availability:** Never show real-time availability (Campspot handles)
- **Future:** Embedded booking only when API keys secured

## 7) CMS Content Model (Sanity)
- **SiteSettings:** Global config, contact info, hero content
- **Stay:** Accommodation types (RV, tent, cabin)
- **Amenity:** Features and facilities
- **Policy:** Rules, FAQs, terms
- **GalleryImage:** Photo gallery content
- Queries in `lib/cms.ts`
- ISR via `/api/revalidate` webhook

## 8) Pages Overview
| Page | Purpose | Key Features |
|------|---------|--------------|
| Home | Landing & conversion | Hero, features, CTAs |
| Stays & Rates | Accommodation details | Pricing, features, availability CTA |
| Amenities | Facility showcase | Categories, icons, descriptions |
| Park Map | Visual site layout | Interactive map, legend |
| Policies | Rules & FAQs | Accordion UI, categories |
| Gallery | Photo showcase | Filter, lightbox, categories |
| Contact | Contact & directions | Form, map, local attractions |

## 9) SEO & Analytics
- **Metadata:** Dynamic titles, descriptions per page
- **Sitemap:** Auto-generated with priorities
- **JSON-LD:** Campground schema markup
- **GA4:** Event tracking for CTAs, page views
- **Performance:** Image optimization, lazy loading

## 10) Accessibility Standards
- **Navigation:** Keyboard accessible, skip links
- **Forms:** Proper labels, error messages
- **Images:** Alt text on all images
- **Colors:** WCAG AA contrast ratios
- **ARIA:** Proper roles and labels
- **Focus:** Visible focus indicators

## 11) Testing Strategy
- **Unit Tests:** Components (BookNowButton, Header, etc.)
- **E2E Tests:** Critical user flows (booking, navigation)
- **CI:** GitHub Actions on PR/push
- **Coverage:** Key business logic and UI components

## 12) Performance Targets
- **Lighthouse:** ≥90 for Performance, SEO, A11y
- **Bundle Size:** <100KB JS for homepage
- **Images:** WebP format, responsive sizes
- **Fonts:** System fonts, no blocking loads
- **ISR:** Static generation with on-demand revalidation

## 13) Security Considerations
- **Input Validation:** Sanitize all user inputs
- **CSP Headers:** Configure in next.config.ts
- **API Routes:** Validate webhook secrets
- **Environment:** Never expose sensitive vars client-side
- **Dependencies:** Regular security audits

## 14) PR Guidelines
- **Branches:** feat/, fix/, chore/ prefixes
- **Commits:** Conventional commit format
- **Tests:** Must pass before merge
- **Review:** Check accessibility, performance
- **Docs:** Update TASKS.md with changes

## 15) Claude Interaction Contract
- **Act autonomously** - implement without asking unless blocked
- **Use placeholders** when data missing (mark with TODO)
- **Run tests** after changes (npm run test:unit)
- **Check types** (npm run typecheck)
- **Lint code** (npm run lint)
- **Update docs** - keep TASKS.md current

## 16) Session Bootstrap Checklist
When starting a session:
1. Print plan of attack
2. Check for `.env.local` (create from `.env.example` if missing)
3. Run `npm install` if needed
4. Run `npm run typecheck` and fix any errors
5. Run `npm run lint` and fix issues
6. Verify `npm run dev` works
7. Check TASKS.md for current priorities
8. Print ready status

## 17) Development Roadmap
### Phase 1: MVP (Current) ✅
- Marketing pages
- Sanity CMS integration
- GA4 analytics
- Book Now CTAs to Campspot
- Basic tests and CI

### Phase 2: Marketing Enhancement
- Email capture with Mailchimp
- SMS alerts integration
- OTA distribution setup
- Enhanced GA4 events
- A/B testing framework

### Phase 3: UX Improvements
- Interactive campground map
- Blog/events calendar
- Weather widget
- Photo upload for reviews
- Virtual tour integration

### Phase 4: Booking Integration
- Campspot API integration
- Embedded availability calendar
- Online booking flow
- Payment processing
- Reservation management

## 18) Common Commands
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run typecheck    # TypeScript check
npm run test:unit    # Run unit tests
npm run test:e2e     # Run E2E tests
npm run format       # Format with Prettier
```

## 19) Troubleshooting
| Issue | Solution |
|-------|----------|
| Build fails | Check env vars, run typecheck |
| Tests fail | Check test env setup, mock data |
| Sanity error | Verify project ID and dataset |
| GA4 not tracking | Check env var and script loading |
| ISR not working | Verify webhook secret and endpoint |

## 20) Change Log
- **2024-09-03:** Initial MVP setup with Next.js 15, Sanity CMS, full page structure
- **2024-09-03:** Added comprehensive test suite and CI/CD pipeline
- **2024-09-03:** Implemented all marketing pages with SEO and accessibility