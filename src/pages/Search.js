import React, { useEffect } from "react";
import SearchForm from "../components/SearchForm";
import ArtisanList from "../components/ArtisanList";
import { useGlobalContext } from "../context";

function Search() {
  const { fetchArtisan, setArtisan } = useGlobalContext();
  useEffect(() => {
    fetchArtisan();
  }, []);

  return (
    <div>
      <SearchForm />
      <ArtisanList />
    </div>
  );
}

export default Search;
