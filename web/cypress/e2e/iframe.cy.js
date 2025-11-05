describe("iFrame", () => {
  it("Deve tocar o vídeo corretamente", () => {
    cy.submitLogin(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.contains("Video").click();

    cy.get("iframe[title='Video Player']")
      .should("exist")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .as("iFramePlayer");

    cy.get("@iFramePlayer").find("button").click();
  });
});
