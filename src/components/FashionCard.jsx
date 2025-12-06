import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function FashionCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || ""
  );

  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    if (!product.images || product.images.length <= 1) return;

    const auto = setInterval(() => {
      setIndex((i) => (i + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(auto);
  }, [product.images]);

  const handleAdd = () => {
    addToCart(product, selectedVariant);
    navigate("/cart");
  };

  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-lg p-5 border hover:shadow-2xl transition-all duration-300">

      {/* BIG IMAGE SLIDER */}
      <div className="relative w-full h-72 rounded-xl overflow-hidden">
        <img
          src={product.images[index]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {product.images.length > 1 && (
          <>
            {/* Left */}
            <button
              className="absolute top-1/2 left-4 bg-white/70 px-3 py-1 rounded-full"
              onClick={() =>
                setIndex(index === 0 ? product.images.length - 1 : index - 1)
              }
            >
              ◀
            </button>

            {/* Right */}
            <button
              className="absolute top-1/2 right-4 bg-white/70 px-3 py-1 rounded-full"
              onClick={() => setIndex((index + 1) % product.images.length)}
            >
              ▶
            </button>
          </>
        )}
      </div>

      {/* Name */}
      <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>

      {/* Price */}
      <p className="text-lg text-indigo-600 font-semibold">₹{product.price}</p>

      {/* Variants */}
      {product.variants && (
        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
          className="mt-3 w-full p-2 rounded-lg border dark:bg-[#0F172A]"
        >
          {product.variants.map((v, i) => (
            <option key={i}>{v}</option>
          ))}
        </select>
      )}

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}
