import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search, Info, BookCopy, ShieldCheck, User, Rocket, PhoneCall, Clock, ThumbsUp, ThumbsDown
} from "lucide-react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Categorized and Summarized FAQ Data
const faqData = {
  "about-us": {
    title: "About Us",
    icon: Info,
    questions: [
      {
        q: "What is FETS and where are you located?",
        a: "FETS is a premier computer-based test center in Calicut, Kerala, India, established in 2021. We offer a secure environment for professional and academic exams, conveniently located near major transport hubs."
      },
      {
        q: "What makes FETS unique?",
        a: "We are India's only multi-brand center officially partnered with all major global exam bodies (Prometric, Pearson VUE, ETS, IELTS, PSI, etc.), offering over 75 exams under one roof."
      },
       {
        q: "How successful has FETS been?",
        a: "Since 2021, we've served over 20,000 candidates across 75+ exam types with a 99% satisfaction rate and zero security breaches, becoming a key resource in India."
      },
    ]
  },
  "exams-offered": {
    title: "Exams Offered",
    icon: BookCopy,
    questions: [
      {
        q: "What types of exams can I take at FETS?",
        a: "We host a wide variety, including IT certifications, healthcare credentials, language tests (IELTS, TOEFL), professional licenses, and academic exams (GRE) through our global partners."
      },
    ]
  },
  "security": {
    title: "Security",
    icon: ShieldCheck,
    questions: [
       {
        q: "What security measures does FETS use?",
        a: "We employ military-grade security: full biometric authentication, 24/7 CCTV, secure protocols, metal detectors, ID checks, and strict item policies to ensure test integrity."
      },
       {
        q: "What items are prohibited?",
        a: "Weapons, unauthorized personal items (phones, watches, electronics, bags, notes, food/drink), and outside written materials are strictly prohibited unless explicitly allowed by the exam sponsor."
      },
    ]
  },
  "candidate-experience": {
    title: "Candidate Experience",
    icon: User,
    questions: [
       {
        q: "What is the testing experience like?",
        a: "We provide a smooth, stress-free environment with individual, noise-reduced booths, modern tech, power backups, and trained staff. A 'Test Drive' mock exam is available."
      },
       {
        q: "What materials are provided?",
        a: "Depending on the exam, either an erasable note board and marker or scratch paper and pencil are provided. These must be returned post-exam."
      },
       {
        q: "What about testing accommodations?",
        a: "Accommodations (extra time, assistive tech) must be pre-approved by your exam sponsor. Please arrange this well in advance."
      },
       {
        q: "What are the rules during the exam?",
        a: "Candidates are seated with appropriate distancing and continuously monitored. Raise your hand for breaks (if permitted). No communication with others is allowed."
      },
    ]
  },
   "future-vision": {
    title: "Future Vision",
    icon: Rocket,
    questions: [
       {
        q: "What are FETS's future plans?",
        a: "We aim for national expansion, partnering with all global exam brands to empower students and professionals across India by making world-class testing accessible."
      },
    ]
  },
   "contact-info": {
    title: "Contact Info",
    icon: PhoneCall,
    questions: [
       {
        q: "How can I contact FETS?",
        a: "Visit us in Calicut, call +91 8089393992 / +91 9895541552 / +91 8089219722, or email edu@fets.in. More details are on our Contact page."
      },
    ]
  },
   "working-hours": {
    title: "Working Hours",
    icon: Clock,
    questions: [
       {
        q: "What are your working hours?",
        a: "Our office hours are Monday to Saturday, 9 AM to 6 PM."
      },
    ]
  },
};

const faqCategories = Object.keys(faqData);

