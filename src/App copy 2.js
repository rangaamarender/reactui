import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./Global.css";
import "../src/styles/Lucid.css";
import Layout from "./components/Layout";
import Login from "./components/loginSignup/Login";
import Signup from "./components/loginSignup/Signup";
import { loginApi } from "./services/LoginServices"

// Custom higher-order component (HOC) for protected routes
const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  // Check if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('auth')) || false
  );

  const setAuth = (value) => {
    setIsAuthenticated(value);
    //alert(value);
  };

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <div className="lucid-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute
                element={<Layout />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
