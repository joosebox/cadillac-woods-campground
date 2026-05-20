'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { siteInfo, stayTypes } from '@/lib/site-content';
import { cn } from '@/lib/utils';

const priorities = [
  { id: 'family', label: 'Family activities' },
  { id: 'quiet', label: 'Wooded feel' },
  { id: 'easy', label: 'Easy arrival' },
  { id: 'dump', label: 'Dump station help' },
  { id: 'pet', label: 'Pet-friendly question' },
];

export function StayFinder() {
  const [selectedStay, setSelectedStay] = useState(stayTypes[0].id);
  const [selectedPriority, setSelectedPriority] = useState(priorities[0].id);

  const stay = useMemo(() => stayTypes.find((item) => item.id === selectedStay) || stayTypes[0], [selectedStay]);
  const priority = priorities.find((item) => item.id === selectedPriority) || priorities[0];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-forest-950/10 bg-white shadow-soft">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-forest-950 p-6 text-white sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-200">Find your stay</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Match the trip first. Then check dates.
          </h3>
          <p className="mt-5 text-sm leading-7 text-mist-300">
            Pick a stay style and what matters most, then book current options through Campspot
            or call the office for help choosing a site.
          </p>
          <div className="mt-8 grid gap-2">
            {stayTypes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedStay(item.id)}
                className={cn(
                  'rounded-2xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-300',
                  selectedStay === item.id
                    ? 'border-lake-300 bg-white text-forest-950'
                    : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                )}
              >
                <span className="block text-sm font-semibold">{item.name}</span>
                <span className={cn('mt-1 block text-xs', selectedStay === item.id ? 'text-mist-700' : 'text-mist-300')}>
                  Starts at {item.startingRate} on Campspot
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-700">What matters most?</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {priorities.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedPriority(item.id)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500',
                  selectedPriority === item.id
                    ? 'border-forest-950 bg-forest-950 text-white'
                    : 'border-forest-200 bg-white text-forest-950 hover:bg-forest-50'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-mist-50 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-semibold tracking-tight text-forest-950">{stay.name}</h4>
                <p className="mt-2 text-sm leading-6 text-mist-700">{stay.summary}</p>
                <p className="mt-3 text-sm font-semibold text-forest-950">
                  Starting at {stay.startingRate}; {stay.campspotInventory}.
                </p>
              </div>
              <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-lake-700" aria-hidden="true" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stay.highlights.map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 text-sm font-semibold text-forest-950">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-lake-200 bg-lake-50 p-4 text-sm leading-6 text-lake-950">
              For <strong>{priority.label.toLowerCase()}</strong>, start with current options on
              Campspot or call {siteInfo.phone} to ask about {stay.askAbout.join(', ')}.
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <BookNowButton source="stay_finder" className="rounded-full" />
            <a
              href={siteInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-200 px-5 py-3 text-sm font-semibold text-forest-950 transition hover:bg-forest-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
            >
              Call the office
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
