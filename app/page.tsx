"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="bg-[#D6C29F] py-4 px-6 shadow-md">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 mr-6">
              <Image
                src="/images/logo.png"
                alt="Devanshi NX Logo"
                width={50}
                height={50}
                className="mr-2"
              />
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center px-3 py-2 border rounded text-[#8B4513] border-[#D4AF37] hover:text-[#B8860B] hover:border-[#B8860B]"
              >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
              <div className="text-sm lg:flex-grow text-center">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="block mt-4 lg:inline-block lg:mt-0 text-[#8B4513] hover:text-[#B8860B] mr-4"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <Button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#D4AF37] hover:bg-white mt-4 lg:mt-0 bg-[#D4AF37]">
                  Book Now
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">DEVANSHI NX</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">Designing your perfect day, the way you imagined</h2>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#D4AF37]">
            Book Now
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/banquet-image.jpg"
              alt="Banquet Hall"
              width={500}
              height={200}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-light text-[#D4AF37] mb-2">Welcome to Devanshi NX Banquets</h3>
            <h4 className="text-xl font-bold text-[#8B4513] mb-4">Best banquet hall in Navi Mumbai for Exclusive events, priceless memories</h4>
          {/* <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>
        </div>

        {/* Amenities Section with Background */}
        <div className="mb-16 bg-cover bg-center bg-fixed py-16" style={{ backgroundImage: "url('/images/bgam.png')" }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#8B4513] drop-shadow-lg">Amenities</h2>
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
                <div key={index} className="bg-white bg-opacity-90 border border-[#D4AF37] p-6 rounded-lg text-center shadow-md">
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
        </div>
        {/* Events Section */}
        <div className="mb-16 bg-white bg-opacity-90 p-8 rounded-lg">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-center text-[#8B4513]">
              Events Held
            </h2>
            <h2 className="text-3xl font-bold text-center text-[#8B4513] mt-2">
              At The Venue
            </h2>

            <Image 
              src="/images/leafevents.png" 
              alt="Leaf decoration" 
              width={100} 
              height={50}
              className="mt-4" 
              style={{ marginLeft: '210px', marginTop: '-45px' }}
            />
          </div>
          
          {[
            {
              title: 'Weddings',
              image: '/images/weddings.jpg',
              description: 'Whether planning a warm and intimate gathering or a grand affair, we ensure that your wedding day is unforgettable.',
              align: 'left'
            },
            {
              title: 'Birthdays',
              image: '/images/birthdays.png',
              description: 'We provide a versatile venue for all your personal events, where they can enjoy their all types of parties like birthday, baptism, cocktail party, and other personal party programs with full of zeal.',
              align: 'right'
            },
            {
              title: 'Collaborations',
              image: '/images/collab.png',
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
                  className="rounded-lg shadow-md"
                />
                <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white drop-shadow-lg">
                  {event.title}
                </h3>
              </div>
              <div className={`w-full md:w-1/2 ${event.align === 'right' ? 'md:pr-4' : 'md:pl-4'} bg-[#F5E6D3] p-6 rounded-lg flex flex-col justify-center relative shadow-md`}>
                <p className="text-[#666] mb-4">{event.description}</p>
                <Link href={`/events/${event.title.toLowerCase()}`} className="text-[#8B4513] font-semibold hover:underline">
                  Read more
                </Link>
                <Image 
                  src="/images/leafevents.png" 
                  alt="Leaf decoration" 
                  width={50} 
                  height={100} 
                  className={`absolute bottom-2 ${event.align === 'right' ? 'left-2' : 'right-2'}`} 
                  style={{ marginLeft: '210px', marginTop: '-45px' }}
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
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
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
    
    <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0">
      <Input placeholder="Your Email Address" className="bg-white md:mr-2 w-full md:w-64" />
      <Button className="bg-[#8B4513] hover:bg-[#6F3609] text-white w-full md:w-auto">
        Subscribe
      </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
        <h3 className="font-bold mb-2">About Devanshi Banquets</h3>
        <p className="text-sm">With a resolve to become one of the most sought-after wedding event planning services, Team Devanshi Banquets has been delivering services that are a class apart from the rest, designing events, etc. We believe in bringing fresh ideas to the table, destination events, etc. We believe in bringing fresh ideas to the table, thus creating your special day the way you imagined it to be.</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Our Events</h3>
        <ul className="text-sm">
          <li>Wedding</li>
          <li>Engagement</li>
          <li>Birthday Party</li>
          <li>Corporate Events</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Quick Links</h3>
        <ul className="text-sm">
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