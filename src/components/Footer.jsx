import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0F172A] mt-6 py-10 border-t dark:border-gray-700">

      <div className="max-w-6xl mx-auto px-6">

        {/* -------- GRID LINKS -------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 text-center">

          <Link to="/return-policy" className="text-indigo-600 hover:text-indigo-800 text-sm">
            Return & Refund Policy
          </Link>

          <Link to="/terms" className="text-indigo-600 hover:text-indigo-800 text-sm">
            Terms & Conditions
          </Link>

          <Link to="/about" className="text-indigo-600 hover:text-indigo-800 text-sm">
            About Us
          </Link>

          <Link to="/about-panchphoron" className="text-indigo-600 hover:text-indigo-800 text-sm">
            About Panchphoron
          </Link>

         <Link className="hover:text-indigo-500" to="malakatpis-info">About Mala Cut Piece</Link>

          <Link to="/contact" className="text-indigo-600 hover:text-indigo-800 text-sm">
            Contact Us
          </Link>

        </div>

        {/* -------- COPYRIGHT -------- */}
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-8">
          © {new Date().getFullYear()} FSQUARE — All rights reserved.
        </p>

      </div>
    </footer>
  );
}


