import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import HomePage from "./HomePage";
import AdminDash from "../component/Admin/AdminDash";
import AdminLogin from "../component/Admin/adminlogin";
import Cart from "../pages/cart";

const AllRoutes = () => {
  return (
    <div>
      <Box marginTop={"90px"}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/AdminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
        <Route path="/AdminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </Box>
    </div>
  );
};

export default AllRoutes;