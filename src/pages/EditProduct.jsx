import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const selected = res.data.find(
          (item) => item.id === Number(id)
        );

        if (selected) {
          setProduct(selected);
        }
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://localhost:5000/api/products/${id}`,
      product
    );

    alert("✅ Product Updated!");

    navigate("/admin/products");
  };

  return (
    <div className="max-w-3xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-8">
        ✏ Edit Product
      </h1>

      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-2xl shadow-xl"
      >
        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="category"
          value={product.category}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="rating"
          value={product.rating}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-6"
          name="image"
          value={product.image}
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white py-3 rounded-xl">
          Update Product
        </button>

      </form>

    </div>
  );
}

export default EditProduct;