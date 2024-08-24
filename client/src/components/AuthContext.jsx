import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (formData) => {
    try {
      const response = await axios.post(
        "https://blog11.onrender.com/login",
        formData,
        { withCredentials: true }
      );
      console.log("Server response:", response.data);
      if (response.data.success) {
        const userData = response.data.user;
        if (userData) {
          setUser(userData);
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userData", JSON.stringify(userData));
        } else {
          console.error("Login error: User data is missing in the response");
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
  };

  const register = async (formData) => {
    try {
      const response = await axios.post(
        "https://blog11.onrender.com/register",
        formData,
        { withCredentials: true }
      );
      console.log("Server response:", response.data);
      if (response.data.success) {
        const userData = response.data.user;
        if (userData) {
          setUser(userData);
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userData", JSON.stringify(userData));
        } else {
          console.error(
            "Registration error: User data is missing in the response"
          );
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (userLoggedIn) {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUser(JSON.parse(storedUserData));
        setIsLoggedIn(true);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
