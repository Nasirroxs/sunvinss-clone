import React from "react";
import { Link } from "react-router-dom";
import "./Company.css";

const Company = () => {
  return (
    <section className="company-section" id="company">
      <h2 className="section-title">
        OUR <span className="highlight">COMPANY</span>
      </h2>

      <div className="company-links">
        <Link to="/about" className="company-card">
          <h3>About Us</h3>
          <p>Learn more about our company’s story, values, and mission.</p>
        </Link>

        <Link to="/profile" className="company-card">
          <h3>Profile</h3>
          <p>Explore our operations, expertise, and major achievements.</p>
        </Link>

        <Link to="/career" className="company-card">
          <h3>Career</h3>
          <p>Join our growing team and build your future with Sunvinss.</p>
        </Link>
      </div>
    </section>
  );
};

export default Company;
