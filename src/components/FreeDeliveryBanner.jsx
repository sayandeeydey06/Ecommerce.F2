import React from "react";
import carImg from "/public/car-delivery.png"; // replace with your car image

export default function FreeDeliveryBanner() {
  return (
    <div className="w-full bg-blue-300 text-white overflow-hidden relative py-2">

      {/* MOVING WRAPPER */}
      <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">

        {/* Car Image */}
        <img
          src={carImg}
          alt="delivery car"
          className="h-10 w-auto"
        />

        {/* Text */}
        <span className="text-lg font-semibold">
           Free Delivery on Panchphoron Foods Orders Above ₹349 — Limited Time Offer!
        </span>

      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          .animate-marquee {
            display: inline-flex;
            animation: marquee 12s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
}
