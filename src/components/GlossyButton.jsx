import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

const GlossyButton = ({
  iconName,
  label,
  onClick,
  // gradientClass prop is no longer needed as colors are fixed
  className,
  ...props
}) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in lucide-react.`);
    return null; // Render null if icon not found
  }

  // Icon color is now fixed to white
  const iconColorClass = 'text-white';

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 120 }}
      // Consolidated whileHover and className props
      // Increased lift on hover
      whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        // Make button take more width, especially on smaller screens
        'flex items-center group cursor-pointer focus:outline-none drop-shadow-lg w-full max-w-xs sm:max-w-sm', // Increased shadow, added width constraints
        className
      )}
      {...props}
    >
      {/* Icon Container - Circle - Charcoal Theme */}
      <div className="relative z-10 p-2 bg-white rounded-full shadow-lg">
        <div className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-inner",
          "bg-charcoal group-hover:bg-charcoal-light transition-colors duration-200" // Apply Charcoal colors and hover
        )}>
          {/* White icon contrasts well with Charcoal */}
          <IconComponent className={cn("w-7 h-7", "text-white")} /> {/* White icon */}
        </div>
      </div>

      {/* Text Capsule - Forest Green Theme */}
      <div className={cn(
        'h-14 flex-grow flex items-center justify-center text-white font-semibold text-base uppercase tracking-wider', // White text contrasts well with Forest Green
        'px-6 pl-12 -ml-7',
        'rounded-full',
        'bg-forest-green group-hover:bg-forest-green-light', // Apply Forest Green colors and hover
        'transition-all duration-200 group-hover:shadow-xl' // Keep hover shadow
      )}>
        {label}
      </div>
    </motion.button>
  );
};

export default GlossyButton;
