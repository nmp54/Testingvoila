/// <reference types="cypress" />

describe('Men Section Navigation', () => {
    // Sebelum setiap pengujian, buka halaman Men
    beforeEach(() => {
        cy.visit('https://voila.id/men');
    });

    it('Should display the Limited Offers section', () => {
        // Navigasi ke bagian Limited Offers
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-19"]').click();
        cy.url().should('include', '/promotions'); // Verifikasi URL berubah
        cy.contains('Promotions').should('be.visible'); // Verifikasi teks "Promotions" terlihat
    });

    it('Should display the New Arrivals section', () => {
        // Navigasi ke bagian New Arrivals
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-20"]').click();
        cy.url().should('include', 'men-s-new-arrivals-719'); // Verifikasi URL berubah
        cy.get('h1').should('be.visible').and('contain.text', `Men's New Arrivals`); // Verifikasi teks pada judul
    });

    it('Should display the Bags section', () => {
        // Navigasi ke bagian Bags
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-21"]').click();
        cy.url().should('include', 'men-s-bags-318'); // Verifikasi URL berubah
        cy.get('h1').should('be.visible').and('contain.text', `Men's Bags`); // Verifikasi teks pada judul
    });

    it('Should display the Shoes section', () => {
        // Navigasi ke bagian Shoes
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-22"]').click();
        cy.url().should('include', 'men-s-shoes-510'); // Verifikasi URL berubah
        cy.contains('Boots').should('be.visible'); // Verifikasi produk spesifik terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Men's Shoes`); // Verifikasi teks pada judul
    });

    it('Should display the Clothes section', () => {
        // Navigasi ke bagian Clothes
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-23"]').click();
        cy.url().should('include', 'men-s-clothes-316'); // Verifikasi URL berubah
        cy.contains('Hoodie').should('be.visible'); // Verifikasi produk spesifik terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Men's Clothes`); // Verifikasi teks pada judul
    });

    it('Should display the Accessories section', () => {
        // Navigasi ke bagian Accessories
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-24"]').click();
        cy.url().should('include', 'men-s-accessories-356'); // Verifikasi URL berubah
        cy.contains('Caps').should('be.visible'); // Verifikasi produk spesifik terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Men's Accessories`); // Verifikasi teks pada judul
    });

    it('Should display the Hermès section', () => {
        // Navigasi ke bagian Hermès
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-25"]').click();
        cy.url().should('include', 'men-s-hermes-collection-763'); // Verifikasi URL berubah
        cy.contains('Hermès').should('be.visible'); // Verifikasi teks "Hermès" terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Men's Hermès Collection`); // Verifikasi teks pada judul
    });

    it('Should display the Watches section', () => {
        // Navigasi ke bagian Watches
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-26"]').click();
        cy.url().should('include', 'men-s-watches-593'); // Verifikasi URL berubah
        cy.contains('Watches').should('be.visible'); // Verifikasi teks "Watches" terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Men's Watches`); // Verifikasi teks pada judul
    });

    it('Should display the Preorder section', () => {
        // Navigasi ke bagian Preorder
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-27"]').click();
        cy.url().should('include', 'men-s-preorder-720'); // Verifikasi URL berubah
        cy.contains('Preorder').should('be.visible'); // Verifikasi teks "Preorder" terlihat
        cy.get('p').should('be.visible').and('contain.text', `Men's Preorder`); // Verifikasi teks pada deskripsi
    });

    it('Should display the Preloved section', () => {
        // Navigasi ke bagian Preloved
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-28"]').click();
        cy.url().should('include', 'men-s-preloved-721'); // Verifikasi URL berubah
        cy.contains('Preloved').should('be.visible'); // Verifikasi teks "Preloved" terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Men's Preloved`); // Verifikasi teks pada judul
    });
});
