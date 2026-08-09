
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setOrders([]);
        return;
      }

      const res = await axios.get(
        "http://localhost:5000/api/orders"
      );

      // Show only logged-in user's orders
      const userOrders = res.data.filter(
        (order) => order.email === user.email
      );

      setOrders(userOrders);
    } catch (err) {
      console.log("Order Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-6">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            📦 My Orders
          </h1>

          {loading ? (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <p className="text-xl">
                Loading orders...
              </p>
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

              <div className="text-6xl mb-4">
                📦
              </div>

              <h2 className="text-2xl font-bold mb-2">
                No Orders Found
              </h2>

              <p className="text-gray-500">
                You haven't placed any orders yet.
              </p>

            </div>
          ) : (
            <div className="space-y-6">

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >

                  <div className="flex flex-col md:flex-row md:justify-between gap-4">

                    <div>

                      <h2 className="text-xl font-bold">
                        Order #{order.id}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {order.product_name}
                      </p>

                      <p className="text-gray-500">
                        Quantity: {order.quantity}
                      </p>

                      <p className="text-gray-500">
                        Payment: {order.payment_method}
                      </p>

                    </div>

                    <div className="text-left md:text-right">

                      <p className="text-2xl font-bold">
                        ₹{order.total_price}
                      </p>

                      <span className="inline-block mt-3 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                        {order.status}
                      </span>

                    </div>

                  </div>

                  <div className="mt-6 border-t pt-4">

                    <p className="text-gray-500">
                      Order Date
                    </p>

                    <p className="font-semibold">
                      {new Date(
                        order.order_date
                      ).toLocaleString()}
                    </p>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Order;

