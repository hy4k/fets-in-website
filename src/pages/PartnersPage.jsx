import React from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet components

// Define partner data using optimized WebP paths
const awesomePartners = [
  { name: "PSI", logo: "/images-webp/psi-logo.webp", alt: "PSI Testing Logo" },
  { name: "ETS", logo: "/images-webp/ets-logo.webp", alt: "ETS Testing Logo" },
  { name: "Pearson VUE", logo: "/images-webp/pearson-vue-logo.webp", alt: "Pearson VUE Testing Logo" },
  { name: "Prometric", logo: "/images-webp/prometric-logo.webp", alt: "Prometric Testing Logo" },
  { name: "IELTS", logo: "/images-webp/ielts-logo.webp", alt: "IELTS Logo" },
  { name: "ACCA", logo: "/images-webp/acca-logo.webp", alt: "ACCA Logo" },
];

// Define major exams data using optimized WebP paths
const majorExams = [
  { name: "GRE", logo: "/images-webp/gre.webp", alt: "GRE Exam Logo" }, // Already webp, added alt
  { name: "AWS", logo: "/images-webp/aws-logo.webp", alt: "AWS Certification Logo" },
  { name: "Microsoft", logo: "/images-webp/microsoft-logo.webp", alt: "Microsoft Certification Logo" },
  { name: "MRCS", logo: "/images-webp/mrcs-logo.webp", alt: "MRCS Exam Logo" },
  { name: "ACCA", logo: "/images-webp/acca-logo.webp", alt: "ACCA Logo" }, // Repeated, ensure consistency
  { name: "IELTS", logo: "/images-webp/ielts-logo.webp", alt: "IELTS Logo" }, // Repeated, ensure consistency
  { name: "TOEFL", logo: "/images-webp/toefl-logo.webp", alt: "TOEFL Exam Logo" },
  { name: "CMA US", logo: "/images-webp/cma-us-logo.webp", alt: "CMA US Exam Logo" },
];

// Function to generate ImageObject schema
const generateImageSchema = (imageData, baseUrl = "https://www.fets.in") => {
  return imageData.map(item => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": `${baseUrl}${item.logo}`, // Construct absolute URL
    "name": item.alt,
    "description": `${item.name} logo displayed on FETS partners page.`,
    "width": 100, // Use placeholder width
    "height": item.logo.includes('ielts') || item.logo.includes('acca') ? 64 : 48 // Adjust height based on logo type if needed, using placeholder heights
  }));
};

function PartnersPage() {
  // Generate schema for all logos
  const allLogoSchema = [
    ...generateImageSchema(awesomePartners),
    ...generateImageSchema(majorExams)
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Our Partners & Exams | FETS - Calicut Testing Center</title>
        <meta name="description" content="FETS partners with leading organizations like PSI, ETS, Pearson VUE, Prometric, IELTS, ACCA and hosts major exams including GRE, AWS, Microsoft certifications, MRCS, TOEFL, CMA US." />
        <link rel="canonical" href="https://www.fets.in/partners" />
        <script type="application/ld+json">{JSON.stringify(allLogoSchema)}</script>
      </Helmet>
      <div className="pt-28 md:pt-36 pb-20 md:pb-28 min-h-screen bg-brand-beige"> {/* Use brand-beige */}
        <div className="max-w-7xl mx-auto px-4">

          {/* Section 1: Our Awesome Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          {/* Title aligned left, thicker border, Inter font */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-left border-b-4 border-brand-gold pb-2 font-inter"> {/* Changed border-b-2 to border-b-4, added font-inter */}
            Our Awesome Partners
          </h1>

          {/* Partner Logo Grid - 2 cols on mobile, 3 on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-8"> {/* Adjusted grid cols, gap, margin-top */}
            {awesomePartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Increased size, center box
                className="group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out w-36 h-36 flex items-center justify-center mx-auto" // Changed w-32 h-32 to w-36 h-36
              >
                {/* Logo Image - Added lazy loading, dimensions, updated alt */}
                <motion.img
                  src={partner.logo}
                  alt={partner.alt} // Use specific alt text from data
                  className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy" // Added lazy loading
                  width="100" // Placeholder width
                  height="64" // Placeholder height based on max-h-16
                />
                {/* Gold border/glow on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-brand-gold transition-colors duration-300 pointer-events-none group-hover:shadow-[0_0_15px_rgba(243,210,80,0.5)]"></div>
                {/* Partner name reveal - Adjusted positioning */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-[-28px] transition-all duration-300 ease-in-out whitespace-nowrap"> {/* Slide up effect */}
                   <span className="text-xs font-semibold text-gray-700 bg-white/90 px-2 py-1 rounded shadow-sm">
                     {partner.name}
                   </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider Removed */}


        {/* Section 2: Major Exams We Proudly Host */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} // Adjusted delay
          className="mt-12 md:mt-16"
        >
          {/* Title aligned left, thicker border, Inter font */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-left border-b-4 border-brand-gold pb-2 font-inter"> {/* Changed border-b-2 to border-b-4, added font-inter */}
            Major Exams We Proudly Host
          </h2>

           {/* Exam Logo Grid - 4 cols on sm+ */}
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 mt-8"> {/* Adjusted gap and margin-top */}
             {majorExams.map((exam, index) => (
               <motion.div
                 key={exam.name}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.2 }}
                 transition={{ duration: 0.4, delay: index * 0.05 }}
                 className="flex flex-col items-center"
               >
                 {/* Inner white box with hover effects - fixed size */}
                 <div className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-lg hover:shadow-brand-gold/30 transition-all duration-300 ease-in-out hover:-translate-y-1 w-32 h-32 flex flex-col justify-center items-center"> {/* Set fixed size w-32 h-32 */}
                   <img
                     src={exam.logo}
                     alt={exam.alt} // Use specific alt text from data
                     className="max-h-12 w-auto object-contain"
                     loading="lazy" // Added lazy loading
                     width="100" // Placeholder width
                     height="48" // Placeholder height based on max-h-12
                   />
                   {/* Removed exam name paragraph */}
                 </div>
               </motion.div>
             ))}
           </div>
        </motion.div>

        </div>
      </div>
    </HelmetProvider>
  );
}

export default PartnersPage;