function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const sectionRefs = useRef({});

  // Filter FAQs based on search term
  const filteredFaqs = Object.entries(faqData).reduce((acc, [categoryId, categoryData]) => {
    const filteredQuestions = categoryData.questions.filter(
      (faq) =>
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredQuestions.length > 0) {
      acc[categoryId] = { ...categoryData, questions: filteredQuestions };
    }
    return acc;
  }, {});

  // Smooth scroll to section
  const scrollToSection = (id) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed header + some padding
      const headerOffset = 120; // Adjust as needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

   // Scroll spy effect
   useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -50% 0px', // Adjust rootMargin to trigger highlight earlier/later
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredFaqs]); // Re-run observer when filtered FAQs change


  return (
    <HelmetProvider>
      <Helmet>
        <title>ASK FETS | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about FETS testing center, exams offered, security, candidate experience, and more." />
        <link rel="canonical" href="https://www.fets.in/faq" />
        {/* Add FAQPage Schema if desired */}
      </Helmet>

      <div className="min-h-screen bg-brand-beige pt-24 md:pt-28">
        {/* Top Section: Title and Search */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 px-4 text-center bg-white shadow-sm sticky top-20 md:top-24 z-30" // Make search bar sticky
        >
           <h1 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-4 font-montserrat">
             ASK FETS
           </h1>
           <div className="relative max-w-xl mx-auto">
             <input
               type="text"
               placeholder="Search FAQs (e.g., 'IELTS', 'security', 'location')"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full px-4 py-2.5 pl-10 rounded-full border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition duration-200 ease-in-out text-sm shadow-sm"
             />
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
           </div>
        </motion.div>

        {/* Main Layout: Sidebar + Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12">

          {/* Sticky Sidebar Navigation */}
          <aside className="w-full md:w-64 md:sticky md:top-48 self-start md:h-[calc(100vh-200px)] overflow-y-auto bg-white p-4 rounded-lg shadow border border-gray-200/80">
             <nav className="space-y-1">
               <p className="text-xs uppercase font-semibold text-brand-brown mb-2 px-2">Categories</p>
               {Object.entries(faqData).map(([id, { title, icon: Icon }]) => (
                 <button
                   key={id}
                   onClick={() => scrollToSection(id)}
                   className={`flex items-center w-full space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 text-left ${
                     activeCategory === id
                       ? 'bg-brand-gold/20 text-brand-brown font-semibold'
                       : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                   }`}
                 >
                   <Icon className={`w-5 h-5 flex-shrink-0 ${activeCategory === id ? 'text-brand-brown' : 'text-gray-400'}`} />
                   <span>{title}</span>
                 </button>
               ))}
             </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
             {Object.entries(filteredFaqs).length > 0 ? (
               Object.entries(filteredFaqs).map(([id, { title, icon: Icon, questions }]) => (
                 <section key={id} id={id} ref={el => sectionRefs.current[id] = el} className="mb-12 scroll-mt-28">
                   <div className="flex items-center mb-5 border-b border-gray-300 pb-2">
                     {Icon && <Icon className="w-6 h-6 text-brand-teal-medium mr-3 flex-shrink-0" />}
                     <h2 className="text-2xl font-bold text-brand-teal-dark">{title}</h2>
                   </div>
                   <div className="grid grid-cols-1 gap-4">
                     {questions.map((faq, index) => (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, y: 15 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.5 }}
                         className="bg-white rounded-lg shadow-sm border border-gray-200/80 p-5"
                       >
                         <h3 className="font-semibold text-brand-teal-dark mb-2">{faq.q}</h3>
                         <p className="text-sm text-gray-600 leading-relaxed mb-4">{faq.a}</p>
                         <div className="flex justify-end items-center pt-3 border-t border-gray-100">
                            <span className="text-xs text-gray-500 mr-3">Was this helpful?</span>
                            <button className="p-1 rounded-full hover:bg-green-100 text-gray-500 hover:text-green-600 transition-colors">
                               <ThumbsUp className="w-4 h-4" />
                            </button>
                             <button className="p-1 rounded-full hover:bg-red-100 text-gray-500 hover:text-red-600 transition-colors ml-1">
                               <ThumbsDown className="w-4 h-4" />
                            </button>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                 </section>
               ))
             ) : (
                <div className="text-center py-12 text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="font-semibold">No FAQs found matching "{searchTerm}"</p>
                    <p className="text-sm mt-1">Try searching for different keywords.</p>
                </div>
             )}
          </main>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default FAQPage;
