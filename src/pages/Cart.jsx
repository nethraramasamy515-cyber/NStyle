// function Shop() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <h1 className="text-5xl font-bold"> Cart Page</h1>
//     </div>
//   );
// }

// export default Shop;
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;