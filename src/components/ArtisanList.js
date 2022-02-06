import React from "react";
import Loading from "./Loading";
import Artisan from "./Artisan";
import { useGlobalContext } from "../context";
function ArtisanList() {
  const { loading, artisan, setLoading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (artisan.length < 1) {
    return <h1> No artisan matched your search</h1>;
  }
  return (
    <div>
      <h1>List</h1>
      {artisan.map((artis) => {
        return <Artisan key={artis._id} {...artis} />;
      })}
    </div>
  );
}

export default ArtisanList;
