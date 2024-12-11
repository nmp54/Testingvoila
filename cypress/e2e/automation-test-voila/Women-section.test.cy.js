/// <reference types="cypress" />

describe('Navigation Tests', () => {
    it('Should visit the website', () => {
        cy.visit('https://voila.id'); // Open the website
        cy.url().should('include', 'id'); // Verify the URL contains 'id'
    });

    it('Should access Women Section', () => {
        cy.get('[data-test-id="CT_first_tier_link_Women"]').click();
        cy.get('[data-test-id="CT_first_tier_link_Women"]')
            .should('be.visible')
            .and('have.attr', 'href', '/women');
    });

    it('Should display Limited Offers section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-7"]').click();
        cy.wait(2000); // Wait for 2 seconds
        cy.contains('Promotions').should('be.visible');
        cy.get('p').should('be.visible').and('contain.text', 'Limited Offers');
    });

    it('Should display New Arrivals section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-8"]').click();
        cy.wait(2000); // Wait for 2 seconds
        cy.get('h1').should('be.visible').and('contain.text', `Women's New Arrivals`);
    });

    it('Should display Bags section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-9"]').click();
        cy.wait(2000); // Wait for 2 seconds
        cy.contains('Handbags').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Women's Bags`);
    });

    it('Should display Shoes section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-10"]').click();
        cy.wait(2000); // Wait for 2 seconds
        cy.contains('Sneakers').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Women's Shoes`);
    });

    it('Should display Clothes section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-11"]').click();
        cy.wait(2000); // Wait for 2 seconds
        cy.contains('Dresses').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Women's Clothes`);
    });

    it('Should display Accessories section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-12"]').click();
        cy.wait(2000); // Wait for 2 seconds
        cy.contains('Wallets').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Women's Accessories`);
    });

    it('Should display Hermès section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-13"]').click();
        cy.wait(2000); // Wait for 2 seconds
        cy.contains('Hermès').should('be.visible');
        cy.get('h1').should('be.visible').and('contain.text', `Women's Hermès`);
    });
    it('Should display Watches section ', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-14"]').click()
        cy.wait(2000);
        cy.contains('Watches').should('be.visible')
        cy.get('h1').should('be.visible').and('contain.text', `Women's Watches`)
    });
    it('Should display Preorder section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-15"]').click()
        cy.wait(2000);
        cy.contains('Preorder').should('be.visible')
        cy.get('p').should('be.visible').and('contain.text', `Women's Preorder`)
    });
    it('Should display Preloved section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-16"]').click()
        cy.wait(2000);
        cy.contains('Preloved').should('be.visible')
        cy.get('h1').should('be.visible').and('contain.text', `Women's Preloved`)
    });
});
