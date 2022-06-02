const USAGE_CONTACT_FIRST_NAME = '#UsageContactFirstName';
const USAGE_CONTACT_LAST_NAME = '#UsageContactLastName';
const USAGE_CONTACT_PHONE = '#UsageContactPhone';
const USAGE_CONTACT_JOB_TITLE = '#UsageContactJobTitle';
const USAGE_CONTACT_EMAIL = '#UsageContactEmail';


export class UsageContact {
    fill() {
        cy.get(USAGE_CONTACT_FIRST_NAME).clear({force:true}).type('hello',{force:true});
        cy.get(USAGE_CONTACT_LAST_NAME).clear({force:true}).type('hello',{force:true});
        cy.get(USAGE_CONTACT_PHONE).clear({force:true}).type('hello',{force:true});
        cy.get(USAGE_CONTACT_EMAIL).clear({force:true}).type('hello',{force:true});
        cy.get(USAGE_CONTACT_JOB_TITLE).clear({force:true}).type('hello',{force:true});
    }
}