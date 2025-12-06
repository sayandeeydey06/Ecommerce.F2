import { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../auth";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = getUser();

  return (
    <>

      {/* TOP HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm mb-2">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

           {/* LOGO LEFT SIDE */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo/fsquare-logo.png" 
            alt="FSquare Logo" 
            className="h-16 w-auto object-contain"
          />
        </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-gray-700 text-sm font-medium">
            <Link to="/">Home</Link>
            <Link to="/panchphoron">Panchphoron</Link>
            <Link to="/malakatpis">Mala Cut Piece</Link>
            <Link to="/biryani">Biryani</Link>
            <Link to="/momos">Momos</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* USER + MOBILE MENU BUTTON */}
          <div className="flex items-center gap-3">
            {user ? (
              <Link
                to="/profile"
                className="hidden md:flex px-4 py-2 bg-indigo-600 text-white rounded-full"
              >
                {user.name?.slice(0, 1).toUpperCase()}
              </Link>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex px-4 py-2 bg-indigo-600 text-white rounded-full"
              >
                Login
              </Link>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-3xl text-gray-700"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* ===== MOBILE SLIDE-IN MENU ===== */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setMenuOpen(false)}>
          <aside
  className="fixed left-0 top-0 w-72 h-full bg-white shadow-2xl p-6 
             transform transition-transform duration-300 ease-out 
             animate-[menuSlide_0.4s_cubic-bezier(.16,.96,.5,.98)_forwards]"
  onClick={(e) => e.stopPropagation()}
>

            {/* CLOSE BUTTON */}
            <button
              className="text-3xl text-gray-700 mb-6"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {/* MOBILE NAV LINKS */}
           <nav className="flex flex-col gap-4 text-gray-800 font-semibold">
  <Link to="/" onClick={() => setMenuOpen(false)} className="mobile-link">Home</Link>
  <Link to="/panchphoron" onClick={() => setMenuOpen(false)} className="mobile-link">Panchphoron</Link>
  <Link to="/malakatpis" onClick={() => setMenuOpen(false)} className="mobile-link">Mala Cut Piece</Link>
  <Link to="/biryani" onClick={() => setMenuOpen(false)} className="mobile-link">Biryani</Link>
  <Link to="/momos" onClick={() => setMenuOpen(false)} className="mobile-link">Momos</Link>
  <Link to="/cart" onClick={() => setMenuOpen(false)} className="mobile-link">Cart</Link>
  <Link to="/contact" onClick={() => setMenuOpen(false)} className="mobile-link">Contact</Link>
</nav>


            {/* USER BUTTON FOR MOBILE */}
            <div className="mt-6">
              {user ? (
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-indigo-600 text-white rounded-xl"
                >
                  {user.name?.slice(0, 1).toUpperCase()}
                </Link>
              ) : (
                <Link
  to="/login"
  onClick={() => setMenuOpen(false)}
  className="w-full text-center px-4 py-3 bg-indigo-600 text-white 
             rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl
             transition-transform hover:scale-[1.03]"
>
  Login
</Link>

              )}
            </div>
          </aside>
        </div>
      )}

      {/* MOBILE MENU ANIMATION */}
      <style>
        {`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes menuSlide {
  0% { transform: translateX(-120%); opacity: 0; }
  60% { transform: translateX(5%); opacity: 1; }
  100% { transform: translateX(0); }
}

        `}
      </style>
    </>
  );
}
