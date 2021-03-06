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
    return <h1 className="title-heading"> No artisan matched your search!!</h1>;
  }
  return (
    <section className="background">
      <h1 className="title-heading">Artisans</h1>
      <div className="main-container">
        {artisan.map((artis) => {
          return <Artisan key={artis._id} {...artis} />;
        })}
      </div>
    </section>
  );
}

export default ArtisanList;
