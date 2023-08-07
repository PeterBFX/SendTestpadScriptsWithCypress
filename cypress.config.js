const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeOut: 10000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
