// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// <Link to={`/product/${product.id}`}>
//   <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
//     {/* Your existing ProductCard content */}
//   </div>
// </Link>


// function ProductCard({ product }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-64 object-cover"
//       />

//       <div className="p-5">
//         <h3 className="text-xl font-semibold">{product.name}</h3>

//         <p className="text-gray-600 mt-2">
//           ₹{product.price}
//         </p>

//         <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;



import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300">
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

          <button
            onClick={(e) => {
              e.preventDefault(); // Prevents navigating when clicking the button
              addToCart(product);
            }}
            className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
<button
  onClick={(e) => {
    e.preventDefault();
    addToCart(product);
  }}
  className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
>
  Add to Cart
</button>
export default ProductCard;