import React, { useState } from "react";
import "../styles/SectionStyles.css";
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
        headers: { "Content-Type": "application/json" },
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
    <section className="section-wrapper" id="contact">
      <h2 className="section-title">
        GET IN <span className="highlight">TOUCH</span>
      </h2>

      <div className="contact-container">
        {/* Left side - Map */}
        <div className="map-container">
          <iframe
            title="Eaver Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17088.15666276429!2d80.1915825738994!3d13.01316717478497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267156b00bd43%3A0xab87c4552e8f24da!2s8%2C%20Thiru%20Vi%20Ka%20Industrial%20Estate%2C%20SIDCO%20Industrial%20Estate%2C%20Guindy%2C%20Chennai%2C%20Tamil%20Nadu%20600032!5e1!3m2!1sen!2sin!4v1762702572455!5m2!1sen!2sin"
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
