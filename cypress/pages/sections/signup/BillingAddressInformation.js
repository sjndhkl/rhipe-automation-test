const BILLING_ADDRESS_LINE1 = '#BillingAddressLine1';
const BILLING_ADDRESS_LINE2 = '#BillingAddressLine2';
const BILLING_ADDRESS_LINE3 = '#BillingAddressLine3';
const BILLING_CITY = '#BillingCity';
const BILLING_STATE = '#BillingState';
const BILLING_COUNTRY = '#BillingCountry';
const BILLING_POST_CODE = '#BillingPostcode';


export class BillingAddressInformation {

    fill() {
        cy.get(BILLING_ADDRESS_LINE1).type(cy.faker.address.streetName(),{force:true});
        cy.get(BILLING_ADDRESS_LINE2).type(cy.faker.address.streetName(),{force:true});
        cy.get(BILLING_ADDRESS_LINE3).type(cy.faker.address.streetName(),{force:true});
        cy.get(BILLING_CITY).type(cy.faker.address.city(),{force:true});
        cy.get(BILLING_STATE).type(cy.faker.address.state(),{force:true});
        cy.get(BILLING_COUNTRY).select('Nepal',{force:true});
        cy.get(BILLING_POST_CODE).type(cy.faker.address.zipCode("####"),{force:true});
    }
};