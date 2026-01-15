import { motion } from "framer-motion";
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pets = [
  {
    id: 1,
    name: "Luna",
    breed: "Golden Retriever",
    age: "2 years",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    personality: "Playful & Loving",
  },
  {
    id: 2,
    name: "Oliver",
    breed: "Tabby Cat",
    age: "1 year",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    personality: "Curious & Cuddly",
  },
  {
    id: 3,
    name: "Max",
    breed: "Corgi",
    age: "3 years",
    location: "Queens, NY",
    image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=400&h=400&fit=crop",
    personality: "Energetic & Smart",
  },
  {
    id: 4,
    name: "Bella",
    breed: "Maine Coon",
    age: "4 years",
    location: "Bronx, NY",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    personality: "Gentle Giant",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FeaturedPets = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Heart className="w-4 h-4" />
            Looking for a home
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-display font-bold mb-4"
          >
            Meet Our <span className="text-gradient-warm">Featured Pets</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            These adorable friends are waiting for their forever families. Could you be their perfect match?
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pets.map((pet) => (
            <motion.div
              key={pet.id}
              variants={item}
              className="group card-elevated overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                >
                  <Heart className="w-5 h-5 text-destructive" />
                </motion.button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg">{pet.name}</h3>
                  <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full">
                    {pet.age}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{pet.breed}</p>
                <p className="text-xs text-primary font-medium">{pet.personality}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {pet.location}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/adoption">
            <Button className="btn-primary-gradient rounded-xl px-8 h-12">
              View All Pets
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPets;
