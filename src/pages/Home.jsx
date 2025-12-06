// Cleaned and Premium Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/?search=${search}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">


      


      {/* =============================== */}
      {/* PREMIUM HERO SECTION */}
      {/* =============================== */}
      
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

          

          {/* MAIN TITLE */}
          <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug animate-fadeUp">
            Everything You Need,
            <span className="block mt-2">Delivered Near You</span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-3 sm:mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto animate-fadeUpDelay">
            Order homemade foods & trendy fashion from trusted local shops.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-7 flex justify-center animate-scaleIn">
            <input
              type="text"
              placeholder="Search food or fashion..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full max-w-sm sm:max-w-md px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* QUICK CATEGORIES */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fadeUpSlow">
            <a href="/panchphoron" className="premium-btn">🍱 Food</a>
            <a href="/malakatpis" className="premium-btn">👗 Fashion</a>
            <a href="/biryani" className="premium-btn">🍛 Biryani</a>
            <a href="/momos" className="premium-btn">🥟 Momos</a>
          </div>


        </div>
        


      {/* =============================== */}
      {/* PARTNER SHOPS CAROUSEL */}
      {/* =============================== */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Our Verified Partner Shops
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          FSQUARE proudly collaborates with premium trusted brands in your area.
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F4F4F8] dark:from-[#0F172A] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F4F4F8] dark:from-[#0F172A] to-transparent z-10"></div>

          <div className="flex gap-6 animate-carousel px-2 w-max">

            <div onClick={() => (window.location.href = "/panchphoron")} className="carousel-card">
              <span className="badge">✔ Verified</span>
              <img src="/partners/panchphoron.jpeg" className="partner-img" />
              <h3 className="title-indigo">Panchphoron Foods</h3>
              <div className="rating-stars">★★★★★</div>
              <p className="desc">Rolls • Chowmein • Biryani</p>
            </div>

            <div onClick={() => (window.location.href = "/malakatpis")} className="carousel-card">
              <span className="badge">✔ Verified</span>
              <img src="/partners/malakatpis.png" className="partner-img" />
              <h3 className="title-pink">Mala Cut Piece Fashion</h3>
              <div className="rating-stars">★★★★★</div>
              <p className="desc">T-Shirts • Dresses • Fashion Wear</p>
            </div>

          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* PARTNER WITH FSQUARE */}
      {/* =============================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-3xl shadow-2xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Partner With FSQUARE</h2>
          <p className="text-center text-lg opacity-90 max-w-2xl mx-auto">
            Are you a local <b>Food</b> or <b>Fashion</b> business? Join FSQUARE and reach more customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
            <div>
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold">Grow Together</h3>
              <p className="opacity-90 mt-1">Expand customer reach instantly.</p>
            </div>
            <div>
              <div className="text-5xl mb-3">🚚</div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="opacity-90 mt-1">We handle logistics for your shop.</p>
            </div>
            <div>
              <div className="text-5xl mb-3">📈</div>
              <h3 className="text-xl font-semibold">Boost Your Sales</h3>
              <p className="opacity-90 mt-1">We promote your shop everywhere.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="/contact" className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-lg hover:bg-gray-100 transition">
              Contact Us to Collaborate
            </a>
          </div>
        </div>
      </section>

      {/* ===============================
      COUPON REWARD SYSTEM
   =============================== */}
<section className="max-w-6xl mx-auto px-6 pt-6 py-16">

  <div className="
    bg-white dark:bg-[#1E293B] 
    rounded-3xl shadow-xl 
    border border-gray-200 dark:border-gray-700
    p-10 md:p-14 text-center
  ">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
      FSQUARE Coupon Rewards 🎁
    </h2>

    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-3">
      Every time you place an order, you earn a <b>Coupon</b>.  
      Keep collecting — exciting prizes announced every week!
    </p>

    {/* Rewards Icons */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">

      <div className="flex flex-col items-center">
        <div className="text-5xl mb-3">🎫</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Win Weekly Prizes
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Coupons give you a chance to win FSquare gifts every week.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl mb-3">⭐</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Earn Every Order
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Every successful order generates 1 coupon automatically.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl mb-3">🏆</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Big Surprise Gifts
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Lucky users may win major monthly rewards!
        </p>
      </div>

    </div>

    {/* Button */}
<a
  href="/coupons"
  className="
    inline-block px-8 py-3 
    rounded-2xl 
    font-bold text-white 
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
    shadow-lg hover:shadow-2xl
    hover:scale-[1.03] 
    transition-all duration-300
    mt-10     /* 👈 ADD THIS */
  "
>
  🎟️ Check Your Coupons
</a>

  </div>

</section>


      {/* =============================== */}
      {/* ABOUT FSQUARE */}
      {/* =============================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">About FSQUARE</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
          FSQUARE connects trusted local shops with customers through quality, speed, and modern experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] shadow-lg">
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="text-xl font-bold">Premium Verified Shops</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Quality checked & trusted partners.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] shadow-lg">
            <div className="text-5xl mb-3">🚚</div>
            <h3 className="text-xl font-bold">Fast Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Delivered quickly & safely.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] shadow-lg">
            <div className="text-5xl mb-3">🤝</div>
            <h3 className="text-xl font-bold">Helping Local Shops Grow</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">We help offline shops go online.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
