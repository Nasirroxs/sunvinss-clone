// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../../assets/logo4.png";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const handleNavigation = (sectionId) => {
//     setMenuOpen(false);
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 400);
//     } else {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <header>
//       <nav className="navbar">
//         <div className="navbar-container">
//           {/* Logo */}
//           <div className="logo" onClick={() => navigate("/")}>
//             <img src={logo} alt="Sunvinss Logo" />
//           </div>

//           {/* Hamburger Icon */}
//           <div className="menu-icon" onClick={toggleMenu}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>

//           {/* Navigation Links */}
//           <div className={`nav-links ${menuOpen ? "active" : ""}`}>
//             <ul>
//               <li><a onClick={() => handleNavigation("products")}>Products</a></li>
//               <li><a onClick={() => handleNavigation("industries")}>Industries</a></li>
//               <li><a onClick={() => handleNavigation("company")}>Company</a></li>
//               <li><a onClick={() => handleNavigation("services")}>Services</a></li>
//               <li><a onClick={() => handleNavigation("contact")}>Contact Us</a></li>
//               <li>
//                 <a onClick={() => { setMenuOpen(false); navigate("/about"); }}>
//                   About Us
//                 </a>
//               </li>
//             </ul>

//             {/* Social Icons */}
//             <div className="social-icons">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo4.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="Sunvinss Logo" />
          </div>

          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <button className="nav-btn" onClick={() => handleNavigation("products")}>
                  Products
                </button>
              </li>
              <li>
                <button className="nav-btn" onClick={() => handleNavigation("industries")}>
                  Industries
                </button>
              </li>
              <li>
                <button className="nav-btn" onClick={() => handleNavigation("company")}>
                  Company
                </button>
              </li>
              <li>
                <button className="nav-btn" onClick={() => handleNavigation("services")}>
                  Services
                </button>
              </li>
              <li>
                <button className="nav-btn" onClick={() => handleNavigation("contact")}>
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/about");
                  }}
                >
                  About Us
                </button>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
