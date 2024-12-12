/// <reference types="cypress" />

describe('Brands Section Navigation', () => {
    // Eksekusi sebelum setiap pengujian untuk membuka halaman Brands
    beforeEach(() => {
        cy.visit('https://voila.id/brands');
    });

    it('Should display all brands', () => {
        // Memverifikasi navigasi ke halaman Brands
        cy.get('a[data-test-id="CT_first_tier_link_Brands"]').click();
        cy.url().should('include', '/brands');
        cy.get('h1').should('be.visible').and('contain.text', 'Brands');
    });

    it('Should display brands filtered by selected letter', () => {
        // Memilih huruf G dan memverifikasi merek yang sesuai muncul
        cy.get('#quick-filter-char-G').click();
        cy.contains('Gucci').should('be.visible');
    });

    it('Should show a message when searching for an invalid brand', () => {
        // Mencari merek yang tidak ada dan memverifikasi pesan yang sesuai
        cy.get('input[data-test-id="CT-Search-Input-Brands"]').type('Zoya{enter}');
        cy.contains('No brand found').should('be.visible');
    });

    it('Should display results when searching for a valid brand', () => {
        // Mencari merek yang ada dan memverifikasi hasilnya
        cy.get('input[data-test-id="CT-Search-Input-Brands"]').type('Nike{enter}');
        cy.contains('Nike').should('be.visible');
    });

    it('Should navigate to the selected brand page', () => {
        // Memilih merek Adidas dan memverifikasi navigasi ke halaman merek
        cy.contains('Adidas').click();
        cy.get('h1').should('be.visible').and('contain.text', 'Adidas');
    });
});
