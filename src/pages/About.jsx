import React from "react";
import sayan from "/public/sayandeep.jpg";   // Your image filename
import sankha from "/public/sankha.jpg";     // His image filename

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-0.5 py-16">

      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        About FSQUARE
      </h1>

      {/* ----- ABOUT F² TEXT ----- */}
      <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed text-[17px]">
        FSQUARE (F²) began as a simple idea between two friends who believed in creating 
        something unique, reliable, and heartfelt. Today, it has grown into a brand that 
        represents passion, creativity, and dedication.
        <br /><br />
        Our dream is to deliver the best — whether it’s homemade food or stylish fashion wear.  
        Everything we offer is hand-selected, made with care, and crafted to bring a smile 
        to your face.
        <br /><br />
        <strong>F² stands for:</strong> <br />
        • Fresh & authentic taste <br />
        • Fashion with personality <br />
        • Fair pricing <br />
        • Friendly service <br />
        FSQUARE is not just our brand — it’s our family, and <strong>you</strong> are a part of it. ❤️
      </p>

      {/* FOUNDERS SECTION */}
      <h2 className="text-2xl font-bold text-center mb-8">
        Meet Our Founders
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* SAYANDEEP CARD */}
        <div className="flex flex-col items-center text-center bg-white dark:bg-[#1E293B] 
                        p-6 rounded-2xl shadow-xl border dark:border-gray-700">
          <img
            src={sayan}
            alt="Sayandeep Dey"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-4">SAYANDEEP DEY</h3>
          <p className="text-indigo-500 font-medium">Owner & Developer</p>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
            Lead developer of FSQUARE. Handles the website, design, and backend system.
          </p>
        </div>

        {/* SANKHA CARD */}
        <div className="flex flex-col items-center text-center bg-white dark:bg-[#1E293B] 
                        p-6 rounded-2xl shadow-xl border dark:border-gray-700">
          <img
            src={sankha}
            alt="Sankha Mukherjee"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-4">SANKHA MUKHERJEE</h3>
          <p className="text-indigo-500 font-medium">CEO</p>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
            CEO of FSQUARE. Manages brand strategy, marketing, and business operations.
          </p>
        </div>

      </div>
    </div>
  );
}
