import React from "react";
import ReactPlayer from "react-player/youtube";
import ProductInfo from "../components/ProductInfo";

import "./Specs.css";

const Specs = () => {
  return (
    <>
      <div className="specs-main-section">
        <div className="specs-text-section">
          <h6 className="specs-heading">Key Specs</h6>
          <ul className="key-specs-list">
            <li className="specs-list-items">Co-designed with Ed O'Brien</li>
            <li className="specs-list-items">
              Seymour Duncan® JB Jr. humbucking bridge pickup, Texas Special
              single-coil Stratocaster middle pickup, Fernandes® Sustainer neck
              pickup
            </li>
            <li className="specs-list-items">
              "10/56 V"-shaped maple neck with 9.5"-radius maple fingerboard
            </li>
            <li className="specs-list-items">
              Custom "Flower of Life" neck plate; vintage-style hardware
            </li>
            <li className="specs-list-items">Includes deluxe gig bag</li>
          </ul>
        </div>
        <div className="specs-video-wrapper">
          <ReactPlayer
            className="specs-video"
            url="https://www.youtube.com/embed/n-qq8RvFscY"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>

        <button type="submit" className="buy-btn">
          NOTIFY ME WHEN IN STOCK
        </button>
      </div>
      <div className="product-info">
        <ProductInfo />
      </div>
    </>
  );
};

export default Specs;
