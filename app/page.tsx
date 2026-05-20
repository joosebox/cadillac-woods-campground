import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { StayFinder } from '@/components/stay-finder';
import { Container, PhotoFrame, Section, SectionIntro, StatusPill, TextLink } from '@/components/site-primitives';
import {
  amenityGroups,
  bookingTruths,
  campspotSnapshot,
  galleryImages,
  generateHomeGallery,
  localHighlights,
  siteInfo,
  stayTypes,
} from '@/lib/site-content';
import { generateJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cadillac Woods Campground',
  description:
    'Book a wooded RV, rustic, or cabin stay at Cadillac Woods Campground in Tustin, Michigan near Cadillac, Lake Cadillac, and Lake Mitchell.',
};

export default function HomePage() {
  const heroGallery = generateHomeGallery();
  const jsonLd = generateJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-forest-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/office-wide-view.jpeg"
            alt="Cadillac Woods Campground office and wooded camping area"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,26,22,0.92),rgba(15,26,22,0.62),rgba(15,26,22,0.18))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-950 to-transparent" />
        </div>

        <Container className="relative grid min-h-[calc(100svh-13rem)] items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-14 xl:min-h-[calc(100svh-14rem)] xl:gap-10 xl:py-16">
          <div className="max-w-3xl">
            <p className="motion-premium mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-lake-200">
              {siteInfo.locationLine}
            </p>
            <h1 className="motion-premium motion-premium-delay-1 text-balance text-4xl font-semibold tracking-tight sm:text-5xl xl:text-7xl">
              The road opens into the woods.
            </h1>
            <p className="motion-premium motion-premium-delay-2 mt-5 max-w-2xl text-base leading-7 text-mist-100 xl:text-xl xl:leading-8">
              {siteInfo.name} is a family-owned, wooded Tustin basecamp near Cadillac, Lake
              Cadillac, and Lake Mitchell. Pick your stay, check current options on Campspot, or
              call the office for help choosing the right fit.
            </p>
            <div className="motion-premium motion-premium-delay-3 mt-6 flex flex-col gap-3 sm:flex-row">
              <BookNowButton source="hero" size="lg" variant="secondary" className="rounded-full" />
              <a
                href={siteInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-300"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {siteInfo.phone}
              </a>
            </div>
            <div className="motion-premium motion-premium-delay-3 mt-8 grid gap-3 sm:grid-cols-3">
              {stayTypes.map((stay) => (
                <div key={stay.id} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm font-semibold">{stay.name}</p>
                  <p className="mt-1 text-xs text-mist-300">Starts at {stay.startingRate} on Campspot</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="motion-premium motion-premium-delay-2 rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-soft backdrop-blur">
              <div className="grid grid-cols-2 gap-3">
                {heroGallery.map((image, index) => (
                  <div
                    key={image.id}
                    className={index === 0 ? 'relative col-span-2 h-56 overflow-hidden rounded-[1.5rem]' : 'relative h-36 overflow-hidden rounded-[1.25rem]'}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden rounded-[1.5rem] border border-white/15 bg-white p-5 text-forest-950 shadow-soft xl:block">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lake-800">Before you book</p>
              <p className="mt-2 text-sm leading-6 text-mist-700">
                Starting rates currently range from {campspotSnapshot.priceRange} on Campspot.
                Choose dates there for site options and final totals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionIntro eyebrow="Ways to stay" title="RV, rustic tent, and cabin stays in the woods.">
            <p>
              Compare the main ways to stay, then check dates on Campspot when you are ready to
              reserve.
            </p>
          </SectionIntro>
          <div className="grid gap-6 lg:grid-cols-3">
            {stayTypes.map((stay) => (
              <Link
                key={stay.id}
                href={`/stays#${stay.id}`}
                className="group overflow-hidden rounded-[1.75rem] border border-forest-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={stay.image} alt={stay.imageAlt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <StatusPill tone={stay.id === 'rv' ? 'lake' : stay.id === 'cabin' ? 'campfire' : 'forest'}>
                    {stay.shortName}
                  </StatusPill>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-forest-950">{stay.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-mist-700">{stay.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-900">
                    Compare details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist-50">
        <Container>
          <StayFinder />
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionIntro eyebrow="Plan your stay" title="Rates, site types, and monthly-stay info.">
              <p>
                Start with the essentials, then open Campspot when you are ready to choose dates
                and reserve.
              </p>
            </SectionIntro>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-forest-950/10 bg-mist-50 p-5">
                <StatusPill tone="lake">Rates</StatusPill>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">
                  {campspotSnapshot.priceRange}
                </p>
                <p className="mt-2 text-sm leading-6 text-mist-700">Starting rates by stay type.</p>
              </div>
              <div className="rounded-[1.5rem] border border-forest-950/10 bg-mist-50 p-5">
                <StatusPill tone="forest">Availability</StatusPill>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">
                  {campspotSnapshot.totalAvailableSites.split(' ')[0]}
                </p>
                <p className="mt-2 text-sm leading-6 text-mist-700">
                  Site options before you choose dates.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-forest-950/10 bg-mist-50 p-5">
                <StatusPill tone="campfire">{campspotSnapshot.deal.title}</StatusPill>
                <p className="mt-4 text-sm leading-6 text-mist-700">{campspotSnapshot.deal.text}</p>
              </div>
              <div className="rounded-[1.5rem] border border-forest-950/10 bg-mist-50 p-5">
                <StatusPill tone="lake">Guest review</StatusPill>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">
                  {campspotSnapshot.review.rating}/5
                </p>
                <p className="mt-2 text-sm leading-6 text-mist-700">
                  {campspotSnapshot.review.count}; staff, value, site, and location all rated 5.0.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-forest-950/10 bg-mist-50 p-5 sm:col-span-2">
                <StatusPill tone="forest">Stay options</StatusPill>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {campspotSnapshot.siteTypeMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-white p-4">
                      <p className="text-2xl font-semibold tracking-tight text-forest-950">{metric.value}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-mist-700">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-forest-950/10 bg-mist-50 p-5 sm:col-span-2">
                <StatusPill tone="lake">Guest note</StatusPill>
                <p className="mt-4 text-sm leading-7 text-mist-700">
                  {`"${campspotSnapshot.review.quote}" - ${campspotSnapshot.review.attribution}`}
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-4">
                  {campspotSnapshot.review.categoryRatings.map((rating) => (
                    <div key={rating.label} className="rounded-2xl bg-white p-3">
                      <p className="text-sm font-semibold text-forest-950">{rating.label}</p>
                      <p className="mt-1 text-sm text-mist-700">{rating.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="overflow-hidden bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionIntro eyebrow="On site" title="Comforts for camp days, plus a few upgrades to watch for.">
                <p>
                  Clean restrooms, a clubhouse, camp store, games, and wood delivery make the
                  day-to-day details easier once you are here.
                </p>
              </SectionIntro>
              <TextLink href="/amenities">See all amenities</TextLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {amenityGroups.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-forest-950/10 bg-white p-5 shadow-sm">
                  <StatusPill tone={group.title === 'Coming Soon' ? 'campfire' : group.title === 'Plan Ahead' ? 'mist' : 'forest'}>
                    {group.label}
                  </StatusPill>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-forest-950">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist-700">{group.description}</p>
                  <ul className="mt-4 space-y-2 text-sm font-medium text-forest-900">
                    {group.items.slice(0, 4).map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-forest-950 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro eyebrow="Northern Michigan basecamp" title="Close to Cadillac-area lakes, town stops, and day-trip recreation." className="text-white">
              <p className="text-mist-300">
                Stay in a wooded Tustin campground with easy drives to Cadillac-area lakes,
                restaurants, shops, and outdoor recreation.
              </p>
            </SectionIntro>
            <div className="grid gap-4 sm:grid-cols-2">
              {localHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((image, index) => (
                <PhotoFrame
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className={index === 0 ? 'col-span-2 h-72' : 'h-44'}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ))}
            </div>
            <div>
              <SectionIntro eyebrow="Gallery preview" title="See the campground before you choose dates.">
                <p>
                  Browse the office, wooded stays, cabin areas, and family spaces around Cadillac
                  Woods.
                </p>
              </SectionIntro>
              <TextLink href="/gallery">Browse the gallery</TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-lake-50">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <SectionIntro eyebrow="Ready to plan?" title="Check dates online. Call when you need a person.">
                <p>
                  Start online for dates and rates. Call the office for help choosing a site,
                  monthly stays, or details that affect your trip.
                </p>
              </SectionIntro>
              <div className="flex flex-col gap-3 sm:flex-row">
                <BookNowButton source="home_bottom" size="lg" className="rounded-full" />
                <a
                  href={siteInfo.emailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-200 bg-white px-7 py-4 text-base font-semibold text-forest-950 transition hover:bg-forest-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Email us
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {bookingTruths.map((truth) => (
                <div key={truth.label} className="rounded-[1.5rem] border border-lake-200 bg-white p-5 shadow-sm">
                  <StatusPill tone={truth.status === 'todo' ? 'campfire' : 'lake'}>{truth.label}</StatusPill>
                  <p className="mt-4 text-sm leading-6 text-mist-700">{truth.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-forest-950 text-white shadow-soft">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-200">Camp arrival</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Know where to go and who to ask.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-mist-300">
                  {siteInfo.address}. Book through Campspot, or call the office if you want help
                  picking a site before you commit.
                </p>
              </div>
              <div className="grid gap-3">
                <a href={siteInfo.phoneHref} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-semibold transition hover:bg-white/15">
                  <Phone className="h-5 w-5 text-lake-200" aria-hidden="true" />
                  {siteInfo.phone}
                </a>
                <a href={siteInfo.emailHref} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-semibold transition hover:bg-white/15">
                  <Mail className="h-5 w-5 text-lake-200" aria-hidden="true" />
                  {siteInfo.email}
                </a>
                <a href={siteInfo.directionsHref} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-semibold transition hover:bg-white/15">
                  <MapPin className="h-5 w-5 text-lake-200" aria-hidden="true" />
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
