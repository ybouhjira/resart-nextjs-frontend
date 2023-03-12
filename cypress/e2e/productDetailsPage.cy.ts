import ProductDetailsPage from "@/cypress/pages/ProductDetailsPage";

describe('Product details page', function () {
    const page = new ProductDetailsPage('5523918c-d884-41ce-974a-d7c51ba0f72d')

    it('shows the product image', function () {
        page.visit()
        page.image().should('be.visible')
    });
});
