import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'

// ✅ IMPORTANT: Import CartProvider
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="texture-bg">
  <div className="main-container">
    <CartProvider>
      <App />
    </CartProvider>
  </div>
</div>
+
  </React.StrictMode>
);
