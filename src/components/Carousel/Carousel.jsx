import React from "react";
import "./Carousel.css";

const Carousel = () => {
  // Step 1: Store image URLs in an array
  const slides = [
    "https://www.sunvinss.com/assets/frontend/onepage/img/silder/slide1.jpg",
    "https://www.sunvinss.com/assets/frontend/onepage/img/silder/slide2.jpg",
    "https://www.sunvinss.com/assets/frontend/onepage/img/silder/slide3.jpg",
    "https://www.sunvinss.com/assets/frontend/onepage/img/silder/slide4.jpg",
    "https://www.sunvinss.com/assets/frontend/onepage/img/silder/slide5.jpg",
  ];

  return (
    <section className="hero-carousel">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Step 2: Dynamically render each slide */}
        <div className="carousel-inner">
          {slides.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="3000"
            >
              <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Step 3: Navigation Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
