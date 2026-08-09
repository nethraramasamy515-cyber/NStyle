// import { Link } from "react-router-dom";

// function OrderSuccess() {
//   const orderId = "NSR" + Math.floor(100000 + Math.random() * 900000);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
//       <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-lg w-full">

//         <div className="text-7xl mb-4">
//           🎉
//         </div>

//         <h1 className="text-4xl font-bold text-green-600 mb-4">
//           Order Placed Successfully!
//         </h1>

//         <p className="text-gray-600 text-lg">
//           Thank you for shopping with
//           <span className="font-bold text-purple-700">
//             {" "}NStyle
//           </span>
//         </p>

//         <div className="bg-gray-100 rounded-xl p-4 mt-8">
//           <p className="text-gray-500">
//             Order ID
//           </p>

//           <h2 className="text-2xl font-bold">
//             #{orderId}
//           </h2>
//         </div>

//         <p className="mt-6 text-gray-600">
//           Your order will be delivered within
//           <span className="font-semibold">
//             {" "}3–5 business days.
//           </span>
//         </p>

//         <Link to="/">
//           <button className="mt-8 w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition">
//             Continue Shopping
//           </button>
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default OrderSuccess;

import { Link } from "react-router-dom";

function OrderSuccess() {
  const orderId = "NSR" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-lg w-full">

        <div className="text-7xl mb-4">
          🎉
        </div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 text-lg">
          Thank you for shopping with
          <span className="font-bold text-purple-700">
            {" "}NStyle
          </span>
        </p>

        <div className="bg-gray-100 rounded-xl p-4 mt-8">
          <p className="text-gray-500">
            Order ID
          </p>

          <h2 className="text-2xl font-bold">
            #{orderId}
          </h2>
        </div>

        <p className="mt-6 text-gray-600">
          Your order will be delivered within
          <span className="font-semibold">
            {" "}3–5 business days.
          </span>
        </p>

        <div className="mt-8 space-y-4">

          <Link to="/track-order">
            <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
              📦 Track Order
            </button>
          </Link>

          <Link to="/">
            <button className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition">
              🛍 Continue Shopping
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;