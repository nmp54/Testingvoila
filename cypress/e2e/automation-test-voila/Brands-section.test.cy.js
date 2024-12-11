/// <reference types="cypress" />

describe('Brands Section Navigation', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/brands')
    });
    it('Display All Brands', () => {
        cy.get('a[data-test-id="CT_first_tier_link_Brands"]').click()
        cy.url().should('include', '/brands')
        cy.get('h1').should('be.visible').and('contain.text', 'Brands')
    });
    it('Display Brands by Selected Letter', () => {
        cy.get('#quick-filter-char-G').click()
        cy.contains('Gucci').should('be.visible')
    });
    it('Search Brands invalid', () => {
        cy.get('input[data-test-id="CT-Search-Input-Brands"]').type('Zoya{enter}')
        cy.contains('No brand found').should('be.visible')
    });
    it('Search Brands valid', () => {
        cy.get('input[data-test-id="CT-Search-Input-Brands"]').type('Nike{enter}')
        cy.contains('Nike').should('be.visible')
    });
    it('Display Selected Brand', () => {
        cy.contains('Adidas').click()
        cy.get('h1').should('be.visible').and('contain.text', 'Adidas')
    });
})
