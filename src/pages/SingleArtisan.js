import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

function SingleArtisan() {
  const { id } = useParams();
  const url = `https://artisan-dot-com-api.herokuapp.com/
api/v1/artisan/${id}`;
  const [loading, setLoading] = useState(false);
  const [artisan, setArtisan] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchArtisan() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const { artisan } = data;
        if (artisan) {
          // const { username, name, profession, phoneNumber, details } = artisan;
          // const { home, work } = phoneNumber;
          // const { about, age } = details;

          // const newArtisan = {
          //   username,
          //   phoneNumber,
          //   // home,
          //   // work,
          //   profession,
          //   // about,
          // };
          // const newArtisan = [artisan];
          setArtisan(artisan);
          console.log(artisan);
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
    const { username, profession, profileImage } = artisan;
    return (
      <div>
        <section className="single-artisan-container">
          <img src={profileImage} alt="image" />
          <h1>username:{username}</h1>
          <h1>profession:{profession}</h1>
          {/* <h1>about:{home}</h1> */}
          {/* <h1>tel:{work}</h1> */}
          {/* <h1>About:{about}</h1> */}
        </section>
      </div>
    );
  }
}

export default SingleArtisan;
