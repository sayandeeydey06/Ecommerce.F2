// src/pages/Terms.jsx
import React from "react";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-2 bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Terms & Conditions
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Welcome to FSquare. By accessing or placing an order on our platform, you agree to the following Terms & Conditions.
      </p>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. General</h2>
        <p className="text-gray-600 dark:text-gray-300">
          These Terms govern the use of our website and apply to all purchases made through the platform. 
          By using our services, you agree to comply with these Terms.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Product Information</h2>
        <p className="text-gray-600 dark:text-gray-300">
          We provide accurate product descriptions and images. However, slight variations in color, texture, or packaging may occur.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Order Process</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Orders can only be placed through WhatsApp. Once confirmed, the order cannot be modified unless approved by the seller.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Pricing</h2>
        <p className="text-gray-600 dark:text-gray-300">
          All prices displayed are final and include applicable taxes. Prices may change without notice.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. Return & Refund Policy (Fashion Only)</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Only fashion products are eligible for return/refund within 3 days of delivery, subject to inspection and approval.  
          Food items are **non-returnable** due to hygiene and safety reasons.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. User Accounts</h2>
        <p className="text-gray-600 dark:text-gray-300">
          You are responsible for maintaining the confidentiality of your account information.  
          Any fraudulent activity may result in permanent account suspension.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Liability</h2>
        <p className="text-gray-600 dark:text-gray-300">
          FSquare is not responsible for damages arising from misuse, delivery delays, or third-party logistics issues.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-300">
          For any questions, please reach out through our Contact page or WhatsApp support.
        </p>
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-sm mt-10">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}
