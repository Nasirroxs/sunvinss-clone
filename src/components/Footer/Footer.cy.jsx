// cypress/component/Footer.cy.jsx
import React from "react";
import { mount } from "cypress/react"; // use "cypress/react" for wider compatibility
import Footer from "../../../src/components/Footer/Footer";

describe("Footer Component (component test)", () => {
  it("renders India Office section and address lines", () => {
    mount(<Footer />);

    // Heading and company name
    cy.contains("India Office").should("exist");
    cy.contains("EAVER GLOBAL SOLUTIONS PRIVATE LIMITED").should("exist");

    // Address lines
    cy.contains("No: E8").should("exist");
    cy.contains("Thiru Vi Ka Industrial Estate").should("exist");
    cy.contains("Guindy, Chennai – 600032").should("exist");
    cy.contains("Tamil Nadu, India").should("exist");
  });

  it("renders contact info and correct mailto & tel links", () => {
    mount(<Footer />);

    // Email link
    cy.get("a[href^='mailto:']").should("have.attr", "href").and("contain", "eaverglobal@gmail.com");
    cy.get("a[href='mailto:eaverglobal@gmail.com']").should("exist");

    // Phone link
    cy.get("a[href^='tel:']").should("have.attr", "href").and("contain", "+91");
    cy.get("a[href='tel:+919384564259']").should("exist");
  });

  it("shows current year and company in copyright", () => {
    mount(<Footer />);
    const year = new Date().getFullYear().toString();
    cy.contains(year).should("exist");
    cy.contains("Eaver Global Slountions Private Limited").should("exist");
  });

  it("is present in the DOM and is visible", () => {
    mount(<Footer />);
    cy.get("footer.footer").should("be.visible");
  });

  // Optional: test dark-mode class/attribute presence (non-visual check)
  it("responds to data-theme attribute (non-visual assertion)", () => {
    // set dark theme on document and mount
    cy.document().then((doc) => doc.documentElement.setAttribute("data-theme", "dark"));
    mount(<Footer />);

    // ensure attribute is set
    cy.document().its("documentElement.dataset.theme").should("equal", "dark");

    // basic smoke check: footer still visible
    cy.get("footer.footer").should("be.visible");
  });
});
