import React, { useState, useEffect } from "react"; // Added useState back
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
// Removed FloatingChatButton and FloatingChatWindow imports
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ChatWindow from "@/components/ChatWindow"; // Import the new ChatWindow component
import ContactPage from "@/pages/ContactPage";
import StoryPage from "@/pages/StoryPage";
import InfrastructurePage from "@/pages/InfrastructurePage";
import PartnersPage from "@/pages/PartnersPage";
import FAQPage from "@/pages/FAQPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage"; // Import the privacy page
import TermsOfServicePage from "@/pages/TermsOfServicePage"; // Import the terms page
import DataDeletionPage from "@/pages/DataDeletionPage"; // Import the data deletion page
import ScrollToTop from "@/components/ScrollToTop"; // Import the scroll utility
import { Bot } from "lucide-react"; // Import Bot icon

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

// Inner component to access location hook and manage floating chat state
function AppContent() {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chat window visibility

  // Function to toggle chat window
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    // Fade-in observer logic
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    document.querySelectorAll(".fade-in").forEach((element) => observer.observe(element));

    // Cleanup function
    return () => observer.disconnect();
  }, []);

  // Removed toggleChat function (re-added above)

  return (
    <div className="min-h-screen flex flex-col"> {/* Ensure footer is pushed down */}
      {/* Conditionally render Header - removed condition */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow"> {/* Allow main content to grow */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/partners" element={<PartnersPage />} />
          {/* Remove the route for test-takers */}
          {/* <Route path="/test-takers" element={<TestTakersPage />} /> */}
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* Route for privacy policy */}
          <Route path="/terms-of-service" element={<TermsOfServicePage />} /> {/* Route for terms of service */}
          <Route path="/data-deletion" element={<DataDeletionPage />} /> {/* Add route for data deletion */}
        </Routes>
      </main>

      {/* Conditionally render Footer - removed condition */}
      <Footer />

      {/* AI Chat Floating Button - Updated Design with Text */}
      <button
         onClick={toggleChat} 
         title="AI അസിസ്റ്റന്റുമായി സംസാരിക്കുക"
         style={{
           position: 'fixed',
           bottom: '25px',
           right: '25px',
           backgroundColor: '#1F2937', // Dark Gray background
           color: '#F3D250',       // Brand Gold color
           padding: '10px 18px',     // Adjusted padding (more horizontal)
           borderRadius: '9999px',    // Pill shape
           border: 'none',
           cursor: 'pointer',
           display: 'flex',
           alignItems: 'center',
           // justifyContent: 'center', // Removed to allow space between items
           zIndex: 1000,
           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
           transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
           fontSize: '0.9rem'      // Font size for the text
         }}
         onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'; // Slightly less scale on hover
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
         }}
         onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.25)';
         }}
      >
        <Bot size={22} style={{ marginRight: '8px' }} /> {/* Icon with margin */}
        <span>AI Assistant</span> {/* Changed Text to English */} 
      </button>

      {/* Render ChatWindow component */}
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />

    </div>
  );
}

// Main App component wraps Router around AppContent
function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <AppContent />
    </Router>
  );
}

export default App;
