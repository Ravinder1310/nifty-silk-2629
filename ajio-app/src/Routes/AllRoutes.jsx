
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDash from "../component/Admin/AdminDash";
import AdminLogin from "../component/Admin/adminlogin";
import Cart from "../pages/cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path="/AdminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
        <Route path="/AdminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;