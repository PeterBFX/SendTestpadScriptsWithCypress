export class ProjectPage {
  duplicateFolder(release) {
    cy.contains(release).rightclick();
    cy.get("#folderDuplicate").click();
  }
  renameFolder(release, newRelease) {
    cy.contains(`${release} (copy)`).rightclick();
    cy.get('#folderPopup > [data-popup-action="showNameEdit"]').click();
    cy.focused().clear().type(`${newRelease}{enter}`);
  }
  archiveFolder(release) {
    cy.contains(release).rightclick();
    cy.get('#folderPopup > [data-popup-action="archiveScript"]').click();
  }
  openScript(testName) {
    cy.contains(testName).click();
  }
}
