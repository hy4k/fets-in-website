const sendBtn = document.getElementById("send");
const inputBox = document.getElementById("input");
const messageBox = document.getElementById("messages");

// Function to handle sending message
async function sendMessage() {
  const userInput = inputBox.value.trim();
  if (!userInput) return;

  appendMessage("user", userInput);
  inputBox.value = "";
  inputBox.disabled = true; // Disable input while waiting
  sendBtn.disabled = true; // Disable button while waiting

  appendMessage("ai", "Typing..."); // Show typing indicator

  try {
    // --- Updated fetch URL to point to the deployed Supabase Edge Function ---
    const functionUrl = "https://mwyhfydwdelmspncmopr.supabase.co/functions/v1/fets-ai-proxy";
    // -----------------------------------------------------------------------

    // --- Get Supabase Anon Key (Replace if different) ---
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13eWhmeWR3ZGVsbXNwbmNtb3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDg3NTksImV4cCI6MjA1OTcyNDc1OX0.JSEFEbc_QRNKF-pvK2-4I9aO-2AGjIp1Qk6CObKuntc";
    // -------------------------------------------------------------

    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY // Anon key for identifying the project
        // Removed Authorization header - often not needed/problematic for anon calls
      },
      body: JSON.stringify({ message: userInput })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    removeTyping(); // Remove typing indicator
    appendMessage("ai", data.reply || "Sorry, I couldn't get a response."); // Display AI reply or error

  } catch (error) {
    console.error("Error fetching AI response:", error);
    removeTyping(); // Remove typing indicator
    appendMessage("ai", "Oops! Something went wrong. Please try again."); // Display error message
  } finally {
    inputBox.disabled = false; // Re-enable input
    sendBtn.disabled = false; // Re-enable button
    inputBox.focus(); // Focus back on input
  }
}

// Function to append messages to the chatbox using bubble UI classes
function appendMessage(role, text) {
  const msg = document.createElement("div");
  const contentDiv = document.createElement("div");
  contentDiv.className = "msg-content";

  // Sanitize text slightly before inserting as HTML (basic protection)
  const sanitizedText = text.replace(/</g, "<").replace(/>/g, ">");
  contentDiv.innerHTML = sanitizedText; // Set innerHTML for content

  msg.className = `msg ${role}-msg`; // Add role-specific class (e.g., 'msg user-msg')

  // Add typing class specifically for the typing indicator
  if (role === 'ai' && text === 'Typing...') {
    msg.classList.add('typing');
  }

  msg.appendChild(contentDiv);
  messageBox.appendChild(msg);
  // Scroll to the bottom
  messageBox.scrollTop = messageBox.scrollHeight; // Scroll after adding
}

// Function to remove the "Typing..." message
function removeTyping() {
  const msgs = messageBox.querySelectorAll(".msg");
  // Find the last message that contains "Typing..."
  for (let i = msgs.length - 1; i >= 0; i--) {
    if (msgs[i].innerText.includes("Typing...")) {
      msgs[i].remove();
      break; // Remove only the last typing indicator found
    }
  }
}

// Event listener for the send button
sendBtn.addEventListener("click", sendMessage);

// Event listener for pressing Enter in the input box
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default form submission behavior
    sendMessage();
  }
});
