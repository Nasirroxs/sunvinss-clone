import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile-page">
      <div className="profile-container">
        <h2 className="section-title">
          COMPANY <span className="highlight">PROFILE</span>
        </h2>

        <div className="profile-content">
          <p>
            <strong>Sunvinss Energy Private Limited</strong> is a global engineering
            and manufacturing company delivering innovative energy, industrial,
            and automation solutions. Our expertise spans multiple sectors
            including renewable energy, electrical systems, control panels,
            industrial harnesses, and turnkey project solutions.
          </p>

          <p>
            With offices in <strong>India</strong> and <strong>Kenya</strong>, Sunvinss
            has earned the trust of leading industries by providing
            cost-effective, reliable, and future-ready solutions.
          </p>

          <div className="profile-mission">
            <h3>Our Mission</h3>
            <p>
              To empower industries through sustainable technology, precision
              engineering, and customer-first innovation.
            </p>
          </div>

          <div className="profile-vision">
            <h3>Our Vision</h3>
            <p>
              To be a global leader in industrial automation and energy
              solutions, driving a greener and more connected world.
            </p>
          </div>

          <div className="profile-values">
            <h3>Core Values</h3>
            <ul>
              <li>Integrity and transparency</li>
              <li>Customer satisfaction above all</li>
              <li>Continuous innovation</li>
              <li>Commitment to sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
