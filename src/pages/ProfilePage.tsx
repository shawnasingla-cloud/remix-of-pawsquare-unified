import { useState } from "react";
import { motion } from "framer-motion";
import { User, Camera, MapPin, PawPrint, Settings, Heart, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const userPets = [
    {
      name: "Luna",
      breed: "Golden Retriever",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop",
    },
    {
      name: "Whiskers",
      breed: "Tabby Cat",
      age: "3 years",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop",
    },
  ];

  const userPosts = [
    {
      id: 1,
      content: "Just had the most amazing playdate at the park! 🐕",
      likes: 24,
      comments: 8,
      time: "2 hours ago",
    },
    {
      id: 2,
      content: "Luna learned a new trick today! So proud of my girl 🎉",
      likes: 45,
      comments: 12,
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <User className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-display font-bold mb-1">Sarah Johnson</h1>
              <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-1 mb-3">
                <MapPin className="w-4 h-4" />
                Brooklyn, NY
              </p>
              <p className="text-sm text-muted-foreground mb-4 max-w-md">
                Proud pet parent of 2 furry friends 🐕🐱 | Dog lover | Cat whisperer | Always looking for playdate buddies!
              </p>
              
              {/* Stats */}
              <div className="flex items-center justify-center md:justify-start gap-6 text-sm">
                <div>
                  <span className="font-bold text-foreground">24</span>
                  <span className="text-muted-foreground ml-1">Posts</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">156</span>
                  <span className="text-muted-foreground ml-1">Followers</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">89</span>
                  <span className="text-muted-foreground ml-1">Following</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl">
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Pets Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
            <PawPrint className="w-5 h-5 text-primary" />
            My Pets
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {userPets.map((pet, index) => (
              <motion.div
                key={pet.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex-shrink-0 card-elevated p-4 text-center w-40"
              >
                <img 
                  src={pet.image} 
                  alt={pet.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                />
                <h3 className="font-bold">{pet.name}</h3>
                <p className="text-sm text-muted-foreground">{pet.breed}</p>
                <p className="text-xs text-primary">{pet.age}</p>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-shrink-0 w-40 card-elevated p-4 flex flex-col items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-3">
                <PawPrint className="w-8 h-8" />
              </div>
              <span className="font-medium">Add Pet</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 mb-6">
              <TabsTrigger 
                value="posts"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Posts
              </TabsTrigger>
              <TabsTrigger 
                value="favorites"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                <Heart className="w-4 h-4 mr-2" />
                Favorites
              </TabsTrigger>
              <TabsTrigger 
                value="events"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-4">
              {userPosts.map((post) => (
                <div key={post.id} className="card-elevated p-5">
                  <p className="text-foreground mb-3">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" /> {post.comments}
                    </span>
                    <span>{post.time}</span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="favorites">
              <div className="text-center py-12 text-muted-foreground">
                <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No favorites yet</p>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="text-center py-12 text-muted-foreground">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No upcoming events</p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
