const TECHNICAL_CONTACT_FIRST_NAME = '#TechnicalContactFirstName';
const TECHNICAL_CONTACT_LAST_NAME = '#TechnicalContactLastName';
const TECHNICAL_CONTACT_PHONE = '#TechnicalContactPhone';
const TECHNICAL_CONTACT_JOB_TITLE = '#TechnicalContactJobTitle';
const TECHNICAL_CONTACT_EMAIL = '#TechnicalContactEmail';


export class TechnicalContact {
    fill() {
        cy.get(TECHNICAL_CONTACT_FIRST_NAME).clear({force:true}).type('hello',{force:true});
        cy.get(TECHNICAL_CONTACT_LAST_NAME).clear({force:true}).type('hello',{force:true});
        cy.get(TECHNICAL_CONTACT_PHONE).clear({force:true}).type('hello',{force:true});
        cy.get(TECHNICAL_CONTACT_EMAIL).clear({force:true}).type('hello',{force:true});
        cy.get(TECHNICAL_CONTACT_JOB_TITLE).clear({force:true}).type('hello',{force:true});
    }
}