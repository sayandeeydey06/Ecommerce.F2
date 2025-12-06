import React from "react";

export default function MalaKatPisInfo() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-0.5 py-16">

      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        About MALA CUT PEICE Fashion
      </h1>

      <p className="text-gray-700 dark:text-gray-300 leading-7 mb-6">
        Mala Kat Pis is a premium handmade fashion brand that focuses on 
        stylish, elegant, and trend-setting accessories. Our products are 
        created with passion, creativity, and attention to detail to bring 
        comfort and confidence to every customer.
      </p>

      {/* OWNER SECTION */}
      <div className="flex flex-col items-center text-center bg-white dark:bg-[#1E293B] p-6 rounded-2xl shadow-xl border dark:border-gray-700">

        <img
          src="/soumik.jpg"   // ⭐ Place image in public folder
          alt="Soumik"
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
        />

        <h3 className="text-xl font-semibold mt-4">SOUMIK MONDAL</h3>
        <p className="text-indigo-500 font-medium">Owner – Mala Cut Piece</p>

        <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
          Soumik Mondal is the creative mind behind Mala Kat Pis. With a strong passion
          for fashion and design, he focuses on delivering premium-quality 
          handmade accessories that blend beauty, durability, and uniqueness.
          His dedication ensures every customer receives the best fashion 
          experience.
        </p>
      </div>

    </div>
  );
}
