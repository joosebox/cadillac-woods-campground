import { Metadata } from 'next';
import Image from 'next/image';
import { Download, Printer, ZoomIn } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Park Map',
  description: 'Interactive campground map showing all sites, facilities, and amenities. Plan your perfect camping spot.',
};

export default function MapPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Campground Map
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Explore our campground layout and find your perfect site. Use our interactive map to 
            discover amenities, trails, and facilities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button 
                  className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  aria-label="Zoom in map"
                >
                  <ZoomIn className="h-5 w-5 mr-2 text-gray-600" />
                  <span>Zoom</span>
                </button>
                <button 
                  className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  aria-label="Download map"
                >
                  <Download className="h-5 w-5 mr-2 text-gray-600" />
                  <span>Download PDF</span>
                </button>
                <button 
                  className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  aria-label="Print map"
                >
                  <Printer className="h-5 w-5 mr-2 text-gray-600" />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
            <Image
              src="/campground-map.jpg"
              alt="Detailed campground map showing all sites and facilities"
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Map Legend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                  <span>RV Sites (Full Hookup)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  <span>Tent Sites</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
                  <span>Cabins</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                  <span>Facilities</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                  <span>Recreation Areas</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Find</h3>
              <ul className="space-y-2">
                <li>Office & Check-in: Main Entrance</li>
                <li>Camp Store: Building A</li>
                <li>Restrooms: Buildings B, D, F</li>
                <li>Playground: Area P1</li>
                <li>Beach Access: North Shore</li>
                <li>Boat Launch: East Dock</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Site Selection Tips</h3>
              <ul className="space-y-2">
                <li>• Lakefront sites: 1-20, 45-60</li>
                <li>• Shaded sites: 30-44, 70-85</li>
                <li>• Pull-through RV: 100-120</li>
                <li>• Group camping: Areas G1-G3</li>
                <li>• Pet-friendly: All sites except cabins</li>
                <li>• ADA accessible: Sites marked with ♿</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Need Help Choosing a Site?</h3>
            <p className="text-gray-700 mb-4">
              Our friendly staff is happy to help you select the perfect site based on your needs. 
              Call us at {process.env.NEXT_PUBLIC_SITE_PHONE} or use the Campspot booking system 
              to see real-time availability and photos of each site.
            </p>
            <p className="text-sm text-gray-600">
              Note: This map is for reference only. Site availability and exact locations may vary. 
              Please confirm your site assignment at check-in.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}