// src/components/CouponBanner.jsx
import React from "react";

export default function CouponBanner() {
  // Developer uploaded asset path (they will convert it); you can replace with your public URL too.
  const imgPath = "/mnt/data/A_flat,_digital_illustration_features_a_compact_de.png";

  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
      <div
        className="relative rounded-2xl overflow-hidden p-4 md:p-6 bg-gradient-to-r
                   from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg flex items-center gap-4"
      >
        {/* Left: car/image */}
        <div className="hidden md:block w-28 flex-shrink-0">
          <img
            src={imgPath}
            alt="Delivery"
            className="w-28 h-20 object-contain animate-bounce-slow"
            style={{ filter: "brightness(1.02)" }}
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <div className="text-sm md:text-base font-semibold uppercase tracking-wide opacity-90">
            🎁 Weekly Coupon Reward
          </div>
          <div className="mt-1 text-lg md:text-2xl font-extrabold">
            Get 1 coupon for every order — Win prizes weekly!
          </div>
          <div className="mt-1 text-sm opacity-90">
            Winners announced every Sunday at 7PM. The more you order — the more chances.
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <a
            href="/coupons"
            className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-xl font-semibold shadow hover:opacity-95"
          >
            My Coupons
          </a>
        </div>

        {/* tiny animation (moving text) */}
        <div
          className="absolute -bottom-3 left-4 right-4 md:left-6 md:right-6 opacity-30 text-xs"
          aria-hidden
        >
          <div className="whitespace-nowrap animate-marquee">
            🚚 Free delivery on orders above ₹300 • Earn coupons for weekly prizes • Shop local!
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-40%); }
        }
        .animate-marquee { animation: marquee 14s linear infinite; }
        @keyframes bounce-slow { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
        .animate-bounce-slow { animation: bounce-slow 3.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
