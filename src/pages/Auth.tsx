import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, Pill } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              phone
            },
            emailRedirectTo: `${window.location.origin}/`
          }
        });

        if (error) throw error;

        toast({
          title: "Welcome!",
          description: "Your account has been created successfully.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-accent/10 p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Hero Image */}
        <div className="hidden md:block">
          <img 
            src={heroImage} 
            alt="Elderly person with medication" 
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Auth Form */}
        <Card className="w-full p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Heart className="w-16 h-16 text-primary" />
              <Pill className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MediCare
            </h1>
            <p className="text-2xl text-muted-foreground">
              Your friendly medication assistant
            </p>
          </div>

        <form onSubmit={handleAuth} className="space-y-6">
          {isSignUp && (
            <>
              <div className="space-y-2">
                <label className="text-xl font-medium">Full Name</label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required={isSignUp}
                  className="h-16 text-xl"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xl font-medium">Phone Number</label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="h-16 text-xl"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <label className="text-xl font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="h-16 text-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xl font-medium">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="h-16 text-xl"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-20 text-2xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
          </Button>

          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="w-full text-xl text-muted-foreground hover:text-foreground transition-colors underline"
          >
            {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
          </button>
        </form>
      </Card>
      </div>
    </div>
  );
};

export default Auth;