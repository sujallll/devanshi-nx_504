import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function GalleryPage() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const galleryImages = [
    { src: '/banquet-hall-1.jpg', alt: 'Banquet Hall 1' },
    { src: '/banquet-hall-2.jpg', alt: 'Banquet Hall 2' },
    { src: '/banquet-hall-3.jpg', alt: 'Banquet Hall 3' },
    { src: '/banquet-hall-4.jpg', alt: 'Banquet Hall 4' },
    { src: '/banquet-hall-5.jpg', alt: 'Banquet Hall 5' },
    { src: '/banquet-hall-6.jpg', alt: 'Banquet Hall 6' },
    { src: '/banquet-hall-7.jpg', alt: 'Banquet Hall 7' },
    { src: '/banquet-hall-8.jpg', alt: 'Banquet Hall 8' },
    { src: '/banquet-hall-9.jpg', alt: 'Banquet Hall 9' },
    { src: '/banquet-hall-10.jpg', alt: 'Banquet Hall 10' },
    { src: '/banquet-hall-11.jpg', alt: 'Banquet Hall 11' },
    { src: '/banquet-hall-12.jpg', alt: 'Banquet Hall 12' },
  ];

  const eventImages = [
    { src: '/event-1.jpg', alt: 'Event 1' },
    { src: '/event-2.jpg', alt: 'Event 2' },
    { src: '/event-3.jpg', alt: 'Event 3' },
    { src: '/event-4.jpg', alt: 'Event 4' },
    { src: '/event-5.jpg', alt: 'Event 5' },
    { src: '/event-6.jpg', alt: 'Event 6' },
    { src: '/event-7.jpg', alt: 'Event 7' },
    { src: '/event-8.jpg', alt: 'Event 8' },
    { src: '/event-9.jpg', alt: 'Event 9' },
    { src: '/event-10.jpg', alt: 'Event 10' },
    { src: '/event-11.jpg', alt: 'Event 11' },
    { src: '/event-12.jpg', alt: 'Event 12' },
  ];

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <header className="bg-white py-4 px-6">
        <nav className="flex justify-center items-center">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`text-sm uppercase font-medium ${item.name === 'Gallery' ? 'text-[#8B4513]' : 'text-[#D4AF37]'} hover:text-[#B8860B] transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#8B4513] mb-2">Gallery</h1>
          <Image src="/leaf-icon.png" alt="Leaf decoration" width={100} height={50} className="mx-auto" />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8 text-center">Banquet Hall</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8 text-center">Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {eventImages.map((image, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
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
