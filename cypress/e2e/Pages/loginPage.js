export class LoginPage {
  login(email, password) {
    this.visitHomePage();
    this.clickLoginButton();
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLoginConfirmation();
  }

  visitHomePage() {
    cy.visit("https://www.testpad.com");
  }

  clickLoginButton() {
    cy.get(":nth-child(4) > a").click();
  }

  enterEmail(email) {
    cy.get("#id_email").type(email);
  }

  enterPassword(password) {
    cy.get("#id_password").type(password);
  }

  clickLoginConfirmation() {
    cy.get(".submit").click();
  }
}
