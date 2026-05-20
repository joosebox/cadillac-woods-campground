export type ContentStatus = 'confirmed' | 'owner-note' | 'web-researched' | 'todo';

export interface ContentNote {
  label: string;
  status: ContentStatus;
  text: string;
}

export interface SiteInfo {
  name: string;
  shortName: string;
  tagline: string;
  locationLine: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: string;
  directionsHref: string;
  bookingUrl: string;
  campspotListingUrl: string;
  campspotMapUrl: string;
  season: string;
}

export interface StayType {
  id: 'rv' | 'rustic' | 'cabin';
  name: string;
  shortName: string;
  summary: string;
  bestFor: string;
  image: string;
  imageAlt: string;
  status: ContentStatus;
  startingRate: string;
  campspotInventory: string;
  highlights: string[];
  askAbout: string[];
  campspotAmenities: string[];
  campspotVariants: string[];
}

export interface AmenityGroup {
  title: string;
  label: string;
  status: ContentStatus;
  description: string;
  items: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: 'arrival' | 'stays' | 'amenities';
}

export interface CampspotMetric {
  label: string;
  value: string;
  note?: string;
}

export interface CampspotSiteCard {
  category: 'Lodging' | 'RV Sites' | 'Tent Sites';
  name: string;
  startingAt: string;
  availableLocations: string;
  details?: string;
  amenities: string[];
  vehicleFit?: string;
}

export interface PolicyQuickFact {
  label: string;
  text: string;
}

