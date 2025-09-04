import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookNowButton } from '@/components/book-now-button';
import { Tent, Trees, Wifi, Car, Users, MapPin } from 'lucide-react';
import { generateJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cadillac Woods Campground | RV & Tent Camping in Tustin, Michigan',
  description: 'Family-friendly campground with 37 sites, 6 rustic cabins, pool, mini golf, and hiking trails. Located in Tustin, MI - 10 minutes from Lake Cadillac & Lake Mitchell.',
};

const features = [
  {
    name: 'RV & Tent Sites',
    description: '37 beautiful wooded sites with water, electric (30/50 amp), and dump station.',
    icon: Car,
  },
  {
    name: 'Rustic Cabins',
    description: '6 charming cabins perfect for a cozy getaway in nature.',
    icon: Tent,
  },
  {
    name: 'Pool & Mini Golf',
    description: 'Cool off in our pool or enjoy a round of mini golf with the family.',
    icon: Wifi,
  },
  {
    name: 'Hiking Trails',
    description: 'Explore beautiful wooded trails right from your campsite.',
    icon: Trees,
  },
  {
    name: 'Family Friendly',
    description: 'Playground, horseshoes, and activities for all ages.',
    icon: Users,
  },
  {
    name: 'Near Lakes',
    description: '10 minutes from Lake Cadillac and Lake Mitchell for boating and fishing.',
    icon: MapPin,
  },
];

export default function HomePage() {
  const jsonLd = generateJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />
        <Image
          src="/images/gallery/office-wide-view.jpeg"
          alt="Cadillac Woods Campground main office and grounds"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Welcome to Cadillac Woods Campground
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Your Perfect Camping Getaway in Tustin, Michigan
          </p>
          <div className="animate-slide-up animation-delay-200">
            <BookNowButton size="lg" source="hero" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              37 Beautiful Sites in the Heart of Michigan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nestled in the woods just 10 minutes from Lake Cadillac and Lake Mitchell, we offer
              the perfect blend of nature and comfort with modern amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Experience Cadillac Woods
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located on M-115 in Tustin, our 37-site campground provides the perfect
                basecamp for exploring the Cadillac area. With 10 golf courses nearby, three rivers for canoeing,
                and two beautiful lakes just minutes away.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Beautiful wooded sites with privacy and shade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>10 minutes from Lake Cadillac and Lake Mitchell</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Pet-friendly with designated areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Pool, mini golf, and playground on-site</span>
                </li>
              </ul>
              <Link
                href="/amenities"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
              >
                Explore all amenities
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/gallery/office-building.jpeg"
                alt="Cadillac Woods main office building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Choose Your Perfect Stay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            <div className="group cursor-pointer">
              <Link href="/stays#rv">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/accommodations/rv-sites-1.jpeg"
                    alt="RV camping sites among the trees"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">RV Sites</h3>
                    <p>From $45/night</p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group cursor-pointer">
              <Link href="/stays#tent">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/accommodations/rv-sites-2.jpeg"
                    alt="RV and tent camping sites with hookups"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Tent Sites</h3>
                    <p>From $25/night</p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group cursor-pointer">
              <Link href="/stays#cabin">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/accommodations/rustic-cabins-1.jpeg"
                    alt="Rustic cabins nestled in the woods"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Cozy Cabins</h3>
                    <p>From $95/night</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/stays"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              View All Accommodations
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and experience the natural beauty of Northern Michigan
          </p>
          <BookNowButton size="lg" variant="secondary" source="cta_bottom" />
        </div>
      </section>
    </>
  );
}