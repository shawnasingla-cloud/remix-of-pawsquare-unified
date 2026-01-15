import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Image, MapPin, Tag, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const categories = [
  { id: "general", label: "General", emoji: "💬" },
  { id: "question", label: "Question", emoji: "❓" },
  { id: "lost", label: "Lost Pet", emoji: "🔍" },
  { id: "found", label: "Found Pet", emoji: "✅" },
  { id: "adoption", label: "Adoption", emoji: "🏠" },
  { id: "event", label: "Event", emoji: "📅" },
];

const SharePage = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Please add some content",
        description: "Your post needs at least some text to share with the community.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Post shared! 🎉",
      description: "Your post has been shared with the community.",
    });

    // Reset form
    setContent("");
    setLocation("");
    setSelectedCategory("general");
    setImages([]);
  };

  const handleImageUpload = () => {
    // Simulate image upload
    const demoImages = [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop",
    ];
    setImages([...images, ...demoImages]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Share2 className="w-4 h-4" />
            Share with Community
          </span>
          <h1 className="text-3xl lg:text-4xl font-display font-bold mb-2">
            Create a <span className="text-gradient-warm">Post</span>
          </h1>
          <p className="text-muted-foreground">
            Share updates, ask questions, or alert the community
          </p>
        </motion.div>

        {/* Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="card-elevated p-6 space-y-6"
        >
          {/* Category Selection */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Category</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  {category.emoji} {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <Label htmlFor="content" className="text-base font-medium">
              What's on your mind?
            </Label>
            <Textarea
              id="content"
              placeholder="Share your thoughts, ask a question, or post about your pet..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-32 rounded-xl resize-none"
            />
          </div>

          {/* Location */}
          <div className="space-y-3">
            <Label htmlFor="location" className="text-base font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location (optional)
            </Label>
            <Input
              id="location"
              placeholder="e.g., Brooklyn, NY"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* Images */}
          <div className="space-y-3">
            <Label className="text-base font-medium flex items-center gap-2">
              <Image className="w-4 h-4" />
              Photos (optional)
            </Label>
            
            {images.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={img} 
                      alt={`Upload ${index + 1}`}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <Button
              type="button"
              variant="outline"
              onClick={handleImageUpload}
              className="rounded-xl"
            >
              <Image className="w-4 h-4 mr-2" />
              Add Photo
            </Button>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <Label htmlFor="tags" className="text-base font-medium flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Tags (optional)
            </Label>
            <Input
              id="tags"
              placeholder="e.g., #puppy #training #advice"
              className="rounded-xl"
            />
          </div>

          {/* Submit */}
          <Button 
            type="submit" 
            className="w-full btn-primary-gradient rounded-xl h-12 text-base"
          >
            <Send className="w-5 h-5 mr-2" />
            Share Post
          </Button>
        </motion.form>
      </main>

      <Footer />
    </div>
  );
};

export default SharePage;
