import { Metadata } from 'next';
import { Mail, MapPin, MessageSquareText, Phone } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { Container, Section, SectionIntro, StatusPill } from '@/components/site-primitives';
import { campspotSnapshot, localHighlights, siteInfo } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Call, email, get directions, or book Cadillac Woods Campground in Tustin, Michigan through Campspot.',
};

export default function ContactPage() {
  const contactCards = [
    {
      title: 'Call',
      text: siteInfo.phone,
      href: siteInfo.phoneHref,
      icon: Phone,
      action: 'Tap to call',
    },
    {
      title: 'Email',
      text: siteInfo.email,
      href: siteInfo.emailHref,
      icon: Mail,
      action: 'Send an email',
    },
    {
      title: 'Directions',
      text: siteInfo.address,
      href: siteInfo.directionsHref,
      icon: MapPin,
      action: 'Open map',
    },
  ];

  return (
    <>
      <section className="bg-forest-950 text-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-200">Contact</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Book online, call the office, or get directions.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mist-300">
            Reach Cadillac Woods directly by phone or email, open directions to Tustin, or use
            Campspot for current booking options.
          </p>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-[2rem] border border-forest-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lake-50 text-lake-800">
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-forest-950">{card.title}</h2>
                <p className="mt-3 min-h-12 text-sm leading-6 text-mist-700">{card.text}</p>
                <p className="mt-5 text-sm font-semibold text-forest-950">{card.action}</p>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionIntro eyebrow="Ask before booking" title="Use the office for practical trip questions.">
              <p>
                If you care about rig fit, proximity to facilities, rustic setup, cabin details, dump
                station use, or honeywagon service, call or email before booking.
              </p>
            </SectionIntro>
            <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-campfire-50 text-campfire-800">
                  <MessageSquareText className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <StatusPill tone="campfire">Office contact</StatusPill>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-forest-950">
                    Use the right path for your question.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-mist-700">
                    Call for monthly stays and site-specific questions. Email works well for
                    non-urgent details, and Campspot handles online reservations.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <BookNowButton source="contact_main" size="lg" className="rounded-full" />
                <a
                  href={siteInfo.emailHref}
                  className="inline-flex items-center justify-center rounded-full border border-forest-200 px-7 py-4 text-base font-semibold text-forest-950 transition hover:bg-forest-50"
                >
                  Email Cadillac Woods
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-lake-50">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionIntro eyebrow="Monthly stays" title="Planning a longer stay? Call the office.">
              <p>
                Monthly stays may qualify for a discounted rate and should be booked directly by
                phone.
              </p>
            </SectionIntro>
            <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
              <StatusPill tone="campfire">{campspotSnapshot.deal.title}</StatusPill>
              <p className="mt-4 text-lg leading-8 text-forest-950">{campspotSnapshot.deal.text}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteInfo.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-forest-950 px-7 py-4 text-base font-semibold text-white transition hover:bg-forest-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
                >
                  Call {siteInfo.phone}
                </a>
                <a
                  href={siteInfo.campspotListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-forest-200 bg-white px-7 py-4 text-base font-semibold text-forest-950 transition hover:bg-forest-50"
                >
                  View Campspot listing
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionIntro eyebrow="Cadillac-area basecamp" title="Close to lakes, town stops, and day-trip recreation.">
            <p>
              Cadillac Woods is a wooded Tustin campground with easy access to Cadillac-area
              recreation.
            </p>
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {localHighlights.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-forest-950/10 bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold tracking-tight text-forest-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-mist-700">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
