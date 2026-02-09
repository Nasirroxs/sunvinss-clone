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
          <p>Phone: <a href="tel:+919384564250">+91 9384564250</a></p>
          <p>WhatsApp: <a href="https://wa.me/919384564250">+91 9384564250</a></p>
        </div>
        
        {/* Kenya Office */}
        <div className="footer-section">
          <h3>Kenya Office</h3>
          <p><strong>EAVER GLOBAL SOLUTIONS</strong></p>
          <p>P.O Box 2769 - 00606</p>
          <p>1st Parklands</p>
          <p>Nairobi, Kenya</p>
          <p>Phone: <a href="tel:+254733918555">+254 733918555</a></p>
          <p>WhatsApp: <a href="https://wa.me/919384564250">+91 9384564250</a></p>
        </div>

        {/* Uganda Office */}
        <div className="footer-section">
          <h3>Uganda Office</h3>
          <p><strong>EAVER GLOBAL SOLUTIONS</strong></p>
          <p>Crested Tower</p>
          <p>Central Kampala</p>
          <p>Uganda</p>
          <p>Phone: <a href="tel:+256708608353">+256 708608353</a></p>
          <p>WhatsApp: <a href="https://wa.me/919384564250">+91 9384564250</a></p>
        </div>

        {/* Rwanda Office */}
        <div className="footer-section">
          <h3>Rwanda Office</h3>
          <p><strong>EAVER GLOBAL SOLUTIONS</strong></p>
          <p>Remera, Gasabo</p>
          <p>Umujyi Wa Kigali</p>
          <p>Kigali, Rwanda</p>
          <p>Phone: <a href="tel:+250738255818">+250 738255818</a></p>
          <p>WhatsApp: <a href="https://wa.me/919384564250">+91 9384564250</a></p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:supports@eaverglobal.com">supports@eaverglobal.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <strong>Eaver Global Solutions Private Limited</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
