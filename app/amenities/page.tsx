import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Clock, Store, ThermometerSun, Trees } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { Container, Section, SectionIntro, StatusPill } from '@/components/site-primitives';
import {
  amenityGroups,
  campspotSnapshot,
  nearbyActivities,
  parkFeatures,
  siteAmenityCounts,
  siteInfo,
} from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Amenities',
  description:
    'See Cadillac Woods restrooms, clubhouse, camp store, games, wood delivery, nearby recreation, and coming campground updates.',
};

const iconMap = {
  'Available Now': ThermometerSun,
  'Recreation Nearby': Trees,
  'Coming Soon': Clock,
  'Plan Ahead': CheckCircle2,
};

export default function AmenitiesPage() {
  return (
    <>
      <section className="bg-mist-50">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-700">Amenities</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-forest-950 sm:text-5xl lg:text-6xl">
              Restrooms, camp store, games, and easy camp-day essentials.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-mist-700">
              Clean restrooms, a clubhouse, camp store, games, and wood delivery help keep camp
              days simple. Laundry is listed as an additional-cost feature, with tap-to-pay machines
              coming soon.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/images/amenities/playground.jpeg"
              alt="Playground equipment at Cadillac Woods"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {amenityGroups.map((group) => {
              const Icon = iconMap[group.title as keyof typeof iconMap] || Store;
              return (
                <article key={group.title} className="lift-card rounded-[2rem] border border-forest-950/10 bg-white p-6 shadow-sm hover:shadow-soft sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <StatusPill tone={group.title === 'Coming Soon' ? 'campfire' : group.title === 'Plan Ahead' ? 'mist' : 'forest'}>
                        {group.label}
                      </StatusPill>
                      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-forest-950">{group.title}</h2>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lake-50 text-lake-800">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-mist-700">{group.description}</p>
                  <ul className="mt-6 grid gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-2xl bg-mist-50 p-4 text-sm font-semibold text-forest-950">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionIntro eyebrow="Around the campground" title="Useful facilities for an easier stay.">
              <p>
                From showers and restrooms to mini-golf and the general store, these are the
                practical details guests ask about most.
              </p>
            </SectionIntro>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {parkFeatures.map((feature) => (
                <div key={feature} className="rounded-2xl border border-forest-950/10 bg-white p-4 text-sm font-semibold text-forest-950 shadow-sm">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionIntro eyebrow="Site features" title="What appears while comparing sites online.">
            <p>
              Campspot site details include water hook-up, picnic tables, pull-through/back-in,
              pet-friendly sites, and cabin basics. Sewer hookups, cable TV, and camper WiFi are
              not shown as included amenities.
            </p>
          </SectionIntro>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {siteAmenityCounts.map((item) => (
              <div key={item.label} className="rounded-2xl border border-forest-950/10 bg-mist-50 p-4">
                <p className="text-2xl font-semibold tracking-tight text-forest-950">{item.value}</p>
                <p className="mt-1 text-sm font-semibold text-mist-700">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-lake-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionIntro eyebrow="Nearby activities" title="Easy day plans around the Cadillac area.">
              <p>
                Lakes, trails, restaurants, shopping, golf, paddling, and state parks are all part
                of the broader Cadillac-area trip.
              </p>
            </SectionIntro>
            <div className="flex flex-wrap gap-2">
              {nearbyActivities.map((activity) => (
                <span key={activity} className="rounded-full border border-lake-200 bg-white px-4 py-2 text-sm font-semibold text-forest-950 shadow-sm">
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-forest-950 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionIntro eyebrow="Before you pack" title="Confirm connectivity and utility details before you book." className="text-white">
              <p className="text-mist-300">
                Camper WiFi, cable TV, and sewer hookups are not shown as included amenities for
                Cadillac Woods. Call the office if any of those details are important to your stay.
              </p>
            </SectionIntro>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Need a specific amenity?</h2>
              <p className="mt-3 text-sm leading-7 text-mist-300">
                Call {siteInfo.phone} before booking. Starting rates currently range from{' '}
                {campspotSnapshot.priceRange}, and the office can answer practical questions
                about your stay.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <BookNowButton source="amenities_bottom" variant="secondary" className="rounded-full" />
                <a
                  href={siteInfo.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call the office
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
