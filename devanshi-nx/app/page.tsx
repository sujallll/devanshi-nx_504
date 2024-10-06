import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-white text-primary py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#FFA500]">DEVANSHI NX</h1>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'About Us', 'Amenities', 'Events', 'Gallery', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href="#" className="text-primary hover:text-[#FFA500] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="relative h-screen">
        <Image
          src="/venue-image.jpg"
          alt="The Venue"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl font-bold mb-8 text-center">Designing your perfect day, the way you imagined</h2>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
            Contact Us
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {['Elegant Spaces', 'Exquisite Cuisine', 'Impeccable Service'].map((amenity) => (
            <Card key={amenity}>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{amenity}</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Events Held At The Venue</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {['Weddings', 'Birthdays', 'Collaborations'].map((event) => (
            <div key={event} className="relative h-64">
              <Image
                src={`/${event.toLowerCase()}-image.jpg`}
                alt={event}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{event}</h3>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Here's what our Clients feel for us !</h2>
        <div className="flex overflow-x-auto space-x-4 mb-12">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial} className="flex-shrink-0 w-80">
              <CardContent className="p-6">
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="font-semibold">- Client {testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Booking Form</h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone" type="tel" />
            <Input placeholder="Date" type="date" />
          </div>
          <Textarea placeholder="Message" className="mb-4" />
          <Button type="submit" className="w-full">Book Now</Button>
        </form>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 The Venue. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}