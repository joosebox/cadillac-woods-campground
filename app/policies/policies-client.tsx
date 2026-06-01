'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { PolicyCategory, PolicyItem } from '@/lib/site-content';
import { cn } from '@/lib/utils';

export function PoliciesClient({ items }: { items: PolicyItem[] }) {
  const categories: PolicyCategory[] = [
    'Booking & rates',
    'Arrival & sites',
    'Pets & conduct',
    'Utilities & services',
  ];
  const [openItem, setOpenItem] = useState(`${items[0]?.category}-${items[0]?.question}`);

  return (
    <div className="mx-auto grid max-w-5xl gap-8">
      {categories.map((category) => {
        const categoryItems = items.filter((item) => item.category === category);
        if (categoryItems.length === 0) return null;

        return (
          <section key={category} aria-labelledby={`policy-${category.toLowerCase().replaceAll(' ', '-')}`}>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lake-800">FAQ section</p>
                <h2
                  id={`policy-${category.toLowerCase().replaceAll(' ', '-')}`}
                  className="mt-2 text-2xl font-semibold tracking-tight text-forest-950"
                >
                  {category}
                </h2>
              </div>
              <p className="hidden text-sm font-semibold text-mist-600 sm:block">
                {categoryItems.length} {categoryItems.length === 1 ? 'answer' : 'answers'}
              </p>
            </div>
            <div className="grid gap-4">
              {categoryItems.map((item) => {
                const itemKey = `${item.category}-${item.question}`;
                const isOpen = openItem === itemKey;
                const panelId = `policy-panel-${itemKey.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

                return (
                  <div
                    key={item.question}
                    className="lift-card overflow-hidden rounded-[1.5rem] border border-forest-950/10 bg-white shadow-sm hover:shadow-soft"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-mist-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenItem(isOpen ? '' : itemKey)}
                    >
                      <span className="text-base font-semibold text-forest-950">{item.question}</span>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 flex-none text-lake-800 transition-transform duration-300',
                          isOpen && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id={panelId}
                      aria-hidden={!isOpen}
                      className={cn(
                        'grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.21,0.82,0.24,1)]',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="min-h-0">
                        <div
                          className={cn(
                            'border-t border-forest-950/10 px-5 py-5 transition-transform duration-500 ease-[cubic-bezier(0.21,0.82,0.24,1)]',
                            isOpen ? 'translate-y-0' : '-translate-y-2'
                          )}
                        >
                          <p className="text-sm leading-7 text-mist-700">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
