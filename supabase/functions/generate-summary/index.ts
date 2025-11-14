import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('Unauthorized');
    }

    // Get today's reminder logs
    const today = new Date().toISOString().split('T')[0];
    
    const { data: logs, error: logsError } = await supabase
      .from('reminder_logs')
      .select(`
        *,
        reminders (
          medications (*)
        )
      `)
      .gte('timestamp', `${today}T00:00:00`)
      .lte('timestamp', `${today}T23:59:59`);

    if (logsError) throw logsError;

    const completedCount = logs?.filter(log => log.status === 'completed').length || 0;
    const missedCount = logs?.filter(log => log.status === 'missed').length || 0;

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Generate summary using AI
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
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
            content: 'You are summarizing today\'s medicines. Be encouraging and warm.'
          },
          {
            role: 'user',
            content: `Create a daily summary: Completed ${completedCount} reminders, Missed ${missedCount} reminders. Make it encouraging and supportive.`
          }
        ]
      }),
    });

    const data = await response.json();
    const summary = data.choices[0].message.content;

    // Save summary to database
    const { error: summaryError } = await supabase
      .from('daily_summaries')
      .upsert({
        user_id: user.id,
        date: today,
        completed_count: completedCount,
        missed_count: missedCount,
        notes: summary
      });

    if (summaryError) throw summaryError;

    return new Response(
      JSON.stringify({ 
        summary,
        completedCount,
        missedCount
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