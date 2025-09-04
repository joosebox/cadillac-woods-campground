import { Metadata } from 'next';
import { 
  MapPin, Phone, Mail, Clock, Navigation, Car, 
  Mountain, Fish, TreePine, Camera
} from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our campground. Find our location, hours, contact information, and discover local attractions in Northern Michigan.',
  keywords: ['contact', 'location', 'directions', 'phone', 'email', 'hours', 'Northern Michigan attractions'],
};

const contactInfo = {
  address: '123 Campground Road, Northern Michigan, MI 49XXX',
  phone: '(555) 123-CAMP',
  email: 'info@yourcampground.com',
  hours: {
    summer: 'May 1 - September 30: 8:00 AM - 9:00 PM',
    winter: 'October 1 - April 30: 9:00 AM - 5:00 PM'
  },
  coordinates: {
    lat: 45.0,
    lng: -84.0
  }
};

const localAttractions = [
  {
    name: 'Sleeping Bear Dunes National Lakeshore',
    description: 'Climb massive sand dunes and enjoy stunning Lake Michigan views.',
    distance: '15 miles',
    icon: Mountain,
    type: 'Nature'
  },
  {
    name: 'Traverse City',
    description: 'Charming downtown with wineries, breweries, and shopping.',
    distance: '25 miles',
    icon: Car,
    type: 'City'
  },
  {
    name: 'Crystal Lake',
    description: 'Crystal clear waters perfect for swimming and boating.',
    distance: '8 miles',
    icon: Fish,
    type: 'Water Activities'
  },
  {
    name: 'Interlochen State Park',
    description: 'Historic state park with hiking trails and pristine lakes.',
    distance: '12 miles',
    icon: TreePine,
    type: 'State Park'
  },
  {
    name: 'Empire Bluffs Trail',
    description: 'Scenic hiking trail with panoramic Lake Michigan overlooks.',
    distance: '18 miles',
    icon: Mountain,
    type: 'Hiking'
  },
  {
    name: 'Frankfort Lighthouse',
    description: 'Historic lighthouse and beautiful harbor views.',
    distance: '22 miles',
    icon: Camera,
    type: 'Historic Site'
  }
];

export default function ContactPage() {

  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help make your camping experience unforgettable. Get in touch with 
              any questions about reservations, amenities, or the beautiful Northern Michigan area.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone.replace(/[^\d]/g, '')}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">{contactInfo.hours.summer}</p>
                    <p className="text-gray-600">{contactInfo.hours.winter}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <Navigation className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Map integration would be implemented here</p>
                </div>
              </div>

              {/* Directions */}
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  Driving Directions
                </h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>From Grand Rapids:</strong> Take US-131 North to M-115 West, follow signs to Frankfort/Sleeping Bear Dunes.</p>
                  <p><strong>From Detroit:</strong> Take I-75 North to US-10 West, then US-31 North to Empire.</p>
                  <p><strong>GPS Coordinates:</strong> {contactInfo.coordinates.lat}, {contactInfo.coordinates.lng}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Northern Michigan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our campground is perfectly located near some of Northern Michigan's most 
              beautiful attractions and activities. Here's what you can explore during your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <attraction.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{attraction.name}</h3>
                    <p className="text-sm text-primary-600 font-medium">{attraction.distance} away</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {attraction.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait - our sites fill up quickly during peak season. Book your Northern 
            Michigan camping adventure today!
          </p>
          <BookNowButton size="lg" variant="secondary" source="contact_cta" />
        </div>
      </section>
    </>
  );
}