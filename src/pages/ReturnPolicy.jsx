import React from "react";

export default function ReturnPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-0 py-12 text-gray-800 dark:text-gray-200">

      <h1 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Return & Refund Policy (Fashion Products Only)
      </h1>

      <p className="mb-4">
        Thank you for shopping with <strong>FSQUARE</strong>.  
        We want you to be fully satisfied with your purchase.  
        This Return & Refund Policy applies **only to Fashion items**  
        (Sarees, Kurtis, Earrings, Accessories, Clothing).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">✔ 3-Day Return Window</h2>
      <p className="mb-4">
        Customers may request a return **within 3 days** of receiving the product.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">✔ Eligible Reasons for Return</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Wrong product delivered</li>
        <li>Damaged or defective product</li>
        <li>Incorrect size or variant sent</li>
        <li>Major quality issue</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">❌ Non-Returnable Items</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Used or worn apparel</li>
        <li>Products without original tags</li>
        <li>Hygiene-sensitive items (Earrings, beauty items)</li>
        <li>Customized or altered fashion items</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">✔ Refund / Exchange Method</h2>
      <p className="mb-4">
        Once verified, customers may choose:
      </p>

      <ul className="list-disc ml-6 mb-4">
        <li><strong>Exchange</strong> for another product</li>
        <li><strong>Refund</strong> via UPI / Wallet / Bank Transfer</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">✔ How to Request a Return</h2>
      <p className="mb-4">Contact our support via WhatsApp:</p>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="text-indigo-600 dark:text-indigo-400 underline font-semibold"
        target="_blank"
      >
        Click here to start WhatsApp support →
      </a>

      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        *FSQUARE reserves the right to approve or reject return requests based on condition verification.
      </p>

    </div>
  );
}
