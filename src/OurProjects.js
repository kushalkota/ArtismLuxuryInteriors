import React from "react";
import "./OurProjects.css";
import IMG1 from "./images/op-img-1.jpg";
import IMG2 from "./images/op-img-2.jpg";
import IMG3 from "./images/op-img-3.jpg";
import IMG4 from "./images/op-img-4.jpg";

export default function OurProjects() {
  return (
    <div id="our-projects">
      <h1>Our Projects</h1>
      <div id="op-underline"></div>
      <div id="op-img-container">
        <img src={IMG1} alt="IMG1" className="op-img" />
        <img src={IMG2} alt="IMG2" className="op-img" />
        <img src={IMG3} alt="IMG3" className="op-img" />
        <img src={IMG4} alt="IMG4" className="op-img" />
      </div>
      <div id="op-btn-container">
        <button>View More</button>
      </div>
    </div>
  );
}
