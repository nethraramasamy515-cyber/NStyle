
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";

const AuthContext = createContext();

const API_URL =
  "https://nstyle-backend.onrender.com/api/users";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  // ================= SAVE USER =================

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // ================= REGISTER =================

  const register = async (
    name,
    email,
    password
  ) => {
    try {
      const res = await axios.post(
        `${API_URL}/register`,
        {
          name,
          email,
          password,
        }
      );

      return {
        success: true,
        message: res.data.message,
      };
    } catch (error) {
      console.log("Register Error:", error);

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Registration Failed",
      };
    }
  };

  // ================= LOGIN =================

  const login = async (
    email,
    password
  ) => {
    try {
      const res = await axios.post(
        `${API_URL}/login`,
        {
          email,
          password,
        }
      );

      setUser(res.data.user);

      return {
        success: true,
        message: res.data.message,
      };
    } catch (error) {
      console.log("Login Error:", error);

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Login Failed",
      };
    }
  };

  // ================= LOGOUT =================

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
