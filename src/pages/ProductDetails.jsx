    
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1 className="text-center mt-20">Product Not Found</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-12">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-3xl shadow-lg"
        />

        <div>
          <h1 className="text-5xl font-bold">{product.name}</h1>

          <p className="text-yellow-500 text-xl mt-4">
            ⭐ {product.rating}
          </p>

          <div className="mt-6">
            <span className="text-4xl font-bold">
              ₹{product.price}
            </span>

            <span className="line-through text-gray-400 ml-4">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="mt-8 text-gray-600">
            Premium quality fashion product designed for comfort and style.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;