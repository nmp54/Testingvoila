/// <reference types="cypress" />

describe('Navigation Tests', () => {
    // Test case: Visit the website and verify the URL
    it('Should visit the website', () => {
        cy.visit('https://voila.id'); // Buka halaman utama Voila
        cy.url().should('include', 'id'); // Verifikasi bahwa URL berisi 'id'
    });

    // Test case: Access the Women Section
    it('Should access Women Section', () => {
        cy.get('[data-test-id="CT_first_tier_link_Women"]').click(); // Klik link Women
        cy.get('[data-test-id="CT_first_tier_link_Women"]')
            .should('be.visible') // Pastikan link terlihat
            .and('have.attr', 'href', '/women'); // Verifikasi bahwa link menuju ke '/women'
    });

    // Test case: Access and verify the Limited Offers section
    it('Should display Limited Offers section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-7"]').click(); // Klik Limited Offers
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Promotions').should('be.visible'); // Pastikan 'Promotions' terlihat
        cy.get('p').should('be.visible').and('contain.text', 'Limited Offers'); // Verifikasi teks 'Limited Offers'
    });

    // Test case: Access and verify the New Arrivals section
    it('Should display New Arrivals section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-8"]').click(); // Klik New Arrivals
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.get('h1').should('be.visible').and('contain.text', `Women's New Arrivals`); // Verifikasi bahwa teks 'Women's New Arrivals' terlihat
    });

    // Test case: Access and verify the Bags section
    it('Should display Bags section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-9"]').click(); // Klik Bags
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Handbags').should('be.visible'); // Verifikasi bahwa 'Handbags' terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Women's Bags`); // Verifikasi teks 'Women's Bags'
    });

    // Test case: Access and verify the Shoes section
    it('Should display Shoes section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-10"]').click(); // Klik Shoes
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Sneakers').should('be.visible'); // Verifikasi bahwa 'Sneakers' terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Women's Shoes`); // Verifikasi teks 'Women's Shoes'
    });

    // Test case: Access and verify the Clothes section
    it('Should display Clothes section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-11"]').click(); // Klik Clothes
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Dresses').should('be.visible'); // Verifikasi bahwa 'Dresses' terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Women's Clothes`); // Verifikasi teks 'Women's Clothes'
    });

    // Test case: Access and verify the Accessories section
    it('Should display Accessories section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-12"]').click(); // Klik Accessories
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Wallets').should('be.visible'); // Verifikasi bahwa 'Wallets' terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Women's Accessories`); // Verifikasi teks 'Women's Accessories'
    });

    // Test case: Access and verify the Hermès section
    it('Should display Hermès section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-13"]').click(); // Klik Hermès
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Hermès').should('be.visible'); // Verifikasi bahwa 'Hermès' terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Women's Hermès`); // Verifikasi teks 'Women's Hermès'
    });

    // Test case: Access and verify the Watches section
    it('Should display Watches section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-14"]').click(); // Klik Watches
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Watches').should('be.visible'); // Verifikasi bahwa 'Watches' terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Women's Watches`); // Verifikasi teks 'Women's Watches'
    });

    // Test case: Access and verify the Preorder section
    it('Should display Preorder section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-15"]').click(); // Klik Preorder
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Preorder').should('be.visible'); // Verifikasi bahwa 'Preorder' terlihat
        cy.get('p').should('be.visible').and('contain.text', `Women's Preorder`); // Verifikasi teks 'Women's Preorder'
    });

    // Test case: Access and verify the Preloved section
    it('Should display Preloved section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-16"]').click(); // Klik Preloved
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.contains('Preloved').should('be.visible'); // Verifikasi bahwa 'Preloved' terlihat
        cy.get('h1').should('be.visible').and('contain.text', `Women's Preloved`); // Verifikasi teks 'Women's Preloved'
    });
});
