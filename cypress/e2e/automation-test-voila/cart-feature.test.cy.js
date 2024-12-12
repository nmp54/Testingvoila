/// <reference types="cypress" />

describe('Login and Product Interaction Tests', () => {
    // Sebelum setiap pengujian, buka halaman utama dengan pengaturan tambahan untuk menangani error spesifik
    beforeEach(() => {
        // Mengunjungi halaman utama dengan pengaturan waktu tunggu dan penanganan kegagalan status
        cy.visit('https://voila.id', { failOnStatusCode: false, timeout: 60000 });

        // Menangani error spesifik untuk mencegah pengujian gagal
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('lora-cart-integration')) {
                console.error('Ignored error:', err.message);
                return false; // Mengabaikan error
            }
        });
    });

    // Pengujian untuk login menggunakan kredensial yang valid
    it('Should log in with valid credentials', () => {
        // Navigasi ke halaman login
        cy.contains('Sign In').should('be.visible').click();
        cy.url().should('include', 'login');

        // Masukkan kredensial yang diambil dari file fixture
        cy.fixture('user').then(({ email, password }) => {
            // Input email
            cy.get('input[data-test-id="CT_component_login_input"]', { timeout: 10000 })
                .should('be.visible')
                .clear()
                .type(email);

            // Input password
            cy.get('input[name="password"]')
                .should('be.visible')
                .clear()
                .type(password);

            // Klik tombol login dan verifikasi login berhasil
            cy.get('button[data-test-id="CT_component_login_submit"]')
                .should('be.visible')
                .click();
            cy.url().should('not.include', 'login');
            cy.wait(2000);
        });
    });

    // Pengujian untuk menampilkan detail produk dan menambahkannya ke keranjang
    it('Should display product details and add it to the bag', () => {
        // Pilih produk tertentu dan tampilkan detailnya
        cy.contains('T-Lock Top Handle Bag Ecru Black')
            .should('be.visible')
            .click();
        cy.url().should('match', /toteme-t-lock-top-handle-bag-ecru-black-47537/);
        cy.get('p')
            .should('be.visible')
            .and('contain.text', 'T-Lock Top Handle Bag Ecru Black');

        // Tambahkan produk ke keranjang
        cy.get('button[data-test-id="CT-add-to-bag-desktop"]').click({ force: true, multiple: true });
        cy.wait(2000);

        // Navigasi ke keranjang
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();
    });

    // Pengujian untuk menambah jumlah produk di keranjang
    it('Should increase product quantity in the cart', () => {
        // Navigasi ke keranjang
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();
        cy.contains('Shopping Bag').should('be.visible');

        // Klik tombol untuk menambah jumlah produk
        cy.get('path[d="M21 10.91h-7.5V3.5h-3v7.41H3v3h7.5v7.59h3v-7.59H21v-3Z"]').click({ force: true });
    });

    // Pengujian untuk menambahkan voucher ke pembayaran dan melanjutkan ke checkout
    it('Add Voucher to Payment and checkout', () => {
        // Navigasi ke keranjang
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();

        // Menampilkan dan memilih voucher
        cy.contains('Voucher').should('be.visible');
        cy.contains('See available vouchers').click();
        cy.contains('Special Offers for You').should('be.visible');
        cy.contains('Mayapada YES: 5% OFF with CC Mayapada').click({ force: true });

        // Terapkan voucher
        cy.get('button[data-test-id="CT_Component_buttonApply"]').click();

        // Melanjutkan ke proses checkout
        cy.get('button[data-test-id="CT_Component_btnCheckout"]').click();
    });

    // Pengujian untuk menghapus produk dari keranjang
    it('Should remove product from the cart', () => {
        // Navigasi ke keranjang
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();
        cy.contains('Shopping Bag').should('be.visible');

        // Klik tombol untuk menghapus produk
        cy.get('p[data-test-id="CT_Component_removeSelectedCart"]').click();

        // Konfirmasi penghapusan produk
        cy.get('button[data-test-id="CT_Component_ConfirmContent_Ok"]').click();

        // Verifikasi bahwa produk berhasil dihapus
        cy.contains('product has been removed.').should('be.visible');
    });
});
