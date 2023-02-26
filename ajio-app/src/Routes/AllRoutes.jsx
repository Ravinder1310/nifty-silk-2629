import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import HomePage from "./HomePage";
import AdminDash from "../components/Admin/AdminDash";
import AdminLogin from "../components/Admin/adminlogin";
import Cart from "../pages/cart";
import { PrivateRoute } from "./PrivateRoute";
import { Kids, Mens, Women } from "../pages/product";
import AdminManage from "../components/Admin/AdminManage";
import AdminAdd from "../components/Admin/AdminAdd";

const AllRoutes = () => {
  return (
    <div>
      <Box marginTop={"90px"}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
          <Route path="/AdminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
         <Route path='/mens'element={<Mens/>}/>
         <Route path='/womens'element={<Women/>}/>
         <Route path='/kids'element={<Kids/>}/>
         <Route path="/AdminManage" element={<PrivateRoute><AdminManage/></PrivateRoute>} />
        <Route path="/AdminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>}/>
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart/>} /> 
      </Routes>
      </Box>
      </div>
  );
};

export default AllRoutes;