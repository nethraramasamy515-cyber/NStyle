import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    rating: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/products",
        product
      );

      alert("✅ Product Added Successfully!");

      setProduct({
        name: "",
        price: "",
        category: "",
        rating: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
      alert("❌ Error Adding Product");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        ➕ Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          value={product.rating}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;