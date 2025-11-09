import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* India Office */}
        <div className="footer-section">
          <h3>India Office</h3>
          <p><strong>EAVER GLOBAL SOLUTIONS PRIVATE LIMITED</strong></p>
          <p>No: E8</p>
          <p>Thiru Vi Ka Industrial Estate</p>
          <p>Guindy, Chennai – 600032</p>
          <p>Tamil Nadu, India</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:eaverglobal@gmail.com">eaverglobal@gmail.com</a>
          </p>
          <p>Phone: <a href="tel:+919384564259">+91 9384564259</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <strong>Eaver Global Slountions Private Limited</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
