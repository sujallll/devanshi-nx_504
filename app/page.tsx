import Image from 'next/image';
import Link from 'next/link';  // Add this line
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <header className="bg-white py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-[#D4AF37]">
          THE VENUE
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-[#333] hover:text-[#D4AF37] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="relative h-screen">
        <Image
          src="/hero-image.jpg"
          alt="Elegant Venue"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl font-bold mb-8 text-center">Elegance Redefined</h2>
          <p className="text-xl mb-8 text-center">Your Premier Event Destination</p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#D4AF37]">
            Explore More
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {['Elegant Spaces', 'Exquisite Cuisine', 'Impeccable Service'].map((feature) => (
            <Card key={feature} className="bg-white">
              <CardContent className="p-6 text-center">
                <Image
                  src={`/${feature.toLowerCase().replace(' ', '-')}-icon.png`}
                  alt={feature}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-[#666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* New Amenities Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#8B4513]">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: '/tv-icon.png',
              title: '55-Inch TV and Projector',
              description: 'Designed to give the attendees a visual experience, making it easier for them to follow along with presentations.'
            },
            {
              icon: '/spacious-icon.png',
              title: 'Spacious Rooms',
              description: 'Our banquet halls are specially designed to cater large groups of people. The rooms are well-lit and properly ventilated to ensure comfort.'
            },
            {
              icon: '/people-icon.png',
              title: '150 People Capacity',
              items: [
                'Seats for half of the group',
                'Standing room for others',
                '150 people at a time',
                'Efficient use of space for diverse event types'
              ]
            }].map((amenity, index) => (
              <div key={index} className="bg-white border border-[#D4AF37] p-6 rounded-lg text-center">
                <Image
                  src={amenity.icon}
                  alt={amenity.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">{amenity.title}</h3>
                {amenity.description ? (
                  <p className="text-[#666]">{amenity.description}</p>
                ) : (
                  <ul className="text-left text-[#666] list-disc pl-5">
                    {amenity.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#8B4513]">
            Events Held At The Venue
            <Image src="/leaf-icon.png" alt="Leaf decoration" width={30} height={15} className="inline-block ml-2" />
          </h2>
          
          {[
            {
              title: 'Weddings',
              image: '/weddings-image.jpg',
              description: 'Whether planning a warm and intimate gathering or a grand affair, we ensure that your wedding day is unforgettable.',
              align: 'left'
            },
            {
              title: 'Birthdays',
              image: '/birthdays-image.jpg',
              description: 'We provide a versatile venue for all your personal events, where they can enjoy their all types of parties like birthday, baptism, cocktail party, and other personal party programs with full of zeal.',
              align: 'right'
            },
            {
              title: 'Collaborations',
              image: '/collaborations-image.jpg',
              description: 'At The Banquets, we have proudly collaborated with production houses, advertising, styling brands, and other companies, offering our exquisite venues as the ideal backdrop for their creative projects.',
              align: 'left'
            }
          ].map((event, index) => (
            <div key={event.title} className={`flex flex-col ${event.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch mb-12`}>
              <div className={`w-full md:w-1/2 relative ${event.align === 'right' ? 'md:pl-4' : 'md:pr-4'}`}>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="rounded-lg"
                />
                <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white drop-shadow-lg">
                  {event.title}
                </h3>
              </div>
              <div className={`w-full md:w-1/2 ${event.align === 'right' ? 'md:pr-4' : 'md:pl-4'} bg-[#F5E6D3] p-6 rounded-lg flex flex-col justify-center relative`}>
                <p className="text-[#666] mb-4">{event.description}</p>
                <Link href={`/events/${event.title.toLowerCase()}`} className="text-[#8B4513] font-semibold hover:underline">
                  Read more
                </Link>
                <Image 
                  src="/leaf-icon.png" 
                  alt="Leaf decoration" 
                  width={30} 
                  height={15} 
                  className={`absolute bottom-2 ${event.align === 'right' ? 'left-2' : 'right-2'}`} 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="bg-white">
                <CardContent className="p-6">
                  <p className="mb-4 text-[#666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p className="font-semibold">- Client {testimonial}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Event</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Name" className="bg-[#FFF9F0]" />
              <Input placeholder="Email" type="email" className="bg-[#FFF9F0]" />
              <Input placeholder="Phone" type="tel" className="bg-[#FFF9F0]" />
              <Input placeholder="Date" type="date" className="bg-[#FFF9F0]" />
            </div>
            <Textarea placeholder="Message" className="mb-4 bg-[#FFF9F0]" />
            <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8860B] text-white">
              Book Now
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-[#333] text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The Venue</h3>
              <p>123 Event Street, City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@thevenue.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                  <li key={item} className="mb-2">
                    <a href={`/${item.toLowerCase()}`} className="hover:text-[#D4AF37]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href={`#${social}`} className="hover:text-[#D4AF37]">
                    <Image
                      src={`/${social}-icon.png`}
                      alt={`${social} icon`}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 The Venue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}