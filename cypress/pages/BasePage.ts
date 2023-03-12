export default abstract class BasePage {
    baseURL() {
        return 'http://localhost:3000'
    }

    abstract url(): string;

    visit() {
        return cy.visit(this.url())
    }
}
