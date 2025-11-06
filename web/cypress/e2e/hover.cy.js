describe("Simulando Mouseover", () => {
  it("Deve exibir o tooltip ao passar o mouse", () => {
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.get('[data-cy="instagram-link"]').realHover();
  });
});
