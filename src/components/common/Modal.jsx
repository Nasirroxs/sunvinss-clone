import React from "react";
import "./Modal.css";

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {item.image && (
          <img src={item.image} alt={item.name} className="modal-image" />
        )}

        <h3 className="modal-title">{item.name}</h3>

        <div
          className="modal-description"
          dangerouslySetInnerHTML={{
            __html: item.description.replace(/\n/g, "<br/>"),
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
