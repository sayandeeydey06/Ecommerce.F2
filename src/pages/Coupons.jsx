// src/pages/Coupons.jsx
import React from "react";
import { useCoupons } from "../context/CouponContext";

export default function CouponsPage() {
  const { coupons, markUsed, clearAll } = useCoupons();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Coupons</h2>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          You have <span className="font-semibold">{coupons.length}</span> coupon
          {coupons.length !== 1 ? "s" : ""}.
        </p>
      </div>

      <div className="space-y-3">
        {coupons.length === 0 && (
          <div className="text-gray-600">You don't have any coupons yet.</div>
        )}

        {coupons.map((c) => (
          <div key={c.id} className="p-4 rounded-lg bg-white dark:bg-[#1E293B] border flex items-center justify-between">
            <div>
              <div className="font-semibold">{c.id}</div>
              <div className="text-sm text-gray-500">Earned: {new Date(c.createdAt).toLocaleString()}</div>
              {c.meta?.orderId && <div className="text-sm text-gray-500">Order: {c.meta.orderId}</div>}
            </div>

            <div className="flex items-center gap-3">
              <div className={`px-3 py-1 rounded-full text-xs ${c.used ? "bg-gray-300 text-gray-700" : "bg-green-100 text-green-800"}`}>
                {c.used ? "Used" : "Active"}
              </div>
              {!c.used && (
                <button onClick={() => markUsed(c.id)} className="text-sm text-indigo-600 hover:underline">Mark used</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {coupons.length > 0 && (
        <div className="mt-6">
          <button onClick={clearAll} className="px-4 py-2 bg-red-500 text-white rounded-lg">Clear all (dev)</button>
        </div>
      )}
    </div>
  );
}
