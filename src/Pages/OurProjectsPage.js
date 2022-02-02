import React from "react";
import "./OurProjectsPage.css";
import OPP1 from "../images/opp1.jpg";
import OPP2 from "../images/opp2.jpg";
import OPP3 from "../images/opp3.jpg";
import OPP4 from "../images/opp4.jpg";
import OPP5 from "../images/opp5.jpg";
import OPP6 from "../images/opp6.jpg";

export default function OurProjectsPage() {
  return (
    <div id="our-projects-page">
      <div id="opp-title">OUR PROJECTS</div>
      <div id="opp-border">
        <div className="opp-line"></div>
        <div className="opp-dot"></div>
        <div className="opp-line"></div>
      </div>
      <div id="opp-img-container">
        <img src={OPP1} alt="residential-interior" />
        <img src={OPP2} alt="residential-interior" />
        <img src={OPP3} alt="residential-interior" />
        <img src={OPP4} alt="residential-interior" />
        <img src={OPP5} alt="residential-interior" />
        <img src={OPP6} alt="residential-interior" />
      </div>
    </div>
  );
}
