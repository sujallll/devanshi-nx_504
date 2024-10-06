import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


export default function Home() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <header className="bg-white py-4 px-6">
        <div className="container mx-auto">
          <nav className="flex justify-center items-center">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm uppercase font-medium text-[#D4AF37] hover:text-[#B8860B] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative h-screen">
        <Image
          src="/hero-image.jpg"
          alt="Elegant Venue"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">DEVANSHI NX</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">Designing your perfect day, the way you imagined</h2>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#D4AF37]">
            Contact Us
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/banquet-image.jpg"
              alt="Banquet Hall"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-light text-[#D4AF37] mb-2">Welcome to Devanshi NX Banquets</h3>
            <h4 className="text-xl font-bold text-[#8B4513] mb-4">Best banquet hall in Navi Mumbai for Exclusive events, priceless memories</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
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

        

        {/* Updated Booking Form */}
        <div className="bg-[#F5E6D3] p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#8B4513]">Booking Form</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-white" />
              <Input placeholder="Email" type="email" className="bg-white" />
              <Input placeholder="Phone no" type="tel" className="bg-white" />
              <Input placeholder="dd-mm-yy" type="text" className="bg-white" />
            </div>
            <Input placeholder="Subject" className="bg-white" />
            <Textarea placeholder="Message" className="bg-white" rows={4} />
            <div className="text-center">
              <Button type="submit" className="bg-[#8B4513] hover:bg-[#6F3609] text-white px-8 py-2">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Updated Footer */}
      <footer className="bg-[#F5E6D3] text-[#8B4513] py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="flex justify-center space-x-8">
              <div>
                <h3 className="font-semibold">Banquet Address</h3>
                <p>Plot No. L-1, Sector 6(W), New Panvel (W),</p>
                <p>Navi Mumbai 410206</p>
              </div>
              <div>
                <h3 className="font-semibold">Contact us</h3>
                <p>9619331131</p>
                <p>9619441141</p>
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p>devanshievents@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <Input placeholder="Your Email Address" className="bg-white mr-2 w-64" />
            <Button className="bg-[#8B4513] hover:bg-[#6F3609] text-white">
              Subscribe
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">About Devanshi Banquets</h3>
              <p>With a resolve to become one of the most sought-after wedding event planning services, Team Devanshi Banquets has been delivering services that are a class apart from the rest, designing events, etc. We believe in bringing fresh ideas to the table, destination events, etc. We believe in bringing fresh ideas to the table, thus creating your special day the way you imagined it to be.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Our Events</h3>
              <ul>
                <li>Wedding</li>
                <li>Engagement</li>
                <li>Birthday Party</li>
                <li>Corporate Events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul>
                {navItems.map((item) => (
                  <li key={item.name} className="mb-1">
                    <Link href={item.href} className="hover:underline">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center text-sm">
            <p>Copyright © 2023. All rights reserved | Crafted by 504 LABS</p>
          </div>
        </div>
      </footer>
    </main>
  );
}