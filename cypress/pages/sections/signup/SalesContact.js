const SALES_CONTACT_FIRST_NAME = '#SalesContactFirstName';
const SALES_CONTACT_LAST_NAME = '#SalesContactLastName';
const SALES_CONTACT_PHONE = '#SalesContactPhone';
const SALES_CONTACT_JOB_TITLE = '#SalesContactJobTitle';
const SALES_CONTACT_EMAIL = '#SalesContactEmail';


export class SalesContact {
    fill() {
        cy.get(SALES_CONTACT_FIRST_NAME).clear({force:true}).type('hello',{force:true});
        cy.get(SALES_CONTACT_LAST_NAME).clear({force:true}).type('hello',{force:true});
        cy.get(SALES_CONTACT_PHONE).clear({force:true}).type('hello',{force:true});
        cy.get(SALES_CONTACT_EMAIL).clear({force:true}).type('hello',{force:true});
        cy.get(SALES_CONTACT_JOB_TITLE).clear({force:true}).type('hello',{force:true});
    }
}