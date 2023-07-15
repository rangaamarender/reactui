import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./Global.css";
import "../src/styles/Lucid.css";
// import Layout from "./components/Layout";
import Login from "./components/loginSignup/Login";
import Signup from "./components/loginSignup/Signup";
import { loginApi } from "./services/LoginServices"
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
// import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {

  return (
    <>
      <div className="lucid-bg">
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;