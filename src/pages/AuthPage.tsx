import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, PawPrint, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <PawPrint className="w-7 h-7 text-primary" />
            </div>
            <span className="text-2xl font-display font-bold">
              Paw<span className="text-gradient-warm">Square</span>
            </span>
          </Link>

          <div>
            <h1 className="text-3xl font-display font-bold mb-2">
              {isLogin ? "Welcome back!" : "Join the Pack"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Sign in to connect with your pet community" 
                : "Create an account to start your journey"}
            </p>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="John Doe" 
                    className="pl-10 h-12 rounded-xl border-2 focus:border-primary"
                  />
                </div>
              </motion.div>
            )}

            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="pl-10 h-12 rounded-xl border-2 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••" 
                  className="pl-10 pr-10 h-12 rounded-xl border-2 focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-primary hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            <Button type="submit" className="w-full btn-primary-gradient h-12 rounded-xl text-base">
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>

          <div className="text-center">
            <p className="text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-medium hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block flex-1 relative">
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-warm)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-primary-foreground max-w-md">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
                className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8"
              >
                <PawPrint className="w-12 h-12" />
              </motion.div>
              <h2 className="text-3xl font-display font-bold mb-4">
                Your Pet Community Awaits
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Connect with thousands of pet lovers in your neighborhood. Share moments, find playdates, and be part of something special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
