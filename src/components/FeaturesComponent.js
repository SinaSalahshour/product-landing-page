import React from "react";

import "./FeaturesComponent.css";

const HeroSection = ({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
}) => {
  return (
    <>
      <section
        className={lightBg ? "features-section" : "features-section darkBg"}
      >
        <div className="container">
          <div
            className="features-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="features-col">
              <div className="features-text-wrapper">
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "features-subtitle"
                      : "features-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="features-col">
              <div className="features-img-wrapper">
                <img src={img} alt={alt} className="features-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
