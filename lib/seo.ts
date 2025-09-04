import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME || 'Campground',
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME || 'Campground'}`,
  },
  description: 'Experience the beauty of Northern Michigan at our family-friendly campground. RV sites, tent camping, and cabin rentals available.',
  keywords: ['camping', 'RV park', 'campground', 'Northern Michigan', 'family camping', 'outdoor recreation'],
  authors: [{ name: 'Campground Team' }],
  creator: 'Campground',
  publisher: 'Campground',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Campground hero image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Campground',
    name: process.env.NEXT_PUBLIC_SITE_NAME,
    description: 'Family-friendly campground in Northern Michigan',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    telephone: process.env.NEXT_PUBLIC_SITE_PHONE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Northern Michigan',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.0', // Update with actual coordinates
      longitude: '-84.0',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'RV Hookups' },
      { '@type': 'LocationFeatureSpecification', name: 'Tent Sites' },
      { '@type': 'LocationFeatureSpecification', name: 'Cabins' },
      { '@type': 'LocationFeatureSpecification', name: 'Restrooms' },
      { '@type': 'LocationFeatureSpecification', name: 'Showers' },
    ],
    priceRange: '$$',
    reservationAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: process.env.NEXT_PUBLIC_CAMPSPOT_BASE_URL,
      },
    },
  };
}