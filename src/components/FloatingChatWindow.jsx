import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Icon for close button

const FloatingChatWindow = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // Reduced width and height, adjusted bottom position closer to button
          className="fixed bottom-[75px] right-5 z-40 w-[300px] h-[400px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {/* Optional: Add a header within the React component if needed */}
          {/* <div className="flex justify-between items-center p-2 bg-gray-100 border-b">
            <h3 className="text-sm font-semibold">FETS AI Assistant</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={18} />
            </button>
          </div> */}

          {/* Iframe containing the standalone chat */}
          <iframe
            src="/chat/index.html" // Load the same chat interface
            title="FETS AI Assistant"
            className="w-full h-full border-0"
          />

           {/* Alternative close button positioned over the iframe */}
           <button
             onClick={onClose}
             className="absolute top-2 right-2 z-10 bg-gray-600/50 text-white rounded-full p-1 hover:bg-gray-700/70 focus:outline-none focus:ring-2 focus:ring-white"
             aria-label="Close chat"
           >
             <X size={18} />
           </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingChatWindow;
