
import React from "react";
import { motion } from "framer-motion";

function Partners() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="partners" className="section bg-[#FFCE32]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#1D63FF]">Our Valued Partners</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            We are proud partners with the world's leading examination bodies, ensuring the highest standards of testing and certification.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {[
            { name: "CMA USA", src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/9be539054b05d8519b4e182e90105277.png" },
            { name: "ETS", src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/a5d0dc599a6e04b3980d0cc7ab12f0d8.webp" },
            { name: "GRE", src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/ff51b8d4fbbb399a61c1a1b8ce171b81.webp" },
            { name: "Language Cert", src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/c8815dec9685712caca60b4718c0d330.png" },
            { name: "Pearson VUE", src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/3fc82c76ef12bd3b4e117c26b38562a8.webp" },
            { name: "Prometric", src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/759f682605c21dc6f73fb4845efe676a.webp" },
            { name: "PSI", src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/1e11f3edfae5618cbc347b7eb3aa0ff0.webp" },
            { name: "TOEFL", src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/25421bf5369deebf67047b9e71ea5954.webp" }
          ].map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <img 
                src={partner.src}
                alt={`${partner.name} Logo`}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Partners;
