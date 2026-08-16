
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const API_URL = "https://nstyle-backend.onrender.com";

function TrackOrder() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [orderId, setOrderId] = useState(id || "");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const steps = [
    "Pending",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  // ================= TRACK ORDER =================

  const trackOrder = async (idToTrack = orderId) => {
    if (!idToTrack || !idToTrack.toString().trim()) {
      setNotFound(true);
      setOrder(null);
      return;
    }

    try {
      setLoading(true);
      setNotFound(false);
      setOrder(null);

      const response = await axios.get(
        `${API_URL}/api/orders/${idToTrack.toString().trim()}`
      );

      setOrder(response.data);
      setOrderId(idToTrack.toString());

    } catch (error) {
      console.error("Error loading order:", error);

      setOrder(null);
      setNotFound(true);

    } finally {
      setLoading(false);
    }
  };

  // ================= AUTO LOAD ORDER =================

  useEffect(() => {
    if (id) {
      setOrderId(id);
      trackOrder(id);
    }
  }, [id]);

  // ================= STATUS =================

  const currentStep = order
    ? steps.indexOf(order.status || "Pending")
    : -1;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-6">

        <div className="max-w-4xl mx-auto">

          {/* TITLE */}

          <h1 className="text-4xl font-bold text-purple-700 mb-8">
            📦 Track Your Order
          </h1>

          {/* SEARCH BOX */}

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

            <h2 className="text-xl font-semibold mb-4">
              Enter Your Order ID
            </h2>

            <div className="flex flex-col md:flex-row gap-3">

              <input
                type="number"
                placeholder="Example: 16"
                value={orderId}
                onChange={(e) =>
                  setOrderId(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    trackOrder();
                  }
                }}
                className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                onClick={() => trackOrder()}
                disabled={loading}
                className={`px-8 py-3 rounded-xl text-white font-semibold ${
                  loading
                    ? "bg-gray-400"
                    : "bg-purple-700 hover:bg-purple-800"
                }`}
              >
                {loading
                  ? "Searching..."
                  : "🔍 Track Order"}
              </button>

            </div>

            <p className="text-gray-500 text-sm mt-3">
              Enter your order ID, for example: 1, 2, 3, 16...
            </p>

          </div>

          {/* LOADING */}

          {loading && (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

              <div className="text-4xl mb-4">
                ⏳
              </div>

              <h2 className="text-xl font-semibold">
                Loading Order...
              </h2>

            </div>
          )}

          {/* NOT FOUND */}

          {!loading && notFound && (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

              <div className="text-5xl mb-4">
                ❌
              </div>

              <h2 className="text-2xl font-bold text-red-600">
                Order Not Found
              </h2>

              <p className="text-gray-500 mt-2">
                Please check your Order ID and try again.
              </p>

            </div>
          )}

          {/* ORDER DETAILS */}

          {!loading && order && (

            <div className="bg-white rounded-2xl shadow-xl p-8">

              {/* ORDER HEADER */}

              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">

                <div>

                  <h2 className="text-2xl font-bold">
                    Order #{order.id}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Product: {order.product_name}
                  </p>

                  <p className="text-gray-500">
                    Quantity: {order.quantity}
                  </p>

                </div>

                <div className="text-left md:text-right">

                  <p className="text-gray-500">
                    Total Amount
                  </p>

                  <p className="text-2xl font-bold">
                    ₹
                    {Number(
                      order.total_price
                    ).toFixed(2)}
                  </p>

                </div>

              </div>

              {/* CURRENT STATUS */}

              <div className="bg-gray-100 rounded-xl p-5 mb-8">

                <p className="text-gray-500">
                  Current Status
                </p>

                <p className="text-2xl font-bold text-green-600 mt-1">
                  {order.status || "Pending"}
                </p>

              </div>

              {/* ORDER PROGRESS */}

              <h2 className="text-xl font-bold mb-6">
                Order Progress
              </h2>

              <div className="space-y-6">

                {steps.map((step, index) => (

                  <div
                    key={step}
                    className="flex items-center gap-4"
                  >

                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold ${
                        index <= currentStep
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    >
                      {index <= currentStep
                        ? "✓"
                        : index + 1}
                    </div>

                    <div>

                      <h3
                        className={`text-lg font-semibold ${
                          index <= currentStep
                            ? "text-green-600"
                            : "text-gray-400"
                        }`}
                      >
                        {step}
                      </h3>

                      {index === currentStep && (
                        <p className="text-sm text-gray-500">
                          Current order status
                        </p>
                      )}

                    </div>

                  </div>

                ))}

              </div>

              {/* DELIVERY DETAILS */}

              <div className="border-t mt-8 pt-6">

                <h2 className="text-xl font-bold mb-4">
                  📍 Delivery Details
                </h2>

                <p>
                  <strong>Name:</strong>{" "}
                  {order.user_name || "-"}
                </p>

                <p className="mt-1">
                  <strong>Email:</strong>{" "}
                  {order.email || "-"}
                </p>

                <p className="mt-1">
                  <strong>Address:</strong>{" "}
                  {order.address || "-"}
                </p>

                <p className="mt-1">
                  <strong>City:</strong>{" "}
                  {order.city || "-"}
                </p>

                <p className="mt-1">
                  <strong>PIN Code:</strong>{" "}
                  {order.pinCode || "-"}
                </p>

                <p className="mt-1">
                  <strong>Payment:</strong>{" "}
                  {order.payment_method || "-"}
                </p>

              </div>

            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default TrackOrder;
