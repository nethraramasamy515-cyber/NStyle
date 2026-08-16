import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminRoute({ children }) {
  const { user } = useAuth();

  console.log("ADMIN CHECK USER:", user);

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Admin email
  const adminEmail = "nethraramasamy515@gmail.com";

  if (user.email !== adminEmail) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;