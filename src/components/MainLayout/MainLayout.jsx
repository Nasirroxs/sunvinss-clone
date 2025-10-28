import React from "react";
import Carousel from "../Carousel/Carousel";
import Intro from "../Intro/Intro";
import Products from "../Products/Products";
import Industries from "../Industries/Industries";
import Company from "../Company/Company";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="content">
        <Carousel />
        <Intro />
        <Products />
        <Industries />
        <Company />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default MainLayout;
