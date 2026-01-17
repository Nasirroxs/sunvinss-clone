import React from "react";
import Industries from "../../../src/components/Industries/Industries";
import { mount } from "cypress/react";

describe("Industries Component", () => {
  beforeEach(() => {
    mount(<Industries />);
  });

  it("renders the industries section", () => {
    cy.get("#industries").should("exist");
    cy.contains("OUR").should("exist");
    cy.contains("INDUSTRIES").should("exist");
  });

  it("renders all industry cards", () => {
    cy.get(".card").should("have.length.at.least", 3); // based on your data
  });

  it("opens modal when clicking an industry card", () => {
    cy.get(".card").first().click();
    cy.get(".modal-content").should("be.visible");
  });

  it("shows correct industry title inside modal", () => {
    cy.get(".card").first().click();

    cy.get(".modal-title").should("exist");

    // title should match the card name
    cy.get(".card-name")
      .first()
      .invoke("text")
      .then((name) => {
        cy.get(".modal-title").should("contain", name);
      });
  });

  it("closes modal when clicking close button", () => {
    cy.get(".card").first().click();
    cy.get(".close-btn").click();
    cy.get(".modal-content").should("not.exist");
  });

  it("closes modal when clicking overlay", () => {
    cy.get(".card").first().click();
    cy.get(".modal-overlay").click("topLeft"); // click outside modal
    cy.get(".modal-content").should("not.exist");
  });
});
