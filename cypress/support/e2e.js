// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
const { MailSlurp } = require('mailslurp-client');
// set your api key with an environment variable `CYPRESS_API_KEY` or configure using `env` property in config file
// (cypress prefixes environment variables with CYPRESS)
const apiKey = Cypress.env('API_KEY')
const mailslurp = new MailSlurp({ apiKey });

Cypress.Commands.add("createInbox", () => {
    return mailslurp.createInbox();
});

Cypress.Commands.add("waitForLatestEmail", (inboxId) => {
    // how long we should hold connection waiting for an email to arrive
    const timeoutMillis = 30_000;
    return mailslurp.waitForLatestEmail(inboxId, timeoutMillis)
});

// Alternatively you can use CommonJS syntax:
// require('./commands')