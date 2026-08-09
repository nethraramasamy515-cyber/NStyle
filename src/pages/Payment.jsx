import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

function Payment() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("UPI");

  const handlePayment = () => {
    toast.success("🎉 Payment Successful!");

    setTimeout(() => {
      navigate("/order-success");
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
            💳 Secure Payment
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Payment Methods */}

            <div>

              <h2 className="text-2xl font-semibold mb-6">
                Select Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    checked={method === "UPI"}
                    onChange={() => setMethod("UPI")}
                    className="mr-3"
                  />
                  📱 UPI Payment
                </label>

                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    checked={method === "Card"}
                    onChange={() => setMethod("Card")}
                    className="mr-3"
                  />
                  💳 Credit / Debit Card
                </label>

                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    checked={method === "Net Banking"}
                    onChange={() => setMethod("Net Banking")}
                    className="mr-3"
                  />
                  🏦 Net Banking
                </label>

                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    checked={method === "Cash on Delivery"}
                    onChange={() => setMethod("Cash on Delivery")}
                    className="mr-3"
                  />
                  💵 Cash on Delivery
                </label>

              </div>

            </div>

            {/* Payment Details */}

            <div>

              <h2 className="text-2xl font-semibold mb-6">
                Payment Details
              </h2>

              {method === "Card" && (
                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="Card Holder Name"
                    className="w-full border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border rounded-lg p-3"
                  />

                  <div className="grid grid-cols-2 gap-4">

                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border rounded-lg p-3"
                    />

                    <input
                      type="password"
                      placeholder="CVV"
                      className="border rounded-lg p-3"
                    />

                  </div>

                </div>
              )}

              {method === "UPI" && (
                <input
                  type="text"
                  placeholder="Enter UPI ID"
                  className="w-full border rounded-lg p-3"
                />
              )}

              {method === "Net Banking" && (
                <select className="w-full border rounded-lg p-3">
                  <option>Select Your Bank</option>
                  <option>State Bank of India</option>
                  <option>ICICI Bank</option>
                  <option>HDFC Bank</option>
                  <option>Axis Bank</option>
                </select>
              )}

              {method === "Cash on Delivery" && (
                <div className="bg-green-100 text-green-700 p-4 rounded-xl">
                  You will pay when your order is delivered.
                </div>
              )}

              <button
                onClick={handlePayment}
                className="w-full bg-purple-700 text-white py-4 rounded-xl mt-8 hover:bg-purple-800"
              >
                ✅ Pay Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Payment;