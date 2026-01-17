import React from "react";
import { mount } from "cypress/react";
import ChatWidget from "../../../src/components/ChatWidget/ChatWidget";

describe("ChatWidget Component", () => {
  beforeEach(() => {
    // Mock backend reply for /api/chat
    cy.intercept("POST", "/api/chat", {
      statusCode: 200,
      body: { reply: "**Hello!** This is a bot reply." },
    }).as("chatReply");

    mount(<ChatWidget />);
  });

  it("opens the chat widget when toggle button is clicked", () => {
    cy.get(".chat-toggle").click();
    cy.get(".chat-box").should("be.visible");
  });

  it("closes the chat widget when X is clicked", () => {
    cy.get(".chat-toggle").click();
    cy.get(".close-icon").click();
    cy.get(".chat-box").should("not.exist");
  });

  it("sends user message and shows bot reply", () => {
    cy.get(".chat-toggle").click();

    // Type message
    cy.get(".chat-input input")
      .type("Hello AI!")
      .should("have.value", "Hello AI!");

    cy.get(".chat-input button").click();

    // Wait for intercept
    cy.wait("@chatReply");

    // User message appears
    cy.contains("Hello AI!").should("be.visible");

    // Bot reply (markdown bold)
    cy.contains("Hello!", { matchCase: false }).should("be.visible");
  });

  it("shows typing animation while loading", () => {
    cy.get(".chat-toggle").click();

    cy.intercept("POST", "/api/chat", (req) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(req.reply({ reply: "Done!" })), 1200);
      });
    }).as("slowReply");

    cy.get(".chat-input input").type("Testing...");
    cy.get(".chat-input button").click();

    cy.get(".typing").should("exist");

    cy.wait("@slowReply");

    // Typing disappears
    cy.get(".typing").should("not.exist");
  });
});
