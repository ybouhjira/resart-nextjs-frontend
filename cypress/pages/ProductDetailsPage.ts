import BasePage from "@/cypress/pages/BasePage";

export default class ProductDetailsPage extends BasePage {
    constructor(readonly sku: string) {
        super();
    }

    url() {
        return `${this.baseURL()}/products/${this.sku}`
    }

    image() {
        return cy.get('[data-testid="product-image"]')
    }
}
