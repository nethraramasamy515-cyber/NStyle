// import { useWishlist } from "../context/WishlistContext";
// import Navbar from "../components/Navbar";

// function Wishlist() {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-6xl mx-auto py-10 px-6">
//         <h1 className="text-4xl font-bold mb-8">
//           ❤️ My Wishlist
//         </h1>

//         {wishlist.length === 0 ? (
//           <h2 className="text-gray-500 text-xl">
//             Your wishlist is empty.
//           </h2>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {wishlist.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-60 object-cover"
//                 />

//                 <div className="p-5">
//                   <h2 className="text-xl font-bold">
//                     {item.name}
//                   </h2>

//                   <p className="text-gray-600 mt-2">
//                     ₹{item.price}
//                   </p>

//                   <button
//                     onClick={() => removeFromWishlist(item.id)}
//                     className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Wishlist;

import Navbar from "../components/Navbar";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold mb-8">
          ❤️ My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <p className="text-xl text-gray-500">
            Your wishlist is empty.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">
                  <h2 className="text-xl font-bold">
                    {product.name}
                  </h2>

                  <p className="mt-2">₹{product.price}</p>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-purple-700 text-white py-2 rounded-lg mt-4"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="w-full bg-red-500 text-white py-2 rounded-lg mt-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;