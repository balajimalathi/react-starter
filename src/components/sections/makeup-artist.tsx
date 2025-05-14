import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function MakeupArtist() {

  // Mock data for popular makeup artists
  const popularArtists = [
    {
      id: "1",
      name: "Priya Sharma",
      title: "Celebrity & Bridal Makeup Specialist",
      price: 5000,
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 120,
      location: "Mumbai",
      specialties: ["Bridal", "Celebrity", "Party"],
    },
    {
      id: "2",
      name: "Anjali Patel",
      title: "Bridal & Party Makeup Artist",
      price: 3500,
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      reviews: 85,
      location: "Delhi",
      specialties: ["Bridal", "Party", "Natural"],
    },
    {
      id: "3",
      name: "Rahul Verma",
      title: "Special Effects & Editorial Makeup",
      price: 4000,
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      reviews: 210,
      location: "Bangalore",
      specialties: ["Special Effects", "Editorial", "Creative"],
    },
    {
      id: "4",
      name: "Meera Kapoor",
      title: "Bridal & Traditional Makeup Expert",
      price: 4500,
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 150,
      location: "Chennai",
      specialties: ["Bridal", "Traditional", "Party"],
    },
  ]

  return (
    <section className="container mx-auto flex max-w-6xl flex-col items-center justify-center py-14">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Top Makeup Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularArtists.map((artist) => (
            <Link to={`/artists/${artist.id}`} key={artist.id} className="group">
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  {/* <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="object-cover" /> */}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      {/* <img
                        src={`/placeholder.svg?height=50&width=50&text=${artist.name.charAt(0)}`}
                        alt={artist.name}
                        className="object-cover"
                      /> */}
                    </div>
                    <div>
                      <h3 className="font-medium">{artist.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{artist.location}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium line-clamp-2 group-hover:text-pink-600 transition-colors mb-2">
                    {artist.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {artist.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{artist.rating}</span>
                    <span className="mx-1">({artist.reviews})</span>
                  </div>
                  <div className="font-semibold">Starting at ₹{artist.price}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-8"> 
          <Link
            to="/artists"
            target="_self"
            rel="noreferrer"
          >
            <Button
              className="hidden gap-2 px-5 md:flex"
              variant="default"
              size="sm"
            >
              <span>View All Artists</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
