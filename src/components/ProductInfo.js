import React from "react";

import "./ProductInfo.css";
import { SpecsData } from "./SpecsData";
import BodyIcon from "../images/icon-guitar-body-2x.png";
import NeckIcon from "../images/icon-guitar-neck-2x.png";
import ElectronicsIcon from "../images/icon-guitar-electronics-2x.png";
import HardwareIcon from "../images/icon-guitar-hardware-2x.png";

const ProductInfo = () => {
  return (
    <div className="specific-info">
      <div className="info-col">
        <div className="info-parent-row">
          <div className="info-row-heading">
            <img className="info-row-icon" src={BodyIcon} alt="" />
            <h4 className="info-row-title">Body</h4>
          </div>
          <ul className="info-row-list">
            {Object.keys(SpecsData.SpecsBody).map((key, i) => (
              <li className="flex-list-item" key={i}>
                <div className="labels">{key}</div>
                <div className="values">{SpecsData.SpecsBody[key]}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="info-parent-row">
          <div className="info-row-heading">
            <img className="info-row-icon" src={NeckIcon} alt="" />
            <h4 className="info-row-title">Neck</h4>
          </div>
          <ul className="info-row-list">
            {Object.keys(SpecsData.SpecsNeck).map((key, i) => (
              <li className="flex-list-item" key={i}>
                <div className="labels">{key}</div>
                <div className="values">{SpecsData.SpecsNeck[key]}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="info-parent-row">
          .
          <div className="info-row-heading">
            <img className="info-row-icon" src={ElectronicsIcon} alt="" />
            <h4 className="info-row-title">Electronics</h4>
          </div>
          <ul className="info-row-list">
            {Object.keys(SpecsData.SpecsElectronics).map((key, i) => (
              <li className="flex-list-item" key={i}>
                <div className="labels">{key}</div>
                <div className="values">{SpecsData.SpecsElectronics[key]}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="info-parent-row">
          <div className="info-row-heading">
            <img className="info-row-icon" src={HardwareIcon} alt="" />
            <h4 className="info-row-title">Hardware</h4>
          </div>
          <ul className="info-row-list">
            {Object.keys(SpecsData.SpecsHardware).map((key, i) => (
              <li className="flex-list-item" key={i}>
                <div className="labels">{key}</div>
                <div className="values">{SpecsData.SpecsHardware[key]}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
