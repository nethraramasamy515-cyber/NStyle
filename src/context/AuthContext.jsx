import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const register = (name, email, password) => {
    const newUser = { name, email, password };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    setUser(newUser);
  };

  const login = (email, password) => {
    const saved = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      saved &&
      saved.email === email &&
      saved.password === password
    ) {
      setUser(saved);
      return true;
    }

    return false;
  };

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