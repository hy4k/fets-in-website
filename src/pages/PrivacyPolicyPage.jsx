import React from 'react';

function PrivacyPolicyPage() {
  // Removed outer div with bg-brand-beige and min-h-screen
  // Let the main App layout handle background and height
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md my-12"> {/* Added margin top/bottom */}
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d05c91b8-86b8-43b7-b9d9-c5a48a9cd2c5/488a0184f43f5841104445f9f66661d3.png" // Updated to use Header logo
            alt="FETS Logo - Forun Testing & Educational Services" // Improved alt text
            className="h-12 sm:h-14 w-auto" // Adjusted size to match header style
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-teal-dark text-center mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700"> {/* Using prose for nice typography defaults */}
          <p className="lead text-lg mb-6">
            At Forun Testing & Educational Services (FETS), we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information when you interact with our services, including our WhatsApp Assistant and website.
          </p>

          <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We may collect personal data such as your name, phone number, and exam-related details when you contact us or book exams through our platforms.
          </p>

          <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide you with exam-related support</li>
            <li>To confirm mock test or slot bookings</li>
            <li>To improve our services and communication</li>
          </ul>

          <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
            Third-Party Access
          </h2>
          <p>
            Your data is never sold. It may be shared with service providers such as exam boards or messaging platforms (e.g., WhatsApp API provider) only for functional use.
          </p>

          <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
            Data Security
          </h2>
          <p>
            We take appropriate measures to secure your information from unauthorized access or disclosure.
          </p>

          <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
            Your Consent
          </h2>
          <p>
            By using our services or communicating with us through WhatsApp or our website, you consent to the terms of this privacy policy.
          </p>

          <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
            Contact
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href='mailto:edu@fets.in' className="text-brand-blue hover:underline">edu@fets.in</a>.
          </p>

          <p className="mt-10 text-sm text-gray-500 italic">
            Last Updated: April 2025
          </p>
        </div>
      </div>
    // Removed closing tag for the outer div
  );
}

export default PrivacyPolicyPage;
