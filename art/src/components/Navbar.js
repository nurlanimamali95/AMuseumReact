import React, { useState } from "react";
import logo from "../assets/logo.gif";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const closeMenu = () => {
    setMenuActive(false);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar-items">
      <a className="navbar-logo-hover" href="/">
        <img src={logo} className="navbar-logo" alt="logo" />
      </a>
      <div
        className={`hamburger ${menuActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/exhibitions" onClick={closeMenu}>
            Exhibitions
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
