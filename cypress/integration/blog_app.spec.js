describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    const user = {
      name: "Jessica Isoton",
      username: "jenotosi",
      passwordHash: "s3nh4",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user);
  });

  it("Login form is shown", function () {
    cy.visit("http://localhost:3000");
    cy.contains("blogs");
  });

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.get("#username").type("jenotosi");
      cy.get("#password").type("s3nh4");
      cy.get("#login-button").click();
      cy.get('html').should('contain', 'Jessica Isoton logged in');
    });

    it("fails with wrong credentials", function () {
      cy.get("#logout").click();
      cy.get("#username").type("jenotosi");
      cy.get("#password").type("wrong");
      cy.get("#login-button").click();
      cy.get('.error')
      .should('contain', 'Wrong username or password')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
    });
  });
});
