import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const initState = {
    isAuth: false,
    username: null,
  };
  const [authState, setAuthState] = useState(initState);

  const loginUser = (username) => {
    setAuthState({ isAuth: true, username: username });
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
