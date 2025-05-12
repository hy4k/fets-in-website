import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { corsHeaders } from '../_shared/cors.ts'; // CORS ഹെഡറുകൾക്കായി

// --- Google Gemini API Key Supabase Secrets ൽ നിന്ന് എടുക്കുക ---
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
// ----------------------------------------------------

// --- Google Gemini API Endpoint ---
const GEMINI_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent`;
// ----------------------------------

serve(async (req: Request) => {
  // CORS preflight request കൈകാര്യം ചെയ്യുക (use static headers)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders }); // Use imported static corsHeaders
  }

  try {
    // Gemini API കീ ഉണ്ടോ എന്ന് ഉറപ്പാക്കുക
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY environment variable not set in Supabase secrets.');
      return new Response(
        JSON.stringify({ error: 'API Key not configured on the server.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } } // Use static corsHeaders
      );
    }

    // ഫ്രണ്ട്എൻഡിൽ നിന്ന് messages array എടുക്കുക
    let incomingMessages: { sender: string; text: string }[];
    try {
      const body = await req.json();
      incomingMessages = body.messages;
      if (!Array.isArray(incomingMessages) || incomingMessages.length === 0) {
        throw new Error("Missing or invalid 'messages' array in request body.");
      }
    } catch (e) {
      console.error('Error parsing request body:', e);
      return new Response(
        JSON.stringify({ error: `Bad request: ${e.message}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } } // Use static corsHeaders
      );
    }

    // Gemini API ക്ക് അനുയോജ്യമായ ഫോർമാറ്റിലേക്ക് മാറ്റുക
    const systemPrompt = `You are FETS AI, a helpful and friendly assistant for Forun Testing and Educational Services (FETS) in Kozhikode, Kerala. Your goal is to assist users with inquiries about exam registrations (Prometric, Pearson VUE, ETS, IELTS, etc.), mock tests, slot booking, and provide general support regarding FETS services.

    Key Information about FETS:
    - Name: Forun Testing and Educational Services (FETS)
    - Location: Fourth Floor, Kadooli Tower, West Nadakkavu, Kozhikode, Kerala, 673011
    - Services: Authorized test center for Prometric (CMA US), Pearson VUE, ETS (TOEFL, GRE), British Council/IDP (IELTS), PSI, MRCS,MRCP etc. Also offers mock tests.
    - Exam Registration: Guide users to the official websites of the respective testing organizations (e.g., Prometric.com, PearsonVUE.com, ETS.org, IELTS.org) for registration. FETS primarily provides the testing facility.
    - Mock Tests: Explain available mock tests (for CMA US give the link "https://form.jotform.com/243044458639463" and for TOEFL give the link "https://form.jotform.com/243191761314453"), how to book them (provide a link or contact info if available), and any associated fees.
    - Contact: Phone: +918089393992, +919895541552, +918089219722. Email: edu@fets.in. Website: www.fets.in
    - Working Hours: Monday to Saturday, 8:00 AM to 7:00 PM.
    - Language: Respond in English only.
    - Tone: Friendly, helpful, professional, and slightly witty.
    - Unknown Information: If you don't know the answer to a specific question (e.g., exact fees for a specific exam, real-time slot availability), admit it politely and direct the user to contact FETS directly via phone or email for the most accurate information. Do not make up information.

    Now, answer the user's query based on the conversation history and the information provided above.`;

    const geminiMessages = [
       { role: 'user', parts: [{ text: systemPrompt }] }, // സിസ്റ്റം പ്രോംപ്റ്റ് ആദ്യം യൂസർ റോളിൽ നൽകുന്നു
       { role: 'model', parts: [{ text: 'Okay, I am FETS AI, ready to assist you! How can I help you today regarding exams or mock tests at FETS Kozhikode?' }] }, // AI യുടെ ആദ്യ പ്രതികരണം
       ...incomingMessages.slice(1).map(msg => ({ // ആദ്യത്തെ ഡമ്മി AI മെസ്സേജ് ഒഴിവാക്കുന്നു (if any)
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
       }))
    ];

    // Gemini API ലേക്ക് അഭ്യർത്ഥന അയക്കുക
    const geminiResponse = await fetch(`${GEMINI_API_ENDPOINT}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: geminiMessages,
        // generationConfig: { temperature: 0.7, /* ... */ }, // ആവശ്യമെങ്കിൽ ചേർക്കാം
      }),
    });

    // Gemini API ൽ നിന്നുള്ള പിശകുകൾ കൈകാര്യം ചെയ്യുക
    if (!geminiResponse.ok) {
      const errorBody = await geminiResponse.text();
      console.error(`Gemini API error (${geminiResponse.status}): ${errorBody}`);
      return new Response(
        JSON.stringify({ error: `AI service error: ${geminiResponse.statusText}`, details: errorBody }),
        { status: geminiResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } } // Use static corsHeaders
      );
    }

    // Gemini യുടെ മറുപടി എടുക്കുക
    const geminiData = await geminiResponse.json();
    const reply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
       console.error('Unexpected response structure from Gemini API:', geminiData);
       throw new Error('Invalid response structure from AI service.');
    }

    // മറുപടി ഫ്രണ്ട്എൻഡിലേക്ക് അയക്കുക
    return new Response(
      JSON.stringify({ reply: reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } } // Use static corsHeaders
    );

  } catch (error) {
    console.error('Internal server error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } } // Use static corsHeaders
    );
  }
});

// Note: Ensure you have a supabase/functions/_shared/cors.ts file
// Example cors.ts:
/*
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Or specific origin
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};
*/
