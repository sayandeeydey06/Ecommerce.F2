import React from 'react';
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";
import FashionCard from "./FashionCard";


export default function BrandSection({ id, title, subtitle, products, phone }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-12">

      <div className="flex items-center justify-between mb-6">
        <div>
          {/* Delivery timing for all food sections */}
{(id === "panchphoron" || id === "biryani" || id === "momos") && (
  <p className="text-red-500 font-semibold mt-1">
    ⏰ Delivery Available Daily: 6:00 PM – 9:30 PM
  </p>
)}

          <h2 className="text-3xl font-bold text-[#4F46E5] dark:text-white">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>

        {/* View All Button */}
        <Link 
          to={`/${id}`} 
          className="px-4 py-2 rounded-lg bg-[#4F46E5] text-white hover:bg-[#7C3AED] transition"
        >
          View All →
        </Link>
      </div>  

     {/* PRODUCT GRID */}
{products.length === 0 ? (
  <p className="text-gray-600 dark:text-gray-300">No products available</p>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((p) =>
      p.category === "fashion" ? (
        <FashionCard key={p.id} product={p} />
      ) : (
        <ProductCard key={p.id} product={p} />
      )
    )}
  </div>
)}


    </section>
  );
}

