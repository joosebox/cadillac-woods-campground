import { Metadata } from 'next';
import { BookNowButton } from '@/components/book-now-button';
import { Container, Section, SectionIntro, StatusPill } from '@/components/site-primitives';
import { policyItems, policyQuickFacts, siteInfo } from '@/lib/site-content';
import { PoliciesClient } from './policies-client';

export const metadata: Metadata = {
  title: 'Policies & FAQ',
  description:
    'Cadillac Woods policy and FAQ guidance for cancellations, check-in, checkout, pets, quiet hours, booking, WiFi, cable, sewer, and site details.',
};

export default function PoliciesPage() {
  return (
    <>
      <section className="bg-mist-50">
        <Container className="py-16 sm:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-700">Policies & FAQ</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-forest-950 sm:text-5xl lg:text-6xl">
            Check-in, cancellation, pet, quiet-hour, and campground rules.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mist-700">
            Review the essentials before you book. If a rule affects your trip, call the office
            before finalizing your reservation.
          </p>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionIntro eyebrow="Quick facts" title="The details guests usually look for first.">
            <p>
              Start with the basics here, then open the FAQ below for the full details.
            </p>
          </SectionIntro>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {policyQuickFacts.map((fact) => (
              <div key={fact.label} className="rounded-[1.5rem] border border-forest-950/10 bg-mist-50 p-5 shadow-sm">
                <StatusPill tone="lake">{fact.label}</StatusPill>
                <p className="mt-4 text-sm leading-6 text-mist-700">{fact.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist-50">
        <Container>
          <PoliciesClient items={policyItems} />
        </Container>
      </Section>

      <Section className="bg-lake-50">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionIntro eyebrow="Still have questions?" title="Call before booking if the details matter.">
              <p>
                For check-in, cancellation, pet, payment, and site-specific questions, use the
                office contact path before you finalize plans.
              </p>
            </SectionIntro>
            <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
              <p className="text-sm leading-7 text-mist-700">
                A quick call is the best choice when your stay depends on a specific rule, site
                request, vehicle fit, or arrival detail.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteInfo.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-forest-200 px-6 py-3 text-sm font-semibold text-forest-950 transition hover:bg-forest-50"
                >
                  Call {siteInfo.phone}
                </a>
                <BookNowButton source="policies_bottom" className="rounded-full" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
