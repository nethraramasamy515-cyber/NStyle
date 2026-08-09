
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function TrackOrder() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const orderId = 15;

  const steps = [
    "Pending",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/orders/${orderId}`
      );

      setOrder(response.data);
    } catch (error) {
      console.error("Error loading order:", error);
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-2xl font-bold">
            Loading Order...
          </h2>
        </div>
      </>
    );
  }

  if (!order) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-red-600">
            ❌ Order Not Found
          </h2>
        </div>
      </>
    );
  }

  const currentStep = steps.indexOf(order.status);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-6">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold text-purple-700 mb-8">
            📦 Track Your Order
          </h1>

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-2xl font-semibold mb-2">
              Order ID: #{order.id}
            </h2>

            <p className="text-gray-500 mb-2">
              Product: {order.product_name}
            </p>

            <p className="text-gray-500 mb-6">
              Quantity: {order.quantity}
            </p>

            <div className="bg-gray-100 rounded-xl p-4 mb-8">

              <p className="text-gray-500">
                Current Status
              </p>

              <p className="text-2xl font-bold text-green-600">
                {order.status}
              </p>

            </div>

            <div className="space-y-6">

              {steps.map((step, index) => (

                <div
                  key={step}
                  className="flex items-center gap-4"
                >

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      index <= currentStep
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  >
                    {index <= currentStep
                      ? "✓"
                      : index + 1}
                  </div>

                  <h3
                    className={`text-lg font-medium ${
                      index <= currentStep
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default TrackOrder;

