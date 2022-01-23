import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../src/logo.svg";
function Navbar() {
  const [user, setUser] = useState(false);
  const [showNav, setShowNAv] = useState(false);
  return (
    <nav className="navbar">
      <section className="nav-center">
        <div className="nav-header">
          <div className="logo-con">
            <Link to="/" className="link">
              <h1 className="logo-text">
                <span className="a">A</span>
                <span>R</span>
                <span>T</span>
                <span>I</span>
                <span>S</span>
                <span>A</span>
                <span>N</span>
              </h1>
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="nav-toggle" onClick={() => setShowNAv(!showNav)}>
            <FaBars className="nav-icon" />
          </div>
        </div>

        <div className={showNav ? "show nav-link" : "hide nav-link"}>
          {!user ? (
            <div className="ul-list">
              <ul>
                <li>
                  <Link to="/login" className="link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="link">
                    Resister
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className="logout-btn">Logout</button>
          )}
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
