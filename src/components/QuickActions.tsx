import { motion } from "framer-motion";
import { PawPrint, Search, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  { 
    icon: PawPrint, 
    label: "Create Post", 
    desc: "Share with community", 
    href: "/share", 
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  { 
    icon: Search, 
    label: "Find Playmate", 
    desc: "Match with nearby pets", 
    href: "/community", 
    bgColor: "bg-sage/20",
    iconColor: "text-sage-dark",
  },
  { 
    icon: Calendar, 
    label: "Browse Events", 
    desc: "Local pet meetups", 
    href: "/events", 
    bgColor: "bg-accent/20",
    iconColor: "text-accent-foreground",
  },
  { 
    icon: Heart, 
    label: "Adopt a Pet", 
    desc: "Find your new friend", 
    href: "/adoption", 
    bgColor: "bg-destructive/10",
    iconColor: "text-destructive",
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

const QuickActions = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {actions.map((action) => (
            <motion.div key={action.label} variants={item}>
              <Link 
                to={action.href} 
                className={`${action.bgColor} block p-4 lg:p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-soft group`}
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-card flex items-center justify-center shadow-sm"
                  >
                    <action.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${action.iconColor}`} />
                  </motion.div>
                  <div>
                    <div className="font-display font-bold text-sm lg:text-base">{action.label}</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">{action.desc}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickActions;
