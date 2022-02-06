import React from "react";
import { Link } from "react-router-dom";
function Artisan({ _id, username, address, profession }) {
  return (
    <section className="login-wrapper" key={_id}>
      <h1>{username}</h1>
      <h1>{address}</h1>
      <h1>{profession}</h1>
      <Link to={`/artisan/${_id}`}>Details</Link>
    </section>
  );
}

export default Artisan;
