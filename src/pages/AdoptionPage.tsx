import { motion } from "framer-motion";
import { Heart, MapPin, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const pets = [
  {
    id: 1,
    name: "Luna",
    breed: "Golden Retriever",
    age: "2 years",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    personality: "Playful & Loving",
    gender: "Female",
  },
  {
    id: 2,
    name: "Oliver",
    breed: "Tabby Cat",
    age: "1 year",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    personality: "Curious & Cuddly",
    gender: "Male",
  },
  {
    id: 3,
    name: "Max",
    breed: "Corgi",
    age: "3 years",
    location: "Queens, NY",
    image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=400&h=400&fit=crop",
    personality: "Energetic & Smart",
    gender: "Male",
  },
  {
    id: 4,
    name: "Bella",
    breed: "Maine Coon",
    age: "4 years",
    location: "Bronx, NY",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    personality: "Gentle Giant",
    gender: "Female",
  },
  {
    id: 5,
    name: "Charlie",
    breed: "Labrador",
    age: "1.5 years",
    location: "Staten Island, NY",
    image: "https://images.unsplash.com/photo-1579213838058-85a4a2d7d1bc?w=400&h=400&fit=crop",
    personality: "Friendly & Loyal",
    gender: "Male",
  },
  {
    id: 6,
    name: "Milo",
    breed: "Persian Cat",
    age: "2 years",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop",
    personality: "Calm & Elegant",
    gender: "Male",
  },
];

const AdoptionPage = () => {
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
            <Heart className="w-4 h-4" />
            Find Your Perfect Match
          </span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Adopt a <span className="text-gradient-warm">Furry Friend</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            These adorable pets are looking for their forever homes. Could you be their perfect match?
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search by breed, name, or location..." 
              className="pl-10 h-12 rounded-xl"
            />
          </div>
          <Button variant="outline" className="h-12 px-6 rounded-xl">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </Button>
        </motion.div>

        {/* Pet Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pets.map((pet, index) => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group card-elevated overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
                >
                  <Heart className="w-5 h-5 text-destructive" />
                </motion.button>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full">
                    {pet.gender}
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xl">{pet.name}</h3>
                  <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full">
                    {pet.age}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{pet.breed}</p>
                <p className="text-sm text-primary font-medium">{pet.personality}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {pet.location}
                </div>
                <Button className="w-full btn-primary-gradient rounded-xl mt-4">
                  Meet {pet.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default AdoptionPage;
