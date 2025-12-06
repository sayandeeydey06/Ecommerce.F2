// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    method: "email",
    _hp: "",
  });

  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(null);

  const BUSINESS_WHATSAPP = "91XXXXXXXXXX"; // put your number

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() && !form.phone.trim()) {
      e.contact = "Provide an email or phone so we can reply.";
    } else {
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
        e.email = "Please enter a valid email.";
      if (form.phone && !/^[\d\s()+-]{7,20}$/.test(form.phone))
        e.phone = "Please enter a valid phone number.";
    }
    if (!form.subject.trim()) e.subject = "Please add a short subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Tell us more (at least 10 characters).";

    if (form._hp && form._hp.trim().length > 0) {
      e._hp = "Spam detected";
    }

    return e;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSuccess(null);

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSaving(true);

    try {
      const existing = JSON.parse(localStorage.getItem("contacts") || "[]");
      const payload = {
        id: Date.now(),
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        method: form.method,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem("contacts", JSON.stringify([payload, ...existing]));

      setTimeout(() => {
        setSaving(false);
        setSuccess(
          "Thanks — your message was saved. We'll contact you shortly!"
        );
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          method: "email",
          _hp: "",
        });
      }, 600);
    } catch (err) {
      setSaving(false);
      setSuccess("Could not save your message (localStorage error).");
      console.error(err);
    }
  };

  // ✅ OPEN GMAIL IN BROWSER (no email app)
  const openMail = () => {
    const subject = encodeURIComponent(
      form.subject || "Customer message from FSQUARE website"
    );

    const body = encodeURIComponent(
      `Hi FSQUARE Team,\n\n` +
        `My name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n\n` +
        `Message:\n${form.message}\n\n` +
        `Thank you.`
    );

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=fsquare0010@gmail.com&su=${subject}&body=${body}`;

    // Open Gmail web in a new tab
    window.open(url, "_blank");
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi, I want to contact you about: ${
        form.subject || "General query"
      }\n\n${form.message}`
    );
    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-1 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have a question or want to place an order? Fill the form below — we’ll
        reply as soon as possible. You can also contact us directly by email or
        WhatsApp.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        {/* honeypot (hidden) */}
        <input
          type="text"
          name="_hp"
          value={form._hp}
          onChange={handleChange}
          className="hidden"
          autoComplete="off"
          tabIndex="-1"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Full name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-300"
              placeholder="Your full name"
              required
            />
            {errors.name && (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            )}
          </label>

          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-300"
              placeholder="you@example.com"
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Phone</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-300"
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
            )}
          </label>

          <label className="block">
            <span className="text-sm font-medium">Preferred contact</span>
            <select
              name="method"
              value={form.method}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-300"
            >
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="phone">Phone call / SMS</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium">Subject</span>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-300"
            placeholder="What is this about?"
            required
          />
          {errors.subject && (
            <div className="text-red-500 text-sm mt-1">{errors.subject}</div>
          )}
        </label>

        <label className="block">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-300 min-h-[120px]"
            placeholder="Tell us the details..."
            required
          />
          {errors.message && (
            <div className="text-red-500 text-sm mt-1">{errors.message}</div>
          )}
        </label>

        {errors.contact && (
          <div className="text-red-500 text-sm">{errors.contact}</div>
        )}
        {errors._hp && (
          <div className="text-red-500 text-sm">{errors._hp}</div>
        )}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-3">
           

            <button
              type="button"
              onClick={openMail}
              className="px-5 py-2 bg-blue-100 text-gray-800 rounded-lg hover:bg-blue-200"
            >
              Email us
            </button>

            <button
              type="button"
              onClick={openWhatsApp}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              WhatsApp
            </button>
          </div>

          <div className="text-sm text-gray-500">
            We'll typically reply within 24 hours.
          </div>
        </div>

        {success && (
          <div className="mt-3 text-green-600 font-medium">{success}</div>
        )}
      </form>
    </div>
  );
}
