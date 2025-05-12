
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section bg-[#FFCE32]/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#1D63FF]">Get In Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#1D63FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1D63FF]">Address</h3>
                  <p className="text-gray-700">
                    Fourth Floor, Kadooli Tower,<br />
                    West Nadakkavu, Calicut,<br />
                    Kerala, India - 673011
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#1D63FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1D63FF]">Phone</h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:+918089393992" 
                      className="block text-gray-700 hover:text-[#1D63FF] transition-colors"
                    >
                      +91 8089393992
                    </a>
                    <a 
                      href="tel:+919895541552" 
                      className="block text-gray-700 hover:text-[#1D63FF] transition-colors"
                    >
                      +91 9895541552
                    </a>
                    <a 
                      href="tel:+918089219722" 
                      className="block text-gray-700 hover:text-[#1D63FF] transition-colors"
                    >
                      +91 8089219722
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#1D63FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1D63FF]">Email</h3>
                  <a 
                    href="mailto:edu@fets.in" 
                    className="text-gray-700 hover:text-[#1D63FF] transition-colors"
                  >
                    edu@fets.in
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-5 w-5 text-[#1D63FF]" />
                <a 
                  href="https://maps.google.com/?q=Forun+Testing+and+Educational+Services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D63FF] hover:text-[#1D63FF]/80 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8289547494387!2d75.7718649748126!3d11.273980688906603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651fcd5f13907%3A0xec42708f74da70e!2sForun%20Testing%20and%20Educational%20Services!5e0!3m2!1sen!2sin!4v1743753371790!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FETS Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
