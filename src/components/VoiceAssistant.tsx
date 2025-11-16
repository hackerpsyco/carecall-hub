import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useVoiceCall } from "@/hooks/useVoiceCall";
import { supabase } from "@/integrations/supabase/client";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";

const VoiceAssistant = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const { toast } = useToast();
  const { isConnected, isMuted, joinCall, leaveCall, toggleMute } = useVoiceCall();

  const startCall = async () => {
    try {
      setTranscript("Connecting...");
      await joinCall("medication-assistant");
      
      setTranscript("Connected! I'm your medication assistant. How can I help you today?");
      toast({
        title: "Connected",
        description: "Voice assistant is ready to help",
      });
    } catch (error: any) {
      console.error("Error starting call:", error);
      toast({
        title: "Connection Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const endCall = async () => {
    try {
      await leaveCall();
      setTranscript("");
      setAiResponse("");
      
      toast({
        title: "Call Ended",
        description: "Goodbye! Feel free to call again anytime.",
      });
    } catch (error: any) {
      console.error("Error ending call:", error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleVoiceInput = async (audioText: string) => {
    setIsProcessing(true);
    try {
      // Fetch user's medication context
      const { data: reminders } = await supabase
        .from("reminders")
        .select(`
          *,
          medications (name, dose, instructions)
        `)
        .eq("is_active", true)
        .limit(5);

      const context = reminders
        ?.map(r => `${r.medications.name} at ${r.time}`)
        .join(", ") || "No medications scheduled";

      // Get AI response
      const { data, error } = await supabase.functions.invoke("ai-voice-assistant", {
        body: { message: audioText, context },
      });

      if (error) throw error;

      setAiResponse(data.message);
      
      // Here you would convert the AI response to speech and play it
      // For now, we'll just display it
      
    } catch (error: any) {
      console.error("Error processing voice:", error);
      toast({
        title: "Processing Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-8">
        <div className="flex flex-col items-center gap-6">
          {/* Status Indicator */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Mic className={`w-16 h-16 text-white ${isConnected && !isMuted ? "animate-pulse" : ""}`} />
          </div>

          {/* Transcript Display */}
          {transcript && (
            <div className="w-full p-6 bg-muted rounded-lg">
              <p className="text-xl text-center">{transcript}</p>
            </div>
          )}

          {/* AI Response Display */}
          {aiResponse && (
            <div className="w-full p-6 bg-primary/10 rounded-lg">
              <p className="text-xl text-center font-medium">{aiResponse}</p>
            </div>
          )}

          {/* Processing Indicator */}
          {isProcessing && (
            <div className="text-muted-foreground text-lg">
              Processing your request...
            </div>
          )}

          {/* Call Controls */}
          <div className="flex gap-4">
            {!isConnected ? (
              <Button
                onClick={startCall}
                size="lg"
                className="h-20 px-12 text-2xl gap-4"
              >
                <Phone className="w-8 h-8" />
                Start Call
              </Button>
            ) : (
              <>
                <Button
                  onClick={toggleMute}
                  variant="outline"
                  size="lg"
                  className="h-20 px-12 text-2xl gap-4"
                >
                  {isMuted ? (
                    <>
                      <MicOff className="w-8 h-8" />
                      Unmute
                    </>
                  ) : (
                    <>
                      <Mic className="w-8 h-8" />
                      Mute
                    </>
                  )}
                </Button>
                <Button
                  onClick={endCall}
                  variant="destructive"
                  size="lg"
                  className="h-20 px-12 text-2xl gap-4"
                >
                  <PhoneOff className="w-8 h-8" />
                  End Call
                </Button>
              </>
            )}
          </div>

          {/* Instructions */}
          {isConnected && (
            <p className="text-lg text-muted-foreground text-center">
              Speak naturally about your medications and I'll help you
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceAssistant;
