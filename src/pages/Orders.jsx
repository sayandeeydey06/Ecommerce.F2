// src/pages/Orders.jsx
import React from "react";
import { getUser } from "../auth";

export default function Orders() {
  const user = getUser();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F172A] p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        My Orders
      </h1>

      {!user ? (
        <p className="text-gray-600 dark:text-gray-300">
          You must be logged in to see orders.
        </p>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          No orders yet. Start shopping!
        </p>
      )}
    </div>
  );
}
