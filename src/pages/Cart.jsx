// // function Shop() {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <h1 className="text-5xl font-bold"> Cart Page</h1>
// //     </div>
// //   );
// // }

// // export default Shop;
// import { useCart } from "../context/CartContext";

// function Cart() {
//   const { cart } = useCart();

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-6">
//       <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between border-b py-4"
//           >
//             <div>
//               <h2 className="font-semibold">{item.name}</h2>
//               <p>₹{item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//             </div>

//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-24 h-24 object-cover rounded-lg"
//             />
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Cart;




import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-md p-6 mb-6"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-xl"
              />

              {/* Product Info */}
              <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                <h2 className="text-2xl font-bold">{item.name}</h2>

                <p className="text-gray-600 mt-2">
                  Price: ₹{item.price}
                </p>

                <p className="font-semibold mt-2">
                  Total: ₹{item.price * item.quantity}
                </p>
              </div>

              {/* Quantity Buttons */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  -
                </button>

                <span className="text-xl font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 mt-4 md:mt-0"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <div className="mt-10 bg-black text-white rounded-2xl p-6 flex justify-between items-center">
            <h2 className="text-3xl font-bold">
              Total: ₹{total}
            </h2>

            {/* <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500">
              Proceed to Checkout
            </button> */}
            <Link to="/checkout">
  <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500">
    Proceed to Checkout
  </button>
</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;