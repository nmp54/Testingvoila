/// <reference types="cypress" />

describe('Login with Valid Credentials', () => {
    it('Visit the website', () => {
        cy.visit("https://voila.id")
        cy.url('include', 'id')
        cy.contains('Sign In').click()


    });
    it('Should try to login', () => {
        cy.fixture('user').then((user) => {
            //buat method agar bisa di implementasikan
            const email = user.email_invalid
            const password = user.password


            cy.get('input[data-test-id="CT_component_login_input"]').clear()
            cy.get('input[data-test-id="CT_component_login_input"]').type(email)
            cy.get('button[data-test-id="CT_component_login_submit"]').click();
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('button[data-test-id="CT_component_login_submit"]').click();

        });
    });
})
