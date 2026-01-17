import React from "react";
import Products from "../../../src/components/Products/Products";
import { mount } from "cypress/react";

describe("Products Component", () => {
  beforeEach(() => {
    mount(<Products />);
  });

  it("renders the products section", () => {
    cy.get("#products").should("exist");
  });

  it("renders all product cards", () => {
    cy.get(".card").should("have.length.at.least", 6);
  });

  it("opens modal when clicking a product card", () => {
    cy.get(".card").first().click();
    cy.get(".modal-content").should("be.visible");
  });

  it("closes modal when clicking close button", () => {
    cy.get(".card").first().click();
    cy.get(".close-btn").click();
    cy.get(".modal-content").should("not.exist");
  });

  it("closes modal when clicking overlay", () => {
    cy.get(".card").eq(1).click();
    cy.get(".modal-overlay").click("topLeft");
    cy.get(".modal-content").should("not.exist");
  });
});
