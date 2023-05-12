describe("edit product", () => {
  it("should edit product", () => {
    cy.visit("http://localhost:3000/admin/products/010102/edit");
  });
});
