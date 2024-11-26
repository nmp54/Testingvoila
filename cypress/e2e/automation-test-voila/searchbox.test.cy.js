/// <reference types="cypress" />

describe('Feature Searchbox', () => {
    // Test case: Visit the website
    it('Should visit the website', () => {
        cy.visit('https://voila.id'); // Open the website
        cy.url().should('include', 'id'); // Verify the URL contains 'id'
    });

    // Test case: Use the searchbox and verify results
    it('Should display the searched content', () => {
        cy.get('input[data-test-id="CT-Search"]').click()
        cy.get('input[data-test-id="CT-Search"]').invoke('val', 'voila')
            .trigger('input');
        // cy.contains('Lois').should('be.visible');
    });
});
