import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react'; // Example icon

// Placeholder data - replace with actual milestones
const timelineData = [
  { year: '2021', title: 'FETS Founded', description: 'Established in Calicut with a vision to revolutionize testing services.' },
  { year: '2024', title: 'Major Milestone', description: 'Proudly served over 20,000 candidates and conducted 75+ global exams.' },
  // Add more milestones here
];

function Timeline() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center text-brand-gold mb-12">Our Journey</h2>
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/30 transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            {/* Content Bubble */}
            <div className="w-5/12">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-brand-gold mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </div>

            {/* Center Dot & Year */}
            <div className="z-10 flex flex-col items-center">
               <div className="flex items-center justify-center w-8 h-8 bg-brand-gold rounded-full shadow">
                 <Calendar className="w-4 h-4 text-gray-900" />
               </div>
               <p className="text-xs font-semibold text-gray-700 mt-1">{item.year}</p>
            </div>

             {/* Spacer */}
             <div className="w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
