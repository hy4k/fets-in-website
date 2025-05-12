// supabase/functions/fets-ai-proxy/index.ts
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { corsHeaders } from '../_shared/cors.ts'; // Ensure this path is correct

// Define the RASA server URL (from your Codespace or future deployment)
// IMPORTANT: This URL will change if your Codespace restarts or is rebuilt.
// For a more permanent solution, deploy RASA to a stable URL and update this.
const RASA_BASE_URL = "https://miniature-space-spork-x5p6rpjv5wvp367g5-5005.app.github.dev";
const RASA_WEBHOOK_PATH = "/webhooks/rest/webhook";
const RASA_ACCESS_TOKEN = "MySecretRasaToken123"; // The token RASA server will expect

const RASA_SERVER_URL = `${RASA_BASE_URL}${RASA_WEBHOOK_PATH}?token=${RASA_ACCESS_TOKEN}`;

console.log(`FETS AI Proxy configured to call RASA server with token at: ${RASA_BASE_URL}${RASA_WEBHOOK_PATH}?token=REDACTED`);

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    let userMessage: string;
    try {
      const body = await req.json();
      // Expecting body.messages to be an array like:
      // [{ sender: "user" | "ai", text: "..." }, ...]
      if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
        console.error("Request body missing 'messages' array or array is empty:", body);
        throw new Error("Missing or invalid 'messages' array in request body.");
      }
      
      // Get the last message from the array
      const lastMessageObject = body.messages[body.messages.length - 1];
      
      if (!lastMessageObject || typeof lastMessageObject.text !== 'string' || lastMessageObject.text.trim() === "") {
        console.error("Last message object is invalid or text is empty:", lastMessageObject);
        throw new Error("Invalid last message object or text is empty.");
      }
      // Optional: you might want to ensure the last message is from 'user'
      // if (lastMessageObject.sender !== 'user') {
      //   console.error("Last message is not from user:", lastMessageObject);
      //   throw new Error("Last message not from user.");
      // }
      userMessage = lastMessageObject.text.trim();
      console.log("Extracted user message from messages array:", userMessage);

    } catch (e) {
      console.error('Error parsing request body or extracting user message:', e.message);
      return new Response(
        JSON.stringify({ error: `Bad request: ${e.message}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // --- Call RASA Server ---
    console.log(`Forwarding message to RASA: "${userMessage}"`);
    const rasaResponse = await fetch(RASA_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: "live_chat_user", // Using a consistent sender ID for now
        message: userMessage,
      }),
    });

    console.log(`RASA server response status: ${rasaResponse.status}`);

    if (!rasaResponse.ok) {
      const errorBody = await rasaResponse.text();
      console.error(`RASA server error (${rasaResponse.status}): ${errorBody}`);
      return new Response(
        JSON.stringify({ error: `RASA service error: ${rasaResponse.statusText}`, details: errorBody }),
        { status: rasaResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const rasaData = await rasaResponse.json(); // RASA returns an array of responses
    console.log("Received data from RASA:", JSON.stringify(rasaData, null, 2));

    // Extract the text from the first RASA response object
    let botReply = "Sorry, I couldn't get a specific reply from the AI assistant at the moment."; // Default fallback
    if (Array.isArray(rasaData) && rasaData.length > 0) {
      // Concatenate text from all response objects if multiple exist
      botReply = rasaData.map(replyPart => replyPart.text || (replyPart.custom ? JSON.stringify(replyPart.custom) : "")).join("\n").trim();
      if (!botReply && rasaData[0].image) { // If only an image is sent
        botReply = "[Image received]"; // Placeholder for image-only responses
      } else if (!botReply) {
         // If after mapping and trimming, botReply is empty, use a generic message
         // This can happen if RASA sends an empty text response or only custom JSON the frontend doesn't handle
         console.warn("RASA response array was present but no text or image found in the first element, or mapping resulted in empty string.");
         botReply = "The assistant processed your request but didn't provide a text message.";
      }
    } else {
      console.warn('Unexpected or empty response structure from RASA server:', rasaData);
    }
    
    console.log(`Sending reply to client: "${botReply}"`);
    // Send the reply back to the frontend in the format assistant.js expects: { reply: "..." }
    return new Response(
      JSON.stringify({ reply: botReply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Internal server error in fets-ai-proxy:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error in fets-ai-proxy' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
