export class ScriptPage {
  sendScriptByEmail(email) {
    this.makeRunButtonsVisisble();
    this.clickEdit();
    this.setToGuest();
    this.setTesterName(email);
    this.sendEmail(email);
    this.saveChanges();
  }
  makeRunButtonsVisisble() {
    cy.get(".run_col > .cell > .runButtons").invoke("show");
  }
  clickEdit() {
    cy.get(".run_col > .cell > .runButtons > .edit").click();
  }
  setToGuest() {
    cy.get("#assignee > .djselectbox > .dropdown_icon").click();
    cy.get("#runEditUserChoice > .runEditUsers_clone0 > .name").click();
  }
  setTesterName(name) {
    cy.get(".runEditFields_clone1 > div > textarea").click();
    cy.focused().clear().type(name);
  }
  sendEmail(email) {
    cy.get(".guest > :nth-child(2) > .email").click();
    cy.get("#emailTo > .value").type(email);
    cy.get("#sendEmail").click();
  }
  saveChanges() {
    cy.get("#run_edit_dialog > .titlebar > a > .releaseUnlocked").click();
  }
}
