import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Shipping Details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");

  // Coupon
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Payment
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "SAVE10") {
      setDiscount(subtotal * 0.1);
      toast.success("🎉 SAVE10 Applied! 10% Discount");
    } else if (coupon.toUpperCase() === "SAVE20") {
      setDiscount(subtotal * 0.2);
      toast.success("🎉 SAVE20 Applied! 20% Discount");
    } else {
      setDiscount(0);
      toast.error("❌ Invalid Coupon Code");
    }
  };

  const total = subtotal - discount;

  const placeOrder = async () => {
    if (cart.length === 0) {
      toast.error("🛒 Your cart is empty");
      return;
    }

    if (!fullName || !email || !address || !city || !pinCode) {
      toast.error("Please fill all shipping details");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("Please Login First");
      navigate("/login");
      return;
    }

    try {
      for (const item of cart) {
        await axios.post("http://localhost:5000/api/orders", {
          user_name: fullName,
          email: email,
          product_name: item.name,
          quantity: item.quantity,
          total_price: item.price * item.quantity,
          payment_method: paymentMethod,
          address,
          city,
          pinCode,
        });
      }

      toast.success("🎉 Order Placed Successfully!");

      navigate("/payment");

    } catch (err) {
      console.log(err);
      toast.error("❌ Failed to Place Order");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Shipping Address */}
        <div className="bg-white shadow-lg rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Shipping Address
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            placeholder="PIN Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Order Summary
          </h2>

          <p className="mb-5">
            Items : <strong>{cart.length}</strong>
          </p>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b py-3"
              >
                <div>
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    Qty : {item.quantity}
                  </p>
                </div>

                <span>
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))
          )}

          {/* Coupon */}

          <div className="mt-6">

            <h3 className="font-semibold mb-2">
              Coupon Code
            </h3>

            <div className="flex gap-2">

              <input
                type="text"
                placeholder="Enter Coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 border rounded-lg p-3"
              />

              <button
                onClick={applyCoupon}
                className="bg-purple-700 text-white px-5 rounded-lg"
              >
                Apply
              </button>

            </div>

            <p className="text-sm text-gray-500 mt-2">
              Try <b>SAVE10</b> or <b>SAVE20</b>
            </p>

          </div>

          <hr className="my-6" />

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2 text-green-600">
            <span>Discount</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded-lg p-3 mt-6"
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit / Debit Card</option>
          </select>

          <button
            onClick={placeOrder}
            className="w-full bg-black text-white py-3 rounded-xl mt-6 hover:bg-gray-800"
          >
            💳 Proceed to Payment
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;