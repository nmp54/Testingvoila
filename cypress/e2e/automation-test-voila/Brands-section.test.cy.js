/// <reference types="cypress" />

describe('Brands Section Navigation', () => {
    beforeEach(() => {
        cy.visit('https://voila.id'); // Buka halaman utama sebelum setiap pengujian
    });

    it('Should visit the website', () => {
        cy.url().should('include', 'id'); // Verifikasi bahwa URL berisi 'id'
    });

    it('Should display all brands', () => {
        cy.get('[data-test-id="CT_first_tier_link_Brands"]').click();
        cy.url().should('include', '/brands');
        cy.get('h1')
            .should('be.visible')
            .and('contain.text', 'Brands');
    });

    it('Should display brands filtered by selected letter', () => {
        cy.get('[data-test-id="CT_first_tier_link_Brands"]').click();
        cy.get('#quick-filter-char-G').click();
        cy.contains('Gucci').should('be.visible');
    });

    it('Should show a message when searching for an invalid brand', () => {
        cy.get('[data-test-id="CT_first_tier_link_Brands"]').click();
        cy.wait(1000)
        cy.get('[data-test-id="CT-Search-Input-Brands"]').click({ force: true })
            .type('Mandala{enter}');
        cy.contains('No brand found').should('be.visible');
    });

    it('Should display results when searching for a valid brand', () => {
        cy.get('[data-test-id="CT_first_tier_link_Brands"]').click();
        cy.wait(1000)
        cy.get('[data-test-id="CT-Search-Input-Brands"]').click({ force: true })
            .type('Nike{enter}');
        cy.contains('Nike').should('be.visible');
    });

    it('Should navigate to the selected brand page', () => {
        cy.get('[data-test-id="CT_first_tier_link_Brands"]').click();
        cy.contains('Nike').click();
        cy.get('h1')
            .should('be.visible')
            .and('contain.text', 'Nike');
    });
});
