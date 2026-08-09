import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import AIStylist from "./pages/AIStylist";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Order from "./pages/Order";
import AIChat from "./pages/AIChat";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import TrackOrder from "./pages/TrackOrder";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import ManageProducts from "./pages/ManageProducts";
import EditProduct from "./pages/EditProduct";
import AdminOrders from "./pages/AdminOrders";
import ProtectedRoute from "./components/ProtectedRoute";
import Users from "./pages/Users";
function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/ai-stylist" element={<AIStylist />} />
      <Route path="/ai" element={<AIChat />} />

      {/* Protected Routes */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />

      <Route
        path="/order-success"
        element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/track-order"
        element={
          <ProtectedRoute>
            <TrackOrder />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/admin/products" element={<ManageProducts />} />
      <Route
        path="/admin/edit-product/:id"
        element={<EditProduct />}
      />
<Route
  path="/admin/orders"
  element={<AdminOrders />}
/>

<Route
  path="/admin/users"
  element={<Users />}
/>
    </Routes>
    
  );
}

export default App;