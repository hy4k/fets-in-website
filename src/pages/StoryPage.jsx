import React from "react";
import { motion } from "framer-motion";
// Removed Timeline import
import { Target, TrendingUp, HeartHandshake, Sparkles } from "lucide-react"; // Icons for sections

function StoryPage() {
  // Helper component for section structure
  const StorySection = ({ icon: Icon, title, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-brand-gold mr-3 flex-shrink-0" /> {/* Added flex-shrink-0 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      {/* Adjusted prose for better responsiveness */}
      <div className="prose prose-base md:prose-lg max-w-none text-gray-700 space-y-4">
        {children}
      </div>
    </motion.div>
  );

  return (
    // Increased bottom padding
    <div className="pt-28 md:pt-36 pb-20 md:pb-28 min-h-screen bg-brand-beige">
      <div className="max-w-4xl mx-auto px-4">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          The FETS Story
        </motion.h1>

        {/* Wrap sections in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Section 1: Our Origin Story */}
          <StorySection title="Our Origin Story" icon={Sparkles}>
            <p>
              Back in 2021, right in the heart of Calicut, Kerala — a city known for its deep educational roots — we started with one bold idea: to make world-class certification exams more accessible, more secure, and more student-focused than ever before.
          </p>
          <p className="text-xl font-semibold text-brand-gold">
            Today, that idea is called FETS.
          </p>
        </StorySection>

        {/* Section 2: Our Impact */}
        <StorySection title="Our Impact" icon={TrendingUp}>
          <p>
            In just three years, we've proudly helped over 20,000 candidates take their next big step — by conducting 75+ global exams right here in India.
          </p>
          <p>
            We're the only test center in India working directly with all the top global exam leaders — Prometric, Pearson VUE, ETS, IELTS, PSI and Many more — under one secure, tech-driven roof.
          </p>
           <p>
             Whether you're a student aiming for international studies or a professional chasing a global credential, we're here to make that journey smoother, safer, and smarter.
          </p>
        </StorySection>

        {/* Section 3: Our Mission */}
        <StorySection title="Our Mission" icon={Target}>
          <p>
            Our mission? To expand across the country and become a trusted testing partner for every Indian student and professional ready to level up.
          </p>
          <p>
            Because we believe opportunity shouldn't depend on location — it should depend on ambition.
          </p>
        </StorySection>

        {/* Section 4: Our Promise */}
        <StorySection title="Our Promise" icon={HeartHandshake}>
           <p>
             We've built an environment where every exam matters, every candidate is respected, and three core promises guide everything we do:
           </p>
           <p className="text-xl font-semibold text-brand-gold block mt-4">
             Secure. Reliable. Innovative.
           </p>
           <p>
             So if you're ready to take the next step, just know: At FETS, your future is in good hands. And this is just the beginning.
           </p>
          </StorySection>
        </div> {/* Close the grid wrapper */}

        {/* Removed Timeline Section */}

        {/* Final CTA Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-20 bg-brand-gold rounded-lg py-10 md:py-12 px-6 text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03]"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            FETS 101: The Test Center That Doesn’t Test Your Patience
          </h2>
        </motion.div>

      </div>
    </div>
  );
}

export default StoryPage;
