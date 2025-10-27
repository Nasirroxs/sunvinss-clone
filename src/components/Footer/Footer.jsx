import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* India Office */}
        <div className="footer-section">
          <h3>India</h3>
          <p><strong>SUNVINSS ENERGY PRIVATE LIMITED</strong></p>
          <p>Old no: 278, New no: 16</p>
          <p>Thanthai Periyar Street</p>
          <p>Ambattur, Chennai – 600053</p>
        </div>

        {/* Kenya Office */}
        <div className="footer-section">
          <h3>Kenya</h3>
          <p><strong>SUNVIN LIMITED</strong></p>
          <p>P.O.Box: 14840-00800</p>
          <p>1st Floor, New Waumini House</p>
          <p>Westlands, Nairobi, Kenya</p>
          <p>Phone: +254 780 999 899</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:info@sunvinss.com">info@sunvinss.com</a></p>
          <p>Skype: Sunvinss Ltd</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sunvinss Energy Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
