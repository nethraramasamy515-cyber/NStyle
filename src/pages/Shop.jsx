
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const API_URL = "https://nstyle-backend.onrender.com";

function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/products`);

        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = [...products]
    .filter((product) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "low-high") {
        return Number(a.price) - Number(b.price);
      }

      if (sortBy === "high-low") {
        return Number(b.price) - Number(a.price);
      }

      if (sortBy === "a-z") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-8">
          Shop
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border mb-6"
        />

        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">

          <div className="flex flex-wrap gap-3">
            {[
              "All",
              "Women",
              "Men",
              "Shoes",
              "Bags",
              "Accessories",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full ${
                  category === cat
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="default">Sort By</option>
            <option value="low-high">
              Price: Low → High
            </option>
            <option value="high-low">
              Price: High → Low
            </option>
            <option value="a-z">
              Name: A → Z
            </option>
          </select>

        </div>

        {loading ? (
          <div className="text-center text-2xl font-semibold py-20">
            Loading Products...
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center text-xl text-gray-500 py-20">
            No products found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Shop;
