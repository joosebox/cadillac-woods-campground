'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PolicyItem {
  question: string;
  answer: string;
}

export function PoliciesClient({ items }: { items: PolicyItem[] }) {
  const [openItem, setOpenItem] = useState(0);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-4">
        {items.map((item, index) => {
          const isOpen = openItem === index;
          const panelId = `policy-panel-${index}`;

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
                onClick={() => setOpenItem(isOpen ? -1 : index)}
              >
                <span className="text-base font-semibold text-forest-950">{item.question}</span>
                <ChevronDown
                  className={cn('h-5 w-5 flex-none text-lake-800 transition-transform', isOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
              <div
                id={panelId}
                aria-hidden={!isOpen}
                className={cn(
                  'overflow-hidden transition-[max-height,opacity] duration-500 ease-out',
                  isOpen ? 'max-h-[60rem] opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div
                  className={cn(
                    'border-t border-forest-950/10 px-5 py-5 transition-transform duration-500 ease-out',
                    isOpen ? 'translate-y-0' : '-translate-y-2'
                  )}
                >
                  <p className="text-sm leading-7 text-mist-700">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
