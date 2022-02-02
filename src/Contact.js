import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import Logo from "./images/ArtismLuxuryInteriors.png";
import Facebook from "./images/facebook.png";
import Linkedin from "./images/linkedin.png";

export default function Contact() {
  return (
    <div id="contact-us">
      <div id="consultation">
        <Link to="/contact-us" className="link">
          BOOK DESIGN CONSULTATION
        </Link>
      </div>
      <div id="contact-details">
        <div className="company-details">
          <img src={Logo} alt="" />
          <p>
            We believe that the quality of service we provide should not be
            compromised or affected under any circumstances. At Space Clap, our
            designers provide their opinions on clients’ plan or designs frankly
            without any apprehension
          </p>
        </div>
        <div className="company-details">
          <h1>Contact Us</h1>
          <p>
            Pride Springfields Gubbalalu Village, Subramanyapura post, Off,
            Kanakapura Rd, Adjacent to, Subramanyapura, Bengaluru, Karnataka
            560061
          </p>
          <p>
            Phone: +91 - 8050839551.
            <br />
            Phone: +91 - 9739421966.
          </p>
          <p>Email:hello@artismluxuryinteriors.com</p>
        </div>
      </div>
      <div id="copyright">
        <div>© Copyright 2020 - ArtismLuxuryInteriors</div>
        <div id="social-media">
          <a>
            <img src={Facebook} alt="facebook" />
          </a>
          <a>
            <img src={Linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