export const siteInfo: SiteInfo = {
  name: 'Cadillac Woods Campground',
  shortName: 'Cadillac Woods',
  tagline: 'Family-owned wooded stays near Cadillac, Michigan',
  locationLine: 'M-115 in Tustin, minutes from the Cadillac area',
  phone: '(231) 825-2012',
  phoneHref: 'tel:+12318252012',
  email: 'cadillacwoodsmi@gmail.com',
  emailHref: 'mailto:cadillacwoodsmi@gmail.com',
  address: '23163 M115, Tustin, MI 49688',
  directionsHref:
    'https://www.google.com/maps/search/?api=1&query=23163%20M115%20Tustin%20MI%2049688',
  bookingUrl:
    process.env.NEXT_PUBLIC_CAMPSPOT_BASE_URL ||
    'https://www.campspot.com/park/cadillac-woods-campground-tustin-mi',
  campspotListingUrl: 'https://www.campspot.com/park/cadillac-woods-campground-tustin-mi',
  campspotMapUrl:
    'https://www.campspot.com/park/cadillac-woods-campground-tustin-mi/map?location=Tustin,%20MI&latitude=44.149146&longitude=-85.323623&adults=0&children=0&pets=0',
  season: 'Spring, summer, and fall camping',
};

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Stays', href: '/stays' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Map', href: '/map' },
  { name: 'Policies', href: '/policies' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const stayTypes: StayType[] = [
  {
    id: 'rv',
    name: 'RV Sites',
    shortName: 'RV',
    summary:
      'Wooded RV sites with electric and water access, plus dump station and honeywagon service options.',
    bestFor: 'Campers bringing a trailer or motorhome who want shade, easy arrival, and quick booking through Campspot.',
    image: '/images/accommodations/rv-sites-1.jpeg',
    imageAlt: 'RV sites tucked into the wooded campground at Cadillac Woods',
    status: 'web-researched',
    startingRate: '$45/night',
    campspotInventory: '27 RV locations listed between 30 AMP/Water and 30/50 AMP/Water options',
    highlights: [
      '30 AMP/Water and 30/50 AMP/Water options',
      'Back-in and pull-through options',
      'Dump station available',
      'Honeywagon dump service for a fee',
    ],
    askAbout: ['Rig fit up to 38 feet', '30 amp versus 50 amp placement', 'Specific site location'],
    campspotAmenities: ['30-Amp', '50-Amp', 'Back-In', 'Pull-Through', 'Pet-Friendly', 'Picnic Table', 'Water Hook-Up'],
    campspotVariants: ['30/50 AMP/Water RV Site', '30 AMP/Water RV Site'],
  },
  {
    id: 'rustic',
    name: 'Rustic & Tent Sites',
    shortName: 'Rustic',
    summary:
      'Simple wooded camping for guests who want trees, camp time, and a classic Northern Michigan outdoors feel.',
    bestFor: 'Tent campers and rustic-site guests who care more about trees, fire rings, and a quiet basecamp.',
    image: '/images/accommodations/rv-sites-3.jpeg',
    imageAlt: 'Wooded rustic camping area at Cadillac Woods',
    status: 'web-researched',
    startingRate: '$25/night',
    campspotInventory: '7 Rustic Tent Site locations listed',
    highlights: ['Rustic Tent Site option', 'Pet-friendly site listing', 'Fits vehicles up to 30 feet'],
    askAbout: ['Exact rustic setup', 'Vehicle fit', 'Distance to restrooms and family activities'],
    campspotAmenities: ['Pet-Friendly'],
    campspotVariants: ['Rustic Tent Site'],
  },
  {
    id: 'cabin',
    name: 'Cabins',
    shortName: 'Cabins',
    summary:
      'Rental cabins for guests who want a roof overhead while still staying close to the campground atmosphere.',
    bestFor: 'Families and couples who want a simpler overnight setup than hauling camping gear.',
    image: '/images/accommodations/rustic-cabins-1.jpeg',
    imageAlt: 'Rustic cabins surrounded by trees at Cadillac Woods',
    status: 'web-researched',
    startingRate: '$75/night',
    campspotInventory: '6 lodging locations listed across cabin and log cabin options',
    highlights: ['Cabin and log cabin variants', 'Electricity', 'Fire pit, microwave, mini fridge, and patio listed'],
    askAbout: ['Bed setup', 'What to bring', 'Current cabin availability'],
    campspotAmenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge', 'Patio'],
    campspotVariants: [
      'Log Cabin, Twin Bunk Beds',
      'Cabin',
      'Cabin, 1 Full Bed',
      'Cabin, 1 Full, Twin Bunk Beds',
      'Log Cabin, 1 Full Bed',
    ],
  },
];

export const campspotSnapshot = {
  sourceLabel: 'Current Campspot details',
  verifiedDate: 'May 20, 2026',
  priceRange: '$25-$75/night',
  totalAvailableSites: '40 site options before you choose dates',
  siteTypeMetrics: [
    { label: 'All Sites', value: '40' },
    { label: 'Lodging', value: '6' },
    { label: 'RV Sites', value: '34' },
    { label: 'Tent Sites', value: '34' },
  ] satisfies CampspotMetric[],
  review: {
    rating: '5.0',
    count: '1 Campspot review',
    quote:
      'This is a great place to stay, it is quiet and the staff are very friendly and helpful. Highly recommend!',
    attribution: 'Melvin I Henry, March 2026',
    categoryRatings: [
      { label: 'Staff', value: '5.0' },
      { label: 'Cellular', value: '5.0' },
      { label: 'Wifi', value: '2.0', note: 'Camper WiFi is not marketed as an included amenity.' },
      { label: 'Value', value: '5.0' },
      { label: 'Site', value: '5.0' },
      { label: 'Location', value: '5.0' },
      { label: 'Washrooms', value: 'n/a' },
      { label: 'Amenities', value: 'n/a' },
    ] satisfies CampspotMetric[],
  },
  deal: {
    title: 'Monthly Rate',
    text: 'Book with us for a monthly stay and get a discounted monthly rate. Please call the office to book.',
  },
  gallery: {
    text:
      'The Campspot listing includes additional campground photos alongside current booking details.',
  },
};

export const campspotSiteCards: CampspotSiteCard[] = [
  {
    category: 'Lodging',
    name: 'Log Cabin, Twin Bunk Beds',
    startingAt: '$75.00/night',
    availableLocations: '1 available location',
    details: 'Cabin 2 with two twin bunk beds',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'Lodging',
    name: 'Cabin',
    startingAt: '$75.00/night',
    availableLocations: '1 available location',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'Lodging',
    name: 'Cabin, 1 Full Bed',
    startingAt: '$75.00/night',
    availableLocations: '1 available location',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'Lodging',
    name: 'Cabin, 1 Full, Twin Bunk Beds',
    startingAt: '$75.00/night',
    availableLocations: '2 available locations',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'Lodging',
    name: 'Log Cabin, 1 Full Bed',
    startingAt: '$75.00/night',
    availableLocations: '1 available location',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'RV Sites',
    name: '30/50 AMP/Water RV Site',
    startingAt: '$45.00/night',
    availableLocations: '5 available locations',
    amenities: ['50-Amp', 'Back-In', 'Pet-Friendly', 'Picnic Table'],
    vehicleFit: 'Fits vehicles up to 38 feet long',
  },
  {
    category: 'RV Sites',
    name: '30 AMP/Water RV Site',
    startingAt: '$45.00/night',
    availableLocations: '22 available locations',
    amenities: ['30-Amp', 'Back-In', 'Pet-Friendly', 'Picnic Table'],
    vehicleFit: 'Fits vehicles up to 38 feet long',
  },
  {
    category: 'Tent Sites',
    name: 'Rustic Tent Site',
    startingAt: '$25.00/night',
    availableLocations: '7 available locations',
    amenities: ['Pet-Friendly'],
    vehicleFit: 'Fits vehicles up to 30 feet long',
  },
];

export const amenityGroups: AmenityGroup[] = [
  {
    title: 'Available Now',
    label: 'On site now',
    status: 'owner-note',
    description: 'Comfort and convenience around the campground.',
    items: [
      'Clean, temperature-controlled restrooms',
      'Bathrooms',
      'Showers',
      'Clubhouse',
      'General store / camp store',
      'Playground',
      'Mini-golf / putt putt and other games',
      'Pavilion',
      'Garbage service',
      'Special events',
      'Dump station',
      'Laundry (additional cost)',
      'Wood delivery to campsite on request',
    ],
  },
  {
    title: 'Recreation Nearby',
    label: 'Nearby area',
    status: 'web-researched',
    description: 'Cadillac-area recreation for easy day plans.',
    items: [
      'Lake Cadillac and Lake Mitchell nearby',
      'Biking',
      'Boating',
      'Breweries',
      'Fishing',
      'Golfing',
      'Nearby hiking and trail access',
      'Historic sites',
      'Live music',
      'OHV trails',
      'Paddling',
      'Restaurants',
      'Shopping',
      'State parks',
      'Wildlife watching',
      'Wineries',
    ],
  },
  {
    title: 'Coming Soon',
    label: 'Coming soon',
    status: 'owner-note',
    description: 'Campground updates guests can watch for.',
    items: ['Heated pool', 'Tap-to-pay laundry machines', 'Printable park map'],
  },
  {
    title: 'Plan Ahead',
    label: 'Plan ahead',
    status: 'owner-note',
    description: 'Details worth checking before you pack or reserve.',
    items: [
      'Camper WiFi is not shown as an included amenity',
      'Cable TV is not shown as an included amenity',
      'Sewer hookups are not shown; use dump station or honeywagon guidance',
      'Online availability and date selection are handled through Campspot',
      'Use the Campspot listing for the latest map and additional campground photos',
    ],
  },
];

export const parkFeatures = [
  'Bathrooms',
  'Clubhouse',
  'Dump Station',
  'Garbage',
  'General Store',
  'Laundry - Additional Cost',
  'Mini-Golf',
  'Pavilion',
  'Playground',
  'Showers',
  'Special Events',
];

export const nearbyActivities = [
  'Biking',
  'Boating',
  'Breweries',
  'Fishing',
  'Golfing',
  'Hiking',
  'Historic Sites',
  'Live Music',
  'OHV Trails',
  'Paddling',
  'Restaurants',
  'Shopping',
  'State Parks',
  'Wildlife Watching',
  'Wineries',
];

export const siteAmenityCounts = [
  { label: '30-Amp', value: '22' },
  { label: '50-Amp', value: '5' },
  { label: 'Back-In', value: '11' },
  { label: 'Electricity', value: '6' },
  { label: 'Fire Pit', value: '6' },
  { label: 'Microwave', value: '6' },
  { label: 'Mini Fridge', value: '6' },
  { label: 'Patio', value: '6' },
  { label: 'Pet-Friendly', value: '40' },
  { label: 'Picnic Table', value: '27' },
  { label: 'Pull-Through', value: '16' },
  { label: 'Water Hook-Up', value: '27' },
] satisfies CampspotMetric[];

export const localHighlights = [
  {
    title: 'Lake Cadillac',
    text: 'A Cadillac-area lake for fishing, boating, paddling, and town-side recreation.',
  },
  {
    title: 'Lake Mitchell',
    text: 'A nearby sister lake connected to Lake Cadillac by the Clam Lake Canal.',
  },
  {
    title: 'Clam Lake Canal',
    text: 'A distinctive local waterway that connects the two lakes and gives the area its own story.',
  },
  {
    title: 'Cadillac Area',
    text: 'Golf, biking, boating, fishing, and small-town stops close enough for an easy basecamp day.',
  },
];

export const bookingTruths: ContentNote[] = [
  {
    label: 'Rates',
    status: 'web-researched',
    text: 'Starting rates currently range from $25-$75/night on Campspot. Choose dates there for final totals.',
  },
  {
    label: 'Availability',
    status: 'web-researched',
    text: 'Campspot shows current site options and open dates when you start a booking.',
  },
  {
    label: 'Questions',
    status: 'confirmed',
    text: 'Call or email Cadillac Woods for help choosing the right site before booking.',
  },
  {
    label: 'Park Map',
    status: 'web-researched',
    text: 'Use the Campspot map for current site selection, or call the office for help choosing a spot.',
  },
];

export const policyQuickFacts: PolicyQuickFact[] = [
  {
    label: 'Age',
    text: 'Reservations must be made by an adult 18 or older.',
  },
  {
    label: 'Check-in',
    text: 'RV and tent check-in is 1 PM. Cabin check-in is 2 PM.',
  },
  {
    label: 'Checkout',
    text: 'RV, tent, and cabin checkout is 11 AM.',
  },
  {
    label: 'Quiet hours',
    text: 'Quiet hours are 10 PM to 8 AM.',
  },
  {
    label: 'Pets',
    text: 'Maximum two pets per site, kept on leash or contained at the campsite.',
  },
  {
    label: 'Speed',
    text: 'Campground speed limit is 7 MPH.',
  },
];

export const policyItems = [
  {
    question: 'Where do I book or check availability?',
    answer:
      'Use the Book Now links to open Campspot for current availability, site options, starting rates, dates, fees, and final booking totals.',
  },
  {
    question: 'What are the current starting rates?',
    answer:
      'Rustic Tent Sites start at $25.00/night, 30 AMP/Water and 30/50 AMP/Water RV Sites start at $45.00/night, and cabin/log-cabin options start at $75.00/night. Final totals depend on your selected dates and booking details.',
  },
  {
    question: 'How do cancellations work?',
    answer:
      'Cancellations 30 or more days before check-in receive a full refund. Cancellations 7 or more days before check-in receive a 50% refund. Cancellations less than 7 days before check-in receive no refund. Early departures and inclement weather are not refundable.',
  },
  {
    question: 'How do refunds work outside the cancellation window?',
    answer:
      'Refunds follow the cancellation policy. If a guest is asked to leave for a rule violation, no refund is due. Other refund questions are handled case by case by campground management.',
  },
  {
    question: 'When is check-in and checkout?',
    answer:
      'RV and tent check-in is 1 PM. Cabin check-in is 2 PM. RV, tent, and cabin checkout is 11 AM. Late checkout may be allowed only when available and approved, at $10 per hour; remaining past 3 PM can be charged as an additional night.',
  },
  {
    question: 'Who can make a reservation, and how many people are allowed?',
    answer:
      'Reservations must be made by an adult 18 or older. Campsites allow up to 8 people at one time. RVs are subject to management approval based on condition, and one RV is allowed per campsite.',
  },
  {
    question: 'What are the vehicle and driving rules?',
    answer:
      'The campground speed limit is 7 MPH. Each site is permitted 2 vehicles. Additional vehicles may be allowed by management if space is available for $5. Parking in roadways is not allowed. Motorized vehicles require a valid driver license, and operating any motorized vehicle while intoxicated can lead to immediate removal.',
  },
  {
    question: 'What are quiet hours and conduct rules?',
    answer:
      'Quiet hours are 10 PM to 8 AM. Children must be at their own campsites by 9 PM, and parents are responsible for their children. Campsites must be kept tidy and free of litter. Profanity, violence, and inconsiderate behavior toward guests or staff are not tolerated.',
  },
  {
    question: 'Are drugs, marijuana, or fireworks allowed?',
    answer:
      'Drugs and illegal substances, including marijuana, are not allowed. Fireworks are also not allowed.',
  },
  {
    question: 'What are the pet rules?',
    answer:
      'Pets must be kept on leash or contained within a temporary fence at the campsite at all times. Guests must pick up and properly dispose of pet waste. A maximum of 2 pets is allowed per site.',
  },
  {
    question: 'What should I know about fires, grills, and site setup?',
    answer:
      'Picnic tables should be returned to their original spot before checkout if moved. Portable grills should not be used on picnic tables without heat protection. Campfires must never be left unattended and must be fully extinguished before leaving.',
  },
  {
    question: 'Are portable heaters, furnaces, or AC units allowed?',
    answer:
      'Heaters, furnaces, and AC units are not allowed unless they were installed by the RV manufacturer.',
  },
  {
    question: 'What cabin rules should I know?',
    answer:
      'Cabins and rental units are non-smoking inside. Furnishings, equipment, and items inside those units are campground property; damage or removal can result in charges.',
  },
  {
    question: 'What happens if rules are violated?',
    answer:
      'Violations may result in immediate removal without refund. Management may also terminate a rental and require guests to vacate at its discretion.',
  },
  {
    question: 'Do sites include WiFi or cable TV?',
    answer:
      'Camper WiFi and cable TV are not shown as included amenities. Call the office if connectivity is important for your stay.',
  },
  {
    question: 'Do RV sites include sewer hookups?',
    answer:
      'Sewer hookups are not shown as included. Guests should plan around dump station or honeywagon service details.',
  },
  {
    question: 'Can I request wood delivery?',
    answer: 'Yes, wood delivery to campsites is available on request.',
  },
  {
    question: 'What should I do if I need a specific site type?',
    answer:
      'Book through Campspot for current site options, or call the office and ask for help choosing the right fit. Current options include cabin/log-cabin variants, 30 AMP/Water RV sites, 30/50 AMP/Water RV sites, and Rustic Tent Sites.',
  },
  {
    question: 'Who should I call with trip-specific questions?',
    answer:
      'Call Cadillac Woods before booking if your trip depends on a payment detail, rule interpretation, site request, accessibility need, or any policy detail that could affect your stay.',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'office-building',
    src: '/images/gallery/office-building.jpeg',
    alt: 'Cadillac Woods office building surrounded by trees',
    title: 'The camp office',
    caption: 'The arrival point for questions, directions, and campground essentials.',
    category: 'arrival',
  },
  {
    id: 'office-with-flag',
    src: '/images/gallery/office-with-flag.jpeg',
    alt: 'Cadillac Woods office with the American flag and wooded campsites nearby',
    title: 'Arriving off M-115',
    caption: 'A wooded campground entrance with the office and sites close by.',
    category: 'arrival',
  },
  {
    id: 'office-wide',
    src: '/images/gallery/office-wide-view.jpeg',
    alt: 'Wide view of the Cadillac Woods office and camping area',
    title: 'A wooded basecamp',
    caption: 'Tall trees, gravel roads, and a practical place to settle in.',
    category: 'arrival',
  },
  {
    id: 'rv-one',
    src: '/images/accommodations/rv-sites-1.jpeg',
    alt: 'RV camping area with trees and a fire ring',
    title: 'RV stays',
    caption: 'Wooded RV sites with electric and water options listed through Campspot.',
    category: 'stays',
  },
  {
    id: 'rv-two',
    src: '/images/accommodations/rv-sites-2.jpeg',
    alt: 'Wooded RV sites with gravel pads and utility access',
    title: 'Room to settle',
    caption: 'A practical layout for campers who want shade and straightforward access.',
    category: 'stays',
  },
  {
    id: 'rv-three',
    src: '/images/accommodations/rv-sites-3.jpeg',
    alt: 'Wide view of a wooded camping area at Cadillac Woods',
    title: 'Rustic feel',
    caption: 'A simple, wooded campground atmosphere near the Cadillac area.',
    category: 'stays',
  },
  {
    id: 'cabin-one',
    src: '/images/accommodations/rustic-cabins-1.jpeg',
    alt: 'Rustic cabin with covered porch in the woods',
    title: 'Cabin option',
    caption: 'A roof overhead while staying inside the campground setting.',
    category: 'stays',
  },
  {
    id: 'cabin-two',
    src: '/images/accommodations/rustic-cabins-2.jpeg',
    alt: 'Cadillac Woods cabin area surrounded by trees',
    title: 'Cabin area',
    caption: 'A quieter way to stay close to the trees and on-site activities.',
    category: 'stays',
  },
  {
    id: 'playground',
    src: '/images/amenities/playground.jpeg',
    alt: 'Playground equipment under trees at Cadillac Woods',
    title: 'Family space',
    caption: 'On-site play space for families spending the day around camp.',
    category: 'amenities',
  },
];

export function generateHomeGallery() {
  return [
    galleryImages.find((image) => image.id === 'office-building') || galleryImages[0],
    galleryImages.find((image) => image.id === 'rv-one') || galleryImages[3],
    galleryImages.find((image) => image.id === 'cabin-one') || galleryImages[6],
  ];
}

export const doNotClaim = [
  'Free WiFi',
  'Camper WiFi',
  'Cable TV',
  'Sewer hookups',
  'Real-time availability on this site',
  'Unverified rates beyond current Campspot starting-rate copy',
  'Exact Campspot map copied without permission',
  'Campspot photos reused without owner approval',
  'Fake contact form delivery',
  'Lakefront sites',
  'Private beach or waterfront campground',
];

export const unresolvedNotes = [
  'The screenshot note "Change x to y" is unclear and remains unresolved until clarified.',
  'A real public park map asset is still needed before this site can show an exact owned site-layout image.',
  'The screenshot rate sheet was not provided, so this launch uses current Campspot starting rates and links to Campspot for final totals.',
  'Campspot gallery photos need campground approval before they can be copied into this site.',
  'Sanity is intentionally deferred for the launch and preserved as a future CMS lane.',
];
