

import { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  // ================= GET ORDERS =================

  const loadOrders = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(res.data);
    } catch (err) {
      console.log(err);
      alert("❌ Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  // ================= UPDATE STATUS =================

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${id}`,
        {
          status: status,
        }
      );

      alert("✅ Order status updated!");

      loadOrders();
    } catch (err) {
      console.log(err);
      alert("❌ Failed to update order status");
    }
  };

  // ================= DELETE ORDER =================

  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/orders/${id}`
      );

      alert("🗑️ Order deleted successfully!");

      loadOrders();
    } catch (err) {
      console.log(err);
      alert("❌ Failed to delete order");
    }
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading Orders...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              📦 Admin Orders
            </h1>

            <p className="text-gray-500 mt-2">
              Manage customer orders and delivery status
            </p>
          </div>

          <button
            onClick={loadOrders}
            className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800"
          >
            🔄 Refresh
          </button>

        </div>

        {/* ORDER COUNT */}

        <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

          <p className="text-gray-500">
            Total Orders
          </p>

          <p className="text-3xl font-bold">
            {orders.length}
          </p>

        </div>

        {/* TABLE */}

        <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">

          <table className="w-full">

            <thead className="bg-black text-white">

              <tr>

                <th className="p-4">ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {orders.length === 0 ? (

                <tr>

                  <td
                    colSpan="10"
                    className="text-center py-10 text-gray-500"
                  >
                    No orders found.
                  </td>

                </tr>

              ) : (

                orders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-4 font-semibold">
                      #{order.id}
                    </td>

                    <td>
                      {order.user_name}
                    </td>

                    <td>
                      {order.email}
                    </td>

                    <td>
                      {order.product_name}
                    </td>

                    <td>
                      {order.quantity}
                    </td>

                    <td className="font-semibold">
                      ₹{Number(order.total_price).toFixed(2)}
                    </td>

                    <td>
                      {order.payment_method}
                    </td>

                    {/* STATUS */}

                    <td>

                      <select
                        value={order.status || "Pending"}
                        onChange={(e) =>
                          updateStatus(
                            order.id,
                            e.target.value
                          )
                        }
                        className="border rounded-lg px-3 py-2"
                      >

                        <option value="Pending">
                          Pending
                        </option>

                        <option value="Packed">
                          Packed
                        </option>

                        <option value="Shipped">
                          Shipped
                        </option>

                        <option value="Out for Delivery">
                          Out for Delivery
                        </option>

                        <option value="Delivered">
                          Delivered
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>

                      </select>

                    </td>

                    {/* DATE */}

                    <td>
                      {order.order_date
                        ? new Date(
                            order.order_date
                          ).toLocaleDateString()
                        : "-"}
                    </td>

                    {/* DELETE */}

                    <td>

                      <button
                        onClick={() =>
                          deleteOrder(order.id)
                        }
                        className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                      >
                        🗑️
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminOrders;

