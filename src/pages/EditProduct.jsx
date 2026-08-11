
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://nstyle-backend.onrender.com";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    rating: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);

  // ================= GET PRODUCT =================

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/products`);

        const selected = res.data.find(
          (item) => item.id === Number(id)
        );

        if (selected) {
          setProduct({
            name: selected.name || "",
            price: selected.price || "",
            category: selected.category || "",
            rating: selected.rating || "",
            image: selected.image || "",
          });
        } else {
          alert("❌ Product not found");
          navigate("/admin/products");
        }
      } catch (error) {
        console.log(error);
        alert("❌ Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, navigate]);

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // ================= UPDATE PRODUCT =================

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${API_URL}/api/products/${id}`,
        product
      );

      alert("✅ Product Updated Successfully!");

      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      alert("❌ Failed to update product");
    }
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading Product...
        </h2>
      </div>
    );
  }

  // ================= UI =================

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        ✏️ Edit Product
      </h1>

      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-2xl shadow-xl"
      >

        {/* PRODUCT NAME */}

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        {/* PRICE */}

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        {/* CATEGORY */}

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        {/* RATING */}

        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          name="rating"
          placeholder="Rating"
          value={product.rating}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        {/* IMAGE */}

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
          required
        />

        {/* UPDATE BUTTON */}

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          ✏️ Update Product
        </button>

      </form>
    </div>
  );
}

export default EditProduct;