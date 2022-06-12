import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Stores from "./pages/Stores";
import Food from "./pages/Food1";
import Foodbread from "./pages/Food2";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food2" element={<Foodbread />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
