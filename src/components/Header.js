import React from "react";
import { NavLink } from 'react-router-dom';

import "./Header.css"
import logo from '../images/Fender_guitars_logo.svg.png';

const Header = () => {
  return (
    <header className="main-header">
      <NavLink className="brand-logo-link" to="/">
        <img className="brand-logo" src={logo} alt="Fender Logo"/>
      </NavLink>
      <div className="nav-items">
        <ul>
          <li><NavLink to="/features">Features</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
