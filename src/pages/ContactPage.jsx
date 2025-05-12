import React, { useState } from "react";
import { motion } from "framer-motion";
// Added MessageSquare and ExternalLink
import { MapPin, Train, Bus, Plane, Phone, Mail, Send, MessageSquare, ExternalLink } from "lucide-react";
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet components
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

// Schema.org Markup Data (Adjust URL if needed)
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact FETS - Forun Testing and Educational Services",
  "description": "Get in touch with FETS for inquiries about exam bookings, partnerships, or general information. Find our location, contact details, and use our contact form.",
  "url": "https://www.fets.in/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "FETS - Forun Testing and Educational Services",
    "url": "https://www.fets.in",
    "logo": "https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/488a0184f43f5841104445f9f66661d3.png",
    "contactPoint": [
      { "@type": "ContactPoint", "telephone": "+91-8089393992", "contactType": "customer support", "areaServed": "IN", "availableLanguage": "en" },
      { "@type": "ContactPoint", "telephone": "+91-9895541552", "contactType": "customer support", "areaServed": "IN", "availableLanguage": "en" },
      { "@type": "ContactPoint", "telephone": "+91-8089219722", "contactType": "customer support", "areaServed": "IN", "availableLanguage": "en" },
      { "@type": "ContactPoint", "email": "edu@fets.in", "contactType": "customer support", "areaServed": "IN", "availableLanguage": "en" }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fourth Floor, Kadooli Tower, West Nadakkavu, Vandipetta Junction",
      "addressLocality": "Calicut",
      "addressRegion": "Kerala",
      "postalCode": "673011",
      "addressCountry": "IN"
    }
  }
};

