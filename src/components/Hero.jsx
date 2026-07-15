function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <h1 className="text-6xl font-bold mb-6">
        Your Style, Powered by AI
      </h1>

      <p className="text-xl max-w-2xl mb-8">
        Discover premium fashion with AI-powered recommendations,
        smart search, and a seamless shopping experience.
      </p>

      <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
        Shop Now
      </button>
    </section>
  );
}

export default Hero;