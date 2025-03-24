/// <reference types="cypress" />

describe('Login and Product Interaction Tests', () => {
    // Menjalankan langkah-langkah setup sebelum setiap pengujian
    beforeEach(() => {
        // Blokir permintaan iklan untuk mengurangi gangguan selama pengujian
        cy.intercept('GET', '**/ads/**', { statusCode: 204 });

        // Mengunjungi halaman utama dengan penanganan jika terjadi kegagalan atau waktu habis
        cy.visit('https://voila.id', { failOnStatusCode: false, timeout: 60000 });

        // Menangani error terkait integrasi yang diketahui untuk mencegah pengujian gagal
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('lora-cart-integration')) {
                console.error('Ignored error:', err.message);
                return false;
            }
        });
    });

    // Pengujian login dengan kredensial valid
    it('Should log in with valid credentials', () => {
        // Buka halaman login
        cy.contains('Sign In').should('be.visible').click();
        cy.url().should('include', 'login');

        // Ambil data kredensial dari file fixture
        cy.fixture('user').then(({ email, password }) => {
            // Masukkan email
            cy.get('input[data-test-id="CT_component_login_input"]', { timeout: 10000 })
                .should('be.visible')
                .clear()
                .type(email);

            // Masukkan password
            cy.get('input[name="password"]')
                .should('be.visible')
                .clear()
                .type(password);

            // Klik tombol login
            cy.get('button[data-test-id="CT_component_login_submit"]')
                .should('be.visible')
                .click();

            // Verifikasi bahwa pengguna berhasil login
            cy.url().should('not.include', 'login');
            cy.wait(2000);
        });
    });

    // Pengujian untuk menampilkan detail produk dan menambahkan produk ke daftar favorit
    it('Should display product details and add product to favorites', () => {
        // Pilih produk tertentu untuk melihat detailnya
        cy.contains('T-Lock Grained Leather Top Handle Bag White Milk')
            .should('be.visible')
            .click();
        cy.url().should('match', /toteme-t-lock-grained-leather-top-handle-bag-white-milk-46128/);
        cy.get('p')
            .should('be.visible')
            .and('contain.text', 'T-Lock Grained Leather Top Handle Bag White Milk');
        cy.wait(3000);

        // Tambahkan produk ke daftar favorit
        cy.get('path[d="M21.075 6.191c-1.061-1.6-2.882-2.611-4.923-2.691-1.6.02-3.092.68-4.152 1.771C10.94 4.181 9.429 3.52 7.798 3.5c-1.991.08-3.812 1.09-4.872 2.691a5.42 5.42 0 0 0-.92 3.232c0 4.513 5.932 9.275 9.474 11.717l.52.36.52-.36c3.542-2.442 9.475-7.214 9.475-11.687a5.462 5.462 0 0 0-.92-3.272v.01Z"]')
            .click({ force: true, multiple: true })
        // Verifikasi bahwa produk berhasil ditambahkan ke wishlist
        cy.contains('Product has been added to your wishlist.').should('be.visible');

        // Buka halaman daftar favorit
        cy.get('a[data-test-id="CT-wishlist-link"]').click();
    });

    // Pengujian untuk menghapus produk dari daftar favorit
    it('Should Remove Product from Favorite', () => {
        // Akses halaman daftar favorit
        cy.get('a[data-test-id="CT-wishlist-link"]').click();
        cy.contains('Wishlist').should('be.visible');

        // Klik tombol "Edit" untuk mengelola produk di wishlist
        cy.contains('Edit').click();
        cy.contains('product selected').should('be.visible');

        // Pilih produk untuk dihapus
        cy.get('button[role="checkbox"]').click({ force: true });

        // Klik tombol "Remove" untuk menghapus produk
        cy.contains('Remove').should('be.visible').click({ force: true });

        // Konfirmasi penghapusan produk
        cy.get('button[data-test-id="CT_Component_ConfirmContent_Ok"]').click();

        // Verifikasi bahwa produk berhasil dihapus dari wishlist
        cy.contains('product has been removed from your wishlist.').should('be.visible');
    });
});
