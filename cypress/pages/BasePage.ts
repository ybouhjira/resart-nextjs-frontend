export default abstract class BasePage {
    baseURL() {
        return `http://localhost:${process.env.NEXTJS_PORT || 3000}`
    }

    abstract url(): string;

    visit() {
        return cy.visit(this.url())
    }
}
