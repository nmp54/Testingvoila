const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 30000,
  PageLoadTimeout: 10000, e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    supportFile: false,
    setupNodeEvents,
    testIsolation: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io, https://submit.backtrace.io"],
  },
});