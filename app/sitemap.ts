import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const currentDate = new Date();

  // Static pages with their priorities and update frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/stays`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/amenities`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/map`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/policies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // TODO: Add dynamic content from Sanity CMS
  // Example of how to add blog posts, events, or other dynamic content:
  /*
  const blogPosts = await getBlogPosts(); // This would come from Sanity CMS
  const dynamicPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));
  
  const events = await getEvents(); // This would come from Sanity CMS
  const eventPages = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));
  */

  // Combine all pages
  return [
    ...staticPages,
    // ...dynamicPages,
    // ...eventPages,
  ];
}