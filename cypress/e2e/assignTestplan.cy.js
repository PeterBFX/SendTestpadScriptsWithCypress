import { ProjectPage } from "./Pages/projectPage";
import { ScriptPage } from "./Pages/testScript";
import testAssignments from "C:/Users/dinge/Desktop/BFX Cypress Projects/SendTestpadScriptsWithCypress/cypress/fixtures/testAssignments.json"

const projectPage = new ProjectPage();
const scriptPage = new ScriptPage();

//Function

const increaseTheRelease = (toIncrease) => {
  let current = parseInt(toIncrease.slice(11));
  let next = JSON.stringify(current + 1);
  return toIncrease.slice(0, 11) + next;
};

beforeEach(() => {
  cy.fixture("loginDetails").then((loginDetails) => {
    cy.login(loginDetails.username, loginDetails.password);
  });
});

it("Duplicates and archives the last folder and renames the new folder", function () {
  cy.visit("https://bitfinex.testpad.com/project/2/");
  cy.contains("Release").then(($Release) => {
    let lastRelease = $Release.text();
    let thisRelease = increaseTheRelease(lastRelease);
    projectPage.duplicateFolder(lastRelease);
    projectPage.renameFolder(lastRelease, thisRelease);
    projectPage.archiveFolder(lastRelease);
  });
});

testAssignments.forEach((tester) => {
  if (tester.scripts.length != 0) {
    tester.scripts.forEach((script) => {
      it(`Sends the ${script} script to ${tester.email}`, function () {
        cy.visit("https://bitfinex.testpad.com/project/2/");
        projectPage.openScript(script);
        scriptPage.sendScriptByEmail(tester.email);
      });
    });
  }
});
