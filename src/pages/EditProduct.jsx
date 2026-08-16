import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

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
  const [updating, setUpdating] = useState(false);

  // ================= LOAD PRODUCT =================

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/products`
        );

        const selected = res.data.find(
          (item) => Number(item.id) === Number(id)
        );

        if (!selected) {
          toast.error("❌ Product not found");
          navigate("/admin/products");
          return;
        }

        setProduct({
          name: selected.name || "",
          price: selected.price || "",
          category: selected.category || "",
          rating: selected.rating || "",
          image: selected.image || "",
        });

      } catch (error) {
        console.log("Load Product Error:", error);

        toast.error(
          "❌ Failed to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, navigate]);

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= UPDATE PRODUCT =================

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!product.name.trim()) {
      toast.error("Please enter product name");
      return;
    }

    if (!product.price || Number(product.price) <= 0) {
      toast.error("Please enter a valid price");
      return;
    }

    if (!product.category.trim()) {
      toast.error("Please enter category");
      return;
    }

    if (
      product.rating === "" ||
      Number(product.rating) < 0 ||
      Number(product.rating) > 5
    ) {
      toast.error("Rating must be between 0 and 5");
      return;
    }

    if (!product.image.trim()) {
      toast.error("Please enter image URL");
      return;
    }

    try {
      setUpdating(true);

      await axios.put(
        `${API_URL}/api/products/${id}`,
        {
          name: product.name,
          price: Number(product.price),
          category: product.category,
          rating: Number(product.rating),
          image: product.image,
        }
      );

      toast.success(
        "✅ Product Updated Successfully!"
      );

      setTimeout(() => {
        navigate("/admin/products");
      }, 1000);

    } catch (error) {
      console.log("Update Product Error:", error);

      toast.error(
        "❌ Failed to update product"
      );

    } finally {
      setUpdating(false);
    }
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="text-center">

          <div className="text-5xl mb-4">
            ⏳
          </div>

          <h2 className="text-2xl font-semibold">
            Loading Product...
          </h2>

        </div>

      </div>
    );
  }

  // ================= UI =================

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-3xl mx-auto">

        <button
          onClick={() =>
            navigate("/admin/products")
          }
          className="mb-6 text-purple-700 font-semibold hover:underline"
        >
          ← Back to Products
        </button>

        <h1 className="text-4xl font-bold mb-8">
          ✏️ Edit Product
        </h1>

        <form
          onSubmit={handleUpdate}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >

          {/* PRODUCT IMAGE PREVIEW */}

          {product.image && (
            <div className="mb-6">

              <p className="font-semibold mb-3">
                Image Preview
              </p>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-xl border"
                onError={(e) => {
                  e.currentTarget.style.display =
                    "none";
                }}
              />

            </div>
          )}

          {/* PRODUCT NAME */}

          <label className="block font-semibold mb-2">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-5"
            required
          />

          {/* PRICE */}

          <label className="block font-semibold mb-2">
            Price
          </label>

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-5"
            min="1"
            required
          />

          {/* CATEGORY */}

          <label className="block font-semibold mb-2">
            Category
          </label>

          <input
            type="text"
            name="category"
            placeholder="Example: Men, Women, Accessories"
            value={product.category}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-5"
            required
          />

          {/* RATING */}

          <label className="block font-semibold mb-2">
            Rating
          </label>

          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            name="rating"
            placeholder="Rating"
            value={product.rating}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-5"
            required
          />

          {/* IMAGE URL */}

          <label className="block font-semibold mb-2">
            Image URL
          </label>

          <input
            type="url"
            name="image"
            placeholder="https://..."
            value={product.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-8"
            required
          />

          {/* BUTTONS */}

          <div className="flex gap-4">

            <button
              type="button"
              onClick={() =>
                navigate("/admin/products")
              }
              className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={updating}
              className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 disabled:opacity-50"
            >
              {updating
                ? "Updating..."
                : "✏️ Update Product"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditProduct;