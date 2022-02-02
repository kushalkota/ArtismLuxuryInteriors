import React from "react";
import "./Offer.css";
import { HIWcontent } from "./HowItWorks";
import SecondIcon from "./images/second-icon.png";
import FirstIcon from "./images/offer-icon1.png";
import SecondIcon2 from "./images/offer-icon2.png";
import ThirdIcon from "./images/offer-icon3.png";
import ForthIcon from "./images/offer-icon4.png";

export default function Offer() {
  return (
    <div id="offer">
      <h1>WHAT DO WE OFFER</h1>
      <div id="offer-border">
        <div className="offer-line"></div>
        <div className="offer-dot"></div>
        <div className="offer-line"></div>
      </div>
      <div className="offer-content">
        <HIWcontent
          src={SecondIcon}
          title="Customized Design"
          className="oc-title"
        />
        <HIWcontent
          src={FirstIcon}
          title="Photo Realistic Visualization"
          className="oc-title"
        />
        <HIWcontent
          src={SecondIcon2}
          title="Hasslefree Implementation"
          className="oc-title"
        />
      </div>
      <div className="offer-content">
        <HIWcontent
          src={ThirdIcon}
          title="Trusted Partner"
          className="oc-title"
        />
        <HIWcontent
          src={ForthIcon}
          title="5 Year Warranty"
          className="oc-title"
        />
      </div>
    </div>
  );
}
