import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Plus, Mic, Heart, Clock, CheckCircle2 } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import VoiceAssistant from "@/components/VoiceAssistant";

interface Medication {
  id: string;
  name: string;
  dose: string;
  instructions: string;
}

interface Reminder {
  id: string;
  medication_id: string;
  time: string;
  days_of_week: string;
  medications: Medication;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);

      if (!session) {
        navigate("/auth");
        return;
      }

      // Fetch today's reminders
      const { data, error } = await supabase
        .from("reminders")
        .select(`
          *,
          medications (*)
        `)
        .eq("is_active", true);

      if (error) throw error;
      setReminders(data || []);
    } catch (error: any) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate("/auth");
    }
  };

  const handleTaken = async (reminderId: string) => {
    try {
      const { error } = await supabase.from("reminder_logs").insert({
        reminder_id: reminderId,
        status: "completed",
        timestamp: new Date().toISOString(),
      });

      if (error) throw error;

      toast({
        title: "Great job! 🎉",
        description: "Medicine taken successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-accent/10">
        <div className="text-center">
          <Heart className="w-20 h-20 text-primary animate-pulse mx-auto mb-4" />
          <p className="text-2xl text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent/10 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Heart className="w-16 h-16 text-primary" />
            <div>
              <h1 className="text-5xl font-bold">MediCare</h1>
              <p className="text-xl text-muted-foreground">Welcome back!</p>
            </div>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="h-16 px-8 gap-3"
          >
            <LogOut className="w-6 h-6" />
            Sign Out
          </Button>
        </div>

        {/* Today's Reminders */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="w-12 h-12 text-primary" />
            <h2 className="text-4xl font-bold">Today's Reminders</h2>
          </div>

          {reminders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl text-muted-foreground mb-6">
                No reminders set yet
              </p>
              <Button 
                onClick={() => navigate("/medications")}
                className="h-16 px-8 text-xl gap-3"
              >
                <Plus className="w-6 h-6" />
                Add Your First Medicine
              </Button>
            </div>
          ) : (
            <div className="grid gap-6">
              {reminders.map((reminder) => (
                <Card key={reminder.id} className="p-6 bg-card">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-bold mb-2">
                        {reminder.medications.name}
                      </h3>
                      <p className="text-2xl text-muted-foreground mb-2">
                        Dose: {reminder.medications.dose}
                      </p>
                      <p className="text-xl text-muted-foreground">
                        Time: {reminder.time}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                      <Button
                        onClick={() => handleTaken(reminder.id)}
                        className="h-20 px-12 text-2xl bg-success hover:bg-success/90 gap-3"
                      >
                        <CheckCircle2 className="w-8 h-8" />
                        Taken
                      </Button>
                      <Button
                        variant="outline"
                        className="h-16 px-12 text-xl gap-3"
                      >
                        <Clock className="w-6 h-6" />
                        Snooze 10 min
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Card>

        {/* Voice Assistant */}
        <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border-2 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Voice Assistant</h2>
            <p className="text-2xl text-muted-foreground">
              Talk to me about your medications anytime
            </p>
          </div>
          <VoiceAssistant />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;