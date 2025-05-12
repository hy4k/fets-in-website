
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react"; // Import Menu and X icons
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Our Story", path: "/our-story" },
    { name: "Our Partners", path: "/partners" },
    { name: "Inside FETS", path: "/infrastructure" },
    { name: "Reach FETS", path: "/contact" },
    // { name: "Exam Essentials", path: "/test-takers" }, // Removed this line
    { name: "FAQ", path: "/faq" }
  ];

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false); // Close mobile menu on link click
    if (path.includes('#') && location.pathname === '/') {
      const element = document.getElementById(path.split('#')[1]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-brand-gold text-gray-900 py-1.5"> {/* Use brand-gold, dark text */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-end space-x-4 text-xs sm:text-sm">
            <a href="tel:+918089219722" className="flex items-center space-x-1.5 hover:text-black transition-colors"> {/* Darker hover text */}
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>+91-8089219722</span>
            </a>
            <a href="mailto:edu@fets.in" className="flex items-center space-x-1.5 hover:text-black transition-colors"> {/* Darker hover text */}
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>edu@fets.in</span>
            </a>
            <a
              href="https://maps.app.goo.gl/a5Wi5BdEQVxeHARi8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-black transition-colors" // Darker hover text
            >
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Location</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      {/* Main Navigation Bar */}
      <div className={`bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Removed justify-between, added gap */}
          <div className="flex items-center gap-4">
            <button onClick={handleLogoClick} className="focus:outline-none flex-shrink-0"> {/* Added flex-shrink-0 */}
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/488a0184f43f5841104445f9f66661d3.png"
                alt="FETS Logo - Forun Testing & Educational Services" // Improved alt text
                className="h-10 sm:h-12 w-auto transition-transform duration-300" // Adjusted height
                loading="lazy" // Added lazy loading
                width="150" // Added placeholder width
                height="48" // Added placeholder height (based on sm:h-12)
              />
            </button>

            {/* Spacer to push nav towards right */}
            <div className="flex-grow"></div>

            {/* Desktop Menu - Added right margin */}
            <nav className="hidden md:flex items-center space-x-2 mr-4"> {/* Added mr-4 */}
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }} // Adjusted delay
                >
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="px-3 py-1.5 rounded-md bg-brand-gold text-gray-900 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow transform hover:-translate-y-px" // Use brand-gold, dark text
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-gold" // Use dark text, brand-gold ring
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} // Adjusted animation start
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} // Adjusted animation end
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-3 border-t border-gray-200" // Added border
          >
            <nav className="flex flex-col items-stretch"> {/* Changed alignment */}
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="w-full text-left px-4 py-2.5 text-gray-800 hover:bg-brand-gold/20 transition-colors duration-200 text-sm" // Use dark text, brand-gold hover
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;
