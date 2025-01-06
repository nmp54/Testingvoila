/// <reference types="cypress" />

describe('Login and Product Interaction Tests', () => {
    beforeEach(() => {
        // Mengunjungi halaman utama dengan pengaturan waktu tunggu dan penanganan error spesifik
        cy.visit('https://voila.id', { timeout: 60000 });

        // Menangani error spesifik untuk mencegah pengujian gagal
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('lora-cart-integration')) {
                console.error('Ignored error:', err.message);
                return false; // Mengabaikan error
            }
        });
    });

    // Pengujian login menggunakan kredensial valid
    it('Should log in with valid credentials', () => {
        cy.contains('Sign In').should('be.visible').click();
        cy.url().should('include', 'login');

        cy.fixture('user').then(({ email, password }) => {
            cy.get('input[data-test-id="CT_component_login_input"]')
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
            cy.wait(500);
        });
    });

    // Pengujian menampilkan detail produk dan menambahkannya ke keranjang
    it('Should display product details and add it to the bag', () => {
        // Klik pada produk dengan nama tertentu
        cy.contains('Teen Triomphe Bag in Shiny Calfskin Glazed Brown Ghw')
            .should('be.visible') // Pastikan produk terlihat
            .click({ force: true }); // Klik produk dengan paksa jika perlu

        // Verifikasi URL setelah klik produk
        cy.url().should('match', /celine-teen-triomphe-bag-in-shiny-calfskin-glazed-brown-ghw-48958/);

        // Verifikasi kembali nama produk muncul di halaman detail
        cy.contains('Teen Triomphe Bag in Shiny Calfskin Glazed Brown Ghw')
            .should('be.visible');

        // Klik tombol "Add to Bag"
        cy.get('button[data-test-id="CT-add-to-bag-desktop"]')
            .click({ force: true, multiple: true }); // Klik tombol dengan paksa jika perlu

    });


    // Pengujian menambah jumlah produk di keranjang
    it('Should increase product quantity in the cart', () => {
        cy.wait(500)
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();
        cy.contains('Shopping Bag').should('be.visible');

        cy.get('path[d="M21 10.91h-7.5V3.5h-3v7.41H3v3h7.5v7.59h3v-7.59H21v-3Z"]').click({ multiple: true });
    });

    // Pengujian menambahkan voucher ke pembayaran dan melanjutkan ke checkout
    it('Should add voucher to payment and checkout', () => {
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();

        cy.contains('Voucher').should('be.visible');
        cy.get('path[d="M9.06 3.44 6.94 5.56l6.94 6.94-6.94 6.94 2.12 2.12 9.06-9.06-9.06-9.06Z"]').click({ force: true, multiple: true });
        cy.contains('Special Offers for You').should('be.visible');
        cy.contains('Mayapada: 8% OFF with CC Mayapada').click({ force: true });

        cy.get('button[data-test-id="CT_Component_buttonApply"]').click();

        cy.get('button[data-test-id="CT_Component_btnCheckout"]').click();
    });

    // Pengujian menghapus produk dari keranjang
    it('Should remove product from the cart', () => {
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();
        cy.contains('Shopping Bag').should('be.visible');

        cy.get('p[data-test-id="CT_Component_removeSelectedCart"]').click();

        cy.get('button[data-test-id="CT_Component_ConfirmContent_Ok"]').click();

        cy.contains('product has been removed.').should('be.visible');
    });
});
