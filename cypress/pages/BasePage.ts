export default abstract class BasePage {
  abstract url(): string;

  visit() {
    return cy.visit(this.url());
  }
}
