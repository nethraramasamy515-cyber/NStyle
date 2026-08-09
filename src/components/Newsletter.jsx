import { useState } from "react";
import { toast } from "react-toastify";

function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    toast.success("🎉 Successfully subscribed to NStyle!");
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-700 to-pink-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          📧 Join the NStyle Family
        </h2>

        <p className="mt-5 text-lg">
          Subscribe to receive exclusive offers, fashion trends, and new arrivals.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-96 p-4 rounded-xl text-black outline-none"
          />

          <button
            onClick={subscribe}
            className="bg-black hover:bg-gray-900 px-8 py-4 rounded-xl font-bold transition"
          >
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;