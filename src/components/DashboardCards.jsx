import { useEffect, useState } from "react";
import axios from "axios";

function DashboardCards() {
  const [data, setData] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    revenue: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-gray-500 text-lg">📦 Products</h2>
        <p className="text-4xl font-bold text-blue-600 mt-3">
          {data.totalProducts}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-gray-500 text-lg">👥 Users</h2>
        <p className="text-4xl font-bold text-green-600 mt-3">
          {data.totalUsers}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-gray-500 text-lg">🛒 Orders</h2>
        <p className="text-4xl font-bold text-orange-600 mt-3">
          {data.totalOrders}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-gray-500 text-lg">💰 Revenue</h2>
        <p className="text-4xl font-bold text-purple-600 mt-3">
          ₹{data.revenue}
        </p>
      </div>

    </div>
  );
}

export default DashboardCards;