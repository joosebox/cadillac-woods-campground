import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cadillacwoodsmi.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/stays`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/amenities`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/map`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/policies`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
