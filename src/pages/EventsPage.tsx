import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const events = [
  {
    id: 1,
    title: "Puppy Playdate at Central Park",
    date: "Jan 20, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Central Park, NYC",
    attendees: 24,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
    category: "Playdate",
  },
  {
    id: 2,
    title: "Cat Café Social Hour",
    date: "Jan 22, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Meow Parlour, Manhattan",
    attendees: 15,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
    category: "Social",
  },
  {
    id: 3,
    title: "Dog Training Workshop",
    date: "Jan 25, 2026",
    time: "9:00 AM - 11:00 AM",
    location: "Brooklyn Dog Training Center",
    attendees: 18,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    category: "Workshop",
  },
  {
    id: 4,
    title: "Pet Adoption Fair",
    date: "Jan 28, 2026",
    time: "11:00 AM - 4:00 PM",
    location: "Union Square, NYC",
    attendees: 56,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
    category: "Adoption",
  },
];

const EventsPage = () => {
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
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Pet Events
          </span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Upcoming <span className="text-gradient-warm">Events</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join local pet meetups, training sessions, and adoption events in your area.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="card-elevated overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-3">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                  <Button className="btn-primary-gradient rounded-xl mt-4 w-full md:w-auto">
                    Join Event
                    <ArrowRight className="w-4 h-4 ml-2" />
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

export default EventsPage;
