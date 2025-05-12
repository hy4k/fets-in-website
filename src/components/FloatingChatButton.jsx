import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react'; // Or another chat icon if preferred

const FloatingChatButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-5 right-5 z-50 bg-brand-teal-medium text-white rounded-full p-3 shadow-lg hover:bg-brand-teal-dark focus:outline-none focus:ring-2 focus:ring-brand-teal-dark focus:ring-offset-2 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }} // Delay appearance slightly
      title="Chat with FETS AI" // Tooltip on hover
    >
      <MessageSquare className="w-6 h-6" />
      {/* Optional: Add hover text visually, though title attribute is standard */}
      {/* <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
        Chat with FETS AI
      </span> */}
    </motion.button>
  );
};

export default FloatingChatButton;
