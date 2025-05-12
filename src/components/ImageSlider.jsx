
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`FETS Testing Center facility image ${currentIndex + 1}`} // Improved alt text
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          loading="lazy" // Added lazy loading
          width="1600" // Added placeholder width (assuming 16:9 aspect ratio)
          height="900" // Added placeholder height (assuming 16:9 aspect ratio)
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
