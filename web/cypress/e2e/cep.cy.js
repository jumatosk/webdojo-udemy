describe("CEP", () => {
  beforeEach(() => {
    cy.start();
    cy.submitLogin(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.goTo("Integração", "Consulta de CEP");
  });

  it("Deve validar a consulta de CEP", () => {
    cy.log("todo");

    cy.get("#cep").type("40240725");
    cy.contains("button", "Buscar").click();

    cy.get("#street").should("have.value", "Rua Icó");

    //Pendente validar os próximos campos
  });
});
