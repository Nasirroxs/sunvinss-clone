import React, { useState } from "react";
import "../styles/SectionStyles.css";
import industriesData from "../../data/industriesData";
import Modal from "../common/Modal";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <section className="section-wrapper" id="industries">
      <h2 className="section-title">
        OUR <span className="highlight">INDUSTRIES</span>
      </h2>

      <div className="section-grid">
        {industriesData.map((industry) => (
          <div
            className="card"
            key={industry.id}
            onClick={() => setSelectedIndustry(industry)}
          >
            <img src={industry.image} alt={industry.name} />
            <div className="card-name">{industry.name}</div>
          </div>
        ))}
      </div>

      {selectedIndustry && (
        <Modal item={selectedIndustry} onClose={() => setSelectedIndustry(null)} />
      )}
    </section>
  );
};

export default Industries;
