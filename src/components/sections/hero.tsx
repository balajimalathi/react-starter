
import { Button, } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export default function Hero() {

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

  return (
    <section className="mx-auto flex flex-col items-center justify-center py-14">
      <div className="container max-w-6xl  px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Find the Perfect Makeup Artist in Your City
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Connect with talented makeup artists across India for weddings, parties, photoshoots, and special
              occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Enter your city" className="pl-9" />
              </div>
              <Button>Find Artists</Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-sm font-medium">Popular cities:</span>
              {popularCities.slice(0, 4).map((city) => (
                <Badge key={city.name} variant="secondary" className="cursor-pointer">
                  {city.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px]">
            {/* <img
              src="/placeholder.svg?height=400&width=600"
              alt="Makeup artist working"
              className="object-cover rounded-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
