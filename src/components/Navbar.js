import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineHowToReg } from "react-icons/md";
import logo from "../../src/logo.svg";
function Navbar() {
  const [user, setUser] = useState(false);
  const [showNav, setShowNAv] = useState(false);

  // close NAVBAR onclick
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showNav && ref.current && !ref.current.contains(e.target)) {
        setShowNAv(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showNav]);

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

        <div className={showNav ? "show nav-link" : "hide nav-link"} ref={ref}>
          {!user ? (
            <div className="ul-list">
              <ul>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setShowNAv(false)}
                    className="link links"
                  >
                    <MdOutlineHowToReg className="fa" />
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    onClick={() => setShowNAv(false)}
                    className="link links"
                  >
                    <CgProfile className="fa" />
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/artisan"
                    onClick={() => setShowNAv(false)}
                    className="link links"
                  >
                    <FaSearch className="fa" />
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="nav-btn-container">
              <button className="logout-btn">Logout</button>
              <button className="logout-btn edit-btn">Edit profile</button>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
