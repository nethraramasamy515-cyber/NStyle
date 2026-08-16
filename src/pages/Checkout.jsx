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
  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  // Prevent duplicate orders
  const [placingOrder, setPlacingOrder] = useState(false);

  // ================= SUBTOTAL =================

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity),
    0
  );

  // ================= COUPON =================

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (code === "SAVE10") {
      setDiscount(subtotal * 0.1);
      toast.success("🎉 SAVE10 Applied! 10% Discount");
    } else if (code === "SAVE20") {
      setDiscount(subtotal * 0.2);
      toast.success("🎉 SAVE20 Applied! 20% Discount");
    } else {
      setDiscount(0);
      toast.error("❌ Invalid Coupon Code");
    }
  };

  const total = subtotal - discount;

  // ================= PLACE ORDER =================

  const placeOrder = async () => {
    // Prevent double click
    if (placingOrder) {
      return;
    }

    // Check cart
    if (cart.length === 0) {
      toast.error("🛒 Your cart is empty");
      return;
    }

    // Check shipping details
    if (
      !fullName.trim() ||
      !email.trim() ||
      !address.trim() ||
      !city.trim() ||
      !pinCode.trim()
    ) {
      toast.error("Please fill all shipping details");
      return;
    }

    // Check login
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      toast.error("Please Login First");
      navigate("/login");
      return;
    }

    try {
      setPlacingOrder(true);

      // Create order for every product in cart
      for (const item of cart) {
        await axios.post(
          "https://nstyle-backend.onrender.com/api/orders",
          {
            user_name: fullName.trim(),
            email: email.trim(),

            product_name: item.name,

            quantity: Number(item.quantity),

            total_price:
              Number(item.price) *
              Number(item.quantity),

            payment_method: paymentMethod,

            address: address.trim(),
            city: city.trim(),
            pinCode: pinCode.trim(),
          }
        );
      }

      console.log("✅ Order Created Successfully");

      toast.success(
        "🎉 Order Placed Successfully!"
      );

      // Go to payment
      navigate("/payment");

    } catch (err) {
      console.error(
        "❌ ORDER ERROR:",
        err.response?.data || err
      );

      toast.error(
        err.response?.data?.message ||
        "❌ Failed to Place Order"
      );

    } finally {
      setPlacingOrder(false);
    }
  };

  // ================= UI =================

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* ================= SHIPPING ================= */}

          <div className="bg-white shadow-lg rounded-2xl p-6">

            <h2 className="text-2xl font-semibold mb-6">
              Shipping Address
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="text"
              placeholder="PIN Code"
              value={pinCode}
              onChange={(e) =>
                setPinCode(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />

          </div>

          {/* ================= ORDER SUMMARY ================= */}

          <div className="bg-white shadow-lg rounded-2xl p-6">

            <h2 className="text-2xl font-semibold mb-6">
              Order Summary
            </h2>

            <p className="mb-5">
              Items :{" "}
              <strong>{cart.length}</strong>
            </p>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              <div className="space-y-3">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between border-b pb-3"
                  >

                    <div>

                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-gray-500">
                        ₹{Number(item.price).toFixed(2)}
                        {" × "}
                        {item.quantity}
                      </p>

                      <p className="text-gray-500">
                        Qty : {item.quantity}
                      </p>

                    </div>

                    <span className="font-semibold">
                      ₹
                      {(
                        Number(item.price) *
                        Number(item.quantity)
                      ).toFixed(2)}
                    </span>

                  </div>

                ))}

              </div>
            )}

            {/* ================= COUPON ================= */}

            <div className="mt-6">

              <h3 className="font-semibold mb-2">
                Coupon Code
              </h3>

              <div className="flex gap-2">

                <input
                  type="text"
                  placeholder="Enter Coupon"
                  value={coupon}
                  onChange={(e) =>
                    setCoupon(e.target.value)
                  }
                  className="flex-1 border rounded-lg p-3"
                />

                <button
                  onClick={applyCoupon}
                  className="bg-purple-700 text-white px-5 rounded-lg hover:bg-purple-800"
                >
                  Apply
                </button>

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Try <b>SAVE10</b> or{" "}
                <b>SAVE20</b>
              </p>

            </div>

            <hr className="my-6" />

            {/* ================= PRICE ================= */}

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>

              <span>
                ₹{subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mb-2 text-green-600">

              <span>
                Discount
              </span>

              <span>
                -₹{discount.toFixed(2)}
              </span>

            </div>

            <div className="flex justify-between mb-2">

              <span>
                Shipping
              </span>

              <span className="text-green-600">
                FREE
              </span>

            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-2xl font-bold">

              <span>
                Total
              </span>

              <span>
                ₹{total.toFixed(2)}
              </span>

            </div>

            {/* ================= PAYMENT METHOD ================= */}

            <select
              value={paymentMethod}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
              className="w-full border rounded-lg p-3 mt-6"
            >

              <option>
                Cash on Delivery
              </option>

              <option>
                UPI
              </option>

              <option>
                Credit / Debit Card
              </option>

            </select>

            {/* ================= PLACE ORDER ================= */}

            <button
              onClick={placeOrder}
              disabled={placingOrder}
              className={`w-full text-white py-3 rounded-xl mt-6 transition ${
                placingOrder
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
              }`}
            >

              {placingOrder
                ? "⏳ Placing Order..."
                : "💳 Proceed to Payment"}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;