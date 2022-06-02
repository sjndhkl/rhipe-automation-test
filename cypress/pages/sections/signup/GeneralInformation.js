const CUSTOMER_NAME = "#CustomerName";
const REGISTRATION_NUMBER = "#RegistrationNumber";
const STREET1= '#Street1';
const STREET2= '#Street2';
const STREET3 = '#Street3';
const CITY = '#City';
const STATE = '#State';
const COUNTRY = '#Country'; 
const POST_CODE = '#Postcode';
const MAIN_PHONE = '#MainPhone';
const FAX = '#Fax';
const WEBSITE = '#WebUrl';
const EMAIL = '#Email';
const HOW_DID_YOU_HEAR = '#Source';
const INDUSTRY_TYPE = '#IndustryType';

export class GeneralInformation {

    fill() {
        cy.get(CUSTOMER_NAME).type(cy.faker.name.findName(),{force:true});
        cy.get(REGISTRATION_NUMBER).type(cy.faker.random.numeric(5),{force:true});
        cy.get(STREET1).type(cy.faker.address.streetName(),{force:true});
        cy.get(STREET2).type(cy.faker.address.streetName(),{force:true});
        cy.get(STREET3).type(cy.faker.address.streetName(),{force:true});
        cy.get(CITY).type(cy.faker.address.city(),{force:true});
        cy.get(COUNTRY).select('Nepal',{force:true});
        cy.get(STATE).type(cy.faker.address.state(),{force:true});
        cy.get(POST_CODE).type(cy.faker.address.zipCode("####"),{force:true});
        cy.get(MAIN_PHONE).type('040411223',{force:true});
        cy.get(WEBSITE).type('https://rhipe.com',{force:true});
        cy.get(EMAIL).type('support@rhipe.com',{force:true});
        cy.get(FAX).type('n/a',{force:true});
        cy.get(HOW_DID_YOU_HEAR).select('Microsoft Website',{force:true});
        cy.get(INDUSTRY_TYPE).select('Application Service Provider',{force:true});
    }
    
};