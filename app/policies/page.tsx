import { Metadata } from 'next';
import { Users } from 'lucide-react';
import { PoliciesClient } from './policies-client';

export const metadata: Metadata = {
  title: 'Policies & FAQ',
  description: 'Review our campground policies, check-in procedures, cancellation terms, pet policies, and frequently asked questions.',
  keywords: ['policies', 'FAQ', 'check-in', 'cancellation', 'pet policy', 'campground rules'],
};

const policyCategories = [
  {
    title: 'Check-In & Check-Out',
    iconName: 'Clock',
    items: [
      {
        question: 'What are your check-in and check-out times?',
        answer: 'Check-in is from 2:00 PM onwards, and check-out is by 11:00 AM. Early check-in may be available upon request based on availability.'
      },
      {
        question: 'Can I arrive after office hours?',
        answer: 'Yes! We offer late arrival options. Please contact us in advance to arrange after-hours check-in. Your site assignment and camp map will be left in a secure envelope at the office.'
      },
      {
        question: 'Is there a grace period for late departure?',
        answer: 'We offer a 30-minute grace period. Late departures beyond 11:30 AM may incur additional charges of $15 per hour.'
      },
      {
        question: 'What do I need to bring for check-in?',
        answer: 'Please bring a valid photo ID and your confirmation number. If you made a reservation online, having your confirmation email readily available will expedite the process.'
      }
    ]
  },
  {
    title: 'Cancellation & Refund Policy',
    iconName: 'CreditCard',
    items: [
      {
        question: 'What is your cancellation policy?',
        answer: 'Cancellations made 7+ days before arrival receive a full refund minus a $25 processing fee. Cancellations made 3-6 days before receive 50% refund. No refunds for cancellations within 48 hours of arrival.'
      },
      {
        question: 'What happens if weather causes cancellation?',
        answer: 'In cases of severe weather or emergency closures beyond our control, we will work with you to reschedule your stay or provide appropriate refunds on a case-by-case basis.'
      },
      {
        question: 'Can I modify my reservation?',
        answer: 'Modifications are subject to availability and may incur additional fees. Please contact us at least 48 hours before your arrival to discuss changes.'
      },
      {
        question: 'Do you offer travel insurance?',
        answer: 'We recommend purchasing travel insurance through third-party providers to protect against unforeseen circumstances that may affect your travel plans.'
      }
    ]
  },
  {
    title: 'Pet Policy',
    iconName: 'Dog',
    items: [
      {
        question: 'Are pets allowed at the campground?',
        answer: 'Yes! We welcome well-behaved pets. There is a $15 per night pet fee. Maximum of 2 pets per site. Pets must be leashed at all times and are not allowed in buildings.'
      },
      {
        question: 'Are there breed restrictions?',
        answer: 'We do not have breed restrictions, but all pets must be friendly and well-socialized. Aggressive behavior will result in immediate removal from the campground.'
      },
      {
        question: 'Where can I walk my pet?',
        answer: 'We have designated pet walking areas and trails. Please clean up after your pet and dispose of waste in provided receptacles. There is also an off-leash dog park area.'
      },
      {
        question: 'What vaccinations are required?',
        answer: 'All pets must be current on rabies, distemper, and other standard vaccinations. Please bring vaccination records or be prepared to show them if requested.'
      }
    ]
  },
  {
    title: 'Campground Rules & Safety',
    iconName: 'Shield',
    items: [
      {
        question: 'What are the quiet hours?',
        answer: 'Quiet hours are from 10:00 PM to 8:00 AM. Please be respectful of other campers by keeping noise levels down during these times.'
      },
      {
        question: 'Are campfires allowed?',
        answer: 'Yes, campfires are allowed in designated fire rings only. Fires must be attended at all times and completely extinguished before leaving your site. Firewood is available for purchase.'
      },
      {
        question: 'What is your alcohol policy?',
        answer: 'Moderate alcohol consumption is permitted at individual campsites. Glass containers are not allowed near water areas. No alcohol is permitted in common areas or playgrounds.'
      },
      {
        question: 'How many people are allowed per site?',
        answer: 'Standard sites accommodate up to 6 people and 2 vehicles. Additional guests and vehicles may incur extra fees. Large group sites are available for bigger parties.'
      },
      {
        question: 'Are ATVs or off-road vehicles allowed?',
        answer: 'ATVs and off-road vehicles are not permitted on campground property for safety and environmental protection reasons.'
      }
    ]
  },
  {
    title: 'Payment & Rates',
    iconName: 'CreditCard',
    items: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, debit cards, cash, and checks. Online reservations require a credit card. Full payment is due at check-in unless paid in advance.'
      },
      {
        question: 'Is there a deposit required?',
        answer: 'A deposit of one night\'s stay is required to secure your reservation. This deposit will be applied to your final bill upon check-out.'
      },
      {
        question: 'Are there additional fees I should know about?',
        answer: 'Additional fees may apply for extra guests ($5/person/night), extra vehicles ($10/vehicle/night), pets ($15/pet/night), and firewood ($8/bundle).'
      },
      {
        question: 'Do you offer weekly or monthly rates?',
        answer: 'Yes! We offer discounted weekly rates (stay 7 nights, pay for 6) and monthly rates for extended stays. Contact us directly for seasonal rates and long-term stay options.'
      }
    ]
  },
  {
    title: 'Amenities & Services',
    iconName: 'MapPin',
    items: [
      {
        question: 'What amenities are included with my site?',
        answer: 'All sites include access to restrooms, showers, WiFi, and common areas. RV sites include electric, water, and sewer hookups. Tent sites have access to shared water spigots.'
      },
      {
        question: 'Is there a camp store on-site?',
        answer: 'Yes! Our camp store stocks camping essentials, snacks, beverages, firewood, ice, and basic groceries. Store hours are 8:00 AM to 8:00 PM during peak season.'
      },
      {
        question: 'Do you have laundry facilities?',
        answer: 'Yes, we have coin-operated washers and dryers available 24/7 in our bathhouse. Detergent and fabric softener are available for purchase at the camp store.'
      },
      {
        question: 'Is there WiFi throughout the campground?',
        answer: 'Free WiFi is available throughout most of the campground. Signal strength may vary depending on your location. The strongest signal is near the office and main buildings.'
      }
    ]
  }
];

export default function PoliciesPage() {

  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Policies & Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to know about staying at our campground. Find answers to common 
              questions about check-in, policies, amenities, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PoliciesClient policyCategories={policyCategories} />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our friendly staff is here to help! Don't hesitate to reach out if you need 
              clarification on any of our policies or have specific questions about your stay.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Call Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}