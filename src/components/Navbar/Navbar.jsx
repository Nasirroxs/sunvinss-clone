import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import eaverlogodark from "../../assets/EaverLogoDark.png";
import eaverlogolight from "../../assets/EaverLogoLight.png";
import { FaBars, FaTimes, FaMoon, FaSun, FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          {/* ✅ Dynamic Logo */}
          <div className="logo" onClick={() => navigate("/")}>
            <img
              src={theme === "light" ? eaverlogodark : eaverlogolight}
              alt="Eaver Global Logo"
              className="navbar-logo"
            />
          </div>

          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li><button className="nav-btn" onClick={() => handleNavigation("products")}>Products</button></li>
              <li><button className="nav-btn" onClick={() => handleNavigation("services")}>Services</button></li>
              <li><button className="nav-btn" onClick={() => handleNavigation("industries")}>Industries</button></li>
              <li><button className="nav-btn" onClick={() => handleNavigation("company")}>Company</button></li>
              <li><button className="nav-btn" onClick={() => { setMenuOpen(false); navigate("/about"); }}>About Us</button></li>
              <li><button className="nav-btn" onClick={() => handleNavigation("contact")}>Contact Us</button></li>
            </ul>

            {/* Social Icons + Theme Toggle */}
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61583545046013" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/eaverglobal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://x.com/EaverGlobal" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/eaver-global-729a87397/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://wa.me/919384564250" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>

              {/* ✅ Light/Dark Mode Toggle */}
              <div className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
