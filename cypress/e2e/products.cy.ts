import SearchPage from "@/cypress/pages/SearchPage";

describe('product search page', () => {

  const page = new SearchPage()

  it('shows at least 5 products', () => {
    page.visit()
    page.products().should('be.visible')
    page.products().should('have.length.at.least', 5)
  })
})
