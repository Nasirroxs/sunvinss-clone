import React from "react";
import { BrowserRouter } from "react-router-dom";
import Company from "../../../src/components/Company/Company";
import { mount } from "cypress/react";

describe("Company Component", () => {
  const mountWithRouter = () =>
    mount(
      <BrowserRouter>
        <Company />
      </BrowserRouter>
    );

  beforeEach(() => {
    mountWithRouter();
  });

  it("renders the company section", () => {
    cy.get("#company").should("exist");
    cy.contains("OUR").should("exist");
    cy.contains("COMPANY").should("exist");
  });

  it("renders all company navigation cards", () => {
    cy.get(".company-card").should("have.length", 3);

    cy.contains("About Us").should("exist");
    cy.contains("Profile").should("exist");
    cy.contains("Career").should("exist");
  });

  it("each card contains title and description", () => {
    cy.get(".company-card").each(($card) => {
      cy.wrap($card).find("h3").should("exist");
      cy.wrap($card).find("p").should("exist");
    });
  });

  it("checks the links are correct", () => {
    cy.get(".company-card")
      .eq(0)
      .should("have.attr", "href", "/about");

    cy.get(".company-card")
      .eq(1)
      .should("have.attr", "href", "/profile");

    cy.get(".company-card")
      .eq(2)
      .should("have.attr", "href", "/career");
  });

  it("hover effect works visually", () => {
    cy.get(".company-card")
      .first()
      .trigger("mouseover")
      .should("have.css", "transform")
      .and("not.eq", "none");
  });
});
