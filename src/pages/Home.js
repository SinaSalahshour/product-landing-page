import React, { useEffect } from "react";

import "./Home.css";

const Home = () => {
  useEffect(() => {
    document.getElementById("root").classList.add("full-height-grow");
  }, []);

  return (
    <div className="container full-height-grow">
      <div className="home-main-section">
        <div className="title-section">
          <h1 className="title">Ed O'Brien Sustainer Stratocaster</h1>
        </div>
        <div className="image-section"></div>
        .buttons-div
        <button type="submit" className="buy-btn red-btn">
          NOTIFY ME WHEN IN STOCK
        </button>

      </div>
    </div>
  );
};

export default Home;
