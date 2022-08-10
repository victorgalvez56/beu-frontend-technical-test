describe("BOOK SELECTED ASSERTS", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("TDD ASSERTS", () => {
    cy.log("VERIFICA QUE EL SCREEN CONTENGA 9 IMAGENES");
    cy.get('img[class="Home_imgSection__7_Sfv"]')
      .should("have.length", 10)
      .should("have.attr", "src");
  });
});

describe("BOOK SELECTED ASSERTS", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/BookScreen");
  });

  it("TDD ASSERTS", () => {
    cy.log("VERIFICA QUE LOS TEXTOS SEAN EL CORRECTO");
    cy.get('div[class="Book_titleReview__rgQbQ"]').contains(
      "Escribe una reseña"
    );
    cy.get('label[class="Book_labelNameUser__99E_b"]')
      .eq(0)
      .contains("Nombre de usuario");
    cy.get('label[class="Book_labelNameUser__99E_b"]').eq(1).contains("Reseña");

    cy.log("VERIFICA QUE TENGA UN INPUT DE TIPO TEXT");
    cy.get('input[type="text"]').should("have.length", 1);

    cy.log("VERIFICA QUE TENGA UN TEXTAREA");
    cy.get('textarea[rows="10"]').should("have.length", 1);

    cy.log("VERIFICA QUE TENGA UN BOTON EXISTA Y ESTE DESHABILITADO");
    cy.get('button[class="buttonPublish"]')
      .should("have.length", 1)
      .should("be.disabled");

    cy.log("VERIFICA QUE LA IMAGEN CONTENGA EN SU URL BOOKS.GOOGLE.COM");
    cy.get('img[class="Book_imgBanner__JDk_l"]')
      .should("have.length", 1)
      .should("have.attr", "src")
      .should("include", "books.google.com");
  });
});
