import { useState, useEffect, useCallback } from "react";
import AgoraRTC, { 
  IAgoraRTCClient, 
  IMicrophoneAudioTrack,
  IAgoraRTCRemoteUser 
} from "agora-rtc-sdk-ng";
import { supabase } from "@/integrations/supabase/client";

interface VoiceCallConfig {
  appId: string;
  channelName: string;
  onUserJoined?: (user: IAgoraRTCRemoteUser) => void;
  onUserLeft?: (user: IAgoraRTCRemoteUser) => void;
}

export const useVoiceCall = () => {
  const [client, setClient] = useState<IAgoraRTCClient | null>(null);
  const [localAudioTrack, setLocalAudioTrack] = useState<IMicrophoneAudioTrack | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const agoraClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    setClient(agoraClient);
    setIsInitialized(true);

    return () => {
      agoraClient.leave();
    };
  }, []);

  const joinCall = useCallback(async (channelName: string) => {
    if (!client || !isInitialized) {
      console.error("Client not initialized");
      return;
    }

    try {
      // Get Agora token from edge function
      const { data: tokenData, error: tokenError } = await supabase.functions.invoke(
        "agora-token",
        {
          body: { channelName, role: "publisher" },
        }
      );

      if (tokenError) throw tokenError;
      
      const { token, uid } = tokenData;

      // Join the channel
      await client.join(
        import.meta.env.VITE_AGORA_APP_ID || "",
        channelName,
        token,
        uid
      );

      // Create and publish local audio track
      const audioTrack = await AgoraRTC.createMicrophoneAudioTrack({
        encoderConfig: "high_quality_stereo",
      });
      
      setLocalAudioTrack(audioTrack);
      await client.publish([audioTrack]);
      setIsConnected(true);

      console.log("Successfully joined voice call");
    } catch (error) {
      console.error("Error joining call:", error);
      throw error;
    }
  }, [client, isInitialized]);

  const leaveCall = useCallback(async () => {
    if (!client) return;

    try {
      if (localAudioTrack) {
        localAudioTrack.close();
        setLocalAudioTrack(null);
      }

      await client.leave();
      setIsConnected(false);
      console.log("Left voice call");
    } catch (error) {
      console.error("Error leaving call:", error);
    }
  }, [client, localAudioTrack]);

  const toggleMute = useCallback(async () => {
    if (!localAudioTrack) return;

    await localAudioTrack.setEnabled(isMuted);
    setIsMuted(!isMuted);
  }, [localAudioTrack, isMuted]);

  return {
    client,
    isConnected,
    isMuted,
    joinCall,
    leaveCall,
    toggleMute,
  };
};
