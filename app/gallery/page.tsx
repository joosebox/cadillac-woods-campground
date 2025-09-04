import { Metadata } from 'next';
import { GalleryClient } from './gallery-client';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'Browse photos of our beautiful campground, accommodations, amenities, and the stunning Northern Michigan landscape.',
  keywords: ['gallery', 'photos', 'campground', 'RV sites', 'cabins', 'activities', 'Northern Michigan'],
};

// This would typically come from Sanity CMS
const galleryCategories = [
  { id: 'all', name: 'All Photos', count: 9 },
  { id: 'sites', name: 'Campsites & RV Sites', count: 3 },
  { id: 'cabins', name: 'Cabins', count: 2 },
  { id: 'amenities', name: 'Amenities', count: 1 },
  { id: 'office', name: 'Office & Facilities', count: 3 },
];

// Real gallery photos from Cadillac Woods Campground
const galleryImages = [
  {
    id: '1',
    src: '/images/gallery/office-building.jpeg',
    alt: 'Cadillac Woods main office building',
    category: 'office',
    title: 'Main Office & Store',
    description: 'Our welcoming A-frame office building with camp store and essentials'
  },
  {
    id: '2',
    src: '/images/gallery/office-with-flag.jpeg',
    alt: 'Office building with American flag and campground view',
    category: 'office',
    title: 'Campground Entrance',
    description: 'Main office area with beautiful wooded camping sites in background'
  },
  {
    id: '3',
    src: '/images/gallery/office-wide-view.jpeg',
    alt: 'Wide view of office and camping area',
    category: 'office',
    title: 'Campground Overview',
    description: 'Panoramic view showing our main facilities and camping areas'
  },
  {
    id: '4',
    src: '/images/accommodations/rv-sites-1.jpeg',
    alt: 'RV camping sites with central fire ring area',
    category: 'sites',
    title: 'RV Sites with Fire Ring',
    description: 'Spacious RV sites with communal fire ring area among tall trees'
  },
  {
    id: '5',
    src: '/images/accommodations/rv-sites-2.jpeg',
    alt: 'RV sites with hookups and stone borders',
    category: 'sites',
    title: 'RV Sites with Hookups',
    description: 'Well-maintained RV sites with full hookups and decorative stone borders'
  },
  {
    id: '6',
    src: '/images/accommodations/rv-sites-3.jpeg',
    alt: 'Wide view of RV camping area',
    category: 'sites',
    title: 'RV Camping Area',
    description: 'Multiple RV sites nestled among mature trees with plenty of privacy'
  },
  {
    id: '7',
    src: '/images/accommodations/rustic-cabins-1.jpeg',
    alt: 'Rustic cabins nestled in the woods',
    category: 'cabins',
    title: 'Rustic Cabins',
    description: 'Cozy wooden cabins with covered porches in a peaceful forest setting'
  },
  {
    id: '8',
    src: '/images/accommodations/rustic-cabins-2.jpeg',
    alt: 'Another view of the rustic cabins',
    category: 'cabins',
    title: 'Cabin Area',
    description: 'Our charming cabins offer a perfect blend of comfort and nature'
  },
  {
    id: '9',
    src: '/images/amenities/playground.jpeg',
    alt: 'Children\'s playground nestled among the trees',
    category: 'amenities',
    title: 'Playground Area',
    description: 'Safe and fun playground equipment for families with children'
  }
];

export default function GalleryPage() {

  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our beautiful campground through these photos showcasing our sites, 
              amenities, activities, and the natural beauty of Northern Michigan.
            </p>
          </div>

          <GalleryClient 
            galleryCategories={galleryCategories} 
            galleryImages={galleryImages} 
          />
        </div>
      </section>

    </>
  );
}