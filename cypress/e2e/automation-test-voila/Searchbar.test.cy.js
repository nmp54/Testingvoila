/// <reference types="cypress" />

describe('Search for Valid Product', () => {
    // Test case: Visit the website
    it('Should visit the website', () => {
        cy.visit('https://voila.id'); // Open the website
        cy.url().should('include', 'id'); // Verify the URL contains 'id'
    });

    // Test case: Use the searchbox and verify results
    it('Should display the searched content', () => {
        cy.get('input[data-test-id="CT-Search"]').click()
        cy.get('input[data-test-id="CT-Search-Input"]').type('chanel{enter}')
        cy.contains('chanel').should('be.visible');
    });
});
describe('Search for Invalid Product', () => {
    // Test case: Visit the website
    it('Should visit the website', () => {
        cy.visit('https://voila.id'); // Open the website
        cy.url().should('include', 'id'); // Verify the URL contains 'id'
    });

    // Test case: Use the searchbox and verify results
    it('Should display the searched content', () => {
        cy.get('input[data-test-id="CT-Search"]').click()
        cy.get('input[data-test-id="CT-Search-Input"]').type('notfound{enter}')
        cy.contains('Product not found').should('be.visible');
    });
});
