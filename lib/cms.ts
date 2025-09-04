import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Query helpers
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    title,
    description,
    heroImage,
    heroHeading,
    heroSubheading,
    bookingUrl,
    phone,
    email,
    address,
    socialMedia,
    officeHours
  }`);
}

export async function getStays() {
  return client.fetch(`*[_type == "stay"] | order(order asc, _createdAt asc){
    _id,
    title,
    slug,
    category,
    description,
    images,
    priceFrom,
    maxOccupancy,
    siteSize,
    features,
    hookups,
    isPetFriendly,
    isAccessible
  }`);
}

export async function getAmenities() {
  return client.fetch(`*[_type == "amenity"] | order(order asc, _createdAt asc){
    _id,
    title,
    category,
    description,
    icon,
    image,
    isFeatured
  }`);
}

export async function getFeaturedAmenities() {
  return client.fetch(`*[_type == "amenity" && isFeatured == true] | order(order asc, _createdAt asc)[0...6]{
    _id,
    title,
    description,
    icon,
    image
  }`);
}

export async function getPolicies() {
  return client.fetch(`*[_type == "policy"] | order(order asc, _createdAt asc){
    _id,
    title,
    category,
    content,
    isHighlighted
  }`);
}

export async function getGalleryImages() {
  return client.fetch(`*[_type == "galleryImage"] | order(order asc, _createdAt asc){
    _id,
    title,
    category,
    image,
    isFeatured,
    season
  }`);
}

export async function getFeaturedGalleryImages() {
  return client.fetch(`*[_type == "galleryImage" && isFeatured == true] | order(order asc, _createdAt asc)[0...8]{
    _id,
    title,
    image
  }`);
}