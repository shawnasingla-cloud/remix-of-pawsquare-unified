import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dog, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuickActions from "@/components/QuickActions";
import FeaturedPets from "@/components/FeaturedPets";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { GetStarted } from "@/components/GetStarted";
import TutorialPopup from "@/components/TutorialPopup";
import AIChatWidget from "@/components/AIChatWidget";
import heroImage from "@/assets/hero-pets.jpg";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem("pawsquare-onboarding-complete");
    if (!completed) {
      setShowOnboarding(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Onboarding Modal for first-time users */}
      <Dialog open={showOnboarding} onOpenChange={setShowOnboarding}>
        <DialogContent 
          className="max-w-2xl border-0 bg-transparent p-0 shadow-none [&>button]:hidden"
          onEscapeKeyDown={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <GetStarted isModal onComplete={() => setShowOnboarding(false)} />
        </DialogContent>
      </Dialog>

      {/* Tutorial Popup */}
      <TutorialPopup isOpen={showTutorial} onClose={() => setShowTutorial(false)} />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[85vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Happy pets and families" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
          </div>

          <div className="container relative mx-auto px-4 py-20 lg:py-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium"
              >
                <MapPin className="w-4 h-4" />
                Your neighborhood pet community
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-display font-extrabold leading-tight"
              >
                Where Pet Parents{" "}
                <span className="text-gradient-warm">Come Together</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                Join your local pet community. Find playdates, share recommendations,
                reunite lost pets, and connect with fellow pet lovers in your neighborhood.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/auth">
                  <Button className="btn-primary-gradient h-12 px-8 text-base rounded-xl">
                    <Dog className="w-5 h-5 mr-2" />
                    Join the Pack
                  </Button>
                </Link>
                <Link to="/community">
                  <Button variant="outline" className="h-12 px-8 text-base rounded-xl border-2">
                    <Users className="w-5 h-5 mr-2" />
                    Explore Community
                  </Button>
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-8 pt-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2,400+</div>
                  <div className="text-sm text-muted-foreground">Pet Parents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-dark">850+</div>
                  <div className="text-sm text-muted-foreground">Pets Reunited</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-foreground">120+</div>
                  <div className="text-sm text-muted-foreground">Weekly Events</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <QuickActions />

        {/* Stats */}
        <Stats />

        {/* Featured Pets */}
        <FeaturedPets />

        {/* Features */}
        <Features />

        {/* CTA */}
        <CTA />
      </main>

      <Footer />

      {/* AI Chat Widget */}
      <AIChatWidget />
    </div>
  );
};

export default Index;
