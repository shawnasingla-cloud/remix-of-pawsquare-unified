import { motion } from "framer-motion";
import { PawPrint, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "var(--gradient-warm)" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 p-8 lg:p-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm mb-8"
            >
              <PawPrint className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 max-w-2xl mx-auto leading-tight">
              Ready to Join the Pack?
            </h2>
            
            <p className="text-lg text-primary-foreground/90 mb-10 max-w-lg mx-auto">
              Connect with pet lovers in your neighborhood. Share moments, find playmates, and be part of a caring community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/auth">
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 rounded-xl h-14 px-8 text-base shadow-xl"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/community">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 rounded-xl h-14 px-8 text-base"
                >
                  Explore Community
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
