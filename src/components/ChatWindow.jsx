import React, { useState, useRef, useEffect } from 'react';
// Supabase ക്ലയന്റ് ഇമ്പോർട്ട് ചെയ്യുക (നിങ്ങളുടെ സെറ്റപ്പ് അനുസരിച്ച് പാത്ത് മാറ്റുക)
import { supabase } from '@/lib/supabaseClient'; // പാത്ത് ശരിയാണെന്ന് ഉറപ്പാക്കുക
// നിങ്ങൾ Supabase ക്ലയന്റ് ഇതുവരെ കോൺഫിഗർ ചെയ്തിട്ടില്ലെങ്കിൽ അത് ചെയ്യണം.

function ChatWindow({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    // Initial welcome message in English
    { sender: 'ai', text: 'Hello! I\'m your FETS AI Assistant. How can I help?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state ചേർത്തു
  const messagesEndRef = useRef(null); // To scroll to the bottom

  // Function to handle sending messages (പുതിയത്)
  const handleSendMessage = async () => { // Async ആക്കി മാറ്റി
    const userMessage = inputText.trim();
    if (!userMessage || isLoading) return; // ശൂന്യമായ സന്ദേശവും ലോഡിംഗ് സമയത്തും തടയുന്നു

    const newMessage = { sender: 'user', text: userMessage };
    const currentMessages = [...messages, newMessage]; // പുതിയ യൂസർ സന്ദേശം context നായി ചേർക്കുന്നു
    setMessages(currentMessages);
    setInputText('');
    setIsLoading(true); // ലോഡിംഗ് ആരംഭിക്കുന്നു

    try {
      // Supabase Function നെ വിളിക്കുന്നു
      // Function ന്റെ പേര് deploy ചെയ്ത പേരായ 'fets-ai-proxy' എന്നാക്കി മാറ്റുന്നു
      const { data, error } = await supabase.functions.invoke('fets-ai-proxy', {
        body: { messages: currentMessages }, // സംഭാഷണ ഹിസ്റ്ററി മുഴുവനായും അയക്കുന്നു
      });

      if (error) {
        throw error; // Supabase function പിശക് കൈകാര്യം ചെയ്യുന്നു
      }

      // AI മറുപടി ചേർക്കുന്നു
      if (data && data.reply) {
        setMessages(prev => [...prev, { sender: 'ai', text: data.reply }]);
      } else {
         // ഒരു മറുപടി ലഭിച്ചില്ലെങ്കിൽ
         const errorMessage = data?.error || 'ക്ഷമിക്കണം, ഒരു അജ്ഞാത പിശക് സംഭവിച്ചു.';
         setMessages(prev => [...prev, { sender: 'ai', text: errorMessage }]);
      }

    } catch (error) {
      console.error('Error calling Supabase function:', error);
      // പിശക് സംഭവിച്ചാൽ ഒരു സന്ദേശം കാണിക്കുന്നു
      setMessages(prev => [...prev, { sender: 'ai', text: `Error: ${error.message || 'AI മറുപടി ലഭിക്കുന്നതിൽ പരാജയപ്പെട്ടു.'}` }]);
    } finally {
      setIsLoading(false); // ലോഡിംഗ് നിർത്തുന്നു
    }
  };

  // Scroll to the bottom when new messages arrive or loading changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]); // isLoading ഉം ഡിപൻഡൻസിയിൽ ചേർത്തു

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return null; // Don't render if not open
  }

  // Basic styling using Tailwind CSS classes (applied via style prop for simplicity here)
  return (
    <div style={{
      position: 'fixed',
      bottom: '90px', // Position above the trigger button
      right: '20px',
      width: '350px', // Adjust width as needed
      height: '500px', // Adjust height as needed
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1001 // Ensure it's above the trigger button
    }}>
      {/* Header with new theme */}
      <div style={{
        padding: '10px 15px',
        backgroundColor: '#1F2937', // Dark Gray background
        color: '#F3D250',       // Brand Gold text
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold' }}>FETS AI Assistant</h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#F3D250', fontSize: '1.2rem', cursor: 'pointer' }}> {/* Gold close button */}
          &times;
        </button>
      </div>

      {/* Message List with new theme */}
      <div style={{ flexGrow: 1, overflowY: 'auto', padding: '15px', backgroundColor: '#F9FAFB' /* Light gray background for message area */ }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            marginBottom: '10px',
            textAlign: msg.sender === 'user' ? 'right' : 'left'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: '15px',
              backgroundColor: msg.sender === 'user' ? '#F3D250' : '#374151', // User: Gold, AI: Lighter Gray
              color: msg.sender === 'user' ? '#1F2937' : '#E5E7EB', // User: Dark Gray, AI: Light Gray
              maxWidth: '80%'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
        {/* Loading indicator with new theme */} 
        {isLoading && (
          <div style={{ textAlign: 'left', marginBottom: '10px' }}>
             <span style={{
               display: 'inline-block',
               padding: '8px 12px',
               borderRadius: '15px',
               backgroundColor: '#4B5563', // Medium Gray
               color: '#E5E7EB',       // Light Gray text
               maxWidth: '80%'
             }}>
               Thinking...
             </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area with new theme */} 
      <div style={{ padding: '10px', borderTop: '1px solid #E5E7EB', backgroundColor: 'white' /* Keep input area white */ }}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type here..."
          rows="2"
          disabled={isLoading} 
          style={{ 
             width: '100%',
             border: '1px solid #D1D5DB',
             borderRadius: '5px',
             padding: '8px',
             resize: 'none',
             marginBottom: '5px'
          }}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#F3D250', // Gold background
            color: '#1F2937',       // Dark Gray text
            border: 'none',
            borderRadius: '5px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1,
            fontWeight: 'bold' // Make button text bold
          }}
        >
          {isLoading ? 'Sending...' : 'Send'} 
        </button>
      </div>
    </div>
  );
}

export default ChatWindow; 