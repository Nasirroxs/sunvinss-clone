import React from "react";
import { mount } from "cypress/react";
import Contact from "../../../src/components/Contact/Contact";

describe("Contact Component", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:5000/api/contact", {
      statusCode: 200,
      body: { success: true },
    }).as("sendContact");

    mount(<Contact />);
  });

  it("renders the contact section title", () => {
    cy.contains("GET IN").should("exist");
    cy.contains("TOUCH").should("exist");
  });

  it("renders the map iframe", () => {
    cy.get("iframe[title='Eaver Location']").should("exist");
  });

  it("allows typing in all form fields", () => {
    cy.get("input[name='fullname']").type("John Doe").should("have.value", "John Doe");
    cy.get("input[name='email']").type("john@example.com").should("have.value", "john@example.com");
    cy.get("textarea[name='message']").type("Hello!").should("have.value", "Hello!");
  });

  it("submits the form successfully", () => {
    cy.get("input[name='fullname']").type("John Doe");
    cy.get("input[name='email']").type("john@example.com");
    cy.get("textarea[name='message']").type("This is a test message.");

    cy.get("button[type='submit']").click();

    cy.wait("@sendContact");

    cy.contains("Message sent successfully").should("exist");
  });

  it("shows error message on failed submission", () => {
    // Override success mock with failure mock
    cy.intercept("POST", "http://localhost:5000/api/contact", {
      statusCode: 500,
      body: { success: false },
    }).as("sendFail");

    mount(<Contact />);

    cy.get("input[name='fullname']").type("John Doe");
    cy.get("input[name='email']").type("john@example.com");
    cy.get("textarea[name='message']").type("This is a test message.");

    cy.get("button[type='submit']").click();

    cy.wait("@sendFail");

    cy.contains("Failed to send message").should("exist");
  });
});
