
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminAdd from "../components/Admin/AdminAdd";
import AdminDash from "../components/Admin/AdminDash";
import AdminLogin from "../components/Admin/adminlogin";
import { PrivateRoute} from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminDash" element={<PrivateRoute><AdminDash/></PrivateRoute>} />
        <Route path="/AdminAdd" element={<PrivateRoute><AdminAdd/></PrivateRoute>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;