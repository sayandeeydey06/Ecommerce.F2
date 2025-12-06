import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, variant) => {
    const existing = cart.find(
      (item) => item.id === product.id && item.variant === variant
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1, variant }]);
    }
  };

  const increaseQty = (id, variant) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id, variant) => {
    setCart(
      cart
        .map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id, variant) => {
    setCart(cart.filter((item) => !(item.id === id && item.variant === variant)));
  };

  // ============================
  // DELIVERY & TOTAL CALCULATIONS
  // ============================

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const getDeliveryCharge = () => {
    return getSubtotal() >= 300 ? 0 : 20;
  };

  const getTotal = () => {
    return getSubtotal() + getDeliveryCharge();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        getSubtotal,
        getDeliveryCharge,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
