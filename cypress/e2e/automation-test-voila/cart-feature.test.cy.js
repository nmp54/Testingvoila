/// <reference types="cypress" />

describe('Login and Product Interaction Tests', () => {
    beforeEach(() => {
        cy.visit('https://voila.id', { failOnStatusCode: false, timeout: 60000 });
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('lora-cart-integration')) {
                console.error('Ignored error:', err.message);
                return false;
            }
        });
    });

    it('Should log in with valid credentials', () => {
        cy.contains('Sign In').should('be.visible').click();
        cy.url().should('include', 'login');

        cy.fixture('user').then(({ email, password }) => {
            cy.get('input[data-test-id="CT_component_login_input"]', { timeout: 10000 })
                .should('be.visible')
                .clear()
                .type(email);

            cy.get('input[name="password"]')
                .should('be.visible')
                .clear()
                .type(password);

            cy.get('button[data-test-id="CT_component_login_submit"]')
                .should('be.visible')
                .click();

            cy.url().should('not.include', 'login');
            cy.wait(2000)
        });
    });

    it('Display Product and Add to bag', () => {
        //klik produk
        cy.contains('T-Lock Top Handle Bag Ecru Black')
            .should('be.visible')
            .click();
        cy.url().should('match', /toteme-t-lock-top-handle-bag-ecru-black-47537/);
        cy.get('p').should('be.visible').and('contain.text', 'T-Lock Top Handle Bag Ecru Black')
        //menambahkan produk ke cart
        cy.get('button[data-test-id="CT-add-to-bag-desktop"]').click()

        cy.wait(2000)
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click()
        cy.contains('Shopping Bag').should('be.visible')
    });
    it('Add Quantity Product', () => {
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click()
        cy.contains('Shopping Bag').should('be.visible')
        cy.get('path[d="M21 10.91h-7.5V3.5h-3v7.41H3v3h7.5v7.59h3v-7.59H21v-3Z"]').click({ force: true })
    });
    it('Remove product from cart', () => {
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click()
        cy.contains('Shopping Bag').should('be.visible')
        //remove Product
        cy.get('p[data-test-id="CT_Component_removeSelectedCart"]').click()
        //confirm remove
        cy.get('button[data-test-id="CT_Component_ConfirmContent_Ok"]').click()
        cy.contains('product has been removed.').should('be.visible')
    });
});
