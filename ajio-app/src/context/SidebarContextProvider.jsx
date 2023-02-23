import React from "react";

export const SidebarContext = React.createContext();

export default function SidebarContextProvider({ children }) {

  return (
    <SidebarContext.Provider
      value={{children}}> {children} </SidebarContext.Provider>
  );
}
