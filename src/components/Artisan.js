import React from "react";
import { Link } from "react-router-dom";
function Artisan({ _id, username, address, profession, profileImage }) {
  return (
    <section key={_id}>
      <div className="artisan-wrapper">
        <h1>{username}</h1>
        <h1>{address}</h1>
        <h1>{profession}</h1>
        <div className="artisan-img-container">
          <img
            src={`http://localhost:5000/${profileImage}`}
            className="profile-image"
            alt="profile-image"
          />
        </div>
        <Link to={`/artisan/${_id}`}>Details</Link>
      </div>
    </section>
  );
}

export default Artisan;
