import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

function Payment() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [method, setMethod] = useState("UPI");

  const [upiId, setUpiId] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState("");

  const handlePayment = () => {

    // ================= UPI VALIDATION =================

    if (method === "UPI") {
      if (!upiId.trim()) {
        toast.error("Please enter your UPI ID");
        return;
      }

      if (!upiId.includes("@")) {
        toast.error("Please enter a valid UPI ID");
        return;
      }
    }

    // ================= CARD VALIDATION =================

    if (method === "Card") {

      if (
        !cardName.trim() ||
        !cardNumber.trim() ||
        !expiry.trim() ||
        !cvv.trim()
      ) {
        toast.error("Please fill all card details");
        return;
      }

      const cleanCardNumber =
        cardNumber.replace(/\s/g, "");

      if (cleanCardNumber.length < 12) {
        toast.error("Please enter a valid card number");
        return;
      }

      if (cvv.length < 3) {
        toast.error("Please enter a valid CVV");
        return;
      }
    }

    // ================= NET BANKING =================

    if (method === "Net Banking") {

      if (!bank) {
        toast.error("Please select your bank");
        return;
      }
    }

    // ================= SUCCESS =================

    clearCart();

    toast.success(
      method === "Cash on Delivery"
        ? "🎉 Order confirmed!"
        : "🎉 Payment Successful!"
    );

    setTimeout(() => {
      navigate("/order-success");
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-6">

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
            💳 Secure Payment
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            {/* ================= PAYMENT METHODS ================= */}

            <div>

              <h2 className="text-2xl font-semibold mb-6">
                Select Payment Method
              </h2>

              <div className="space-y-4">

                {/* UPI */}

                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-gray-100">

                  <input
                    type="radio"
                    checked={method === "UPI"}
                    onChange={() => setMethod("UPI")}
                    className="mr-3"
                  />

                  📱 UPI Payment

                </label>

                {/* CARD */}

                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-gray-100">

                  <input
                    type="radio"
                    checked={method === "Card"}
                    onChange={() => setMethod("Card")}
                    className="mr-3"
                  />

                  💳 Credit / Debit Card

                </label>

                {/* NET BANKING */}

                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-gray-100">

                  <input
                    type="radio"
                    checked={method === "Net Banking"}
                    onChange={() =>
                      setMethod("Net Banking")
                    }
                    className="mr-3"
                  />

                  🏦 Net Banking

                </label>

                {/* COD */}

                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-gray-100">

                  <input
                    type="radio"
                    checked={
                      method === "Cash on Delivery"
                    }
                    onChange={() =>
                      setMethod("Cash on Delivery")
                    }
                    className="mr-3"
                  />

                  💵 Cash on Delivery

                </label>

              </div>

            </div>

            {/* ================= PAYMENT DETAILS ================= */}

            <div>

              <h2 className="text-2xl font-semibold mb-6">
                Payment Details
              </h2>

              {/* ================= UPI ================= */}

              {method === "UPI" && (
                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="Enter UPI ID"
                    value={upiId}
                    onChange={(e) =>
                      setUpiId(e.target.value)
                    }
                    className="w-full border rounded-lg p-3"
                  />

                  <p className="text-sm text-gray-500">
                    Example: yourname@upi
                  </p>

                </div>
              )}

              {/* ================= CARD ================= */}

              {method === "Card" && (
                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="Card Holder Name"
                    value={cardName}
                    onChange={(e) =>
                      setCardName(e.target.value)
                    }
                    className="w-full border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    maxLength="19"
                    onChange={(e) =>
                      setCardNumber(e.target.value)
                    }
                    className="w-full border rounded-lg p-3"
                  />

                  <div className="grid grid-cols-2 gap-4">

                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      maxLength="5"
                      onChange={(e) =>
                        setExpiry(e.target.value)
                      }
                      className="border rounded-lg p-3"
                    />

                    <input
                      type="password"
                      placeholder="CVV"
                      value={cvv}
                      maxLength="4"
                      onChange={(e) =>
                        setCvv(e.target.value)
                      }
                      className="border rounded-lg p-3"
                    />

                  </div>

                </div>
              )}

              {/* ================= NET BANKING ================= */}

              {method === "Net Banking" && (
                <select
                  value={bank}
                  onChange={(e) =>
                    setBank(e.target.value)
                  }
                  className="w-full border rounded-lg p-3"
                >

                  <option value="">
                    Select Your Bank
                  </option>

                  <option value="SBI">
                    State Bank of India
                  </option>

                  <option value="ICICI">
                    ICICI Bank
                  </option>

                  <option value="HDFC">
                    HDFC Bank
                  </option>

                  <option value="Axis">
                    Axis Bank
                  </option>

                </select>
              )}

              {/* ================= COD ================= */}

              {method === "Cash on Delivery" && (
                <div className="bg-green-100 text-green-700 p-5 rounded-xl">

                  <h3 className="font-bold text-lg">
                    💵 Cash on Delivery
                  </h3>

                  <p className="mt-2">
                    You will pay when your order is
                    delivered.
                  </p>

                </div>
              )}

              {/* ================= BUTTON ================= */}

              <button
                onClick={handlePayment}
                className="w-full bg-purple-700 text-white py-4 rounded-xl mt-8 hover:bg-purple-800 transition font-semibold"
              >

                {method === "Cash on Delivery"
                  ? "✅ Confirm Order"
                  : "💳 Pay Now"}

              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Payment; 