import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MessageSquare, Phone, Mail, MapPin, Send, ExternalLink } from "lucide-react"; // Added ExternalLink
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: existingEmails } = await supabase
        .from('newsletter')
        .select('email')
        .eq('email', email);

      if (existingEmails?.length > 0) {
        toast({
          title: "Already Subscribed!",
          description: "You've already subscribed to our newsletter.",
          duration: 3000,
        });
        return;
      }

      const { error } = await supabase
        .from('newsletter')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "You're in!",
        description: "Check your inbox for updates.",
        duration: 3000,
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const menuItems = [
    { name: "Our Story", path: "/our-story" },
    { name: "Our Partners", path: "/partners" },
    { name: "Inside FETS", path: "/infrastructure" },
    { name: "Reach FETS", path: "/contact" },
    { name: "Exam Essentials", path: "/test-takers" },
    { name: "FAQ", path: "/faq" }
  ];

  const partners = [
    "CMA USA", "ETS", "GRE", "Language Cert", "Pearson VUE", "Prometric", "PSI", "TOEFL"
  ];

  return (
    <footer className="bg-brand-beige text-gray-800 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14"> {/* Adjusted padding */}
        {/* Added items-stretch to ensure columns match height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 items-stretch">

          {/* Column 1: Connect With Us - Removed Logo, company name, description */}
          <div className="space-y-3 text-xs flex flex-col">
            <h3 className="font-semibold text-brand-gold text-sm mb-2">Connect With Us</h3>
            <div className="flex items-start space-x-2 pt-1">
              <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
              <p className="text-gray-600 flex-1">
                Fourth Floor, Kadooli Tower, West Nadakkavu, Vandipetta Junction, Calicut, Kerala, India - 673011
              </p>
            </div>
            <div className="space-y-1 pt-1">
              <a href="tel:+918089393992" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Phone className="h-3.5 w-3.5 text-brand-gold flex-shrink-0" />
                <span>+91 8089393992</span>
              </a>
              <a href="tel:+919895541552" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                 <Phone className="h-3.5 w-3.5 text-brand-gold flex-shrink-0 opacity-0" /> {/* Spacer */}
                 <span>+91 9895541552</span>
              </a>
               <a href="tel:+918089219722" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                 <Phone className="h-3.5 w-3.5 text-brand-gold flex-shrink-0 opacity-0" /> {/* Spacer */}
                 <span>+91 8089219722</span>
              </a>
            </div>
            <div className="flex items-center space-x-2 pt-1">
              <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
              <a href="mailto:edu@fets.in" className="text-gray-600 hover:text-gray-900">edu@fets.in</a>
            </div>
          </div>

          {/* Column 2: Explore FETS */}
          {/* Added flex flex-col */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-brand-gold text-sm mb-3">Explore FETS</h3>
            <nav className="space-y-2 text-xs flex-1"> {/* Added flex-1 */}
              {menuItems.map(item => (
                 <Link key={item.name} to={item.path} className="block text-gray-600 hover:text-gray-900 transition-colors">{item.name}</Link>
              ))}
              {/* Updated Privacy Policy Link to use React Router */}
              <Link to="/privacy-policy" className="block text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link>
              {/* Added Terms of Service Link */}
              <Link to="/terms-of-service" className="block text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</Link>
              {/* Added Data Deletion Link */}
              <Link to="/data-deletion" className="block text-gray-600 hover:text-gray-900 transition-colors">Data Deletion Request</Link>
            </nav>
          </div>

          {/* Column 3: Our Partners */}
          {/* Added flex flex-col */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-brand-gold text-sm mb-3">Our Partners</h3>
            <div className="space-y-1.5 text-xs text-gray-600 flex-1"> {/* Added flex-1 */}
              {partners.map(partner => (
                <p key={partner}>{partner}</p>
              ))}
            </div>
          </div>

          {/* Column 4: Follow Us & More */}
           {/* Added flex flex-col */}
          <div className="space-y-5 flex flex-col">
            <div className="flex-1 space-y-5"> {/* Inner div with flex-1 to push content down if needed */}
              <div>
                <h3 className="font-semibold text-brand-gold text-sm mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                 <a href="https://www.linkedin.com/company/forunindia/" target="_blank" rel="noopener noreferrer" className="h-7 w-7 bg-brand-gold rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                   <Linkedin className="h-3.5 w-3.5 text-gray-900" />
                 </a>
                 <a href="https://www.instagram.com/forun_testcenter_official?igsh=cW43MTNkOWh5cXlq" target="_blank" rel="noopener noreferrer" className="h-7 w-7 bg-brand-gold rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                   <Instagram className="h-3.5 w-3.5 text-gray-900" />
                 </a>
                 <a href="https://www.facebook.com/share/1EQDvW9ok4/" target="_blank" rel="noopener noreferrer" className="h-7 w-7 bg-brand-gold rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                   <Facebook className="h-3.5 w-3.5 text-gray-900" />
                 </a>
                 <a href="https://wa.me/918089393992" target="_blank" rel="noopener noreferrer" className="h-7 w-7 bg-brand-gold rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                   <MessageSquare className="h-3.5 w-3.5 text-gray-900" />
                 </a>
              </div>
            </div>
            <div>
               <h3 className="font-semibold text-brand-gold text-sm mb-2">Write a Review</h3>
               <a href="https://g.page/r/CQ6nTfcIJ8QOEAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                 Share your experience <ExternalLink className="h-3 w-3" />
               </a>
            </div>
             <div>
               <h3 className="font-semibold text-brand-gold text-sm mb-2">Drop us a message</h3>
               <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                 Go to contact form <ExternalLink className="h-3 w-3" />
               </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Further reduced top margin */}
        <div className="mt-6 pt-6 border-t border-gray-300/50"> {/* Reduced mt further */}
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-base sm:text-lg font-semibold text-brand-gold mb-3">Don't Miss Out - Dates, Slots, Vouchers & More</h3>
            <form onSubmit={handleNewsletterSubmit} className="mt-3 flex flex-col sm:flex-row gap-2"> {/* Reduced form margin */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-2 rounded-md bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2 bg-brand-gold text-gray-900 rounded-md hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                <span className="text-sm font-medium">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sub-Footer - Further reduced top margin */}
      <div className="bg-gray-300/50 py-2.5 mt-6"> {/* Reduced mt and py */}
        <p className="text-center text-gray-600 text-xs">
          Copyright © {new Date().getFullYear()} FETS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
