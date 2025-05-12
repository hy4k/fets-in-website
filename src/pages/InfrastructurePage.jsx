import React from "react";
import { motion } from "framer-motion";
import { Cpu, Lock, ShieldCheck, Camera, UserCheck, Thermometer } from "lucide-react"; // Example icons

// Helper component for feature sections - Added imageSrcset and imageSizes props
const FeatureSection = ({ title, icon: Icon, imageSrc, imageAlt, imageSrcset, imageSizes, children, imageLeft = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
    className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24"
  >
    {/* Image Column */}
    <motion.div
       initial={{ opacity: 0, scale: 0.9 }}
       whileInView={{ opacity: 1, scale: 1 }}
       viewport={{ once: true, amount: 0.3 }}
       transition={{ duration: 0.6, delay: 0.2 }}
       className={`rounded-lg overflow-hidden shadow-lg ${imageLeft ? 'md:order-1' : 'md:order-2'}`}
    >
      <img
        src={imageSrc} // Fallback src
        srcSet={imageSrcset} // Responsive sources
        sizes={imageSizes} // Define image sizes for different viewports
        alt={imageAlt}
        className="w-full h-auto max-h-[400px] object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy" // Lazy loading is already here
        width="600" // Added placeholder width
        height="400" // Added placeholder height
      />
    </motion.div>

    {/* Text Column */}
    <div className={`md:px-4 ${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
      <div className="flex items-center mb-4">
         {Icon && <Icon className="w-7 h-7 text-brand-gold mr-3 flex-shrink-0" />}
         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-inter">{title}</h2>
      </div>
      <div className="prose prose-base md:prose-lg max-w-none text-gray-700 space-y-4">
        {children}
      </div>
    </div>
  </motion.div>
);


function InfrastructurePage() {
  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28 min-h-screen bg-brand-beige text-gray-900">
      <div className="max-w-6xl mx-auto px-4"> {/* Slightly wider max-width */}

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-inter">
            Inside FETS: A World-Class Testing Environment
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the features that make our facility secure, reliable, and conducive to success.
          </p>
           <div className="w-28 h-1 bg-brand-gold mx-auto mt-6"></div> {/* Underline */}
        </motion.div>

        {/* Section 1: State-of-the-Art Technology */}
        <FeatureSection
          title="State-of-the-Art Technology"
          icon={Cpu}
          imageSrc="/images-responsive/promteric-test-centre-calicut-640w.webp" // Default src (smallest)
          imageSrcset={`
            /images-responsive/promteric-test-centre-calicut-640w.webp 640w,
            /images-responsive/promteric-test-centre-calicut-1024w.webp 1024w,
            /images-responsive/promteric-test-centre-calicut-1280w.webp 1280w,
            /images-responsive/promteric-test-centre-calicut.webp 1600w
          `}
          imageSizes="(max-width: 768px) 100vw, 50vw"
          imageAlt="Prometric test centre facility in Calicut" // Updated alt text
          imageLeft={false} // Image on the right
        >
          <p>
            Our center boasts cutting-edge computer systems equipped with high-speed internet connectivity, ensuring a smooth and uninterrupted testing experience.
          </p>
          <p>
            Individual testing booths are designed to minimize distractions, providing candidates with the privacy and focus needed to perform their best.
          </p>
        </FeatureSection>

        {/* Section 2: Secure & Monitored */}
        <FeatureSection
          title="Secure & Monitored Environment"
          icon={ShieldCheck}
          imageSrc="/images-responsive/forun-testing-educational-services-640w.webp" // Default src
          imageSrcset={`
            /images-responsive/forun-testing-educational-services-640w.webp 640w,
            /images-responsive/forun-testing-educational-services-1024w.webp 1024w,
            /images-responsive/forun-testing-educational-services-1280w.webp 1280w,
            /images-responsive/forun-testing-educational-services.webp 1600w
          `}
          imageSizes="(max-width: 768px) 100vw, 50vw"
          imageAlt="Forun Testing & Educational Services secure testing environment" // Updated alt text
          imageLeft={true} // Image on the left
        >
          <p>
            Security is paramount at FETS. We employ advanced security systems, including comprehensive CCTV monitoring and secure lockers for personal belongings.
          </p>
          <p>
            Our facility utilizes biometric authentication systems to verify candidate identity, upholding the integrity of every exam administered.
          </p>
        </FeatureSection>

         {/* Section 3: Professional Proctoring & Comfort */}
         <FeatureSection
          title="Professional Proctoring & Comfort"
          icon={UserCheck}
          imageSrc="/images-responsive/mrcs-exam-640w.webp" // Default src
          imageSrcset={`
            /images-responsive/mrcs-exam-640w.webp 640w,
            /images-responsive/mrcs-exam-1024w.webp 1024w,
            /images-responsive/mrcs-exam-1280w.webp 1280w,
            /images-responsive/mrcs-exam.webp 1600w
          `}
          imageSizes="(max-width: 768px) 100vw, 50vw"
          imageAlt="MRCS exam testing environment at FETS" // Updated alt text
          imageLeft={false} // Image on the right
        >
          <p>
            A team of highly skilled and experienced proctors oversees all testing sessions, ensuring adherence to strict examination protocols while providing necessary assistance.
          </p>
          <p>
            We maintain a climate-controlled environment, offering a comfortable and conducive atmosphere for candidates throughout their exam duration.
          </p>
        </FeatureSection>

        {/* Section 4: Focused Testing Booths */}
        <FeatureSection
          title="Individual Testing Booths"
          icon={Lock} // Using Lock as an example icon
          imageSrc="/images-responsive/cma-us-test-centre-640w.webp" // Default src
          imageSrcset={`
            /images-responsive/cma-us-test-centre-640w.webp 640w,
            /images-responsive/cma-us-test-centre-1024w.webp 1024w,
            /images-responsive/cma-us-test-centre-1280w.webp 1280w,
            /images-responsive/cma-us-test-centre.webp 1600w
          `}
          imageSizes="(max-width: 768px) 100vw, 50vw"
          imageAlt="CMA US test centre individual testing booth" // Updated alt text
          imageLeft={true} // Image on the left (alternating from previous)
        >
          <p>
            Each candidate is provided with a dedicated testing booth designed to minimize external distractions and maximize concentration during the exam.
          </p>
          <p>
            The ergonomic setup ensures comfort, allowing test-takers to focus solely on their performance.
          </p>
        </FeatureSection>

        {/* Section 5: Welcoming Environment */}
        <FeatureSection
          title="Comfortable & Welcoming Space"
          icon={Thermometer} // Using Thermometer as an example icon
          imageSrc="/images-responsive/pearson-vue-test-centre-calicut-640w.webp" // Default src
          imageSrcset={`
            /images-responsive/pearson-vue-test-centre-calicut-640w.webp 640w,
            /images-responsive/pearson-vue-test-centre-calicut-1024w.webp 1024w,
            /images-responsive/pearson-vue-test-centre-calicut-1280w.webp 1280w,
            /images-responsive/pearson-vue-test-centre-calicut.webp 1600w
          `}
          imageSizes="(max-width: 768px) 100vw, 50vw"
          imageAlt="Pearson VUE test centre reception area in Calicut" // Updated alt text
          imageLeft={false} // Image on the right (alternating from previous)
        >
          <p>
            From the moment you arrive, our center provides a calm and professional atmosphere. We aim to reduce exam-day stress with a clean, organized, and supportive environment.
          </p>
           <p>
            Our facilities are designed with candidate well-being in mind, contributing to a positive testing experience.
          </p>
        </FeatureSection>

      </div>
    </div>
  );
}

export default InfrastructurePage;
