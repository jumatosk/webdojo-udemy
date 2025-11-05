import { todayDateFormatted } from "../support/formattedDate";

describe("Login", () => {
  it.only("Deve realizar login com sucesso", () => {
    cy.start();
    cy.submitLogin(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));

    cy.get('[data-cy="user-name"]')
      .should("be.visible")
      .and("have.text", "Fernando Papito");

    cy.getCookie("login_date").should("exist");

    cy.getCookie("login_date").should((cookie) => {
      expect(cookie.value).to.equal(todayDateFormatted());
    });

    cy.window().then((window) => {
      const token = window.localStorage.getItem("token");

      // alternativa para validar se existe o token
      // expect(token).to.exist;

      //alternativa para validar se o token está no padrão MD5
      expect(token).to.match(/^[a-fA-F0-9]{32}$/);
    });
  });

  it.skip("Deve exibir mensagem de erro ao inserir credenciais inválidas", () => {
    cy.start();
    cy.submitLogin("papito@webdojo.com", "katan3");

    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });

  it("Não deve logar com e-mail não cadastrado", () => {
    cy.start();
    cy.submitLogin("naoexiste@webdojo.com", "katana123");

    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });
});
