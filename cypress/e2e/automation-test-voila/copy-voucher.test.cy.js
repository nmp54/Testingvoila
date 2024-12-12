/// <reference types="cypress" />

describe('Navigation Tests', () => {
    // Test case: Visit the website and verify the URL
    it('Should visit the website', () => {
        cy.visit('https://voila.id'); // Buka halaman utama Voila
        cy.url().should('include', 'id'); // Verifikasi bahwa URL berisi 'id'
    });

    // Test case: Access and verify the Bags section
    it('Should display Bags section', () => {
        cy.get('a[data-test-id="CT_home_navbar_second-tier-button-9"]').click(); // Klik untuk membuka kategori 'Bags'
        cy.wait(2000); // Tunggu 2 detik untuk memastikan halaman dimuat
        cy.url().should('include', 'women-s-bags-315'); // Verifikasi bahwa URL mengarah ke halaman kategori 'Bags'
    });

    // Test case: Copy Voucher functionality
    it('Should copy the voucher code', () => {
        // Step 1: Verify if the 'Available Voucher' section is visible
        cy.contains('Available Voucher').should('be.visible'); // Pastikan bagian 'Available Voucher' terlihat

        // Step 2: Click to show more vouchers
        cy.get('div[data-test-id="CT-PLP-voucher-show-more"]').click(); // Klik untuk menampilkan lebih banyak voucher
        cy.contains('Voucher').should('be.visible'); // Pastikan bagian 'Voucher' terlihat

        // Step 3: Click on the available voucher card
        cy.contains('Mayapada YES: 5% OFF with CC Mayapada').click({ force: true })
        cy.contains('Mayapada YES: 5% OFF with CC Mayapada').should('be.visible'); // Verifikasi voucher yang dipilih terlihat

        // Step 4: Click on the copy icon to copy the voucher code
        cy.get('div[data-test-id="CT-copy-promo-code"]') // Klik ikon copy voucher
            .click({ force: true });

        // Step 5: Verify the confirmation message appears
        cy.contains('Copied to your clipboard.').should('be.visible'); // Verifikasi bahwa pesan "Copied to your clipboard" muncul
    });
});
