import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <h2 className="section-title">
          ABOUT <span className="highlight">EAVER</span>
        </h2>

        <p>
          <strong>EAVER</strong> has been a leading supplier of HT & LT
          products for over many years.
        </p>

        <p>
          EAVER is the only power products supplier to give customers a true
          choice. We've helped various types of customers from EPC Contractors to
          Utilities, and along the way, we're proud to have built a solid
          reputation for great prices, great selection, and a great source for
          hard-to-find electronic components.
        </p>

        <p>
          We also render services like Designing, Installation, Testing and
          Commissioning, Operation, and Maintenance related to substations, power
          plants, industries, etc. EAVER’s buying expertise allows even the
          smallest company or individual to enjoy the same competitive pricing
          edge typically reserved for the highest-volume buyers.
        </p>

        <blockquote>
          “We pledge what we vend — our products are high-quality and reliable and
          are bound to surpass all international standards.”
        </blockquote>
      </div>
    </section>
  );
}

export default AboutUs;
