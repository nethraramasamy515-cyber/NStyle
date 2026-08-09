import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };
const deleteProduct = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );

    alert("✅ Product Deleted!");

    loadProducts();

  } catch (err) {
    console.log(err);

    alert("❌ Failed to delete product");
  }
};
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        📦 Manage Products
      </h1>

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
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-100"
              >
                <td className="p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>

                <td>{product.name}</td>

                <td>{product.category}</td>

                <td>₹{product.price}</td>

                <td>⭐ {product.rating}</td>

                <td>
                 {/* <button
  onClick={() => alert("Edit page will be built next!")}
  className="bg-blue-600 text-white px-3 py-2 rounded-lg mr-2 hover:bg-blue-700"
>
  ✏️ Edit
</button>
 */}
 <Link to={`/admin/edit-product/${product.id}`}>
  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg mr-2 hover:bg-blue-700">
     Edit
  </button>
</Link>

                  <button
  onClick={() => deleteProduct(product.id)}
  className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
>
  🗑 Delete
</button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageProducts;