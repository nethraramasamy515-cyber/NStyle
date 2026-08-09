import products from "../data/products";
import ProductCard from "./ProductCard";

function BestSellers() {
  const bestSellers = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-semibold text-sm">
            🔥 Trending Collection
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-5">
            Best Sellers
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Discover our most loved fashion products chosen by thousands of happy customers.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-purple-700">
              15K+
            </h3>
            <p className="text-gray-500 mt-2">
              Happy Customers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-pink-600">
              50K+
            </h3>
            <p className="text-gray-500 mt-2">
              Products Sold
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-yellow-500">
              4.9★
            </h3>
            <p className="text-gray-500 mt-2">
              Customer Rating
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-green-600">
              100%
            </h3>
            <p className="text-gray-500 mt-2">
              Premium Quality
            </p>
          </div>

        </div>

        {/* Products */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {bestSellers.map((product) => (
            <div key={product.id} className="relative">

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                🏆 Top Rated
              </div>

              <ProductCard product={product} />

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-gradient-to-r from-purple-700 to-pink-600 rounded-3xl p-10 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold">
            🎉 Exclusive Fashion Sale
          </h2>

          <p className="mt-4 text-lg">
            Get up to <span className="font-bold">50% OFF</span> on selected collections.
          </p>

          <button className="mt-8 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Shop Best Sellers
          </button>

        </div>

      </div>
    </section>
  );
}

export default BestSellers;