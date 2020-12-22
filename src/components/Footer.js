import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <ul className="left-footer-items">
        <li>
          <NavLink to="#">Newsletter</NavLink>
        </li>
        <li>
          <NavLink to="#">Shop</NavLink>
        </li>
      </ul>
      <ul className="right-footer-items">
        <li>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
