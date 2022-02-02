import React from "react";
import NavBar from "./NavBar";
import AboutUsPage from "./Pages/AboutUsPage";
import HIWtimeline from "./Pages/HIWtimeline";
import OurProjectsPage from "./Pages/OurProjectsPage";
import ContactPage from "./Pages/ContactPage";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <NavBar />
        <div className="web-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="how-it-works" element={<HIWtimeline />} />
            <Route path="projects" element={<OurProjectsPage />} />
            <Route path="contact-us" element={<ContactPage />} />
          </Routes>
        </div>
        <Contact />
      </div>
    </BrowserRouter>
  );
}
