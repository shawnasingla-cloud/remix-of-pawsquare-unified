import { motion } from "framer-motion";
import { Users, Heart, Calendar, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "2,400+", label: "Pet Parents", color: "text-primary" },
  { icon: Heart, value: "850+", label: "Pets Reunited", color: "text-destructive" },
  { icon: Calendar, value: "120+", label: "Weekly Events", color: "text-accent-foreground" },
  { icon: MapPin, value: "50+", label: "Neighborhoods", color: "text-sage-dark" },
];

const Stats = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-hero p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-sm shadow-soft mb-4"
                >
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </motion.div>
                <div className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
