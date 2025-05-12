import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
// Removed duplicate imports below
import { cn } from '@/lib/utils';

const DashboardCard = ({
  iconName,
  label,
  onClick,
  // accentColor prop is no longer used for glow
  className,
  ...props
}) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in lucide-react.`);
    return null; // Don't render if icon is missing
  }

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.random() * 0.2 }} // Stagger animation slightly
      whileHover={{ scale: 1.03, y: -2, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }} // Subtle lift and shadow on hover
      whileTap={{ scale: 0.98 }}
      className={cn(
        'flex flex-col items-center justify-center gap-2.5', // Adjusted gap
        'bg-white', // White background
        'p-5', // Adjusted padding
        'rounded-lg', // Less rounded corners
        'shadow-sm border border-gray-200', // Lighter border/shadow
        'text-center cursor-pointer transition-all duration-200',
        'w-full h-full', // Allow flex item to control size via parent
        'hover:bg-dashboard-blue hover:text-white', // Blue background and white text on hover
        'group', // Group for icon color change on hover
        className
      )}
      {...props}
    >
      {/* Icon: Blue by default, white on hover */}
      <IconComponent className="w-8 h-8 text-dashboard-blue transition-colors duration-200 group-hover:text-white" />
      {/* Text: Dark gray by default, white on hover */}
      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider group-hover:text-white">
        {label}
      </span>
    </motion.button>
  );
};

export default DashboardCard;
