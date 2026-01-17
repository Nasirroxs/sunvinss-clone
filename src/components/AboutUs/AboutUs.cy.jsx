// cypress/component/AboutUs.cy.jsx
import React from "react";
import { mount } from "cypress/react";
import AboutUs from "../../../src/components/AboutUs/AboutUs";

describe("AboutUs Component (Component Test)", () => {
  it("renders the section title correctly", () => {
    mount(<AboutUs />);
    cy.contains("ABOUT").should("exist");
    cy.contains("EAVER").should("exist");
  });

  it("renders all the main paragraphs", () => {
    mount(<AboutUs />);

    const paragraphs = [
      "EAVER has been a leading supplier of HT & LT products for over many years.",
      "EAVER is the only power products supplier to give customers a true choice.",
      "We also render services like Designing, Installation, Testing and Commissioning",
    ];

    paragraphs.forEach((text) => {
      cy.contains(text.substring(0, 20)).should("exist");
    });
  });

  it("renders the blockquote with the pledge", () => {
    mount(<AboutUs />);
    cy.contains("We pledge what we vend").should("exist");
  });

  it("renders with correct structure", () => {
    mount(<AboutUs />);
    cy.get(".about-us-section").should("exist");
    cy.get(".about-us-container").should("exist");
    cy.get("blockquote").should("exist");
  });

  it("supports dark mode (non-visual test)", () => {
    cy.document().then((doc) => {
      doc.documentElement.setAttribute("data-theme", "dark");
    });

    mount(<AboutUs />);

    cy.get("blockquote").should("exist"); // verifying element still renders
    cy.document()
      .its("documentElement.dataset.theme")
      .should("equal", "dark");
  });
});
