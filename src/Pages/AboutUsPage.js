import React from "react";
import "./AboutUsPage.css";
import AUP from "../images/about-us.jpg";

export default function AboutUsPage() {
  return (
    <div id="about-us-page">
      <img src={AUP} alt="about-pic" />
      <h1>About Us</h1>
      <p>
        We are professionals at 3D augmented reality based design, which helps
        you visualise things like never before,its futuristic, At Artism
        Providing a great interior design is our business and our passion. We
        believe that a house becomes a home when it’s personalized — your space
        should show off your tastes and personality, We work with your
        lifestyle, and make your guests feel wonderful about you space . We know
        that creating a home interior that does all of these things isn’t easy,
        and we’re here to help.
      </p>
      <p>
        Our talented designers bring 6 years of experience, in space planning,
        or whichever furniture piece we’re sitting near. From discovering your
        personal style to knocking down that wall that’s been preventing the
        open-concept living area you’ve been looking forward for, we’ll make
        sure that your space isn’t just aesthetically pleasing, but also a
        reflection of you.
      </p>
    </div>
  );
}
