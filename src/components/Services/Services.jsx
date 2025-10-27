import React, { useState } from "react";
import "../styles/SectionStyles.css";
import servicesData from "../../data/servicesData";
import Modal from "../common/Modal";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="section-wrapper" id="services">
      <h2 className="section-title">
        OUR <span className="highlight">SERVICES</span>
      </h2>

      <div className="section-grid">
        {servicesData.map((service) => (
          <div
            className="card"
            key={service.id}
            onClick={() => setSelectedService(service)}
          >
            <img src={service.image} alt={service.title} />
            <div className="card-name">{service.title}</div>
          </div>
        ))}
      </div>

      {selectedService && (
        <Modal item={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
};

export default Services;
