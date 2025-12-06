import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.label || ""
  );

  const [showBack, setShowBack] = useState(false);

  // Only trigger flip animation if fashion product has 2+ images
  useEffect(() => {
    if (product.category === "fashion" && product.images?.length > 1) {
      const interval = setInterval(() => {
        setShowBack((prev) => !prev);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [product]);

  const handleAdd = () => {
    addToCart(product, selectedVariant);
    navigate("/cart");
  };

  // Check if product belongs to food category
  const isFood =
    product.category === "Panchphoron" ||
    product.category === "Biryani" ||
    product.category === "Momos";

  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-md hover:shadow-xl 
                    transition-all duration-300 p-5 border border-gray-200 
                    dark:border-gray-700 hover:-translate-y-1">

      {/* #############################
          IMAGE SECTION
         ############################# */}

      {/* Fashion Products (Flip Front–Back) */}
      {product.category === "fashion" ? (
        <div className="w-full h-48 rounded-xl overflow-hidden relative group">

          {/* Front */}
          <img
            src={product.images?.[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 
                        ${showBack ? "opacity-0" : "opacity-100"}`}
          />

          {/* Back */}
          <img
            src={product.images?.[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 
                        ${showBack ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      ) : (
        /* Food Products (Single Image) */
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl shadow-sm"
        />
      )}

      {/* #############################
          PRODUCT NAME & PRICE
         ############################# */}

      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        {product.name}
      </h3>

      <p className="text-lg text-[#4F46E5] dark:text-[#7C3AED] font-semibold mt-1">
  ₹{
    product.variants
      ? product.variants.find(v => v.label === selectedVariant)?.price
      : product.price
  }
</p>


      {/* Food Delivery Timing */}
      {isFood && (
        <p className="text-xs text-red-500 font-semibold mt-1">
          ⏰ Delivery: 6:00 PM – 9:30 PM
        </p>
      )}

      {/* #############################
          VARIANT DROPDOWN
         ############################# */}

      {product.variants && (
        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
          className="mt-3 w-full p-2 rounded-lg border border-gray-300 
                     dark:bg-[#0F172A] dark:border-gray-600 dark:text-white 
                     focus:ring-2 focus:ring-[#4F46E5]"
        >
          {product.variants.map((variant, index) => (
            <option key={index} value={variant.label}>
              {variant.label} - ₹{variant.price}
            </option>
          ))}
        </select>
      )}

      {/* #############################
          ADD TO CART BUTTON
         ############################# */}
      <button
        onClick={handleAdd}
        className="mt-4 w-full py-2 rounded-xl text-white font-semibold 
                   bg-[#4F46E5] hover:bg-[#7C3AED] transition-all shadow-md"
      >
        Add to Cart
      </button>
    </div>
  );
}
