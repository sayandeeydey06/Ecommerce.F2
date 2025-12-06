// src/data/products.js

// WhatsApp business number
export const BUSINESS_WHATSAPP = "YOUR_PHONE_NUMBER"; 
// Example: "919876543210"

export const PANCHPHORON_PRODUCTS = [
  {
    id: "egg-roll-001",
    name: "Egg Roll",
    price: 60,
    image: "/products/egg-roll.png",
    variants: [
      { label: "Single Egg", price: 60 },
      { label: "Double Egg", price: 80 }
    ]
  },

  {
    id: "chowmein-001",
    name: "Chicken Chowmein",
    price: 70,
    image: "/products/chowmein.png",
    variants: [
      { label: "Half Plate", price: 50 },
      { label: "Full Plate", price: 70 }
    ]
  },

  {
    id: "pakoda-001",
    name: "Chicken Pakora",
    price: 80,
    image: "/products/chicken-pakoda.png",
    variants: [
      { label: "4 Pieces", price: 80 },
      { label: "8 Pieces", price: 150 }
    ]
  }
];




export const MALA_PRODUCTS = [
  {
    id: 1,
    name: "Handmade Earrings",
    price: "₹249",
    image: "/images/earring1.jpg",
    description: "Beautiful handcrafted earrings."
  },
  {
    id: 2,
    name: "Cotton Kurti",
    price: "₹499",
    image: "/images/kurti1.jpg",
    description: "Premium quality women's kurti."
  }
];
