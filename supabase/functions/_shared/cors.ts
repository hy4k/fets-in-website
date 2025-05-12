// supabase/functions/_shared/cors.ts
// ലളിതമായ സ്റ്റാറ്റിക് CORS ഹെഡറുകളിലേക്ക് മടങ്ങുന്നു
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // തൽക്കാലം എല്ലാ ഒറിജിനുകളും അനുവദിക്കുന്നു
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
