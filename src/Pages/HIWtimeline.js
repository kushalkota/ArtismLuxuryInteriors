import React from "react";
import "./HIWtimeline.css";
import FirstIcon from "../images/first-icon.png";
import SecondIcon from "../images/second-icon.png";
import ThirdIcon from "../images/third-icon.png";

export default function HIWtimeline() {
  return (
    <div class="timeline">
      <div class="container left">
        <div class="content">
          <img src={FirstIcon} alt="discover" />
          <h2>Discover</h2>
          <p>
            At Space Clap, you get to see countless designs of varied styles for
            your different rooms. You can meet one of our specialists; discover
            the styles and patterns as per your taste and can make a picture of
            how your dream home or office should look like in your mind. Keeping
            into consideration, the choices of our high profile and respectable
            clients; we have collections of extremely classy designs which are
            sure to make you feel elated. With innumerable designs before you,
            you will definitely be thrilled to bits for designing your new
            place.
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <img src={SecondIcon} alt="design" />
          <h2>Design</h2>
          <p>
            You are assigned with an interior designer to design your entire
            project as per your style and aspirations. With our interior
            designer, you would be absolutely comfortable to share your visions
            and views related to your chosen designs. You can see and co-design
            your place along with our designer with reference to your chosen
            style and patterns. You can easily get the quotes for the designs
            you have created along with our designer and can finalize the design
            depending on your budget. Our designers will also help in selecting
            perfect designs within your stipulated budget and can also help in
            customizing your designs for a better outcome.
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <img src={ThirdIcon} alt="move-in" />
          <h2>Move In</h2>
          <p>
            At Space Clap, you get to see countless designs of varied styles for
            your different rooms. You can meet one of our specialists; discover
            the styles and patterns as per your taste and can make a picture of
            how your dream home or office should look like in your mind. Keeping
            into consideration, the choices of our high profile and respectable
            clients; we have collections of extremely classy designs which are
            sure to make you feel elated. With innumerable designs before you,
            you will definitely be thrilled to bits for designing your new
            place.
          </p>
        </div>
      </div>
    </div>
  );
}
