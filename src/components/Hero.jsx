import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

function Hero() {
  const images = [
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/1abcb3d39742ab4dc45249ec67550c85.png",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/8df3d718dde441fef5a562d12fb0ec97.png",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/ddaacba0ef2d3579a6696c23f6c7d963.png",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/7acdf72d1541dea66772ba9b2a2e5834.png"
  ];

  return (
    // Section with beige background, adjusted padding
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid container - ensure columns have same height on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch"> {/* Use items-stretch */}
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center order-2 md:order-1 text-gray-800" // Text color for beige bg
          >
            <div> {/* Inner div for content alignment */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 text-gray-900"> {/* Darker text for heading */}
                Forun Testing & Educational Services
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6 sm:mb-8 font-inter"> {/* Adjusted text color */}
                Redefining Certification Exams in India
              </h2>
              <div className="space-y-4 font-inter text-gray-700 text-base"> {/* Adjusted text color/size */}
                <p>
                  Back in 2021, right in the heart of Calicut, Kerala — a city known for its deep educational roots — we started with one bold idea: to make world-class certification exams more accessible, more secure, and more student-focused than ever before.
                </p>
                <p className="text-xl font-semibold text-brand-gold"> {/* Use brand-gold for highlight */}
                  Today, that idea is called FETS.
                </p>
                {/* Removed the statistics paragraph */}
                <Link
                  to="/our-story"
                  className="inline-flex items-center gap-2 bg-brand-gold text-gray-900 px-6 py-3 rounded-md font-semibold mt-6 hover:bg-opacity-90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-px" // Use brand-gold, dark text
                >
                  Learn Our Story
                  <ArrowRight className="h-5 w-5" />
                </Link>

                {/* Changed Candidate Hub CTA Button to FETS AI Link */}
                <a
                  href="https://www.fets.live/"
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security best practice
                  className="inline-flex items-center gap-2 bg-gray-800 text-brand-gold px-6 py-3 rounded-md font-semibold mt-4 ml-4 hover:bg-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-px" // Distinct style
                >
                  Candidate Hub {/* Changed text back */}
                  {/* Optional: Add an icon */}
                </a>
              </div> {/* Closing tag for the inner text content div */}
            </div> {/* Closing tag for the inner alignment div */}
          </motion.div> {/* Closing tag for the left column content */}

          {/* Right Column - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // Ensure slider takes full height of its grid cell
            className="rounded-lg overflow-hidden shadow-lg order-1 md:order-2 h-full"
          >
            {/* Pass aspect ratio to ImageSlider component if possible, or wrap it */}
            <div className="aspect-video h-full">
              <ImageSlider images={images} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
