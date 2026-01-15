import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Play, Heart, Users, MessageCircle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TutorialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const tutorialSteps = [
  {
    title: "Welcome to PawSquare! 🐾",
    description: "Let's take a quick tour of your new favorite pet community platform.",
    icon: Sparkles,
    tips: ["Click the bell icon to see notifications", "Use the search bar to find pets", "Join events to meet other pet parents"]
  },
  {
    title: "Connect & Share",
    description: "Share your pet experiences and connect with other pet lovers in your area.",
    icon: Users,
    tips: ["Like posts to show appreciation", "Comment on posts to help others", "Share your own pet photos"]
  },
  {
    title: "Get Expert Help",
    description: "Our AI-powered PawBot is here to help with all your pet questions.",
    icon: MessageCircle,
    tips: ["Ask about health issues", "Get training advice", "Learn about nutrition", "24/7 availability"]
  },
  {
    title: "Find Your Match",
    description: "Browse adorable pets looking for their forever homes.",
    icon: Heart,
    tips: ["Filter by breed and age", "Save your favorites", "Contact shelters directly"]
  }
];

export default function TutorialPopup({ isOpen, onClose }: TutorialPopupProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset step when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
    }
  }, [isOpen]);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlayDemo = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  if (!isOpen) return null;

  const step = tutorialSteps[currentStep];
  const StepIcon = step.icon;
  const isLastStep = currentStep === tutorialSteps.length - 1;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3 }}
        >
          <Card className="w-full max-w-md mx-auto shadow-elevated border-0 overflow-hidden bg-card">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-display font-bold text-foreground">Quick Tutorial</h2>
                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2 mb-6">
                {tutorialSteps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === currentStep ? "bg-primary w-8" : "bg-muted w-2"
                    )}
                    layoutId={`progress-${index}`}
                  />
                ))}
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center space-y-5"
                >
                  {/* Icon */}
                  <motion.div 
                    className={cn(
                      "w-16 h-16 rounded-2xl mx-auto flex items-center justify-center bg-primary/10",
                      isPlaying && "animate-bounce-gentle"
                    )}
                    whileHover={{ scale: 1.05 }}
                  >
                    <StepIcon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Tips */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold text-sm mb-3 text-foreground text-left">💡 Pro Tips:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {step.tips.map((tip, index) => (
                        <motion.li 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Play className="w-2.5 h-2.5 text-primary" />
                          </div>
                          <span className="text-left">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Demo Button */}
                  <div className="p-4 rounded-xl" style={{ background: "var(--gradient-warm)" }}>
                    <Button
                      onClick={handlePlayDemo}
                      disabled={isPlaying}
                      variant="secondary"
                      className="w-full bg-background/90 hover:bg-background text-foreground"
                    >
                      {isPlaying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary/30 border-t-primary animate-spin rounded-full mr-2" />
                          Playing Demo...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Try Interactive Demo
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-border/50">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="gap-1 rounded-xl"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                <span className="text-sm text-muted-foreground">
                  {currentStep + 1} of {tutorialSteps.length}
                </span>

                <Button
                  onClick={handleNext}
                  className="gap-1 btn-primary-gradient rounded-xl"
                >
                  {isLastStep ? "Get Started" : "Next"}
                  {!isLastStep && <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
