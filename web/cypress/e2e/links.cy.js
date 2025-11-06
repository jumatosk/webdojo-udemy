describe("Links em nova guia/janela", () => {
  it("Validando o atributo da link do instagram", () => {
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.get('[data-cy="instagram-link"]')
      .should("have.attr", "href", "https://www.instagram.com/qapapito")
      .and("have.attr", "target", "_blank");
  });

  //Acessando o link sem abrir uma nova guia/janela
  it("Acessando o link do instagram sem abrir nova guia/janela", () => {
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.contains("Formulários").click();

    cy.contains("a", "termos de uso").invoke("removeAttr", "target").click();

    cy.contains("Ao acessar e usar nossos").should("be.visible");
  });
});
