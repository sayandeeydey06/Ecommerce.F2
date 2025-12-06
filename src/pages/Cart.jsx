import { useCart } from "../context/CartContext";
import { BUSINESS_WHATSAPP } from "../data";
import { useCoupons } from "../context/CouponContext";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    getSubtotal,
    getDeliveryCharge,
    getTotal,
  } = useCart();
  

  const { generateCoupon } = useCoupons();

  const orderOnWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let msg = "Hello! I want to order:\n\n";

    cart.forEach((item) => {
     msg += `• ${item.name} [${item.variant}] × ${item.qty} — ₹${item.price * item.qty}\n`;

    });

    msg += `\nSubtotal: ₹${getSubtotal()}`;
    msg += `\nDelivery Charge: ₹${getDeliveryCharge()}`;
    msg += `\nFinal Total: ₹${getTotal()}`;
    msg += `\n\nPlease confirm my order.`;

    const coupon = generateCoupon({ subtotal: getSubtotal(), orderPreview: cart.slice(0,5) });

    const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
      msg
    )}`;

    window.open(url, "_blank");

    


    // Inform user they earned a coupon
  setTimeout(() => {
    alert(`✅ Order initiated. You earned 1 coupon (${coupon.id}). Check My Coupons page.`);
  }, 350);

  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id + item.variant}
              className="rounded-lg p-4 border bg-white dark:bg-gray-800 mb-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Variant: {item.variant}
                  </p>
                  <p>₹{item.price} × {item.qty}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id, item.variant)}
                    className="px-2 bg-gray-200 dark:bg-gray-700 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id, item.variant)}
                    className="px-2 bg-gray-200 dark:bg-gray-700 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id, item.variant)}
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* BILLING SECTION */}
          <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
            <h2 className="text-xl font-bold">Billing Summary</h2>

            <p className="mt-2">Subtotal: ₹{getSubtotal()}</p>

            <p className="mt-1">
              Delivery Charge:{" "}
              {getSubtotal() >= 300 ? (
                <span className="text-green-600 font-semibold">FREE</span>
              ) : (
                <span className="text-red-600 font-semibold">₹20</span>
              )}
            </p>

            <h2 className="text-2xl font-bold mt-3">
              Final Total: ₹{getTotal()}
            </h2>
          </div>

          <button
            onClick={orderOnWhatsApp}
            className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold"
          >
            Order on WhatsApp
          </button>
        </>
      )}
    </div>
  );
}
