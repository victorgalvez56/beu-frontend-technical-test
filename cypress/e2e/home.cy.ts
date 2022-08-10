describe("BOOK SELECTED ASSERTS", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("TDD ASSERTS", () => {
    cy.log("VERIFICA QUE EL SCREEN CONTENGA 10 IMAGENES");
    cy.get('img[class="Home_imgSection__7_Sfv"]')
      .should("have.length", 10)
      .should("have.attr", "src");
  });
});
