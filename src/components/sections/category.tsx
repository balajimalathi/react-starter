import { Calendar, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function PreviewLanding() {

  // Mock data for cities
  const popularCities = [
    { name: "Mumbai", count: 250 },
    { name: "Delhi", count: 220 },
    { name: "Bangalore", count: 180 },
    { name: "Hyderabad", count: 150 },
    { name: "Chennai", count: 130 },
    { name: "Kolkata", count: 120 },
    { name: "Pune", count: 100 },
    { name: "Jaipur", count: 80 },
  ]

  // Mock data for categories
  const categories = [
    {
      name: "Bridal Makeup",
      icon: "/placeholder.svg?height=50&width=50",
      slug: "bridal-makeup",
    },
    {
      name: "Party Makeup",
      icon: "/placeholder.svg?height=50&width=50",
      slug: "party-makeup",
    },
    {
      name: "Celebrity Makeup",
      icon: "/placeholder.svg?height=50&width=50",
      slug: "celebrity-makeup",
    },
    {
      name: "Natural Makeup",
      icon: "/placeholder.svg?height=50&width=50",
      slug: "natural-makeup",
    },
    {
      name: "Special Effects",
      icon: "/placeholder.svg?height=50&width=50",
      slug: "special-effects",
    },
    {
      name: "Hair Styling",
      icon: "/placeholder.svg?height=50&width=50",
      slug: "hair-styling",
    },
  ]

  return (
    <>
      {/* Categories Section */}
      <section className="mx-auto flex flex-col items-center justify-center py-14 bg-muted">
        <div className="container max-w-6xl  px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Browse Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                to={`/categories/${category.slug}`}
                key={category.slug}
                className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-all"
              >
                <div className="mx-auto relative w-12 h-12 mb-3">
                  <img
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-sm">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="mx-auto flex flex-col items-center justify-center py-14">
        <div className="container max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Popular Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {popularCities.map((city) => (
              <Link
                to={`/location/${city.name.toLowerCase()}`}
                key={city.name}
                className="group relative h-32 rounded-lg overflow-hidden"
              >
                <img
                  src={`/placeholder.svg?height=150&width=300&text=${city.name}`}
                  alt={city.name}
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium">{city.name}</h3>
                  <p className="text-white/80 text-sm">{city.count} artists</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mx-auto flex flex-col items-center justify-center py-14">
        <div className="container max-w-6xl px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-2">How GlamConnect Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find and book the perfect makeup artist in just a few simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Find Artists Near You</h3>
              <p className="text-muted-foreground">
                Search for makeup artists in your city and filter by service type, price, and availability.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Your Appointment</h3>
              <p className="text-muted-foreground">
                Choose your preferred date and time, and book directly through our secure platform.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Glammed Up</h3>
              <p className="text-muted-foreground">
                Enjoy professional makeup services at your home or venue, and share your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
       <section className="mx-auto flex flex-col items-center justify-center py-14">
        <div className="container max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">What Our Clients Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Neha Gupta",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "Found the perfect bridal makeup artist for my wedding. She understood exactly what I wanted and made me look stunning!",
                event: "Wedding in Mumbai",
              },
              {
                name: "Ravi Sharma",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "Booked a makeup artist for my sister's engagement. The service was professional and everyone loved her look.",
                event: "Engagement in Delhi",
              },
              {
                name: "Priyanka Reddy",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "Amazing experience with the makeup artist I found on GlamConnect. She was punctual, professional, and talented.",
                event: "Fashion Photoshoot in Bangalore",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 text-muted-foreground">"{testimonial.quote}"</p>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
       <section className="mx-auto flex flex-col items-center justify-center py-14">
        <div className="container max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Are you a makeup artist looking to grow your business?
              </h2>
              <p className="mb-6">Join GlamConnect and connect with clients looking for your services.</p>
              <Button variant="secondary" size="lg">
                Join as an Artist
              </Button>
            </div>
           
                <div className="relative h-[250px] lg:h-[300px] overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Makeup artist working"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
