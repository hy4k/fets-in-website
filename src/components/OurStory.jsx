
import React from "react";
import { motion } from "framer-motion";

function OurStory() {
  return (
    <section id="fets-dna" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#003366] font-montserrat mb-4">FETS DNA</h2>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-[#003366] font-montserrat">Our Origin Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Back in 2021, right in the heart of Calicut, Kerala — a city known for its deep educational roots — we started with one bold idea: to make world-class certification exams more accessible, more secure, and more student-focused than ever before.<br /><br />
              Today, that idea is called FETS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-[#003366] font-montserrat">Our Impact</h3>
            <p className="text-gray-700 leading-relaxed">
              In just three years, we've proudly helped over 20,000 candidates take their next big step — by conducting 75+ global exams right here in India. Whether you're a student aiming for international studies or a professional chasing a global credential, we're here to make that journey smoother, safer, and smarter.<br /><br />
              We're the only test center in India working directly with all the top global exam leaders — Prometric, Pearson VUE, ETS, IELTS, PSI and Many more — under one secure, tech-driven roof.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-[#003366] font-montserrat">Our Promise</h3>
            <p className="text-gray-700 leading-relaxed">
              We've built an environment where every exam matters, every candidate is respected and three core promises are:
            </p>
            <div className="flex justify-center space-x-8 py-6">
              <span className="text-[#003366] font-bold">🟨 Secure</span>
              <span className="text-[#003366] font-bold">🟨 Reliable</span>
              <span className="text-[#003366] font-bold">🟨 Innovative</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-[#003366] font-montserrat">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission? To expand across the country and become a trusted testing partner for every Indian student and professional ready to level up. Because we believe opportunity shouldn't depend on location — it should depend on ambition.<br /><br />
              So if you're ready to take the next step, just know:<br />
              At FETS, your future is in good hands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#FFD700] rounded-2xl p-8 text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-[#003366] font-montserrat hover:scale-105 transition-transform cursor-default">
              🧠 FETS 101: The Test Center That Doesn't Test Your Patience.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
