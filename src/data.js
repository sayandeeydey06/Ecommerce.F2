// Your Business WhatsApp Number
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
    image: "/products/chicken-pakora.png",
    variants: [
      { label: "4 Pieces", price: 80 },
      { label: "8 Pieces", price: 150 }
    ]
  },

  {
    id: "chicken-roll-001",
    name: "Chicken Roll",
    price: 60,
    image: "/products/chicken-roll.png",
  },

  {
    id: "veg-chowmein-001",
    name: "Veg Chowmein",
    price: 60,
    image: "/products/veg-chowmein.png",
    variants: [
      { label: "Half Plate", price: 50 },
      { label: "Full Plate", price: 70 }
    ]
  },
];


export const MALA_CUT_PIECE_MEN = [
  {
    id: "men1",
    name: "Men's Black Hoodie",
    price: 799,
    image: "/products/hoodie-black.png",  // FIXED KEY NAME
  },

  {
    id: "men2",
    name: "Men's Oversized Tee",
    price: 399,
    img: "/products/mala-men-2.jpg",
  },
];

export const MALA_CUT_PIECE_WOMEN = [
  {
    id: "women1",
    name: "Women's Printed Kurti",
    price: 499,
    img: "/products/mala-women-1.jpg",
  },
  {
    id: "women2",
    name: "Women's Western Top",
    price: 399,
    img: "/products/mala-women-2.jpg",
  },
];


/* ✅ FIX ADDED — REQUIRED FOR VERCEL BUILD */
export const MALA_CUT_PIECE_PRODUCTS = [
  ...MALA_CUT_PIECE_MEN,
  ...MALA_CUT_PIECE_WOMEN,
];


export const BIRYANI_PRODUCTS = [
  {
    id: "biryani-001",
    name: "Chicken Biryani",
    price: 80,
    image: "/products/chicken-biryani.png",
    variants: [
      { label: "Half Plate", price: 80 },
      { label: "Full Plate", price: 140 }
    ]
  },
  {
    id: "biryani-002",
    name: "Egg Biryani",
    price: 80,
    image: "/products/egg-biryani.png",
    variants: [
      { label: "Half Plate", price: 70 },
      { label: "Full Plate", price: 120 }
    ]
  }
];


export const MOMOS_PRODUCTS = [
  {
    id: "momos-001",
    name: "Chicken Momos",
    price: 80,
    image: "/products/momos.png",
    variants: [
      { label: "6 Pieces", price: 80 },
      { label: "10 Pieces", price: 120 }
    ]
  },

  {
    id: "momos-002",
    name: "Veg Momos",
    price: 80,
    image: "/products/veg-momos.png",
    variants: [
      { label: "6 Pieces", price: 80 },
      { label: "10 Pieces", price: 120 }
    ]
  }
];


// WhatsApp Business Number
export const BUSINESS_WHATSAPP = "91XXXXXXXXXX";

 
   





