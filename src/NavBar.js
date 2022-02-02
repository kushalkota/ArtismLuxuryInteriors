import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/ArtismLuxuryInteriors.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="navbar">
      <img src={Logo} alt="company-logo" />
      <nav id="navbar-content">
        <Link className="navlink" to="/">
          HOME
        </Link>
        <div className="dot"></div>
        <Link className="navlink" to="/about">
          ABOUT US
        </Link>
        <div className="dot"></div>
        <Link className="navlink" to="/how-it-works">
          HOW IT WORKS
        </Link>
        <div className="dot"></div>
        <Link className="navlink" to="/projects">
          OUR PROJECTS
        </Link>
        <div className="dot"></div>
        <Link className="navlink" to="/contact-us">
          CONTACT US
        </Link>
      </nav>
    </div>
  );
}
