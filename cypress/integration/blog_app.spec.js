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
});
