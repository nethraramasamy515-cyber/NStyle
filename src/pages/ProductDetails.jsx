// import { useParams } from "react-router-dom";
// import products from "../data/products";
// import { useCart } from "../context/CartContext";

// function ProductDetails() {
//   const { id } = useParams();
//   const { addToCart } = useCart();

//   const product = products.find((item) => item.id === Number(id));

//   if (!product) {
//     return (
//       <h1 className="text-center text-3xl mt-10">
//         Product Not Found
//       </h1>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full rounded-2xl shadow-lg"
//         />

//         <div>
//           <h1 className="text-4xl font-bold">{product.name}</h1>

//           <p className="text-gray-500 mt-3">
//             Category: {product.category}
//           </p>

//           <p className="text-3xl font-bold mt-5">
//             ₹{product.price}
//           </p>

//           {/* <button
//             onClick={() => addToCart(product)}
//             className="mt-8 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800"
//           >
//             Add to Cart
//           </button> */}

//           <button
//   onClick={() => {
//     console.log("Added product:", product);
//     addToCart(product);
//   }}
//   className="mt-8 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800"
// >
//   Add to Cart
// </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;



import { useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Navbar from "../components/Navbar";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Product Not Found
      </h1>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl shadow-xl"
          />

          {/* Product Info */}
          <div>

            <h1 className="text-4xl font-bold">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              <FaStar />
              <span>{product.rating || 4.8}</span>
            </div>

            <p className="text-gray-500 mt-4">
              Category: {product.category}
            </p>

            <h2 className="text-4xl font-bold mt-6 text-purple-700">
              ₹{product.price}
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Premium quality fashion product made with
              excellent craftsmanship. Perfect for everyday
              wear and special occasions.
            </p>

            <div className="flex gap-4 mt-10">

              <button
                onClick={() => {
                  addToCart(product);
                  toast.success("🛒 Added to Cart");
                }}
                className="bg-purple-700 text-white px-8 py-3 rounded-xl hover:bg-purple-800"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  addToWishlist(product);
                  toast.success("❤️ Added to Wishlist");
                }}
                className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-xl hover:bg-red-500 hover:text-white flex items-center gap-2"
              >
                <FiHeart />
                Wishlist
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ProductDetails;