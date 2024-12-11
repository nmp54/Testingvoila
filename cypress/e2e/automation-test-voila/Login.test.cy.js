/// <reference types="cypress" />

describe('Login with incorrect password', () => {
    it('Should visit the website and navigate to Sign In page', () => {
        cy.visit('https://voila.id');
        cy.url().should('include', 'voila.id'); // Memastikan URL yang dikunjungi benar
        cy.contains('Sign In').should('be.visible').click(); // Pastikan tombol Sign In terlihat dan klik
    });

    it('Should display error message when logging in with invalid credentials', () => {
        cy.fixture('user').then((user) => {
            const email = user.email; // Email valid dari fixture
            const password = user.password_invalid; // Password invalid dari fixture

            // Input email
            cy.get('input[data-test-id="CT_component_login_input"]')
                .should('be.visible') // Pastikan elemen terlihat
                .clear()
                .type(email);

            // Input password
            cy.get('input[name="password"]')
                .should('be.visible')
                .clear()
                .type(password);

            // Klik tombol login
            cy.get('button[data-test-id="CT_component_login_submit"]')
                .should('be.visible')
                .click();

            // Verifikasi error message
            cy.contains('Your account ID or password is incorrect. Please try again.')
                .should('be.visible');
        });
    });
});
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
