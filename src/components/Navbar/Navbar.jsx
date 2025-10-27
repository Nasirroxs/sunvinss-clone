import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo4.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="Sunvinss Logo" />
          </div>

          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>

          {/* Links */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#company">Company</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
