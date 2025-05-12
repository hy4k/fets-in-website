import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md my-12"> {/* Added margin top/bottom */}
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/488a0184f43f5841104445f9f66661d3.png" // Header logo
          alt="FETS Logo - Forun Testing & Educational Services"
          className="h-12 sm:h-14 w-auto" // Adjusted size to match header style
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-brand-teal-dark text-center mb-8">
        Terms of Service
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700"> {/* Using prose for nice typography defaults */}
        <p className="lead text-lg mb-6">
          Welcome to Forun Testing & Educational Services (FETS). By using our website, services, or communication platforms (including WhatsApp), you agree to the following Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          1. Services We Provide
        </h2>
        <p>
          FETS facilitates exam slot booking, mock test registration, and support for students attending global and national level tests. This includes services via our website (<a href="https://fets.in" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">fets.in</a>) and automated platforms like WhatsApp.
        </p>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          2. Eligibility
        </h2>
        <p>
          Our services are intended for students and professionals seeking to register or inquire about exams. You must be 18 years or older or have parental consent to use our services.
        </p>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          3. Your Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensure all information you provide is accurate and current.</li>
          <li>Do not misuse the service (e.g., fake bookings or spam).</li>
          <li>Respect other users and the platform’s intended use.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          4. Use of Data
        </h2>
        <p>
          Your data (like name, phone number, and exam preferences) is used solely to provide our services. We do not sell your data to third parties. See our <Link to="/privacy-policy" className="text-brand-blue hover:underline">Privacy Policy</Link> for details. {/* Changed to React Router Link */}
        </p>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          5. Communication via WhatsApp
        </h2>
        <p>
          By contacting us on WhatsApp, you agree to receive relevant messages (booking confirmations, reminders, support). You can opt out at any time by messaging "STOP".
        </p>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          6. Payment & Refunds
        </h2>
        <p>
          Mock test and exam bookings made via FETS may require payment. Refunds are handled on a case-by-case basis depending on exam provider policies. Contact <a href="mailto:support@fets.in" className="text-brand-blue hover:underline">support@fets.in</a> for questions.
        </p>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          7. Changes to Terms
        </h2>
        <p>
          We may update these Terms periodically. The updated version will be posted on this page with the revised date.
        </p>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          8. Contact Us
        </h2>
        <p>
          If you have any questions about these Terms, please email us at <a href="mailto:edu@fets.in" className="text-brand-blue hover:underline">edu@fets.in</a>. {/* Corrected mailto link */}
        </p>

        <p className="mt-10 text-sm text-gray-500 italic">
          Last Updated: April 2025
        </p>
      </div>
    </div>
  );
}

export default TermsOfServicePage;
