"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const scrollToBookingForm = () => {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <header className="bg-[#D6C29F] py-4 px-6 shadow-md">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 mr-6">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Devanshi NX Logo"
                  width={100}
                  height={50}
                  className="mr-2 cursor-pointer"
                />
              </Link>
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
              <div className="text-center text-xl lg:flex-grow">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="block mt-4 lg:inline-block lg:mt-0 text-[#8B4513] hover:text-[#B8860B] mr-8"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <Button onClick={scrollToBookingForm} className="inline-block text-sm px-4 py-2 leading-none text-white hover:border-transparent hover:text-[#8B4513] hover:bg-white mt-4 lg:mt-0 bg-[#8B4513]">
                  Book Now
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

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
