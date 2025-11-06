import React, { useState } from "react";
import "./Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! Our HR team will contact you soon.");
  };

  return (
    <section className="career-page">
      <div className="career-container">
        <h2 className="section-title">
          JOIN OUR <span className="highlight">TEAM</span>
        </h2>

        <p className="intro-text">
          At <strong>Sunvinss Energy</strong>, we believe in innovation, teamwork,
          and empowering our employees to achieve excellence. Explore opportunities
          to grow your career with us.
        </p>

        <form className="career-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applied For"
            value={formData.position}
            onChange={handleChange}
          />
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
          />

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default Career;
