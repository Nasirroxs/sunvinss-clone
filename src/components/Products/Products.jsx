import React, { useState } from "react";
import "../styles/SectionStyles.css";
import productData from "../../data/productsData";
import Modal from "../common/Modal";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="section-wrapper" id="products">
      <h2 className="section-title">
        OUR <span className="highlight">PRODUCTS</span>
      </h2>

      <div className="section-grid">
        {productData.map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} />
            <div className="card-name">{product.name}</div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal item={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
};

export default Products;
