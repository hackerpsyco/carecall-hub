import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Pill } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const medicationSchema = z.object({
  name: z.string().min(1, "Medicine name is required").max(100),
  dose: z.string().min(1, "Dose is required").max(50),
  instructions: z.string().max(500).optional(),
  time: z.string().min(1, "Time is required"),
  days: z.string().min(1, "Days are required"),
});

type MedicationForm = z.infer<typeof medicationSchema>;

const Medications = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MedicationForm>({
    resolver: zodResolver(medicationSchema),
    defaultValues: {
      days: "1,2,3,4,5,6,7"
    }
  });

  const onSubmit = async (data: MedicationForm) => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      // Create medication
      const { data: medication, error: medError } = await supabase
        .from("medications")
        .insert({
          user_id: user.id,
          name: data.name,
          dose: data.dose,
          instructions: data.instructions || null,
        })
        .select()
        .single();

      if (medError) throw medError;

      // Create reminder
      const { error: reminderError } = await supabase
        .from("reminders")
        .insert({
          medication_id: medication.id,
          time: data.time,
          days_of_week: data.days,
          is_active: true,
        });

      if (reminderError) throw reminderError;

      toast({
        title: "Success! 🎉",
        description: "Medicine added successfully",
      });

      reset();
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent/10 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className="h-16 px-6"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex items-center gap-4">
            <Pill className="w-16 h-16 text-primary" />
            <h1 className="text-5xl font-bold">My Medicines</h1>
          </div>
        </div>

        {/* Add Medicine Form */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
          <CardHeader>
            <CardTitle className="text-4xl flex items-center gap-4">
              <Plus className="w-10 h-10" />
              Add New Medicine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Medicine Name */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-2xl">
                  Medicine Name
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="h-16 text-2xl"
                  placeholder="e.g., Aspirin"
                />
                {errors.name && (
                  <p className="text-xl text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Dose */}
              <div className="space-y-3">
                <Label htmlFor="dose" className="text-2xl">
                  Dose
                </Label>
                <Input
                  id="dose"
                  {...register("dose")}
                  className="h-16 text-2xl"
                  placeholder="e.g., 1 tablet, 5ml"
                />
                {errors.dose && (
                  <p className="text-xl text-destructive">{errors.dose.message}</p>
                )}
              </div>

              {/* Instructions */}
              <div className="space-y-3">
                <Label htmlFor="instructions" className="text-2xl">
                  Instructions (Optional)
                </Label>
                <Textarea
                  id="instructions"
                  {...register("instructions")}
                  className="min-h-32 text-2xl"
                  placeholder="e.g., Take with food"
                />
                {errors.instructions && (
                  <p className="text-xl text-destructive">{errors.instructions.message}</p>
                )}
              </div>

              {/* Time */}
              <div className="space-y-3">
                <Label htmlFor="time" className="text-2xl">
                  Reminder Time
                </Label>
                <Input
                  id="time"
                  type="time"
                  {...register("time")}
                  className="h-16 text-2xl"
                />
                {errors.time && (
                  <p className="text-xl text-destructive">{errors.time.message}</p>
                )}
              </div>

              {/* Days */}
              <div className="space-y-3">
                <Label htmlFor="days" className="text-2xl">
                  Days (1=Mon, 7=Sun)
                </Label>
                <Input
                  id="days"
                  {...register("days")}
                  className="h-16 text-2xl"
                  placeholder="e.g., 1,2,3,4,5 for weekdays"
                />
                {errors.days && (
                  <p className="text-xl text-destructive">{errors.days.message}</p>
                )}
                <p className="text-xl text-muted-foreground">
                  Enter days separated by commas (1-7)
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-20 text-2xl gap-4"
              >
                <Plus className="w-8 h-8" />
                {loading ? "Adding..." : "Add Medicine"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Medications;
