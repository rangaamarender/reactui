import React, { useEffect, useState } from "react";
import "./App.css";
import "./Global.css";
import '../src/styles/Lucid.css';
import '../src/styles/Login.css';
import Layout from "./components/Layout";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to check if the user is logged in
  const checkAuth = () => {
    // Check if the user has a valid JWT token (you need to implement this logic)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  // Function to handle successful login and store the JWT token
  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  // Function to handle logout and clear the JWT token
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  // Run the checkAuth function on initial load
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      {/* 
      <div className="lucid-bg">
        <Layout />
      </div> */}
      <Router>
        <div className="app-container">
          <Route exact path="/">
            {isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )}
          </Route>
        </div>
      </Router>
    </>
  );
}

export default App;
