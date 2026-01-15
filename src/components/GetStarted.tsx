import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PawPrint,
  MessageCircle,
  Users,
  Heart,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GetStartedProps {
  onComplete?: () => void;
  isModal?: boolean;
}

const onboardingSteps = [
  {
    icon: PawPrint,
    title: "Welcome to PawSquare! 🐾",
    description: "Your friendly pet care companion. We're here to help you take the best care of your furry friends with AI-powered guidance and a supportive community.",
    tip: "PawSquare combines artificial intelligence with real pet care knowledge to give you instant, helpful advice.",
    features: ["AI-Powered Advice", "Community Support", "Local Events", "Pet Adoption"]
  },
  {
    icon: MessageCircle,
    title: "Ask PawBot Anything",
    description: "Have a question about your pet? Just share what's happening and PawBot will provide friendly, helpful guidance tailored to your situation.",
    tip: "Describe your pet's behavior, symptoms, or any concerns - more details, better advice you'll receive!",
    features: ["24/7 Availability", "Expert Knowledge", "Personalized Responses", "Free to Use"]
  },
  {
    icon: Users,
    title: "Join the Community",
    description: "Connect with other pet parents! See what others are asking, share your experiences, and learn from the community's collective wisdom.",
    tip: "Browse community posts to find answers to common questions or share your own success stories.",
    features: ["Local Pet Parents", "Share Experiences", "Get Advice", "Make Friends"]
  },
  {
    icon: Heart,
    title: "Find Your Perfect Match",
    description: "Looking to adopt? Browse adorable pets in your area, save your favorites, and connect with local shelters and foster families.",
    tip: "Use filters to find pets that match your lifestyle, living situation, and experience level.",
    features: ["Browse Available Pets", "Save Favorites", "Contact Shelters", "Success Stories"]
  },
  {
    icon: Sparkles,
    title: "You're All Set! 🎉",
    description: "You're ready to start your PawSquare journey! Remember, we're always here to help with any pet care questions you may have.",
    tip: "Pro tip: Bookmark PawSquare so you can quickly get help whenever you need it!",
    features: ["Ready to Explore", "Get Help Anytime", "Join Events", "Connect with Others"]
  },
];

export function GetStarted({ onComplete, isModal = false }: GetStartedProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [skipped, setSkipped] = useState<number[]>([]);

  const step = onboardingSteps[currentStep];
  const StepIcon = step.icon;
  const isLastStep = currentStep === onboardingSteps.length - 1;

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setSkipped([...skipped, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem("pawsquare-onboarding-complete", "true");
    onComplete?.();
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && !isLastStep) {
        handleNext();
      } else if (e.key === "ArrowLeft" && currentStep > 0) {
        handlePrevious();
      } else if (e.key === "Escape" && isModal) {
        handleComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, isLastStep, isModal]);

  return (
    <div className={cn(
      "w-full max-w-2xl mx-auto",
      isModal && "p-4"
    )}>
      <Card className="shadow-elevated border-0 overflow-hidden bg-card">
        {/* Progress bar */}
        <div className="h-1.5 bg-muted">
          <motion.div
            className="h-full"
            style={{ background: "var(--gradient-warm)" }}
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <CardContent className="p-6 sm:p-8">
          {/* Dismiss button for modal */}
          {isModal && (
            <div className="flex justify-end -mt-2 -mr-2 mb-4">
              <Button variant="ghost" size="icon" onClick={handleComplete} className="rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {onboardingSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  index === currentStep
                    ? "bg-primary w-8"
                    : index < currentStep
                    ? "bg-primary/50 w-2.5"
                    : skipped.includes(index)
                    ? "bg-muted-foreground/20 w-2.5"
                    : "bg-muted-foreground/30 w-2.5"
                )}
              />
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-6"
            >
              {/* Icon */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10"
              >
                <StepIcon className="h-10 w-10 text-primary" />
              </motion.div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h2 className="text-2xl font-display font-bold text-foreground">
                  {step.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                {step.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-background border border-border/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tip */}
              <div className="bg-muted/50 rounded-xl p-4 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground">
                  💡 <span className="font-medium">Tip:</span> {step.tip}
                </p>
              </div>

              {!isModal && (
                <p className="text-xs text-muted-foreground">
                  Use arrow keys to navigate
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="gap-2 rounded-xl"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {!isLastStep && (
                <Button
                  variant="ghost"
                  onClick={handleSkip}
                  className="text-muted-foreground hover:text-foreground rounded-xl"
                >
                  Skip
                </Button>
              )}

              <Button
                onClick={handleNext}
                className="gap-2 btn-primary-gradient rounded-xl"
              >
                {isLastStep ? (
                  <>
                    <Check className="h-4 w-4" />
                    Get Started
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            <span className="text-sm text-muted-foreground hidden sm:block">
              {currentStep + 1} of {onboardingSteps.length}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default GetStarted;
