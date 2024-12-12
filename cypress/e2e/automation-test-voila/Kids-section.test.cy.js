/// <reference types="cypress" />

describe('Kids Section Navigation', () => {
    // Sebelum setiap pengujian, buka halaman Kids
    beforeEach(() => {
        cy.visit('https://voila.id/kids');
    });

    it('Should display all kids collections', () => {
        // Navigasi ke halaman Kids' Collections
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-31"]').click();
        cy.url().should('include', 'kids-615');
        cy.get('h1')
            .should('be.visible')
            .and('contain.text', `Kids' Collections`);
    });

    it('Should display kids clothing collection', () => {
        // Navigasi ke halaman Kids' Clothes
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-32"]').click();
        cy.url().should('include', 'kids-clothes-319');
        cy.get('h1')
            .should('be.visible')
            .and('contain.text', `Kids' Clothes`);
    });

    it('Should display kids shoes collection', () => {
        // Navigasi ke halaman Kids' Shoes
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-33"]').click();
        cy.url().should('include', 'kids-shoes-503');
        cy.get('h1')
            .should('be.visible')
            .and('contain.text', `Kids' Shoes`);
    });
});
