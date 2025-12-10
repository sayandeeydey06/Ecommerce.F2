// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCoupons } from "../context/CouponContext";

export default function Navbar() {
  const { cart } = useCart();
  const { coupons } = useCoupons();
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className="w-full bg-gradient-to-r from-[#efedfb] to-[#EEF2FF] dark:bg-gradient-to-r dark:from-[#0F172A] dark:to-[#1E1B4B] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
        {/* Left: Brand */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold text-[#4F46E5] dark:text-white">
            FSQUARE
          </Link>
          {/* small subtitle (hidden on xs) */}
          <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300">Local food & fashion</span>
        </div>

        {/* Desktop Menu (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200 text-sm md:text-base">
          <Link to="/" className="hover:text-[#4F46E5]">Home</Link>
          <Link to="/panchphoron" className="hover:text-[#4F46E5]">Panchphoron</Link>
          <Link to="/malakatpis-info" className="hover:text-[#4F46E5]">Mala Cut Piece</Link>
          <Link to="/biryani" className="hover:text-[#4F46E5]">Biryani</Link>
          <Link to="/momos" className="hover:text-[#4F46E5]">Momos</Link>
          <Link to="/contact" className="hover:text-[#4F46E5]">Contact</Link>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          {/* Coupons link with badge */}
          <Link to="/coupons" className="relative hidden sm:inline-block mr-2 px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="text-sm">Coupons</span>
            {coupons?.length > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-red-500 text-white text-xs">
                {coupons.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="text-sm">Cart</span>
            <span className="ml-1 text-indigo-600 font-semibold">({cart?.length || 0})</span>
          </Link>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform ${open ? "opacity-100" : "pointer-events-none opacity-0"} transition-opacity`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 ${open ? "opacity-100" : "opacity-0"} transition-opacity`}
        />

        {/* drawer */}
        <div className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-[#0b1220] shadow-2xl p-6 transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform`}>
          <div className="flex items-center justify-between mb-6">
            <Link to="/" onClick={() => setOpen(false)} className="text-lg font-bold text-[#4F46E5] dark:text-white">FSQUARE</Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-3 text-gray-700 dark:text-gray-200">
            <Link to="/" onClick={() => setOpen(false)} className="mobile-link">Home</Link>
            <Link to="/panchphoron" onClick={() => setOpen(false)} className="mobile-link">Panchphoron</Link>
            <Link to="/malakatpis-info" onClick={() => setOpen(false)} className="mobile-link">Mala Cut Piece</Link>
            <Link to="/biryani" onClick={() => setOpen(false)} className="mobile-link">Biryani</Link>
            <Link to="/momos" onClick={() => setOpen(false)} className="mobile-link">Momos</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mobile-link">Contact</Link>

            <Link to="/coupons" onClick={() => setOpen(false)} className="mobile-link mt-2">
              Coupons {coupons?.length > 0 && <span className="ml-2 inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{coupons.length}</span>}
            </Link>

            <Link to="/cart" onClick={() => setOpen(false)} className="mobile-link">
              Cart <span className="ml-2 text-indigo-600 font-semibold">({cart?.length || 0})</span>
            </Link>
          </nav>

          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Support: <a href="mailto:hello@fsquare.example" className="underline">hello@fsquare.example</a></p>
          </div>
        </div>
      </div>
    </nav>
  );
}
