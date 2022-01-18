import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const Appprovider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Appprovider };
