/// <reference types="cypress" />

describe('Login with Valid Credentials', () => {
    // Test case: Visit the website
    it('Should visit the website and navigate to the login page', () => {
        cy.visit('https://voila.id/account/login'); // Open the website
        cy.url().should('include', 'account/login'); // Verify the URL contains 'id
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
    // Test case: Open a product page
    it('harus klik notifikasi', () => {
        cy.wait(3000)
        cy.get('#optInText').click;
    });
    it('Should navigate to the product page', () => {
        // Ensure the product link or title is visible
        cy.get('.ellipsis-two-lines').click();

    });

    // Test case: Click the favorite button
    it('Should add the product to favorites', () => {
        cy.get('svg.wishlist-icon') // Ensure the favorite icon is visible
            .should('be.visible')
            .click(); // Click the favorite icon
    });

    // Test case: Verify the favorite feature
    it('Should verify the favorite feature results', () => {
        cy.get('svg[cursor="pointer"]').click(); // Open the favorites section
        cy.contains('Anjou Mini Bag All Black').should('be.visible'); // Verify the product is added to favorites
    });
});
