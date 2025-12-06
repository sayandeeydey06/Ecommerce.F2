import React from "react";

export default function PanchphoronInfo() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-0.5 py-16">

      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        About Panchphoron Foods
      </h1>

      {/* BRAND DESCRIPTION */}
      <p className="text-gray-700 dark:text-gray-300 leading-7 mb-6">
        Panchphoron Foods is a fast-growing street-style food brand, known for
        serving fresh, delicious, and flavour-packed dishes inspired by
        authentic Kolkata food culture. We bring you the real taste of rolls,
        chowmein, and Bengali snacks — prepared hot, hygienic, and full of
        signature spices.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-7 mb-6">
        Our mission is to deliver quality food with honest flavours, just like
        the taste we grew up loving. Fresh ingredients, consistent quality, 
        and customer satisfaction are our top priorities.
      </p>

      {/* OWNER SECTION */}
      <div className="flex flex-col items-center text-center bg-white dark:bg-[#1E293B] p-6 rounded-2xl shadow-xl border dark:border-gray-700 mb-10">

        <img
          src="/sourav.jpg"
          alt="Owner Sourav Sadhu"
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
        />

        <h3 className="text-xl font-semibold mt-4">SOURAV SADHU</h3>
        <p className="text-indigo-500 font-medium">Owner – Panchphoron Foods</p>

        <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
          Sourav Sadhu is the founder of Panchphoron Foods. With a passion for
          authentic street-style recipes and bold Bengali flavours, he ensures
          every dish tastes fresh, unique, and memorable.
        </p>
      </div>

      {/* SPECIALITIES */}
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Our Specialities</h2>

      <p className="text-gray-700 dark:text-gray-300 leading-7 mb-3">
        Panchphoron Foods is best known for serving a wide variety of hot,
        flavour-filled items such as:
      </p>

      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 leading-7">
        <li>Egg Roll – soft paratha with egg & special masala</li>
        <li>Chicken Roll – juicy chicken wrapped in fresh paratha</li>
        <li>Mutton Roll – tender & spicy mutton filling</li>
        <li>Chicken Pakora – crispy and perfectly fried</li>
        <li>Veg Chowmein – classic Indo-Chinese flavour</li>
        <li>Egg Chowmein – noodles tossed with egg & spices</li>
        <li>Chicken Chowmein – smoky noodles with juicy chicken</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-7 mt-6">
        Whether you're craving a spicy roll or a bowl of flavourful chowmein,
        Panchphoron Foods promises taste, quality, and satisfaction — every
        single time.
      </p>
    </div>
  );
}
