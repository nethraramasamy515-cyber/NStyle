import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Navbar from "../components/Navbar";

const API_URL = "https://nstyle-backend.onrender.com";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/products`);

        const foundProduct = res.data.find(
          (item) => Number(item.id) === Number(id)
        );

        setProduct(foundProduct);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="text-center text-2xl font-semibold py-20">
          Loading Product...
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />

        <h1 className="text-center text-3xl font-bold mt-20">
          Product Not Found
        </h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/600x600?text=No+Image";
              }}
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <h1 className="text-4xl font-bold">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <FaStar className="text-yellow-500" />

              <span className="font-semibold">
                {product.rating || "4.5"}
              </span>
            </div>

            {/* Category */}
            <p className="text-gray-500 mt-4">
              Category: {product.category}
            </p>

            {/* Price */}
            <h2 className="text-4xl font-bold mt-6 text-purple-700">
              ₹{product.price}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-6 leading-8">
              Premium quality fashion product designed for
              comfort, style and everyday wear.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* Add To Cart */}
              <button
                onClick={() => {
                  addToCart(product);
                  toast.success(`${product.name} added to cart 🛒`);
                }}
                className="bg-purple-700 text-white px-8 py-3 rounded-xl hover:bg-purple-800 transition"
              >
                Add to Cart
              </button>

              {/* Wishlist */}
              <button
                onClick={() => {
                  addToWishlist(product);
                  toast.success(`${product.name} added to wishlist ❤️`);
                }}
                className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-xl hover:bg-red-500 hover:text-white flex items-center gap-2 transition"
              >
                <FiHeart size={20} />
                Wishlist
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;