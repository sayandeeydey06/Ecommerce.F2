import React from 'react';

export default function OfferBanner() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 mt-8">
      <div className="rounded-2xl p-6 shadow-md 
                      bg-gradient-to-r from-[#363459] to-[#7C3AED] 
                      text-white flex flex-col md:flex-row 
                      items-center justify-between gap-4">

        <div>
          <h3 className="text-xl font-bold">Special Offer — Buy 2 Get 1 Free</h3>
          <p className="text-sm opacity-90 mt-1">
          Sell Starts On 25th Dec - 1st Jan  
          </p>
        </div>
 

      
        <div className="flex gap-4 text-sm font-medium">
          <a href="#panchphoron" className="underline">Food Offers</a>
          <a href="#malakatpis" className="underline">Fashion Offers</a>
        </div>

      </div>
    </div>
  );
}
