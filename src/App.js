import { useState } from "react";

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order received! Payment integration coming soon.");
  };

  return (
    <div className="min-h-screen bg-[#013220] text-[#FFD700] flex flex-col items-center px-6 py-12 font-serif">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          AENORA
        </h1>
        <h2 className="mt-2 text-2xl md:text-3xl italic text-[#FFD700]/80">
          — THE SPEAKING SILENCE —
        </h2>
        <p className="mt-6 text-lg text-[#FFD700]/90">
          A journey into silence, mystery, and the golden echoes of existence.
        </p>
        <button className="mt-8 bg-[#FFD700] text-[#013220] px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-yellow-400 transition">
          Order Now
        </button>
      </section>

      {/* About Section */}
      <section className="mt-20 max-w-2xl text-center">
        <h3 className="text-2xl font-semibold mb-4">About the Book</h3>
        <p className="text-[#FFD700]/90 leading-relaxed">
          Within these pages lies a whispered truth — a silence that speaks,
          a philosophy that breathes, a golden thread between thought and
          eternity. This book is an invitation to pause, listen, and awaken.
        </p>
      </section>

      {/* Order Section */}
      <section className="mt-20 w-full max-w-lg">
        <h3 className="text-2xl font-semibold mb-6 text-center">Order Now</h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-[#012b1b] p-8 rounded-xl shadow-lg border border-[#FFD700]/40"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#001a10] border border-[#FFD700]/30 text-[#FFD700] placeholder-[#FFD700]/50 focus:outline-none focus:border-[#FFD700]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#001a10] border border-[#FFD700]/30 text-[#FFD700] placeholder-[#FFD700]/50 focus:outline-none focus:border-[#FFD700]"
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#001a10] border border-[#FFD700]/30 text-[#FFD700] placeholder-[#FFD700]/50 focus:outline-none focus:border-[#FFD700]"
          />

          {/* Placeholder for Payment Integration */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-[#013220] py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition"
          >
            Stripe/PayPal integration here
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-[#FFD700]/70 text-sm text-center">
        © 2025 Aeora. All rights reserved.
      </footer>
    </div>
  );
}
