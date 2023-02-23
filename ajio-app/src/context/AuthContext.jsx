import React from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [adminAuth, setAdminAuth] = React.useState(false);

  const initState = {
    email: "",
    password: "",
  };

  const [adminData, setAdminData] = React.useState(initState);

  const adminLogin = () => {
    if (adminData.email === "Admin" && adminData.password === "12345") {
      alert("Admin Login");
      setAdminAuth(true);
      navigate("/AdminDash");
    } else {
      alert("You are not Admin");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        adminData,
        setAdminData,
        adminLogin,
        adminAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
