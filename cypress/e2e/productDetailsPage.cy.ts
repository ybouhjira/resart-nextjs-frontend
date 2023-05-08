import selectors from "../selectors";

describe("Product details page", function () {
  it("shows the product image", async function () {
    await cy.visit("/products");
    await cy.get(selectors.productCard).first().click();
    await cy.get(selectors.productImage).should("be.visible");
    await cy.get(selectors.productDescription).should("be.visible");
    await cy.get(selectors.productReferencePrice).should("be.visible");
    await cy.get(selectors.productCurrentPrice).should("be.visible");
    await cy.get(selectors.whatsAppButton).should("be.visible");
  });
});
