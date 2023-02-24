
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminAdd from "../components/Admin/AdminAdd";
import AdminDash from "../components/Admin/AdminDash"
import AdminLogin from "../components/Admin/adminlogin";
import { PrivateRoute } from "./PrivateRoute";
import Cart from "../pages/cart";
import { Products } from "../pages/product";
import AdminManage from "../components/Admin/AdminManage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path="/AdminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
         <Route path='/products'element={<Products/>}/>
         <Route path="/AdminManage" element={<PrivateRoute><AdminManage/></PrivateRoute>} />
        <Route path="/AdminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>}/>
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </div>
  );
};

export default AllRoutes;