import { Metadata } from 'next';
import { Container, Section, SectionIntro, StatusPill } from '@/components/site-primitives';
import { campspotSnapshot, galleryCategories, galleryImages, siteInfo } from '@/lib/site-content';
import { GalleryClient } from './gallery-client';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse real Cadillac Woods photos of the office, wooded RV and rustic stays, cabins, and family amenities.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-forest-950 text-white">
        <Container className="py-16 sm:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-200">Gallery</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            See the office, wooded sites, cabins, and family spaces.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mist-300">
            See the camp office, wooded stays, cabins, and family spaces before you choose your
            dates.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <GalleryClient images={galleryImages} categories={galleryCategories} />
        </Container>
      </section>

      <Section className="bg-mist-50">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionIntro eyebrow="Booking view" title="Use Campspot for site options and final totals.">
              <p>
                This gallery shows approved site photos. Campspot remains the source for current
                site options, starting rates, booking details, and final totals.
              </p>
            </SectionIntro>
            <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
              <StatusPill tone="lake">Book with context</StatusPill>
              <p className="mt-4 text-sm leading-7 text-mist-700">{campspotSnapshot.gallery.text}</p>
              <a
                href={siteInfo.campspotListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-forest-200 px-6 py-3 text-sm font-semibold text-forest-950 transition hover:bg-forest-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
              >
                View Campspot listing
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
