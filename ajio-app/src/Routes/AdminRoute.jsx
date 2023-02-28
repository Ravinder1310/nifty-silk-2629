import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import AdminDash from "../components/Admin/AdminDash";
import AdminLogin from "../components/Admin/adminlogin";
import { PrivateRoute } from "./PrivateRoute";
import AdminManage from "../components/Admin/AdminManage";
import AdminAdd from "../components/Admin/AdminAdd";


const AdminRoutes = () => {
  return (
    <div>
      <Box marginTop={"90px"}>
      <Routes>
          <Route path="/AdminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
         <Route path="/AdminManage" element={<PrivateRoute><AdminManage/></PrivateRoute>} />
        <Route path="/AdminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>}/>
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
      </Box>
      </div>
  );
};

export default AdminRoutes;