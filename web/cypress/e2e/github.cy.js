describe("Gerenciamento de perfis no Github", () => {
  beforeEach(() => {
    cy.start();
    cy.submitLogin(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.goTo("Tabela", "Perfis do GitHub");
  });

  it("Deve poder cadastrar um novo perfil no github", () => {
    cy.get("#name").type("Juliana Matos");
    cy.get("#username").type("jumatosk");
    cy.get("#profile").type("Developer");

    cy.contains("button", "Adicionar Perfil").click();

    cy.get("#name").type("Juliana Matos");
    cy.get("#username").type("devjumatosk");
    cy.get("#profile").type("Dev");

    cy.contains("button", "Adicionar Perfil").click();

    cy.contains("table tbody tr", "devjumatosk")
      .should("be.visible")
      .as("trProfile");

    cy.get("@trProfile").contains("Juliana Matos").should("be.visible");

    cy.get("@trProfile").contains("Dev").should("be.visible");
  });
});
