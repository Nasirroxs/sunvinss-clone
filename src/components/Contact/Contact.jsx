import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">
        GET IN <span className="highlight">TOUCH</span>
      </h2>

      <div className="contact-container">
        {/* Left side - Map */}
        <div className="map-container">
          <iframe
            title="Sunvinss Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2969058026267!2d80.15651917481268!3d13.112338313569066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263f1e8b2c01b%3A0xfbdbe9b9a1a8c8f0!2sSunvinss%20Energy%20Private%20Limited!5e0!3m2!1sen!2sin!4v1698482339289!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right side - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
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
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
