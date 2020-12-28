import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Header.css";
import logo from "../images/Fender_guitars_logo.svg.png";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="navbar-img" src={logo} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="fas fa-times" />
          ) : (
            <FaBars className="fas fa-bars" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/features"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/specs" className="nav-links" onClick={closeMobileMenu}>
              Specs
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
