const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    env: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    video: false,
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
