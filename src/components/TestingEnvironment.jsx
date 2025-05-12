
import React from "react";
import { motion } from "framer-motion";
import { Computer, Shield, Users, CheckCircle2, Image as ImageIcon } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

function TestingEnvironment() {
  const features = [
    {
      icon: Computer,
      title: "State-of-the-Art Test Center",
      description: "Equipped with advanced testing infrastructure",
    },
    {
      icon: Shield,
      title: "Trusted by Global Exam Providers",
      description: "Official partner for major testing companies",
    },
    {
      icon: Users,
      title: "Secure & Reliable",
      description: "High-security standards to ensure exam integrity",
    },
    {
      icon: CheckCircle2,
      title: "Flexible Testing Solutions",
      description: "Onsite & offsite exam arrangements for institutions",
    },
  ];

  const examTypes = [
    "CMA US", "TOEFL", "GRE", "MRCS", "MRCP", "IELTS"
  ];

  const facilityImages = [
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/99f859e2aa6cedbb41dec7d7299e14de.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/ba15b5d462d2fe47ae72e16dd6613e31.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/184ce0b6a9469be0e0289e98a27612cb.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/0cfffe12347e7095a9339a73348a0ba6.jpg"
  ];

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
    <section id="facility" className="section bg-[#FFCE32]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#1D63FF]">Why Choose FETS?</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-[#1D63FF]/10 hover:border-[#1D63FF]/30 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#FFCE32] rounded-full transform -rotate-6 transition-transform group-hover:rotate-3" />
                <feature.icon className="h-12 w-12 text-[#1D63FF] relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-[#1D63FF] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-[#1D63FF]/10"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#1D63FF] mb-6">Our Testing Facility</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our state-of-the-art testing center is equipped with advanced machines, all overseen by a team of highly skilled and experienced proctors. We provide a secure and seamless testing environment that fosters academic achievement and success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {examTypes.map((exam, index) => (
                  <motion.div
                    key={exam}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#FFCE32]" />
                    <span>{exam}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ImageIcon className="h-5 w-5 text-[#1D63FF]" />
                <h4 className="text-lg font-semibold text-[#1D63FF]">Test Center Images</h4>
              </div>
              <ImageGallery images={facilityImages} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestingEnvironment;
