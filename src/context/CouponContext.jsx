// src/context/CouponContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("coupons") || "[]";
      setCoupons(JSON.parse(raw));
    } catch {
      setCoupons([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("coupons", JSON.stringify(coupons));
  }, [coupons]);

  const generateCoupon = (meta = {}) => {
    // simple unique id
    const id = `C-${Date.now()}-${Math.floor(Math.random() * 9000) + 1000}`;
    const newCoupon = {
      id,
      createdAt: new Date().toISOString(),
      meta,
      used: false,
    };
    setCoupons((c) => [newCoupon, ...c]);
    return newCoupon;
  };

  const markUsed = (id) => {
    setCoupons((c) => c.map((x) => (x.id === id ? { ...x, used: true } : x)));
  };

  const clearAll = () => {
    setCoupons([]);
  };

  return (
    <CouponContext.Provider
      value={{ coupons, setCoupons, generateCoupon, markUsed, clearAll }}
    >
      {children}
    </CouponContext.Provider>
  );
};

export const useCoupons = () => useContext(CouponContext);
