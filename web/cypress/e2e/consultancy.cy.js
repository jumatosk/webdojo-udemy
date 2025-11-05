describe("Formulário de consultoria", () => {
  beforeEach(() => {
    cy.submitLogin("papito@webdojo.com", "katana123");
    cy.goTo("Formulários", "Consultoria");
  });

  it("Deve solicitar consultoria individual", () => {
    // cy.get("#name").type("Juliana Matos");
    // cy.get("#email").type("juliana@webdojo");

    cy.get("input[placeholder='Digite seu nome completo']").type(
      "Juliana Matos"
    );
    cy.get("input[placeholder='Digite seu email']").type("jumatosk@gmail.com");
    cy.get("input[placeholder='(00) 00000-0000']").type("719988884545");
    // .should("have.value", "(71) 98888-4545");

    //Estratégia utilizada para encontrar campo através do id
    cy.get("#consultancyType").select("In Company");

    // Estratégia utilizada para encontrar campo através da label e do seu elemento pai
    cy.contains("label", "Tipo de Consultoria")
      .parent()
      .find("select")
      .select("In Company");

    cy.contains("span", "Pessoa Física")
      .parent()
      .find("input")
      .check()
      .should("be.checked");

    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .should("be.not.checked");

    cy.get("#document").type("12345678900");

    cy.contains("label", "Como nos conheceu?")
      .parent()
      .find("input[type='checkbox']")
      .check()
      .should("be.checked");

    cy.get("input[type='file']").selectFile("cypress/fixtures/onboarding.pdf", {
      force: true,
    });

    cy.get("#details").type("Minha necessidade é ...");

    const techs = [
      "JavaScript",
      // "TypeScript",
      // "Python",
      // "Java",
      // "C++",
      // "C#",
      // "PHP",
      // "Ruby",
    ];

    techs.forEach((tech) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(tech)
        .type("{enter}");
      cy.contains("label", "Tecnologias")
        .parent()
        .contains("span", tech)
        .should("be.visible");
    });

    cy.contains("label", "termos de uso")
      .find("input")
      .check()
      .should("be.checked");

    cy.contains("button", "Enviar formulário").click();

    cy.get(".modal", { timeout: 7000 })
      .should("be.visible")
      .find(".modal-content p")
      .should("be.visible")
      .and(
        "contain.text",
        "Sua solicitação de consultoria foi enviada com sucesso!"
      );
  });

  it("Deve validar os campos obrigatórios", () => {
    cy.contains("button", "Enviar formulário").click();

    const requiredFieldsInput = [
      { label: "Nome Completo", field: "p", message: "Campo obrigatório" },
      { label: "Email", field: "p", message: "Campo obrigatório" },
      {
        label: "termos de uso",
        field: "p",
        message: "Você precisa aceitar os termos de uso",
      },
    ];

    requiredFieldsInput.forEach(({ label, field, message }) => {
      cy.checkRequiredFields(label, field, message);
    });
  });
});
