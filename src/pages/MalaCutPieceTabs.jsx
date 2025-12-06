import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

import {
  MALA_CUT_PIECE_MEN,
  MALA_CUT_PIECE_WOMEN
} from "../data";

export default function MalaCutPieceTabs() {
  const [activeTab, setActiveTab] = useState("men");

  const products =
    activeTab === "men" ? MALA_CUT_PIECE_MEN : MALA_CUT_PIECE_WOMEN;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Mala Cut Piece Fashion
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("men")}
          className={`px-6 py-2 rounded-full font-semibold transition 
            ${activeTab === "men"
              ? "bg-indigo-600 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Men
        </button>

        <button
          onClick={() => setActiveTab("women")}
          className={`px-6 py-2 rounded-full font-semibold transition
            ${activeTab === "women"
              ? "bg-pink-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Women
        </button>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <p className="text-gray-500 text-lg">No products available right now.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
