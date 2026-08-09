import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
          {product.discount}% OFF
        </div>
      )}

      {/* Wishlist */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToWishlist(product);
          toast.success(`${product.name} added to wishlist ❤️`);
        }}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition z-10"
      >
        <FiHeart size={20} />
      </button>

      {/* Product */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-5">
          <h3 className="text-xl font-semibold">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mt-2">
            <FaStar className="text-yellow-500 mr-2" />
            <span className="font-semibold">
              {product.rating || 4.5}
            </span>

            <span className="text-gray-500 text-sm ml-2">
              ({product.reviews || 120} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-3">
            <p className="text-2xl font-bold text-purple-700">
              ₹{product.price}
            </p>

            {product.oldPrice && (
              <span className="text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          {/* Delivery */}
          <p className="text-green-600 text-sm mt-2 font-medium">
            🚚 Free Delivery
          </p>
        </div>
      </Link>

      {/* Cart */}
      <div className="px-5 pb-5">
        <button
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} added to cart 🛒`);
          }}
          className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;