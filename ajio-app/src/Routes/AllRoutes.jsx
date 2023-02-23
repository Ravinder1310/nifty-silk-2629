
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDash from "../component/Admin/AdminDash";
import AdminLogin from "../component/Admin/adminlogin";
import Cart from "../pages/cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDash" element={<AdminDash />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;