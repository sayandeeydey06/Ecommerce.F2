import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCoupons } from "../context/CouponContext";

export default function Navbar() {
  const { cart } = useCart();
  const { coupons } = useCoupons();

  return (
    <nav className="
  w-full 
  bg-gradient-to-r from-[#efedfb] to-[#EEF2FF]
  dark:bg-gradient-to-r dark:from-[#0F172A] dark:to-[#1E1B4B]
  shadow-sm 
  sticky top-0 z-50
">

      <div className="
        max-w-7xl mx-auto 
        flex items-center justify-between 
        py-3 px-6
      ">

        {/* Brand */}
        <Link 
          to="/" 
          className="text-xl font-bold text-[#4F46E5] dark:text-white"
        >
          FSQUARE
        </Link>

        // example render:
<Link to="/coupons" className="relative">
  Coupons
  {coupons.length > 0 && <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2">{coupons.length}</span>}
</Link>

        {/* Menu Items */}
        <div className="
          flex items-center 
          space-x-6 
          text-gray-700 dark:text-gray-200 
          text-sm md:text-base
        ">
          <Link to="/" className="hover:text-[#4F46E5]">Home</Link>
          <Link to="/panchphoron" className="hover:text-[#4F46E5]">Panchphoron</Link>
          <Link to="/malakatpis" className="hover:text-[#4F46E5]">Mala Cut Piece</Link>
          <Link className="hover:text-indigo-500" to="/biryani">Biryani</Link>
<Link className="hover:text-indigo-500" to="/momos">Momos</Link>


          <Link to="/contact" className="hover:text-indigo-500">Contact</Link>

          <Link to="/cart" className="hover:text-[#4F46E5]">
            Cart ({cart.length})
          </Link>

          
        </div>

      </div>
    </nav>
  );
}
