describe("Gerenciamento de perfis no Github", () => {
  beforeEach(() => {
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

  it.skip("Deve poder remover um perfil do github", () => {
    const profile = {
      name: "Juliana Matos",
      username: "devjumatosk",
      profile: "Dev",
    };

    cy.get("#name").type(profile.name);
    cy.get("#username").type(profile.username);
    cy.get("#profile").type(profile.profile);

    cy.contains("button", "Adicionar Perfil").click();

    cy.contains("table tbody tr", profile.username)
      .should("be.visible")
      .as("trProfile");

    cy.get("@trProfile").find("button[title='Remover perfil']").click();

    cy.contains("table tbody", profile.username).should("not.exist");
  });

  it("Deve validar o link do github", () => {
    const profile = {
      name: "Juliana Matos",
      username: "jumatosk",
      profile: "Dev",
    };

    cy.get("#name").type("Juliana Matos");
    cy.get("#username").type("jumatosk");
    cy.get("#profile").type("Dev");

    cy.contains("button", "Adicionar Perfil").click();

    cy.contains("table tbody tr", profile.username)
      .should("be.visible")
      .as("trProfile");

    cy.get("@trProfile").find("a[title='Abrir perfil no GitHub']").click();
  });
});
