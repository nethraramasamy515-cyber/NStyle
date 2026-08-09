import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <CartProvider>
//         <WishlistProvider>
//           <App />

//           <ToastContainer
//             position="top-right"
//             autoClose={2000}
//             hideProgressBar={false}
//             newestOnTop
//             closeOnClick
//             pauseOnHover
//             theme="colored"
//           />
//         </WishlistProvider>
//       </CartProvider>
//     </BrowserRouter>
//   </React.StrictMode>


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <App />

            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              theme="colored"
            />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);