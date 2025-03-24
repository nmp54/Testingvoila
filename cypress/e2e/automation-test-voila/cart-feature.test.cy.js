/// <reference types="cypress" />

describe('Login and Product Interaction Tests', () => {
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
        cy.contains('T-Lock Grained Leather Top Handle Bag White Milk')
            .should('be.visible')
            .click();
        cy.url().should('match', /toteme-t-lock-grained-leather-top-handle-bag-white-milk-46128/);
        cy.get('p')
            .should('be.visible')
            .and('contain.text', 'T-Lock Grained Leather Top Handle Bag White Milk');
        cy.wait(3000);
        // Klik tombol "Add to Bag"
        cy.get('[data-test-id="CT-add-to-bag-desktop"]')
            .click({ force: true });

        cy.wait(500)

        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();
        cy.contains('Shopping Bag').should('be.visible');

    });


    // Pengujian menambah jumlah produk di keranjang
    it('Should increase product quantity in the cart', () => {
        cy.wait(500)
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();
        cy.contains('Shopping Bag').should('be.visible');

        cy.get('path[d="M3.7731 12.0058C3.7731 11.4535 4.22081 11.0058 4.7731 11.0058L19.2582 11.0058C19.8104 11.0058 20.2582 11.4535 20.2582 12.0058C20.2582 12.558 19.8104 13.0058 19.2582 13.0058L4.7731 13.0058C4.22082 13.0058 3.7731 12.5581 3.7731 12.0058Z"]').click({ multiple: true });
    });

    // Pengujian menambahkan voucher ke pembayaran dan melanjutkan ke checkout
    it('Should add voucher to payment and checkout', () => {
        cy.get('svg[data-test-id="CT-Go-To-Cart"]').click();

        cy.contains('Voucher').should('be.visible');
        cy.get('path[d="M9.06 3.44 6.94 5.56l6.94 6.94-6.94 6.94 2.12 2.12 9.06-9.06-9.06-9.06Z"]').click({ force: true, multiple: true });
        cy.contains('Special Offers for You').should('be.visible');
        cy.contains('DBS EID: 800K OFF with CC DBS').click({ force: true });

        cy.get('[data-test-id="CT_Component_buttonApply"]').click();

        cy.get('[data-test-id="CT_Component_btnCheckout"]').click();
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
