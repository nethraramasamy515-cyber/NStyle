
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://nstyle-backend.onrender.com";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= GET PRODUCTS =================

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/api/products`
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
      alert("❌ Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE PRODUCT =================

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API_URL}/api/products/${id}`
      );

      alert("✅ Product Deleted Successfully!");

      loadProducts();
    } catch (error) {
      console.log(error);
      alert("❌ Failed to delete product");
    }
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading Products...
        </h2>
      </div>
    );
  }

  // ================= UI =================

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          📦 Manage Products
        </h1>

        <Link to="/admin/add-product">
          <button className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800">
            ➕ Add Product
          </button>
        </Link>

      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

        <table className="w-full">

          <thead className="bg-black text-white">

            <tr>
              <th className="p-4">Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {products.length === 0 ? (

              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-gray-500"
                >
                  No products found.
                </td>
              </tr>

            ) : (

              products.map((product) => (

                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-100"
                >

                  {/* IMAGE */}

                  <td className="p-3">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />

                  </td>

                  {/* NAME */}

                  <td className="font-semibold">
                    {product.name}
                  </td>

                  {/* CATEGORY */}

                  <td>
                    {product.category}
                  </td>

                  {/* PRICE */}

                  <td>
                    ₹{Number(product.price).toFixed(2)}
                  </td>

                  {/* RATING */}

                  <td>
                    ⭐ {product.rating}
                  </td>

                  {/* ACTIONS */}

                  <td>

                    <Link
                      to={`/admin/edit-product/${product.id}`}
                    >
                      <button
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg mr-2 hover:bg-blue-700"
                      >
                        ✏️ Edit
                      </button>
                    </Link>

                    <button
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                      className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                    >
                      🗑️ Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageProducts;