function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', purpose: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert([{ ...formData }]);
      if (error) throw error;
      toast({
        title: "🚀 Message Sent!",
        description: "Our team will reach you faster than a 5G ping.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', phone: '', purpose: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "❌ Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Wrap with HelmetProvider for react-helmet-async
    <HelmetProvider>
      {/* SEO Meta Tags & Schema */}
      <Helmet>
        <title>Contact FETS | Reach Our Exam Center in Calicut, Kerala</title>
        <meta name="description" content="Contact FETS for exam bookings, partnerships, or inquiries. Find our address, phone number, email, and use our contact form. Located in Calicut, Kerala." />
        <link rel="canonical" href="https://www.fets.in/contact" />
        {/* Combine page schema and image schema */}
        <script type="application/ld+json">
          {JSON.stringify([
            contactPageSchema,
            {
              "@context": "https://schema.org",
              "@type": "ImageObject",
              // Assuming the base URL is https://www.fets.in - adjust if different
              "contentUrl": "https://www.fets.in/images-responsive/forun-staff.webp", // Use absolute URL of the largest image
              "name": "FETS Team Member",
              "description": "FETS team member ready to assist candidates with inquiries.",
              "width": 400, // Use placeholder width from img tag
              "height": 500 // Use placeholder height from img tag
            }
          ])}
        </script>
      </Helmet>

      {/* Main Page Content */}
      <div className="pt-28 md:pt-36 pb-20 md:pb-28 min-h-screen bg-brand-beige text-gray-900 font-inter">
        <div className="max-w-7xl mx-auto px-4 space-y-16 md:space-y-24">

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Ensured H1 text is correct, font is applied, and paragraph is removed */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
              All Roads Lead to FETS
            </h1>
            <div className="w-28 h-1 bg-brand-gold mx-auto mt-6"></div>
          </motion.div>

          {/* Where to Find Us Section */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 items-stretch">
                {/* Left side - Text */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-8 w-8 text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                         Our Location
                       </h2>
                       {/* Updated description */}
                       <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                         Strategically located in Calicut, FETS serves as a convenient and accessible testing center for candidates throughout Kerala and the wider South Indian states. With proximity to key institutions, hotels, restaurants, and major city landmarks, our center offers candidates unmatched ease and comfort, ensuring your exam experience is as seamless and stress-free as possible.
                       </p>
                       {/* Removed address paragraph */}
                    </div>
                  </div>
                </div>
                {/* Right side - Map */}
                <div className="h-72 md:h-full border-t-2 md:border-t-0 md:border-l-2 border-brand-gold/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8289547494387!2d75.7718649748126!3d11.273980688906603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651fcd5f13907%3A0xec42708f74da70e!2sForun%20Testing%20and%20Educational%20Services!5e0!3m2!1sen!2sin!4v1744185345390!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FETS Location Map"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* How to Reach Us Section */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
              How to Reach Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card Styling */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Train className="h-6 w-6 text-brand-gold" />
                  <h3 className="font-semibold text-gray-800 text-lg">By Train</h3>
                </div>
                <p className="text-gray-600 text-sm">Nearest Station: Calicut Railway Station (Approx. 3 KM)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Bus className="h-6 w-6 text-brand-gold" />
                  <h3 className="font-semibold text-gray-800 text-lg">By Bus</h3>
                </div>
                <p className="text-gray-600 text-sm">Nearest Stand: Calicut New Bus Stand (Approx. 4 KM)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Plane className="h-6 w-6 text-brand-gold" />
                  <h3 className="font-semibold text-gray-800 text-lg">By Air</h3>
                </div>
                <p className="text-gray-600 text-sm">Nearest Airport: Calicut International Airport (CCJ) (Approx. 22 KM)</p>
              </div>
            </div>
          </motion.div>

          {/* New "Our Digital Visit Card" Section */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.7, delay: 0.15 }} // Adjusted delay
          >
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
               Our Digital Visit Card
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               {/* Location Card */}
               <motion.div
                 whileHover={{ y: -4, transition: { duration: 0.2 } }}
                 className="bg-white/60 backdrop-blur-md rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-white/30 space-y-3 flex flex-col" // Added flex flex-col
               >
                 <div className="flex items-center gap-3 mb-2">
                   <MapPin className="h-6 w-6 text-brand-gold flex-shrink-0" />
                   <h3 className="font-semibold text-gray-800 text-lg">🏢 FETS Test Center</h3>
                 </div>
                 <p className="text-xs text-gray-600 leading-relaxed flex-grow"> {/* Added flex-grow */}
                   Fourth Floor, Kadooli Tower<br />
                   West Nadakkavu, Vandipetta Junction<br />
                   Calicut, Kerala, India – 673011
                 </p>
                 <a
                   href="https://maps.app.goo.gl/a5Wi5BdEQVxeHARi8" // Direct Google Maps link
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-medium hover:underline mt-auto pt-2" // Added mt-auto pt-2
                 >
                   📍 Open in Maps
                   <ExternalLink className="h-3 w-3" />
                 </a>
               </motion.div>

               {/* Call Us Card */}
               <motion.div
                 whileHover={{ y: -4, transition: { duration: 0.2 } }}
                 className="bg-white/60 backdrop-blur-md rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-white/30 space-y-3 flex flex-col" // Added flex flex-col
               >
                 <div className="flex items-center gap-3 mb-2">
                   <Phone className="h-6 w-6 text-brand-gold flex-shrink-0" />
                   <h3 className="font-semibold text-gray-800 text-lg">📞 Direct Lines</h3>
                 </div>
                 <div className="space-y-1 text-xs flex-grow"> {/* Added flex-grow */}
                    <a href="tel:+918089393992" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 group">
                      <span>+91 8089393992</span>
                      <a href="https://wa.me/918089393992" target="_blank" rel="noopener noreferrer" className="opacity-70 group-hover:opacity-100 transition-opacity">
                        <MessageSquare className="h-3.5 w-3.5 text-green-600" />
                      </a>
                    </a>
                     <a href="tel:+919895541552" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 group">
                      <span>+91 9895541552</span>
                       <a href="https://wa.me/919895541552" target="_blank" rel="noopener noreferrer" className="opacity-70 group-hover:opacity-100 transition-opacity">
                        <MessageSquare className="h-3.5 w-3.5 text-green-600" />
                      </a>
                    </a>
                     <a href="tel:+918089219722" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 group">
                      <span>+91 8089219722</span>
                       <a href="https://wa.me/918089219722" target="_blank" rel="noopener noreferrer" className="opacity-70 group-hover:opacity-100 transition-opacity">
                        <MessageSquare className="h-3.5 w-3.5 text-green-600" />
                      </a>
                    </a>
                 </div>
                 <p className="text-xs text-gray-500 pt-1 mt-auto">[📲 Tap to Call / WhatsApp]</p> {/* Added mt-auto */}
               </motion.div>

               {/* Email Card */}
                <motion.div
                 whileHover={{ y: -4, transition: { duration: 0.2 } }}
                 className="bg-white/60 backdrop-blur-md rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-white/30 space-y-3 flex flex-col" // Added flex flex-col
               >
                 <div className="flex items-center gap-3 mb-2">
                   <Mail className="h-6 w-6 text-brand-gold flex-shrink-0" />
                   <h3 className="font-semibold text-gray-800 text-lg">📧 Write to Us</h3>
                 </div>
                 <a href="mailto:edu@fets.in" className="text-sm text-gray-700 hover:text-gray-900 font-medium block truncate">edu@fets.in</a>
                 <p className="text-xs text-gray-600 flex-grow"> {/* Added flex-grow */}
                    💬 Fast replies during working hours
                    <span className="block italic text-gray-500 mt-1" title="We reply faster than your coffee gets cold."> (Usually!)</span> {/* Tooltip text added */}
                 </p>
                 <a
                   href="mailto:edu@fets.in"
                   className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-medium hover:underline mt-auto pt-2" // Added mt-auto pt-2
                 >
                   ✉️ Send Email
                   <ExternalLink className="h-3 w-3" />
                 </a>
               </motion.div>
             </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="bg-white rounded-lg shadow-lg p-10 md:p-12" // Increased padding
          >
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
               {/* Left Side: New Heading & Image */}
               <div className="space-y-6 order-2 md:order-1 flex flex-col justify-center">
                  {/* Reduced heading size */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    Your Questions Matter — Let’s Talk
                  </h2>
                  <div className="pt-2">
                     <img
                         src="/images-responsive/forun-staff-640w.webp" // Default src (smallest)
                         srcSet={`
                           /images-responsive/forun-staff-640w.webp 640w,
                           /images-responsive/forun-staff-1024w.webp 1024w,
                           /images-responsive/forun-staff-1280w.webp 1280w,
                           /images-responsive/forun-staff.webp 1600w
                         `}
                         sizes="(max-width: 768px) 100vw, 50vw" // Define sizes based on layout
                         alt="FETS team member ready to assist candidates" // Updated alt text
                         className="rounded-lg shadow-md w-full object-cover object-top max-h-[500px]" // Added object-cover, object-top, and max-h
                         loading="lazy" // Lazy loading is already here
                         width="400" // Added placeholder width
                         height="500" // Added placeholder height
                     />
                  </div>
               </div>
               {/* Right Side: Form */}
               <div className="order-1 md:order-2">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                      <input
                        type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                        className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition duration-200 ease-in-out text-sm shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                      <input
                        type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                        className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition duration-200 ease-in-out text-sm shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                      <input
                        type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required
                        className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition duration-200 ease-in-out text-sm shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1.5">Purpose</label>
                      <select
                        id="purpose" name="purpose" value={formData.purpose} onChange={handleInputChange} required
                        className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition duration-200 ease-in-out text-sm shadow-sm appearance-none"
                      >
                        <option value="" disabled>Select Purpose</option>
                        <option value="Book a Test">Book a Test</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                      <textarea
                        id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} required
                        className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition duration-200 ease-in-out text-sm shadow-sm"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-gold text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base shadow-md"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? 'Sending...' : 'Submit Message'}
                    </button>
                  </form>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </HelmetProvider> // Close HelmetProvider
  );
}

export default ContactPage;
