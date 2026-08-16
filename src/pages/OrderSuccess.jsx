import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

const API_URL = "https://nstyle-backend.onrender.com";

function OrderSuccess() {
  const { clearCart } = useCart();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLatestOrder();
  }, []);

  const loadLatestOrder = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) {
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `${API_URL}/api/orders`
      );

      const userOrders = response.data.filter(
        (item) => item.email === user.email
      );

      if (userOrders.length > 0) {
        // Latest order
        const latestOrder = userOrders[0];

        setOrder(latestOrder);

        // Clear cart after successful order
        clearCart();
      }

    } catch (error) {
      console.error(
        "Error loading latest order:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="text-center">

          <div className="text-5xl mb-4">
            ⏳
          </div>

          <h2 className="text-2xl font-bold">
            Loading Order...
          </h2>

        </div>

      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

        <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-lg w-full">

          <div className="text-6xl mb-4">
            ❌
          </div>

          <h1 className="text-3xl font-bold text-red-600">
            Order Not Found
          </h1>

          <p className="text-gray-500 mt-3">
            We couldn't find your latest order.
          </p>

          <Link to="/shop">
            <button className="mt-8 bg-purple-700 text-white px-8 py-3 rounded-xl">
              🛍 Continue Shopping
            </button>
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-10">

      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-lg w-full">

        {/* SUCCESS */}

        <div className="text-7xl mb-4">
          🎉
        </div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 text-lg">

          Thank you for shopping with

          <span className="font-bold text-purple-700">
            {" "}NStyle
          </span>

        </p>

        {/* ORDER ID */}

        <div className="bg-gray-100 rounded-xl p-5 mt-8">

          <p className="text-gray-500">
            Order ID
          </p>

          <h2 className="text-3xl font-bold">
            #{order.id}
          </h2>

        </div>

        {/* PRODUCT */}

        <div className="text-left bg-purple-50 rounded-xl p-5 mt-6">

          <h3 className="font-bold text-lg mb-3">
            📦 Order Details
          </h3>

          <p>
            <strong>Product:</strong>{" "}
            {order.product_name}
          </p>

          <p className="mt-2">
            <strong>Quantity:</strong>{" "}
            {order.quantity}
          </p>

          <p className="mt-2">
            <strong>Total:</strong>{" "}
            ₹{Number(order.total_price).toFixed(2)}
          </p>

          <p className="mt-2">
            <strong>Payment:</strong>{" "}
            {order.payment_method}
          </p>

          <p className="mt-2">
            <strong>Status:</strong>{" "}

            <span className="text-green-600 font-semibold">
              {order.status || "Pending"}
            </span>

          </p>

        </div>

        {/* DELIVERY */}

        <div className="text-left bg-gray-50 rounded-xl p-5 mt-4">

          <h3 className="font-bold text-lg mb-3">
            📍 Delivery Address
          </h3>

          <p>
            {order.user_name}
          </p>

          <p>
            {order.address || "-"}
          </p>

          <p>
            {order.city || "-"} -{" "}
            {order.pinCode || "-"}
          </p>

        </div>

        <p className="mt-6 text-gray-600">

          Your order will be delivered within

          <span className="font-semibold">
            {" "}3–5 business days.
          </span>

        </p>

        {/* BUTTONS */}

        <div className="mt-8 space-y-4">

          <Link to="/track-order">

            <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">

              📦 Track Order

            </button>

          </Link>

          <Link to="/orders">

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">

              📋 My Orders

            </button>

          </Link>

          <Link to="/">

            <button className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition">

              🛍 Continue Shopping

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;