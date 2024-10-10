"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  date: Date;
  subject: string;
  message: string;
}

export default function Amenities() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' }
  ];
  const amenities = [
    { icon: '/people-icon.png', title: '1700 People intake', description: 'Since the hall is 12,500 sq ft huge enough, it has the capacity which can fill upto 1700 guests at a time, without any hassle and chaotic atmosphere around' },
    { icon: '/people-icon.png', title: '1700 People intake', description: 'Since the hall is 12,500 sq ft huge enough, it has the capacity which can fill upto 1700 guests at a time, without any hassle and chaotic atmosphere around' },
    { icon: '/people-icon.png', title: '1700 People intake', description: 'Since the hall is 12,500 sq ft huge enough, it has the capacity which can fill upto 1700 guests at a time, without any hassle and chaotic atmosphere around' },
    { icon: '/people-icon.png', title: '1700 People intake', description: 'Since the hall is 12,500 sq ft huge enough, it has the capacity which can fill upto 1700 guests at a time, without any hassle and chaotic atmosphere around' },
    { icon: '/people-icon.png', title: '1700 People intake', description: 'Since the hall is 12,500 sq ft huge enough, it has the capacity which can fill upto 1700 guests at a time, without any hassle and chaotic atmosphere around' },
    { icon: '/people-icon.png', title: '1700 People intake', description: 'Since the hall is 12,500 sq ft huge enough, it has the capacity which can fill upto 1700 guests at a time, without any hassle and chaotic atmosphere around' },
  ];

  const scrollToBookingForm = () => {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<IFormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwIZAV5cfWXXVNQ3Jk4_EOhsgPOBmcOd4HeE5w7Lr_qwhdZIs3htfBxSZB9n1oBBPPtTw/exec';

    try {
      data.date = data.date.toLocaleDateString('en-GB'); // This will format the date as dd/mm/yyyy

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
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
                className="mr-2"
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

      <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-8">
      <h2 className="text-3xl font-bold text-center text-[#8B4513]">
              Amenities
            </h2>
            <h2 className="text-3xl font-bold text-center text-[#8B4513] mt-1">
              Devanshi NX Banquets
            </h2>

            <Image 
              src="/images/leafevents.png" 
              alt="Leaf decoration" 
              width={100} 
              height={50}
              className="mt-4" 
              style={{ marginLeft: '300px', marginTop: '-45px' }}
            />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white border border-[#D4AF37] p-6 rounded-lg text-center relative">
              <Image
                src={amenity.icon}
                alt={amenity.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">{amenity.title}</h3>
              <p className="text-[#666]">{amenity.description}</p>
              <Image 
                src="/images/leafevents.png" 
                alt="Leaf decoration" 
                width={50} 
                height={80} 
                className="absolute bottom-0 right-4" 
              />
            </div>
          ))}
        </div>

        {/* Updated Booking Form */}
        <div id="booking-form" className="bg-[#F5E6D3] p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#8B4513]">Booking Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  className="bg-white"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
              <div>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  placeholder="Email"
                  type="email"
                  className="bg-white"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <Input
                  {...register("phone", { required: "Phone number is required" })}
                  placeholder="Phone no"
                  type="tel"
                  className="bg-white"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
              </div>
              <div>
                <Controller
                  control={control}
                  name="date"
                  rules={{ required: "Date is required" }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      selected={value}
                      onChange={(date: Date) => onChange(date)}
                      dateFormat="dd-MM-yyyy"
                      placeholderText="dd-mm-yy"
                      className="bg-white w-full p-2 rounded-md"
                    />
                  )}
                />
                {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
              </div>
            </div>
            <div>
              <Input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Subject"
                className="bg-white"
              />
              {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
            </div>
            <div>
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                className="bg-white"
                rows={4}
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`inline-block text-sm px-4 py-2 leading-none text-white hover:border-transparent hover:text-[#8B4513] hover:bg-white mt-4 lg:mt-0 bg-[#8B4513] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-600 text-center">Form submitted successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-600 text-center">An error occurred. Please try again.</p>
          )}
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