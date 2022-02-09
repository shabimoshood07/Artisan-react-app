import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Artisan({ _id, username, address, profession, profileImage }) {
  return (
    <div className="artisan-wrapper" key={_id}>
      <div className="artisan-heading">
        <div className="artisan-img-container">
          <img
            src={`http://localhost:5000/${profileImage}`}
            className="profile-image"
            alt="profile-image"
          />
        </div>
        <div className="artisan-details">
          <h1 className="profession">{profession}</h1>
          <h1>{username}</h1>
          <h1>{address}</h1>
        </div>
      </div>
      <div className="artisan-footer">
        <button className="details-btn">
          <Link to={`/artisan/${_id}`} className="details-link">
            Details
          </Link>
        </button>
        <button className="details-btn">
          <Link to={`/artisan/${_id}`} className="details-link">
            <FaFacebookF />
          </Link>
        </button>
        <button className="details-btn">
          <Link to={`/artisan/${_id}`} className="details-link">
            <FaTwitter />
          </Link>
        </button>
        <button className="details-btn">
          <Link to={`/artisan/${_id}`} className="details-link">
            <FaInstagram />
          </Link>
        </button>
        <button className="details-btn">
          <Link to={`/artisan/${_id}`} className="details-link">
            <FaPhoneAlt />
          </Link>
        </button>
        <button className="details-btn">
          <Link to={`/artisan/${_id}`} className="details-link">
            <FaEnvelope />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Artisan;
