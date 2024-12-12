/// <reference types="cypress" />

describe('Login Tests', () => {
    describe('Login with Incorrect Password', () => {
        it('Should visit the website and navigate to the Sign In page', () => {
            // Membuka halaman utama dan memastikan navigasi ke halaman login berhasil
            cy.visit('https://voila.id');
            cy.url().should('include', 'voila.id'); // Memastikan URL yang dikunjungi benar
            cy.contains('Sign In').should('be.visible').click(); // Klik tombol Sign In
        });

        it('Should display error message when logging in with invalid credentials', () => {
            // Menggunakan data dari fixture
            cy.fixture('user').then(({ email, password_invalid }) => {
                // Input email
                cy.get('input[data-test-id="CT_component_login_input"]')
                    .should('be.visible') // Memastikan elemen input email terlihat
                    .clear()
                    .type(email);

                // Input password yang salah
                cy.get('input[name="password"]')
                    .should('be.visible')
                    .clear()
                    .type(password_invalid);

                // Klik tombol login
                cy.get('button[data-test-id="CT_component_login_submit"]')
                    .should('be.visible')
                    .click();

                // Verifikasi pesan error
                cy.contains('Your account ID or password is incorrect. Please try again.')
                    .should('be.visible');
            });
        });
    });

    describe('Login with Valid Credentials', () => {
        it('Should visit the website and navigate to the Sign In page', () => {
            // Membuka halaman utama dan memastikan navigasi ke halaman login berhasil
            cy.visit('https://voila.id');
            cy.url().should('include', 'id'); // Memastikan URL yang dikunjungi benar
            cy.contains('Sign In').should('be.visible').click(); // Klik tombol Sign In
        });

        it('Should log in with valid credentials', () => {
            // Menggunakan data dari fixture
            cy.fixture('user').then(({ email, password }) => {
                // Input email
                cy.get('input[data-test-id="CT_component_login_input"]')
                    .should('be.visible') // Memastikan elemen input email terlihat
                    .clear()
                    .type(email);

                // Input password
                cy.get('input[name="password"]')
                    .should('be.visible')
                    .clear()
                    .type(password);

                // Klik tombol login
                cy.get('button[data-test-id="CT_component_login_submit"]').click();
            });
        });
    });
});
