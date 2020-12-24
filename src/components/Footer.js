import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-row">
        <ul className="products footer-col">
          <h6 className="products-heading col-heading">Products</h6>
          <li className="footer-item"><a href="/">Electric Guitars</a></li>
          <li className="footer-item"><a href="/">Base Guitars</a></li>
          <li className="footer-item"><a href="/">Acoustic Guitars</a></li>
          <li className="footer-item"><a href="/">Amplifiers</a></li>
        </ul>
        <ul className="company footer-col">
          <h6 className="company-heading col-heading">Company</h6>
          <li className="footer-item"><a href="/">About Us</a></li>
          <li className="footer-item"><a href="/">Contact</a></li>
          <li className="footer-item"><a href="/">Career</a></li>
          <li className="footer-item"><a href="/">Newsletter</a></li>
        </ul>
        <ul className="customer-service footer-col">
          <h6 className="customer-service-heading col-heading">Customer Service</h6>
          <li className="footer-item"><a href="/">Support</a></li>
          <li className="footer-item"><a href="/">Warranty</a></li>
          <li className="footer-item"><a href="/">Find a Dealer</a></li>
          <li className="footer-item"><a href="/">Manual</a></li>
        </ul>
        <ul className="social-media footer-col">
          <h6 className="social-media-heading col-heading">Social Media</h6>
          <li className="footer-item"><a href="/"><FaInstagram /> Instagram</a></li>
          <li className="footer-item"><a href="/"><FaTwitter /> Twitter</a></li>
          <li className="footer-item"><a href="/"><FaFacebook /> Facebook</a></li>
          <li className="footer-item"><a href="/"><FaYoutube /> YouTube</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;