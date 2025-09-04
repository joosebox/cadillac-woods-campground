import { Metadata } from 'next';
import Image from 'next/image';
import { BookNowButton } from '@/components/book-now-button';
import { Check, Users, Ruler, Zap, Droplets, Wifi, Tv, Dog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stays & Rates',
  description: 'Choose from RV sites, tent camping, or cozy cabins. Full hookups, spacious sites, and modern amenities available.',
};

const stayTypes = [
  {
    id: 'rv',
    name: 'RV Sites',
    description: 'Full hookup sites perfect for your RV adventure',
    priceFrom: 45,
    image: '/images/accommodations/rv-sites-1.jpeg',
    features: [
      { icon: Zap, text: '30/50 Amp Electric' },
      { icon: Droplets, text: 'Water & Sewer' },
      { icon: Wifi, text: 'WiFi Available' },
      { icon: Tv, text: 'Cable TV Ready' },
      { icon: Users, text: 'Up to 8 people' },
      { icon: Ruler, text: '30x50 ft sites' },
    ],
    sites: [
      { name: 'Premium Pull-Through', price: 55, size: '35x70', hookups: ['50 amp', 'water', 'sewer', 'cable'] },
      { name: 'Standard Back-In', price: 45, size: '30x50', hookups: ['30 amp', 'water', 'sewer'] },
      { name: 'Lakefront RV', price: 65, size: '30x50', hookups: ['50 amp', 'water', 'sewer', 'cable'] },
    ],
  },
  {
    id: 'tent',
    name: 'Tent Sites',
    description: 'Immerse yourself in nature with our spacious tent sites',
    priceFrom: 25,
    image: '/images/accommodations/rv-sites-3.jpeg',
    features: [
      { icon: Users, text: 'Up to 6 people' },
      { icon: Ruler, text: '20x30 ft sites' },
      { icon: Droplets, text: 'Water nearby' },
      { icon: Check, text: 'Fire ring & picnic table' },
      { icon: Dog, text: 'Pet friendly' },
      { icon: Wifi, text: 'WiFi at office' },
    ],
    sites: [
      { name: 'Primitive Tent', price: 25, size: '20x30', amenities: ['fire ring', 'picnic table'] },
      { name: 'Electric Tent', price: 35, size: '20x30', amenities: ['20 amp electric', 'fire ring', 'picnic table'] },
      { name: 'Group Tent Area', price: 75, size: '40x60', amenities: ['fire ring', 'multiple tables', 'electric'] },
    ],
  },
  {
    id: 'cabin',
    name: 'Cabins',
    description: 'Comfortable cabins with modern amenities',
    priceFrom: 95,
    image: '/images/accommodations/rustic-cabins-1.jpeg',
    features: [
      { icon: Users, text: 'Sleeps 4-6' },
      { icon: Check, text: 'Full bathroom' },
      { icon: Check, text: 'Kitchenette' },
      { icon: Wifi, text: 'WiFi included' },
      { icon: Check, text: 'Heat & A/C' },
      { icon: Check, text: 'Furnished' },
    ],
    sites: [
      { name: 'Cozy Cabin', price: 95, sleeps: 4, amenities: ['bathroom', 'kitchenette', 'deck'] },
      { name: 'Deluxe Cabin', price: 125, sleeps: 6, amenities: ['full kitchen', 'bathroom', 'fireplace', 'deck'] },
      { name: 'Lakefront Cabin', price: 145, sleeps: 6, amenities: ['full kitchen', 'bathroom', 'fireplace', 'lake view'] },
    ],
  },
];

export default function StaysPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Stays & Rates
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Find your perfect camping experience. All rates shown are starting prices - actual rates 
            vary by season and availability. Book through Campspot for current pricing.
          </p>
        </div>
      </section>

      {stayTypes.map((stayType, index) => (
        <section
          key={stayType.id}
          id={stayType.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {stayType.name}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{stayType.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stayType.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <h3 className="font-semibold text-lg mb-4">Available Options:</h3>
                  <div className="space-y-3">
                    {stayType.sites.map((site, idx) => (
                      <div key={idx} className="flex justify-between items-start pb-3 border-b last:border-0">
                        <div>
                          <p className="font-medium">{site.name}</p>
                          <p className="text-sm text-gray-600">
                            {'size' in site && `Size: ${site.size} • `}
                            {'sleeps' in site && `Sleeps: ${site.sleeps} • `}
                            {'hookups' in site && site.hookups.join(', ')}
                            {'amenities' in site && site.amenities.join(', ')}
                          </p>
                        </div>
                        <p className="font-semibold text-primary-600">
                          From ${site.price}/night
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <BookNowButton source={`stays_${stayType.id}`} size="md" />
              </div>
              
              <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                index % 2 === 1 ? 'lg:order-1' : ''
              }`}>
                <Image
                  src={stayType.image}
                  alt={`${stayType.name} at our campground`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Important Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Check-In/Out</h3>
              <p>Check-in: 2:00 PM</p>
              <p>Check-out: 11:00 AM</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Cancellation</h3>
              <p>Free cancellation up to 48 hours before arrival</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Pet Policy</h3>
              <p>Pets welcome! $10/night per pet (max 2)</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="mb-6 text-lg">Ready to book your stay?</p>
            <BookNowButton size="lg" variant="secondary" source="stays_cta" />
          </div>
        </div>
      </section>
    </>
  );
}