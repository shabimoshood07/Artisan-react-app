import React, { useState, useEffect, useContext } from "react";
const url = "http://localhost:5000/api/v1/artisan";
const url2 = "http://localhost:5000/api/v1/auth";
const AppContext = React.createContext();

const Appprovider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [artisan, setArtisan] = useState([]);
  return (
    <AppContext.Provider value={{ loading, artisan, user, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Appprovider };
