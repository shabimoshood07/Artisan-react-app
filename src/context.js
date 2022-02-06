import React, { useState, useEffect, useContext } from "react";
const url = "http://localhost:5000/api/v1/artisan";
// const url2 = "http://localhost:5000/api/v1/auth";
const url3 = "http://localhost:5000/api/v1/artisan?profession=&address=";
const AppContext = React.createContext();

const Appprovider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [artisan, setArtisan] = useState([]);

  const fetchArtisan = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/artisan?profession=${searchTerm}&address=${searchLocation}`
      );
      const data = await response.json();
      console.log(data);
      const { artisan } = data;
      // console.log(artisan);
      if (artisan) {
        setArtisan(artisan);
      } else {
        setArtisan([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtisan();
  }, [searchLocation, searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        artisan,
        user,
        setLoading,
        setSearchTerm,
        setSearchLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Appprovider };
