import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const Appprovider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Appprovider };
