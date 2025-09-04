import { Metadata } from 'next';
import Image from 'next/image';
import { 
  Wifi, ShowerHead, Car, Trees, Fish, Bike, 
  Camera, Flame, Coffee, Store, Dog, Heart,
  Users, Trophy, Music, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Amenities',
  description: 'Discover all the amenities and facilities available at our campground. From modern conveniences to outdoor activities.',
};

const amenityCategories = [
  {
    name: 'Facilities',
    amenities: [
      { icon: ShowerHead, name: 'Modern Restrooms', description: 'Clean facilities with hot showers' },
      { icon: Wifi, name: 'Free WiFi', description: 'Available throughout the campground' },
      { icon: Store, name: 'Camp Store', description: 'Essentials, snacks, and camping supplies' },
      { icon: Coffee, name: 'Coffee Bar', description: 'Fresh coffee and pastries each morning' },
    ],
  },
  {
    name: 'Recreation',
    amenities: [
      { icon: Waves, name: 'Swimming Area', description: 'Private beach with designated swim zone' },
      { icon: Fish, name: 'Fishing', description: 'Excellent fishing from shore or boat' },
      { icon: Trees, name: 'Nature Trails', description: 'Miles of scenic hiking trails' },
      { icon: Bike, name: 'Bike Paths', description: 'Paved and off-road biking trails' },
    ],
  },
  {
    name: 'Activities',
    amenities: [
      { icon: Users, name: 'Game Room', description: 'Pool table, arcade games, and more' },
      { icon: Flame, name: 'Fire Pits', description: 'Communal fire pits for evening gatherings' },
      { icon: Trophy, name: 'Sports Courts', description: 'Basketball, volleyball, and horseshoes' },
      { icon: Music, name: 'Weekend Events', description: 'Live music and themed activities' },
    ],
  },
  {
    name: 'Services',
    amenities: [
      { icon: Car, name: 'RV Services', description: 'Dump station and propane filling' },
      { icon: Heart, name: 'First Aid', description: 'First aid station at the office' },
      { icon: Dog, name: 'Pet Area', description: 'Designated off-leash dog park' },
      { icon: Camera, name: 'Security', description: '24/7 security and well-lit paths' },
    ],
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Campground Amenities
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            We've thoughtfully designed our campground with amenities that enhance your outdoor 
            experience while providing the comforts you need for a perfect stay.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {amenityCategories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.amenities.map((amenity, index) => (
                  <div
                    key={amenity.name}
                    className="group bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <amenity.icon className="h-10 w-10 text-primary-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.name}</h3>
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Family Fun Activities
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our playground and recreational areas provide endless entertainment for kids of all ages. 
                Safely nestled among the trees, it's the perfect spot for families to create lasting memories.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Safe playground equipment for all ages</span>
                </div>
                <div className="flex items-center">
                  <Trees className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Shaded by mature trees</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Family-friendly atmosphere</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/amenities/playground.jpeg"
                alt="Children's playground nestled among the trees"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Friendly</h3>
              <p className="text-gray-600">
                Safe, fun environment with activities for all ages
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Trees className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nature Immersion</h3>
              <p className="text-gray-600">
                Surrounded by pristine forests and crystal-clear waters
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Feel</h3>
              <p className="text-gray-600">
                Meet fellow campers at our organized events and gatherings
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}