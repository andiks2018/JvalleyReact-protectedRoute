import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  //state
  const [isLogin, setIsLogin] = useState(false);

  //check apakah ada user di local storage
  useEffect(()=>{
    const user = localStorage.getItem("user")
    if(user){
      return setIsLogin(true)
    }

    setIsLogin(false)
  }, [])

  if (isLogin) {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/biodata" element={<h1>Biodata saya</h1>} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
  );
}
