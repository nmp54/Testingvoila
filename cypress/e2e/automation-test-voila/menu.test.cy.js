/// <reference types="cypress" />

describe('Access My Profile', () => {
    it('Should visit the website', () => {
        cy.visit('https://voila.id'); // Buka halaman utama Voila
        cy.url().should('include', 'id'); // Verifikasi bahwa URL berisi 'id'
    });

    it('Should navigate to My Profile section', () => {
        // Klik menu profil dan pastikan menu My Profile terlihat
        cy.get('div[data-test-id="CT_Component_ProfileMenu"]').click();
        cy.contains('My Profile').should('be.visible'); // Verifikasi teks 'My Profile' terlihat
    });
});

describe('Add Address to My Profile', () => {
    it('Should navigate to My Address section', () => {
        // Klik bagian My Address
        cy.get('div[data-test-id="CT_account_navigation-item_My Address"]').should('be.visible')
            .click({ force: true }); // Verifikasi teks 'My Address' terlihat
    });

    it('Should add a new address', () => {
        // Klik tombol tambah alamat baru
        cy.get('button[data-test-id="CT_Component_btnAddAddress"]').click({ force: true });

        // Isi detail alamat
        cy.get('[data-test-id="CT_Component_AddressLabel"]').type('Home'); // Isi label alamat
        cy.get('input[name="name"]').type('nur'); // Isi nama
        cy.get('input[name="phone"]').type('087882517968'); // Isi nomor telepon
        cy.get('input[name="selected_area"]').click(); // Pilih area

        //isi alamat
        cy.get('input[data-test-id="CT_Component_SearchAddress"]')
            .type('DKI Jakarta, Jakarta Barat, Cengkareng');

        cy.wait(500); // Tunggu dropdown muncul (gunakan assertion jika lebih baik)

        // Pilih opsi area yang sesuai
        cy.get('div[data-test-id="CT_Component_SearchAddressRegion_ListItem11710"]')
            .contains('DKI Jakarta, Jakarta Barat, Cengkareng, 11710')
            .click();

        // Isi detail alamat
        cy.get('textarea[name="address"]')
            .type('DKI Jakarta, Jakarta Barat, Cengkareng, 11710');

        // Klik tombol submit
        cy.get('button[data-test-id="CT_Component_SubmitAddress"]').click();
    });
});

describe('Sign Out', () => {
    it('Should cancel the sign-out process', () => {
        // Klik menu Sign Out
        cy.get('div[data-test-id="CT_account_navigation-item_Sign Out"]').click();

        // Klik tombol batal pada dialog konfirmasi
        cy.get('button[data-test-id="CT_Close_Confirm"]').click();
    });

    it('Should successfully sign out from Voila', () => {
        // Klik menu Sign Out
        cy.get('div[data-test-id="CT_account_navigation-item_Sign Out"]').click();

        // Klik tombol konfirmasi untuk keluar
        cy.get('button[data-test-id="CT_SignOut_Confirm"]').click();
    });
});
