import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import HomePage from "./HomePage";
import AdminDash from "../components/Admin/AdminDash";
import AdminLogin from "../components/Admin/adminlogin";
import Cart from "../pages/cart";
import { PrivateRoute } from "./PrivateRoute";
import { Products } from "../pages/product";
import AdminManage from "../components/Admin/AdminManage";
import AdminAdd from "../components/Admin/AdminAdd";
<<<<<<< HEAD

=======
>>>>>>> 7f63413828978c81441d0542508f5422cff7c57f

const AllRoutes = () => {
  return (
    <div>
      <Box marginTop={"90px"}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
          <Route path="/AdminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
         <Route path='/products'element={<Products/>}/>
         <Route path="/AdminManage" element={<PrivateRoute><AdminManage/></PrivateRoute>} />
        <Route path="/AdminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>}/>
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
      </Box>
      </div>
  );
};

export default AllRoutes;