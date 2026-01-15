import { motion } from "framer-motion";
import { Users, MessageSquare, Heart, Share2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const posts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      location: "Brooklyn, NY",
    },
    content: "Just had the most amazing playdate at Prospect Park! Luna made so many new friends today. 🐕💕",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    likes: 24,
    comments: 8,
    time: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      location: "Manhattan, NY",
    },
    content: "Looking for recommendations for a good vet in the Upper East Side. Oliver needs his annual checkup! 🐱",
    likes: 12,
    comments: 15,
    time: "4 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      location: "Queens, NY",
    },
    content: "Max just learned his first trick! So proud of my little corgi. 🎉",
    image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=600&h=400&fit=crop",
    likes: 45,
    comments: 12,
    time: "6 hours ago",
  },
];

const CommunityPage = () => {
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
          <span className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Pet Parent Community
          </span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Community <span className="text-gradient-warm">Feed</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Share moments, ask questions, and connect with fellow pet lovers in your neighborhood.
          </p>
        </motion.div>

        {/* Create Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-elevated p-6 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <input 
              type="text"
              placeholder="Share something with the community..."
              className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button className="btn-primary-gradient rounded-xl">
              Post
            </Button>
          </div>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="card-elevated overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-5 flex items-center gap-4">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-display font-bold">{post.user.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {post.user.location}
                    <span>•</span>
                    {post.time}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-5 pb-4">
                <p className="text-foreground leading-relaxed">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="relative aspect-video">
                  <img 
                    src={post.image} 
                    alt="Post" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="p-5 flex items-center gap-6 border-t border-border">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-auto">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPage;
