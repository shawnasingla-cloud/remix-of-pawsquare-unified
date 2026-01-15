import { Link } from "react-router-dom";
import { PawPrint, Heart, Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-display font-bold">
                Paw<span className="text-gradient-warm">Square</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your neighborhood pet community. Connect, share, and care for our furry friends together.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Community", "Adoption", "Events", "Services"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Pet Care Tips", "Find a Vet", "Lost & Found", "Blog"].map((item) => (
                <li key={item}>
                  <Link 
                    to="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link 
                    to="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 PawSquare. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for pet lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
