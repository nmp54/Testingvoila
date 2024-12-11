/// <reference types="cypress" />

describe('Access My Profile', () => {
    it('Should visit the website', () => {
        cy.visit('https://voila.id'); // Open the website
        cy.url().should('include', 'id'); // Verify the URL contains 'id'
    });

    it('Should enter my profile', () => {
        cy.get('div[data-test-id="CT_Component_ProfileMenu"]').click()
        cy.contains('My Profile').should('be.visible')
    });
})
describe('Add Address to My Profile', () => {
    it('Should enter my address', () => {
        cy.get('p._1ccbe2wb').contains('My Address').click();
        cy.contains('My Address').should('be.visible')
    });
    it('Should add my address in my profile', () => {
        cy.get('button[data-test-id="CT_Component_btnAddAddress"]').click()
        cy.get('input[data-test-id="CT_Component_AddressLabel"]').type('Home')
        cy.get('input[name="name"]').type('nur')
        cy.get('input[name="phone"]').type('087882517968')
        cy.get('input[name="selected_area"]').click()
    });
    it('Should select an address option', () => {
        // Cari input field dan ketikkan alamat
        cy.get('input[data-test-id="CT_Component_SearchAddress"]').type('DKI Jakarta, Jakarta Barat, Cengkareng');

        // Tunggu dropdown muncul
        cy.wait(500); // Atau gunakan assertion lain jika lebih baik

        // Pilih opsi pertama di dropdown
        cy.get('div[data-test-id="CT_Component_SearchAddressRegion_ListItem11710"]') // Ganti selector dengan yang sesuai
            .contains('DKI Jakarta, Jakarta Barat, Cengkareng, 11710') // Sesuaikan teks jika diperlukan
            .click();
        cy.get('textarea[name="address"]').type('DKI Jakarta, Jakarta Barat, Cengkareng, 11710')
        cy.get('button[data-test-id="CT_Component_SubmitAddress"]').click()
    });
});
describe('Sign Out', () => {
    it('Cancel Sign Out ', () => {
        cy.get('div[data-test-id="CT_account_navigation-item_Sign Out"]').click();
        cy.get('button[data-test-id="CT_Close_Confirm"]').click()
    });
    it('Sign Out from web voila', () => {
        cy.get('div[data-test-id="CT_account_navigation-item_Sign Out"]').click();
        cy.get('button[data-test-id="CT_SignOut_Confirm"]').click()
    });
})

