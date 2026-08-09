import { Link } from "react-router-dom";
import DashboardCards from "../components/DashboardCards";
import SalesChart from "../components/SalesChart";

function Admin() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-5xl font-bold mb-10">
        🚀 NStyle Admin Dashboard
      </h1>

      {/* Dashboard Statistics */}
      <DashboardCards />

      {/* Admin Menu */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <Link
          to="/admin/add-product"
          className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold">
            ➕ Add Product
          </h2>

          <p className="text-gray-500 mt-3">
            Add new products
          </p>
        </Link>

        <Link
          to="/admin/products"
          className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold">
            📦 Products
          </h2>

          <p className="text-gray-500 mt-3">
            View & Manage Products
          </p>
        </Link>

        <Link
          to="/admin/orders"
          className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold">
            🛒 Orders
          </h2>

          <p className="text-gray-500 mt-3">
            Customer Orders
          </p>
        </Link>

        <Link
          to="/admin/users"
          className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold">
            👥 Users
          </h2>

          <p className="text-gray-500 mt-3">
            Registered Users
          </p>
        </Link>

      </div>

      {/* Sales Chart */}
      <SalesChart />

    </div>
  );
}

export default Admin;