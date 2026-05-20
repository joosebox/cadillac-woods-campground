import { Metadata } from 'next';
import { MapPinned, Phone } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { Container, Section, SectionIntro, StatusPill } from '@/components/site-primitives';
import { bookingTruths, campspotSnapshot, siteInfo } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Park Map',
  description:
    'Use the Cadillac Woods Campspot map, booking link, and office contact details to choose the right site.',
};

export default function MapPage() {
  return (
    <>
      <section className="bg-forest-950 text-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-200">Park map</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Choose a site on the Campspot map or call for help.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-mist-300">
              Use the Campspot map for current site options. If you want help with rig fit,
              proximity to facilities, or a quieter wooded spot, call the office before booking.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-6 text-forest-950 shadow-soft">
            <div className="map-line-motion absolute inset-0 opacity-80 [background-image:linear-gradient(120deg,rgba(50,151,255,0.12)_1px,transparent_1px),linear-gradient(30deg,rgba(66,119,99,0.14)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="relative min-h-80 rounded-[1.5rem] border border-forest-950/10 bg-white/90 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lake-50 text-lake-800">
                  <MapPinned className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lake-800">Site map</p>
                  <h2 className="text-2xl font-semibold tracking-tight">Open current map</h2>
                </div>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-mist-700">
                The Campspot map includes {campspotSnapshot.totalAvailableSites.toLowerCase()}.
                The office can help you choose a site if you have questions before reserving.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Office', 'Stays', 'Amenities'].map((item) => (
                  <div key={item} className="rounded-2xl border border-forest-950/10 bg-mist-50 p-4 text-sm font-semibold">
                  {item}
                </div>
              ))}
              </div>
              <a
                href={siteInfo.campspotMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-forest-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
              >
                Open Campspot map
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionIntro eyebrow="How to choose a site" title="Use Campspot first, then call if you want help.">
            <p>
              Compare available sites online, then call if you want a person to help with rig fit,
              proximity, or service questions before you book.
            </p>
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bookingTruths.map((truth) => (
              <div key={truth.label} className="rounded-[1.5rem] border border-forest-950/10 bg-white p-5 shadow-sm">
                <StatusPill tone={truth.status === 'todo' ? 'campfire' : 'lake'}>{truth.label}</StatusPill>
                <p className="mt-4 text-sm leading-6 text-mist-700">{truth.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-mist-50 p-5 text-sm leading-6 text-mist-700">
            <strong className="text-forest-950">Tip:</strong> If a specific site location matters,
            check Campspot first and call the office before completing your reservation.
          </div>
        </Container>
      </Section>

      <Section className="bg-lake-50">
        <Container>
          <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-forest-950">Need help before booking?</h2>
                <p className="mt-4 text-sm leading-7 text-mist-700">
                  Ask about rig fit, site type, proximity to facilities, dump station details, or
                  honeywagon service before you commit.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <BookNowButton source="map_bottom" size="lg" className="rounded-full" />
                <a
                  href={siteInfo.campspotMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-forest-200 px-7 py-4 text-base font-semibold text-forest-950 transition hover:bg-forest-50"
                >
                  View Campspot map
                </a>
                <a
                  href={siteInfo.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-200 px-7 py-4 text-base font-semibold text-forest-950 transition hover:bg-forest-50"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {siteInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
