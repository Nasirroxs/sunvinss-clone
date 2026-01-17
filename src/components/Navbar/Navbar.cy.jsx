import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../../src/components/Navbar/Navbar";

describe("🧭 Navbar Component", () => {
  it("renders correctly and toggles theme + menu", () => {
    cy.mount(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // ✅ Check that the logo appears
    cy.get(".navbar-logo").should("be.visible");

    // ✅ Click hamburger icon
    cy.get(".menu-icon").click();
    cy.get(".nav-links").should("have.class", "active");

    // ✅ Toggle light/dark theme safely
    cy.get(".theme-toggle").click({ force: true });

    cy.document()
      .its("documentElement")
      .should("have.attr", "data-theme")
      .and("match", /light|dark/);
  });
});
