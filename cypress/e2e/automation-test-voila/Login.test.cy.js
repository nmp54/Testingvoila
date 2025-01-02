/// <reference types="cypress" />

describe('Login Tests', () => {

    // Test for Login with Unregistered Email
    describe('Login with Unregistered Email', () => {
        it('Should visit the website and navigate to the Sign In page', () => {
            cy.visit('https://voila.id');
            cy.url().should('include', 'id'); // Memastikan URL yang dikunjungi mengandung 'id'
            cy.contains('Sign In')
                .should('be.visible') // Memastikan tombol Sign In terlihat
                .click(); // Klik tombol Sign In untuk menuju halaman login
        });

        it('Should display the Register option when logging in with an unregistered email', () => {
            cy.fixture('user').then(({ email_unregistered }) => {
                cy.get('input[data-test-id="CT_component_login_input"]')
                    .should('be.visible') // Memastikan input email terlihat
                    .clear()
                    .type(email_unregistered); // Memasukkan email tidak terdaftar

                cy.get('button[data-test-id="CT_component_login_submit"]')
                    .should('be.enabled') // Memastikan tombol login aktif
                    .click();

                cy.contains('Register')
                    .should('be.visible'); // Memastikan opsi Register terlihat
            });
        });
    });

    // Test for Login with Invalid Email Format
    describe('Login with Invalid Email Format', () => {
        it('Should visit the website and navigate to the Sign In page', () => {
            cy.visit('https://voila.id');
            cy.url().should('include', 'id'); // Memastikan URL yang dikunjungi mengandung 'id'
            cy.contains('Sign In')
                .should('be.visible') // Memastikan tombol Sign In terlihat
                .click(); // Klik tombol Sign In untuk menuju halaman login
        });

        it('Should display an error message when attempting to login with an incorrectly formatted email', () => {
            cy.fixture('user').then(({ email_invalid }) => {
                cy.get('input[data-test-id="CT_component_login_input"]')
                    .should('be.visible') // Memastikan input email terlihat
                    .clear()
                    .type(email_invalid); // Memasukkan email yang salah format

                cy.get('button[data-test-id="CT_component_login_submit"]')
                    .click({ force: true });

                cy.contains('Please enter a valid email format or phone number.')
                    .should('be.visible'); // Memastikan pesan error muncul
            });
        });
    });

    // Test for Login with Incorrect Password
    describe('Login with Incorrect Password', () => {
        it('Should visit the website and navigate to the Sign In page', () => {
            cy.visit('https://voila.id');
            cy.url().should('include', 'voila.id'); // Memastikan URL yang dikunjungi benar
            cy.contains('Sign In').should('be.visible').click(); // Klik tombol Sign In
        });

        it('Should display an error message when logging in with invalid credentials', () => {
            cy.fixture('user').then(({ email, password_invalid }) => {
                cy.get('input[data-test-id="CT_component_login_input"]')
                    .should('be.visible') // Memastikan input email terlihat
                    .clear()
                    .type(email);

                cy.get('input[name="password"]')
                    .should('be.visible')
                    .clear()
                    .type(password_invalid); // Memasukkan password yang salah

                cy.get('button[data-test-id="CT_component_login_submit"]')
                    .should('be.visible')
                    .click();

                cy.contains('Your account ID or password is incorrect. Please try again.')
                    .should('be.visible'); // Memastikan pesan error muncul
            });
        });
    });

    // Test for Login with Valid Credentials
    describe('Login with Valid Credentials', () => {
        it('Should visit the website and navigate to the Sign In page', () => {
            cy.visit('https://voila.id');
            cy.url().should('include', 'id'); // Memastikan URL yang dikunjungi benar
            cy.contains('Sign In').should('be.visible').click(); // Klik tombol Sign In
        });

        it('Should log in with valid credentials', () => {
            cy.fixture('user').then(({ email, password }) => {
                cy.get('input[data-test-id="CT_component_login_input"]')
                    .should('be.visible') // Memastikan input email terlihat
                    .clear()
                    .type(email);

                cy.get('input[name="password"]')
                    .should('be.visible')
                    .clear()
                    .type(password); // Memasukkan password yang benar

                cy.get('button[data-test-id="CT_component_login_submit"]')
                    .should('be.visible')
                    .click(); // Klik tombol login untuk masuk
            });
        });
    });
});
