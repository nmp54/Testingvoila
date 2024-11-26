/// <reference types="cypress" />

describe('Login with Valid Credentials', () => {
    // Test case: Visit the website
    it('Should visit the website and navigate to the login page', () => {
        cy.visit('https://voila.id'); // Open the website
        cy.url().should('include', 'id'); // Verify the URL contains 'id'
        cy.contains('Sign In').click(); // Click the 'Sign In' button
    });

    // Test case: Login with valid credentials
    it('Should log in with valid credentials', () => {
        // Use data from the fixture file
        cy.fixture('user').then(({ email, password }) => {
            // Enter email
            cy.get('input[data-test-id="CT_component_login_input"]')
                .clear()
                .type(email);

            // Enter password
            cy.get('input[name="password"]')
                .clear()
                .type(password);

            // Submit the login form
            cy.get('button[data-test-id="CT_component_login_submit"]').click();
        });
    });
});
