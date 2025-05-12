import React from 'react';

function DataDeletionPage() {
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
        User Data Deletion Request
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700"> {/* Using prose for nice typography defaults */}
        <p className="lead text-lg mb-6">
          At Forun Testing & Educational Services (FETS), we respect your privacy and are committed to protecting your personal data. If you wish to have your data deleted from our systems, please follow the instructions below.
        </p>

        <h2 className="text-2xl font-semibold text-brand-teal-medium mt-8 mb-4">
          How to Request Data Deletion
        </h2>
        <p>
          You can request deletion of your data by emailing us at:
        </p>

        <p>
          <strong>Email:</strong> <a href="mailto:support@fets.in" className="text-brand-blue hover:underline">support@fets.in</a>
        </p>

        <p>
          In your email, please include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your full name</li>
          <li>Your phone number (used for WhatsApp or bookings)</li>
          <li>Any other information to help us locate your data (e.g., booking ID)</li>
        </ul>

        <p className="mt-4">
          Once we receive your request, we will verify your identity and proceed to delete your data within 7 working days. You will receive a confirmation email once the deletion is complete.
        </p>

        <p className="mt-10 text-sm text-gray-500 italic">
          Last Updated: April 2025
        </p>
      </div>
    </div>
  );
}

export default DataDeletionPage;
