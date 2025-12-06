// src/pages/MyCoupons.jsx
import React from "react";

export default function MyCoupons() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        🎟️ My Coupons
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        All your earned coupons will appear here after every order.
      </p>

      <div className="p-6 rounded-xl bg-white dark:bg-[#1E293B] shadow-lg">
        <p className="text-gray-600 dark:text-gray-300">
          You do not have any coupons yet.
        </p>
      </div>
    </div>
  );
}
