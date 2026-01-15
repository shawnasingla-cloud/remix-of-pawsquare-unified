import { motion } from "framer-motion";
import { MessageCircle, MapPin, Bell, Shield, Users, Calendar } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Community Posts",
    description: "Share updates, ask questions, and connect with pet parents in your neighborhood.",
  },
  {
    icon: MapPin,
    title: "Lost & Found",
    description: "Quickly alert your community when a pet goes missing or is found nearby.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified about relevant posts, events, and pet sightings in your area.",
  },
  {
    icon: Shield,
    title: "Verified Community",
    description: "Trust your network with verified pet parent profiles and reviews.",
  },
  {
    icon: Users,
    title: "Playdate Matching",
    description: "Find the perfect playmates for your pets based on size, energy, and location.",
  },
  {
    icon: Calendar,
    title: "Local Events",
    description: "Discover and join pet meetups, adoption drives, and training sessions nearby.",
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

const Features = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-display font-bold mb-4"
          >
            Everything Your <span className="text-gradient-warm">Pet Needs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            From finding playmates to emergency alerts, we've got your pet community covered.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group p-6 rounded-2xl bg-background hover:shadow-elevated transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
