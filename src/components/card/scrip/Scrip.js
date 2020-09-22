import React from "react";
import "./Scrip.css";
import { FaBars } from "react-icons/fa";
const Scrip = (props) => {
  return (
  <div className="card"> 
    <div className="scrip-ishare">
      <div className="ishare-icon">
        <FaBars/>
      </div>
      <div className="ishare-content">
  <h2 className="ishare-title">{props.scrip}</h2>
  <span className="ishare-price">$<span>{props.price}</span></span>
      </div>
      <div className="ishare-index">
        <p className="ishare-logo">iShares</p>
        <p className="ishare-tagline">by blockDocs</p>
        <p className="ishare-sp">S&P 500 Index</p>
        <p className="ishare-equity">US Equity</p>
      </div>
    </div> 
  </div>
   );
};

export default Scrip;
