import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div id="contact-page">
      <div id="contact-form">
        <p>
          Send your message in the form below and we will get back to you as
          early as possible.
        </p>
        <input className="name" type="text" placeholder="Enter Your Name" />
        <input className="email" type="text" placeholder="Enter Your Email" />
        <input className="no" type="text" placeholder="Enter Your Phone-No" />
        <input
          className="message"
          type="text"
          placeholder="Enter your Message"
        />
        <button type="submit">Submit</button>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.214227376883!2d77.53630411482118!3d12.893941990906859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f9529c9a4dd%3A0x86a91d5b16b47c8a!2sPride%20Springfields%2C%202nd%20Stage%2C%20Jayanagar%20housing%20society%20layout%2C%20Subramanyapura%2C%20Bengaluru%2C%20Karnataka%20560061!5e0!3m2!1sen!2sin!4v1643797185361!5m2!1sen!2sin"
        loading="lazy"
        className="map"
      ></iframe>
    </div>
  );
}
