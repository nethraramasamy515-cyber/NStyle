
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center"
//       style={{
//   backgroundImage: `url(${heroShirt})`,
// }}
      style={{
  backgroundImage:
    "url('https://i.postimg.cc/3rtxZJ31/hero-shirt.png')",
}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-white">
        <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
          ✨ NEW COLLECTION 2026
        </span>

        <h1 className="text-6xl font-extrabold mt-6 leading-tight">
          Discover Your <br />
          Perfect Style
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-xl">
          Shop premium fashion for Men & Women with exclusive
          collections, amazing offers, and fast delivery.
        </p>

        <div className="mt-10 flex gap-5">
          <Link to="/shop">
            <button className="bg-purple-700 hover:bg-purple-800 px-8 py-4 rounded-xl font-bold text-lg transition">
              🛍 Shop Now
            </button>
          </Link>

          <Link to="/ai">
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition">
              🤖 AI Stylist
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;