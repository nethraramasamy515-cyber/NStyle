function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{product.name}</h3>

        <p className="text-gray-600 mt-2">
          ₹{product.price}
        </p>

        <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;