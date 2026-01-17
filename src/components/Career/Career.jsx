import React, { useState } from "react";
import "../styles/SectionStyles.css";
import "./Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.resume) {
      setStatus("⚠️ Please fill all required fields and upload your resume.");
      return;
    }

    setLoading(true);
    setStatus("⏳ Sending your application...");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const baseURL = process.env.REACT_APP_API_BASE_URL || `${window.location.protocol}//${window.location.host}`;
      const response = await fetch(`${baseURL}/api/career`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Application submitted successfully! Check your email for confirmation.");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          position: "",
          resume: null,
        });
      } else {
        setStatus("❌ Failed to submit application. Please try again later.");
      }
    } catch (error) {
      console.error("Career form error:", error);
      setStatus("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-wrapper career-section" id="career">
      <div className="career-container">
        <h2 className="section-title">
          JOIN OUR <span className="highlight">TEAM</span>
        </h2>

        <p className="intro-text">
          At <strong>Eaver Global Solutions</strong>, we believe in innovation, teamwork,
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
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Application"}
          </button>

          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Career;