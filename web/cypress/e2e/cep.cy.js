import address from "../fixtures/address.json";

describe("CEP", () => {
  beforeEach(() => {
    cy.start();
    cy.submitLogin(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.goTo("Integração", "Consulta de CEP");
  });

  it("Deve validar a consulta de CEP", () => {
    // Fazer a modelagem da massa conforme a modelagem da aplicação
    cy.get("#cep").type(address.cep);
    cy.contains("button", "Buscar").click();

    cy.get("#street").should("have.value", address.street);
    cy.get("#neighborhood").should("have.value", address.neighborhood);
    cy.get("#city").should("have.value", address.city);
    cy.get("#state").should("have.value", address.state);
  });
});
