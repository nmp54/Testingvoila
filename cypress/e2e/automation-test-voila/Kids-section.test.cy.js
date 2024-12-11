/// <reference types="cypress" />

describe('Kids Section Navigation ', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/kids')
    })
    it('Display All Collection', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-31"]').click()
        cy.url().should('include', 'kids-615')
        cy.get('h1').should('be.visible').and('contain.text', `Kids' Collections`)
    });
    it('Display Clothing', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-32"]').click()
        cy.url().should('include', 'kids-clothes-319')
        cy.get('h1').should('be.visible').and('contain.text', `Kids' Clothes`)
    });
    it('Display Shoes', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-33"]').click()
        cy.url().should('include', 'kids-shoes-503')
        cy.get('h1').should('be.visible').and('contain.text', `Kids' Shoes`)
    });
})
