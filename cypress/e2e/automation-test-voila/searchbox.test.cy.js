/// <reference types="cypress" />

describe('Login with Valid Credentials', () => {
    it('Visit the website', () => {
        cy.visit("https://voila.id")
        cy.url('include', 'id')


    });
    it('should display the product you are looking for', () => {
        // Klik tombol untuk mengaktifkan search box
        cy.get('input[data-test-id="CT-Search"]', { timeout: 10000 }) // Timeout hingga 10 detik
            .should('be.visible') // Pastikan elemen terlihat
            .type('chanel{enter}}', { force: true }); // Ketikkan kata kunci dengan opsi force

        // Validasi hasil pencarian
        cy.contains('chanel').should('be.visible'); // Pastikan hasil pencarian tampil
    });
})
