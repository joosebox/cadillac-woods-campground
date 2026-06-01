import { Metadata } from 'next';
import Image from 'next/image';
import { HelpCircle, ShieldCheck } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { Container, Section, SectionIntro, StatusPill } from '@/components/site-primitives';
import { bookingTruths, campspotSiteCards, campspotSnapshot, siteInfo, stayTypes } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Stays',
  description:
    'Compare RV sites, rustic and tent stays, and cabin options at Cadillac Woods Campground before checking rates and availability.',
};

export default function StaysPage() {
  return (
    <>
      <section className="bg-forest-950 text-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-200">Stays</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Find the stay that fits your trip.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mist-300">
            Start with the kind of trip you want: RV shade and utilities, a simpler rustic setup,
            or a cabin stay close to the campground atmosphere. {campspotSnapshot.priceRangeSentence}
          </p>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionIntro eyebrow="Quick comparison" title="Choose the stay type before you choose dates.">
            <p>
              Use this as a first pass. Campspot handles final dates, totals, and available
              locations.
            </p>
          </SectionIntro>
          <div className="overflow-hidden rounded-[2rem] border border-forest-950/10 bg-white shadow-soft">
            <div className="hidden lg:block">
              <div className="grid grid-cols-[0.9fr_1.3fr_0.85fr_1.2fr] bg-forest-950 px-6 py-4 text-sm font-semibold text-white">
                <span>Stay type</span>
                <span>Best for</span>
                <span>Starts at</span>
                <span>Ask about</span>
              </div>
              {stayTypes.map((stay) => (
                <div
                  key={stay.id}
                  className="grid grid-cols-[0.9fr_1.3fr_0.85fr_1.2fr] items-start gap-5 border-t border-forest-950/10 px-6 py-5"
                >
                  <div>
                    <StatusPill tone={stay.id === 'rv' ? 'lake' : stay.id === 'cabin' ? 'campfire' : 'forest'}>
                      {stay.shortName}
                    </StatusPill>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-forest-950">{stay.name}</h2>
                  </div>
                  <p className="text-sm leading-6 text-mist-700">{stay.bestFor}</p>
                  <p className="text-lg font-semibold text-forest-950">{stay.startingRate}</p>
                  <p className="text-sm leading-6 text-mist-700">{stay.askAbout.slice(0, 3).join(', ')}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 p-4 lg:hidden">
              {stayTypes.map((stay) => (
                <article key={stay.id} className="rounded-[1.5rem] bg-mist-50 p-5">
                  <StatusPill tone={stay.id === 'rv' ? 'lake' : stay.id === 'cabin' ? 'campfire' : 'forest'}>
                    {stay.shortName}
                  </StatusPill>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-forest-950">{stay.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-mist-700">{stay.bestFor}</p>
                  <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <p className="rounded-2xl bg-white p-3 font-semibold text-forest-950">
                      Starts at {stay.startingRate}
                    </p>
                    <p className="rounded-2xl bg-white p-3 text-mist-700">
                      Ask about {stay.askAbout.slice(0, 2).join(', ').toLowerCase()}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-mist-50">
        <Container>
          <SectionIntro eyebrow="Stay details" title="See what each path includes before booking.">
            <p>
              These are practical stay summaries, not live availability. Open Campspot for final
              totals and available locations.
            </p>
          </SectionIntro>
          <div className="grid gap-8">
            {stayTypes.map((stay, index) => (
              <article
                key={stay.id}
                id={stay.id}
                className="lift-card scroll-mt-24 overflow-hidden rounded-[2rem] border border-forest-950/10 bg-white shadow-soft hover:shadow-[0_24px_60px_rgba(15,26,22,0.14)]"
              >
                <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                  <div className={index % 2 === 1 ? 'relative aspect-[16/10] lg:order-2 lg:aspect-[4/5] lg:self-start' : 'relative aspect-[16/10] lg:aspect-[4/5] lg:self-start'}>
                    <Image src={stay.image} alt={stay.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <StatusPill tone={stay.id === 'rv' ? 'lake' : stay.id === 'cabin' ? 'campfire' : 'forest'}>
                      {stay.shortName}
                    </StatusPill>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-forest-950">{stay.name}</h2>
                    <p className="mt-4 text-lg leading-8 text-mist-700">{stay.summary}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-lake-200 bg-lake-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lake-800">Starting at</p>
                        <p className="mt-2 text-2xl font-semibold tracking-tight text-forest-950">{stay.startingRate}</p>
                      </div>
                      <div className="rounded-2xl border border-forest-950/10 bg-mist-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-900">Listed options</p>
                        <p className="mt-2 text-sm leading-6 text-mist-700">{stay.campspotInventory}</p>
                      </div>
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">
                          <ShieldCheck className="h-4 w-4 text-lake-700" aria-hidden="true" />
                          Good fit
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-mist-700">{stay.bestFor}</p>
                      </div>
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">
                          <HelpCircle className="h-4 w-4 text-lake-700" aria-hidden="true" />
                          Ask about
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-mist-700">
                          {stay.askAbout.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 rounded-[1.5rem] bg-mist-50 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">
                        Good to know
                      </h3>
                      <ul className="mt-4 grid gap-2 text-sm font-medium text-forest-950 sm:grid-cols-2">
                        {stay.highlights.map((item) => (
                          <li key={item} className="rounded-2xl bg-white p-3">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">
                          Bookable site types
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-mist-700">
                          {stay.campspotVariants.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">
                          Site amenities
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-mist-700">
                          {stay.campspotAmenities.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist-50">
        <Container>
          <SectionIntro eyebrow="Site types and rates" title="Starting rates by bookable site type.">
            <p>
              Use these as a quick comparison, then choose dates on Campspot for final totals and
              available locations.
            </p>
          </SectionIntro>
          <div className="grid gap-4 lg:grid-cols-2">
            {campspotSiteCards.map((site) => (
              <article key={`${site.category}-${site.name}`} className="rounded-[1.5rem] border border-forest-950/10 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <StatusPill tone={site.category === 'Lodging' ? 'campfire' : site.category === 'RV Sites' ? 'lake' : 'forest'}>
                      {site.category}
                    </StatusPill>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-forest-950">{site.name}</h2>
                    {site.details && <p className="mt-2 text-sm leading-6 text-mist-700">{site.details}</p>}
                  </div>
                  <div className="rounded-2xl bg-lake-50 px-4 py-3 text-left sm:text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lake-800">Starting at</p>
                    <p className="mt-1 text-xl font-semibold text-forest-950">{site.startingAt}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl bg-mist-50 p-4 font-semibold text-forest-950">
                    {site.availableLocations}
                  </div>
                  {site.vehicleFit && (
                    <div className="rounded-2xl bg-mist-50 p-4 font-semibold text-forest-950">
                      {site.vehicleFit}
                    </div>
                  )}
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {site.amenities.map((amenity) => (
                    <li key={amenity} className="rounded-full border border-forest-950/10 px-3 py-1 text-xs font-semibold text-mist-700">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-lake-50">
        <Container>
          <SectionIntro eyebrow="Before you book" title="Choose dates online or call for help picking the right fit.">
            <p>
              Campspot handles current rates and open dates. The office can help with utility,
              connectivity, or questions about which site is best before you book.
            </p>
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bookingTruths.map((truth) => (
              <div key={truth.label} className="rounded-[1.5rem] border border-lake-200 bg-white p-5 shadow-sm">
                <StatusPill tone={truth.status === 'todo' ? 'campfire' : 'lake'}>{truth.label}</StatusPill>
                <p className="mt-4 text-sm leading-6 text-mist-700">{truth.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookNowButton source="stays_bottom" size="lg" className="rounded-full" />
            <a
              href={siteInfo.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-forest-200 bg-white px-7 py-4 text-base font-semibold text-forest-950 transition hover:bg-forest-50"
            >
              Call {siteInfo.phone}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
