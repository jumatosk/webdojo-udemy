describe("Kanban Board", () => {
  it("Deve mover uma tarefa de ToDo para Done e atualizar o board.", () => {
    cy.submitLogin(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.contains("Kanban").click();

    const dataTransfer = new DataTransfer();

    cy.contains("div[draggable=true]", "Documentar API").trigger("dragstart", {
      dataTransfer,
    });

    cy.get(".column-done")
      .trigger("drop", { dataTransfer })
      .and("include.text", "Documentar API");
  });
});
