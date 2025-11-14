import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { medicineName, dose, time } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // First get a motivational quote
    const quoteResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'Generate one short motivational quote for elderly people. 10-12 simple words. Tone must be positive and loving. No complex vocabulary.'
          },
          {
            role: 'user',
            content: 'Give me a motivational quote'
          }
        ]
      }),
    });

    const quoteData = await quoteResponse.json();
    const quote = quoteData.choices[0].message.content;

    // Then generate the reminder message
    const reminderResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are giving a medication reminder to an elderly user. Output should be 1-2 lines, slow, simple, and polite.'
          },
          {
            role: 'user',
            content: `Create a reminder message for: Medicine: ${medicineName}, Dose: ${dose}, Time: ${time}. Include this quote: ${quote}`
          }
        ]
      }),
    });

    const reminderData = await reminderResponse.json();
    const reminderMessage = reminderData.choices[0].message.content;

    return new Response(
      JSON.stringify({ 
        reminder: reminderMessage,
        quote: quote
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