import React from "react";
import { mount } from "cypress/react";
import Career from "../../../src/components/Career/Career";

describe("Career Component", () => {
  beforeEach(() => {
    // Mock backend API call
    cy.intercept("POST", "http://localhost:5000/api/career", {
      statusCode: 200,
      body: { success: true },
    }).as("submitCareer");

    mount(<Career />);
  });

  it("renders all input fields", () => {
    cy.get("input[name='fullname']").should("exist");
    cy.get("input[name='email']").should("exist");
    cy.get("input[name='phone']").should("exist");
    cy.get("input[name='position']").should("exist");
    cy.get("input[name='resume']").should("exist");
    cy.get("button[type='submit']").should("exist");
  });

  it("allows typing into text fields", () => {
    cy.get("input[name='fullname']").type("John Doe").should("have.value", "John Doe");
    cy.get("input[name='email']").type("john@example.com").should("have.value", "john@example.com");
    cy.get("input[name='phone']").type("1234567890").should("have.value", "1234567890");
    cy.get("input[name='position']").type("Software Engineer")
      .should("have.value", "Software Engineer");
  });

  it("uploads a resume file", () => {
    const fileName = "sample.pdf";

    cy.fixture(fileName, "base64").then((fileContent) => {
      cy.get("input[name='resume']").selectFile(
        {
          contents: Cypress.Buffer.from(fileContent, "base64"),
          fileName,
          mimeType: "application/pdf",
        },
        { force: true }
      );
    });
  });

  it("submits the form successfully", () => {
    // Fill form
    cy.get("input[name='fullname']").type("John Doe");
    cy.get("input[name='email']").type("john@example.com");

    const fileName = "sample.pdf";

    cy.fixture(fileName, "base64").then((fileContent) => {
      cy.get("input[name='resume']").selectFile(
        {
          contents: Cypress.Buffer.from(fileContent, "base64"),
          fileName,
          mimeType: "application/pdf",
        },
        { force: true }
      );
    });

    cy.get("button[type='submit']").click();

    // Backend mock should trigger
    cy.wait("@submitCareer");

    // Expect success message
    cy.contains("Application submitted successfully!", { timeout: 3000 }).should(
      "be.visible"
    );
  });
});
