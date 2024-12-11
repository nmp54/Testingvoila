/// <reference types="cypress" />

describe('Men Section Navigation', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/men');
    });

    it('Should display Limited Offers section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-19"]').click();
        cy.url().should('include', '/promotions');
        cy.contains('Promotions').should('be.visible');
    });

    it('Should display New Arrivals section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-20"]').click();
        cy.url().should('include', 'men-s-new-arrivals-719'); // Verifikasi URL berubah
        cy.get('h1').should('be.visible').and('contain.text', `Men's New Arrivals`);
    });

    it('Should display Bags section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-21"]').click();
        cy.url().should('include', 'men-s-bags-318'); // Verifikasi URL berubah
        cy.get('h1').should('be.visible').and('contain.text', `Men's Bags`);
    });

    it('Should display Shoes section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-22"]').click();
        cy.url().should('include', 'men-s-shoes-510'); // Verifikasi URL berubah
        cy.contains('Boots').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Men's Shoes`);
    });

    it('Should display Clothes section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-23"]').click();
        cy.url().should('include', 'men-s-clothes-316'); // Verifikasi URL berubah
        cy.contains('Hoodie').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Men's Clothes`);
    });

    it('Should display Accessories section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-24"]').click();
        cy.url().should('include', 'men-s-accessories-356'); // Verifikasi URL berubah
        cy.contains('Caps').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Men's Accessories`);
    });

    it('Should display Hermès section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-25"]').click();
        cy.url().should('include', 'men-s-hermes-collection-763'); // Verifikasi URL berubah
        cy.contains('Hermès').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Men's Hermès Collection`);
    });

    it('Should display Watches section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-26"]').click();
        cy.url().should('include', 'men-s-watches-593'); // Verifikasi URL berubah
        cy.contains('Watches').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Men's Watches`);
    });

    it('Should display Preorder section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-27"]').click();
        cy.url().should('include', 'men-s-preorder-720'); // Verifikasi URL berubah
        cy.contains('Preorder').should('be.visible');
        cy.get('p').should('be.visible').and('contain.text', `Men's Preorder`);
    });

    it('Should display Preloved section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-28"]').click();
        cy.url().should('include', 'men-s-preloved-721'); // Verifikasi URL berubah
        cy.contains('Preloved').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Men's Preloved`);
    });
});
