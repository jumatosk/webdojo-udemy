describe("Validações de Alertas em Javascript", () => {
  beforeEach(() => {
    cy.start();
    cy.submitLogin(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.goTo("Alertas JS", "JavaScript Alerts");
  });

  it("Deve validar a mensagem de alerta", () => {
    cy.on("window:alert", (msg) => {
      expect(msg).to.equal("Olá QA, eu sou uma Alert Box!");
    });
    cy.contains("button", "Mostrar Alert").click();
  });

  it("Deve confirmar um diálogo e validar a resposta positiva", () => {
    cy.on("window:confirm", (msg) => {
      expect(msg).to.equal("Aperta um botão!");
      return true;
    });

    cy.contains("button", "Mostrar Confirm").click();
  });
  it("Deve cancelar um diálogo e validar a resposta negativa", () => {
    cy.on("window:confirm", (msg) => {
      expect(msg).to.equal("Aperta um botão!");
      return false;
    });

    cy.contains("button", "Mostrar Confirm").click();
  });

  it.only("Deve interagir com um prompt, inserir um texto e validar uma mensagem", () => {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Juliana");
    });

    cy.on("window:alert", (msg) => {
      expect(msg).to.equal("Olá Juliana! Boas vindas ao WebDojo!");
    });

    cy.contains("button", "Mostrar Prompt").click();
  });
});
