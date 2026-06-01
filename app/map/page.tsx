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

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-4 text-forest-950 shadow-soft sm:p-6">
            <div className="map-line-motion absolute inset-0 opacity-80 [background-image:linear-gradient(120deg,rgba(50,151,255,0.12)_1px,transparent_1px),linear-gradient(30deg,rgba(66,119,99,0.14)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-forest-950/10 bg-[#f7fbf6]">
              <div className="absolute inset-x-0 top-0 h-14 bg-lake-100/70" />
              <svg
                viewBox="0 0 760 470"
                className="relative block h-auto w-full"
                role="img"
                aria-label="Non-exact illustrated orientation of Cadillac Woods campground areas"
              >
                <defs>
                  <pattern id="tree-dot" width="34" height="34" patternUnits="userSpaceOnUse">
                    <circle cx="12" cy="12" r="7" fill="#427763" opacity="0.22" />
                    <circle cx="25" cy="24" r="5" fill="#0f1a16" opacity="0.12" />
                  </pattern>
                </defs>
                <rect width="760" height="470" fill="#f7fbf6" />
                <rect x="0" y="82" width="760" height="388" fill="url(#tree-dot)" />
                <path d="M-30 78 C126 55 210 92 320 70 C438 46 548 48 790 88" fill="none" stroke="#3297ff" strokeWidth="34" strokeLinecap="round" opacity="0.22" />
                <path d="M-30 78 C126 55 210 92 320 70 C438 46 548 48 790 88" fill="none" stroke="#3297ff" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
                <text x="42" y="45" fill="#0f1a16" fontSize="22" fontWeight="700">M-115 arrival</text>
                <text x="610" y="63" fill="#0f1a16" fontSize="18" fontWeight="700">Tustin</text>
                <path d="M392 82 C370 158 336 197 277 238 C214 282 170 323 146 407" fill="none" stroke="#9a7651" strokeWidth="34" strokeLinecap="round" />
                <path d="M392 82 C370 158 336 197 277 238 C214 282 170 323 146 407" fill="none" stroke="#fff8ed" strokeWidth="18" strokeLinecap="round" strokeDasharray="18 18" />
                <path d="M272 238 C363 208 458 217 558 267 C615 296 644 342 664 414" fill="none" stroke="#9a7651" strokeWidth="28" strokeLinecap="round" opacity="0.9" />
                <path d="M272 238 C363 208 458 217 558 267 C615 296 644 342 664 414" fill="none" stroke="#fff8ed" strokeWidth="13" strokeLinecap="round" strokeDasharray="14 16" />
                <g>
                  <rect x="326" y="124" width="142" height="74" rx="22" fill="#0f1a16" />
                  <text x="397" y="157" textAnchor="middle" fill="#fff" fontSize="19" fontWeight="800">Office</text>
                  <text x="397" y="181" textAnchor="middle" fill="#cfe8ff" fontSize="14" fontWeight="700">Camp store</text>
                </g>
                <g>
                  <rect x="72" y="238" width="170" height="86" rx="26" fill="#427763" />
                  <text x="157" y="276" textAnchor="middle" fill="#fff" fontSize="19" fontWeight="800">Wooded sites</text>
                  <text x="157" y="302" textAnchor="middle" fill="#e6f2ed" fontSize="14" fontWeight="700">RV + rustic</text>
                </g>
                <g>
                  <rect x="492" y="144" width="154" height="80" rx="26" fill="#c76f3b" />
                  <text x="569" y="180" textAnchor="middle" fill="#fff" fontSize="19" fontWeight="800">Cabins</text>
                  <text x="569" y="205" textAnchor="middle" fill="#fff4ed" fontSize="14" fontWeight="700">Ask about setup</text>
                </g>
                <g>
                  <rect x="430" y="292" width="190" height="86" rx="26" fill="#3297ff" />
                  <text x="525" y="328" textAnchor="middle" fill="#fff" fontSize="19" fontWeight="800">Family activities</text>
                  <text x="525" y="354" textAnchor="middle" fill="#e9f5ff" fontSize="14" fontWeight="700">Playground + putt putt</text>
                </g>
                <g>
                  <rect x="216" y="344" width="160" height="76" rx="24" fill="#ffffff" stroke="#dbe6e0" strokeWidth="3" />
                  <text x="296" y="377" textAnchor="middle" fill="#0f1a16" fontSize="17" fontWeight="800">Restrooms</text>
                  <text x="296" y="401" textAnchor="middle" fill="#5f6f69" fontSize="13" fontWeight="700">Laundry nearby</text>
                </g>
                <g>
                  <rect x="50" y="362" width="136" height="58" rx="20" fill="#fff" stroke="#d6c5aa" strokeWidth="3" />
                  <text x="118" y="386" textAnchor="middle" fill="#0f1a16" fontSize="15" fontWeight="800">Dump station</text>
                  <text x="118" y="406" textAnchor="middle" fill="#5f6f69" fontSize="12" fontWeight="700">Wood delivery</text>
                </g>
              </svg>
              <div className="border-t border-forest-950/10 bg-white/95 p-5 sm:p-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-lake-50 text-lake-800">
                        <MapPinned className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lake-800">Orientation only</p>
                        <h2 className="text-2xl font-semibold tracking-tight">Use Campspot for exact site selection.</h2>
                      </div>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-mist-700">
                      This illustration shows the kinds of campground areas to ask about. It is not
                      an exact site map. Campspot includes {campspotSnapshot.totalAvailableSites.toLowerCase()}.
                    </p>
                  </div>
                  <a
                    href={siteInfo.campspotMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-forest-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
                  >
                    Open Campspot map
                  </a>
                </div>
              </div>
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
