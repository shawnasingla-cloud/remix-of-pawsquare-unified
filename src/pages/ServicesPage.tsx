import { motion } from "framer-motion";
import { Sparkles, MapPin, Star, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  {
    id: 1,
    name: "Pawsome Grooming",
    category: "Grooming",
    rating: 4.9,
    reviews: 128,
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop",
    hours: "9 AM - 6 PM",
    price: "$$",
  },
  {
    id: 2,
    name: "Happy Tails Vet Clinic",
    category: "Veterinary",
    rating: 4.8,
    reviews: 256,
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop",
    hours: "8 AM - 8 PM",
    price: "$$$",
  },
  {
    id: 3,
    name: "Furry Friends Daycare",
    category: "Pet Sitting",
    rating: 4.7,
    reviews: 89,
    location: "Queens, NY",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&h=300&fit=crop",
    hours: "7 AM - 7 PM",
    price: "$$",
  },
  {
    id: 4,
    name: "Bark Academy",
    category: "Training",
    rating: 4.9,
    reviews: 167,
    location: "Bronx, NY",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    hours: "10 AM - 5 PM",
    price: "$$",
  },
  {
    id: 5,
    name: "Pet Paradise Store",
    category: "Pet Store",
    rating: 4.6,
    reviews: 203,
    location: "Staten Island, NY",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop",
    hours: "9 AM - 9 PM",
    price: "$",
  },
  {
    id: 6,
    name: "Whiskers & Wags Spa",
    category: "Grooming",
    rating: 4.8,
    reviews: 94,
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=300&fit=crop",
    hours: "10 AM - 7 PM",
    price: "$$$",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Local Pet Services
          </span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Pet <span className="text-gradient-warm">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Find trusted groomers, vets, trainers, and pet stores in your neighborhood.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="card-elevated overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-display font-bold text-lg">{service.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{service.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {service.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {service.hours}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 btn-primary-gradient rounded-xl">
                    Book Now
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
