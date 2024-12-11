const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://voila.id',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    supportFile: false,
    setupNodeEvents,
    testIsolation: false, // Disable test isolation if needed
    watchForFileChanges: false,
    chromeWebSecurity: false, // Disable cross-origin restrictions
    blockHosts: ["events.backtrace.io", "submit.backtrace.io"], // Fixed blockHosts syntax
  },
  video: false,
  defaultCommandTimeout: 30000, // Timeout for all commands
  pageLoadTimeout: 30000, // Fixed property capitalization
});
