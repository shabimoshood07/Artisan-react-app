import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../src/logo.svg";
function Navbar() {
  const [user, setUser] = useState(false);
  const [showNav, setShowNAv] = useState(false);
  useEffect(() => {
    setShowNAv(false);
  }, []);

  return (
    <nav className="navbar">
      <section className="nav-center">
        <div className="nav-header">
          <div className="logo-con">
            <Link to="/" className="link">
              <h1 className="logo-text">
                <span className="a">A</span>
                <span>R</span>
                <span className="t">T</span>
                <span className="i">I</span>
                <span className="l">
                  <img src={logo} alt="logo" className="logo" />
                </span>
                <span className="s">S</span>
                <span>A</span>
                <span>N</span>
              </h1>
            </Link>
          </div>
          <div className="nav-toggle" onClick={() => setShowNAv(!showNav)}>
            {showNav ? (
              <FaTimes className="nav-icon" />
            ) : (
              <FaBars className="nav-icon" />
            )}
          </div>
        </div>

        <div className={showNav ? "show nav-link" : "hide nav-link"}>
          {!user ? (
            <div className="ul-list">
              <ul>
                <li>
                  <Link to="/login" className="link links">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="link links">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/artisan" className="link links">
                    Search
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
