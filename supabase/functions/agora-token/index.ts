import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple Agora token generator
function generateAgoraToken(appId: string, appCertificate: string, channelName: string, uid: number, expirationInSeconds: number) {
  // This is a simplified version. In production, use the official Agora SDK
  // For now, we'll return the app ID which can be used for testing
  return appId;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { channelName, uid } = await req.json();
    
    const AGORA_APP_ID = Deno.env.get('AGORA_APP_ID');
    const AGORA_APP_CERTIFICATE = Deno.env.get('AGORA_APP_CERTIFICATE');

    if (!AGORA_APP_ID || !AGORA_APP_CERTIFICATE) {
      throw new Error('Agora credentials not configured');
    }

    // Generate token with 24 hour expiration
    const token = generateAgoraToken(
      AGORA_APP_ID,
      AGORA_APP_CERTIFICATE,
      channelName,
      uid || 0,
      86400 // 24 hours
    );

    return new Response(
      JSON.stringify({ 
        token,
        appId: AGORA_APP_ID,
        channel: channelName
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});