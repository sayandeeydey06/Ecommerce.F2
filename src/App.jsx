// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import OfferBanner from "./components/OfferBanner";
import BrandSection from "./components/BrandSection";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import ReturnPolicy from "./pages/ReturnPolicy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import PanchphoronAbout from "./pages/PanchphoronAbout";
import MalaKatPisInfo from "./pages/MalaCutPieceInfo";

import Home from "./pages/Home";

import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";

import ProtectedRoute from "./components/ProtectedRoute";
import ProductCard from "./components/ProductCard";
import FreeDeliveryBanner from "./components/FreeDeliveryBanner";
import { CouponProvider } from "./context/CouponContext";
import CouponsPage from "./pages/Coupons";
import MyCoupons from "./pages/MyCoupons";
import MalaCutPieceTabs from "./pages/MalaCutPieceTabs";
import PartnerShops from "./pages/PartnerShops";
import PartnerWithFsquare from "./pages/PartnerWithFsquare";
import FsquareRewards from "./pages/FsquareRewards";






import {
  PANCHPHORON_PRODUCTS,
  BIRYANI_PRODUCTS,
  MOMOS_PRODUCTS,
  BUSINESS_WHATSAPP,
} from "./data";


// ================================================
// ⭐ SEARCH-ENABLED HOMEPAGE FUNCTION
// ================================================
function HomePage() {
  const location = useLocation();
  const q = new URLSearchParams(location.search).get("search")?.toLowerCase();

  // Merge all product categories
  const allProducts = [
    ...PANCHPHORON_PRODUCTS.map((p) => ({ ...p, category: "Panchphoron" })),
    ...BIRYANI_PRODUCTS.map((p) => ({ ...p, category: "Biryani" })),
    ...MOMOS_PRODUCTS.map((p) => ({ ...p, category: "Momos" })),
  ];

  // Apply search filter
  const filtered = q
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : [];

  // If searching → show only results
  if (q) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">
          Search results for: <span className="text-purple-600">{q}</span>
        </h2>

        {filtered.length === 0 ? (
          <p className="text-gray-600">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id + p.category} product={p} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default: full beautiful homepage
  return <Home />;
}



// ================================================
// ⭐ APP ROUTES
// ================================================
export default function App() {
  return (
    <CouponProvider>
    <BrowserRouter>
     
      <ScrollToTop />
      <Header />
<div className="pt-6"></div>  {/* FIX: Add spacing below header */}

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />

        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/return-policy" element={<PageWrapper><ReturnPolicy /></PageWrapper>} />
        <Route path="/coupons" element={<PageWrapper><CouponsPage /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/about-panchphoron" element={<PageWrapper><PanchphoronAbout /></PageWrapper>} />
        <Route path="/malakatpis-info" element={<PageWrapper><MalaKatPisInfo /></PageWrapper>} />


        {/* PROTECTED ROUTES */}

        {/* HOME (with search engine) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* Panchphoron */}
        <Route
          path="/panchphoron"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <BrandSection
                  id="panchphoron"
                  title="Panchphoron Foods"
                  subtitle="Authentic homemade food items"
                  products={PANCHPHORON_PRODUCTS}
                  phone={BUSINESS_WHATSAPP}
                />
              </PageWrapper>
            </ProtectedRoute>
          }
        />

        {/* Mala Kat Pis */}
       <Route
  path="/malakatpis"
  element={
    <ProtectedRoute>
      <PageWrapper>
        <MalaCutPieceTabs />
      </PageWrapper>
    </ProtectedRoute>
  }
/>


        {/* Cart */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Cart />
              </PageWrapper>
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Profile />
              </PageWrapper>
            </ProtectedRoute>
          }
        />

        {/* Orders */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Orders />
              </PageWrapper>
            </ProtectedRoute>
          }
        />

        {/* Biryani */}
        <Route
          path="/biryani"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <BrandSection
                  id="biryani"
                  title="Biryani Hub"
                  subtitle="Delicious & authentic biryanis"
                  products={BIRYANI_PRODUCTS}
                  phone={BUSINESS_WHATSAPP}
                />
              </PageWrapper>
            </ProtectedRoute>
          }
        />

        {/* Momos */}
        <Route
          path="/momos"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <BrandSection
                  id="momos"
                  title="Momos Mania"
                  subtitle="Hot, soft & flavorful momos"
                  products={MOMOS_PRODUCTS}
                  phone={BUSINESS_WHATSAPP}
                />
              </PageWrapper>
            </ProtectedRoute>
          }
        />

        <Route
  path="/coupons"
  element={
    <ProtectedRoute>
      <PageWrapper>
        <MyCoupons />
      </PageWrapper>
    </ProtectedRoute>
  }
/>

{/* FSQUARE Pages */}
<Route
  path="/partner-shops"
  element={
    <ProtectedRoute>
      <PageWrapper>
        <PartnerShops />
      </PageWrapper>
    </ProtectedRoute>
  }
/>

<Route
  path="/partner-with-fsquare"
  element={
    <ProtectedRoute>
      <PageWrapper>
        <PartnerWithFsquare />
      </PageWrapper>
    </ProtectedRoute>
  }
/>

<Route
  path="/fsquare-rewards"
  element={
    <ProtectedRoute>
      <PageWrapper>
        <FsquareRewards />
      </PageWrapper>
    </ProtectedRoute>
  }
/>




      </Routes>

      <Footer />

    </BrowserRouter>
    </CouponProvider>
  );
}
