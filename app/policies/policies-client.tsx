'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, CreditCard, Dog, MapPin, Shield } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ElementType;
}

interface PolicyCategory {
  title: string;
  iconName: string;
  items: FAQItem[];
}

function CollapsibleSection({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

function PolicyCategory({ category, openItems, onToggle }: {
  category: PolicyCategory;
  openItems: Set<string>;
  onToggle: (id: string) => void;
}) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return Clock;
      case 'CreditCard': return CreditCard;
      case 'Dog': return Dog;
      case 'MapPin': return MapPin;
      case 'Shield': return Shield;
      default: return Clock;
    }
  };
  
  const Icon = getIcon(category.iconName);

  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        <Icon className="h-8 w-8 text-primary-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
      </div>
      <div className="space-y-4">
        {category.items.map((item, index) => {
          const itemId = `${category.title}-${index}`;
          return (
            <CollapsibleSection
              key={itemId}
              item={item}
              isOpen={openItems.has(itemId)}
              onToggle={() => onToggle(itemId)}
            />
          );
        })}
      </div>
    </section>
  );
}

interface PoliciesClientProps {
  policyCategories: PolicyCategory[];
}

export function PoliciesClient({ policyCategories }: PoliciesClientProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const allItemIds = policyCategories.flatMap((category, catIndex) =>
      category.items.map((_, itemIndex) => `${category.title}-${itemIndex}`)
    );
    setOpenItems(new Set(allItemIds));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <>
      {/* Control Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={expandAll}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          aria-label="Expand all FAQ sections"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          aria-label="Collapse all FAQ sections"
        >
          Collapse All
        </button>
      </div>

      {/* Policy Categories */}
      <div className="max-w-4xl mx-auto">
        {policyCategories.map((category) => (
          <PolicyCategory
            key={category.title}
            category={category}
            openItems={openItems}
            onToggle={toggleItem}
          />
        ))}
      </div>
    </>
  );
}