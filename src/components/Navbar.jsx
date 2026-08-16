import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
} from "react-icons/fi";

import SearchBar from "./SearchBar";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();

  const isAdmin =
    user?.email === "nethraramasamy515@gmail.com";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between gap-6">

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold text-purple-700"
      >
        NStyle
      </Link>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <SearchBar />
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex gap-5 font-medium items-center">

        <li>
          <Link
            to="/"
            className="hover:text-purple-700"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/shop"
            className="hover:text-purple-700"
          >
            Shop
          </Link>
        </li>

        <li>
          <Link
            to="/shop"
            className="hover:text-purple-700"
          >
            Categories
          </Link>
        </li>

        {user && (
          <li>
            <Link
              to="/orders"
              className="hover:text-purple-700"
            >
              Orders
            </Link>
          </li>
        )}

        {/* ADMIN */}
        {isAdmin && (
          <li>
            <Link
              to="/admin"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              👑 Admin
            </Link>
          </li>
        )}

        {/* AI */}
        <li>
          <Link
            to="/ai"
            className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
          >
            🤖 AI Assistant
          </Link>
        </li>

      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Wishlist */}
        <div className="relative">

          <Link to="/wishlist">

            <FiHeart
              className="cursor-pointer hover:text-red-500 text-2xl"
            />

          </Link>

          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          )}

        </div>

        {/* Cart */}
        <div className="relative">

          <Link to="/cart">

            <FiShoppingCart
              className="cursor-pointer hover:text-purple-700 text-2xl"
            />

          </Link>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}
            </span>
          )}

        </div>

        {/* User */}
        {user ? (

          <div className="flex items-center gap-3">

            <Link
              to="/profile"
              className="text-sm font-semibold text-purple-700 hover:underline"
            >
              👋 {user.name}
            </Link>

            <button
              onClick={logout}
              className="bg-red-500 text-white text-sm px-3 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>

        ) : (

          <Link to="/login">

            <FiUser
              className="hover:text-purple-700 text-2xl"
            />

          </Link>

        )}

      </div>

    </nav>
  );
}

export default Navbar;