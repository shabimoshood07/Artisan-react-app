import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

function SingleArtisan() {
  const { id } = useParams();
  const url = `http://localhost:5000/api/v1/artisan/${id}`;
  const [loading, setLoading] = useState(false);
  const [artisan, setArtisan] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchArtisan() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const { artisan } = data;
        console.log(artisan);
        if (artisan) {
          const { username, name, profession, phoneNumber, details } = artisan;
          const { home, work } = phoneNumber;
          const { about, age } = details;

          const newArtisan = {
            username,
            home,
            work,
            profession,
            about,
          };
          setArtisan(newArtisan);
        } else {
          setArtisan(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    fetchArtisan();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!artisan) {
    return <h2>"no Artisan to display"</h2>;
  } else {
    const { username, home, work, profession, about } = artisan;
    return (
      <div>
        <section>
          <h1>username:{username}</h1>
          <h1>profession:{profession}</h1>
          <h1>about:{home}</h1>
          <h1>tel:{work}</h1>
          <h1>About:{about}</h1>
        </section>
      </div>
    );
  }
}

export default SingleArtisan;
