import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/logo.svg";
function Navbar() {
  const [user, setUser] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>ARTISAN</h1>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-link">
        <ul>
          {!user ? (
            <div className="">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Resister</Link>
              </li>
            </div>
          ) : (
            <div>
              <button>Logout</button>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
