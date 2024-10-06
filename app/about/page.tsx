import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function AboutPage() {
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
        <nav className="flex justify-center items-center">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`text-sm uppercase font-medium ${item.name === 'About Us' ? 'text-[#8B4513]' : 'text-[#D4AF37]'} hover:text-[#B8860B] transition-colors duration-200`}
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
