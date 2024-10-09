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
              <div className="text-[#8B4513] font-bold text-xl">
                LOGO
              </div>
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

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#8B4513] mb-2">About</h1>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Devanshi NX Banquets</h2>
          <Image src="/leaf-icon.png" alt="Leaf decoration" width={100} height={50} className="mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center bg-[#F5E6D3] rounded-lg overflow-hidden mb-16">
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Welcome to top class pillarless banquet in Navi Mumbai</h3>
            <p className="text-[#666] mb-6">
              We are known for our impeccable banquet & wedding planning services.
              We at Tiarra banquets are here to provide fresh ideas, innovative styling
              and creative inputs to pull your dream with huge space.
            </p>
            <Button className="bg-[#8B4513] hover:bg-[#6F3609] text-white">BOOK</Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/banquet-hall.jpg"
              alt="Luxurious banquet hall with purple decor"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="mb-16">
          <Image
            src="/wedding-couple.jpg"
            alt="Happy wedding couple"
            width={1200}
            height={600}
            className="rounded-lg mx-auto"
          />
        </div>

        {/* Booking Form */}
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

      {/* Footer */}
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
