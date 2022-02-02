import React from "react";
import "./OurPartners.css";
import OwlCarousel from "react-owl-carousel";
import "../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import C1 from "./images/c1.png";
import C2 from "./images/c2.png";
import C3 from "./images/c3.png";
import C4 from "./images/c4.png";
import C5 from "./images/c5.png";
import C6 from "./images/c6.png";
import C7 from "./images/c7.png";
import C8 from "./images/c8.png";
import C9 from "./images/c9.png";
import C10 from "./images/c10.png";

export default function OurPartners() {
  return (
    <div id="carousel-body">
      <OwlCarousel
        className="owl-theme"
        loop={true}
        margin={10}
        items={4}
        autoplay={true}
      >
        <div class="item">
          <img src={C1} alt="brand" />
        </div>
        <div class="item">
          <img src={C2} alt="brand" />
        </div>
        <div class="item">
          <img src={C3} alt="brand" />
        </div>
        <div class="item">
          <img src={C4} alt="brand" />
        </div>
        <div class="item">
          <img src={C5} alt="brand" />
        </div>
        <div class="item">
          <img src={C6} alt="brand" />
        </div>
        <div class="item">
          <img src={C7} alt="brand" />
        </div>
        <div class="item">
          <img src={C8} alt="brand" />
        </div>
        <div class="item">
          <img src={C9} alt="brand" />
        </div>
        <div class="item">
          <img src={C10} alt="brand" />
        </div>
      </OwlCarousel>
    </div>
  );
}
