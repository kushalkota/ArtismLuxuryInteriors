import React from "react";
import "./HowItWorks.css";
import FirstIcon from "./images/first-icon.png";
import SecondIcon from "./images/second-icon.png";
import ThirdIcon from "./images/third-icon.png";

export default function HowItWorks() {
  return (
    <div id="how-it-works">
      <div id="hiw-title">HOW IT WORKS</div>
      <div id="hiw-border">
        <div className="hiw-line"></div>
        <div className="hiw-dot"></div>
        <div className="hiw-line"></div>
      </div>
      <div id="hiw-content">
        <HIWcontent
          src={FirstIcon}
          title="DISCOVERY"
          content="Initially, get a wind of all the ideas from your end to work on optimum designs to fulfill those ideas through our skilled interior designers."
        />
        <HIWcontent
          src={SecondIcon}
          title="CONCEPTUALIZATION"
          content="With skilled designers, we create a 3D virtual outlook which will depict the ideas discussed before. This will ensure maximum satisfaction to you since the output will be your ideas and dreams."
        />
        <HIWcontent
          src={ThirdIcon}
          title="EXECUTION"
          content="All set to move in? Within the agreed time from the date of planning, we intend to deliver results! We will notify about the progress from a dedicated project manager on a regular basis which will assist you in planning the move-in date."
        />
      </div>
    </div>
  );
}

export const HIWcontent = (props) => {
  return (
    <div className="hiw-card">
      <img src={props.src} alt="discovery" />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};
