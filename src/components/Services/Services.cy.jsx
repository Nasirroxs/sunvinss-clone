import React from "react";
import { mount } from "cypress/react";
import Services from "../../../src/components/Services/Services";

describe("Services Component", () => {
  beforeEach(() => {
    mount(<Services />);
  });

  it("renders the services section correctly", () => {
    cy.get("#services").should("exist");
    cy.contains("OUR").should("exist");
    cy.contains("SERVICES").should("exist");
  });

  it("renders all service cards", () => {
    cy.get(".card").should("have.length", 6); // because your servicesData has 6 items
  });

  it("each card displays its title", () => {
    const titles = [
      "DESIGN & EPC SOLUTIONS",
      "Deputation of Technical Manpower Services",
      "O & M",
      "T & C",
      "INSTALLATION",
      "IT / Software Development",
    ];

    titles.forEach((title) => {
      cy.contains(title).should("exist");
    });
  });

  it("opens modal when clicking a service card", () => {
    cy.get(".card").first().click();
    cy.get(".modal-content").should("exist");
  });

  it("modal closes when clicking outside (overlay)", () => {
    cy.get(".card").eq(2).click();
    cy.get(".modal-overlay").click("topLeft"); // click empty part of overlay
    cy.get(".modal-content").should("not.exist");
  });

  it("modal closes when clicking the close button", () => {
    cy.get(".card").last().click();
    cy.get(".close-btn").click();
    cy.get(".modal-content").should("not.exist");
  });
});
