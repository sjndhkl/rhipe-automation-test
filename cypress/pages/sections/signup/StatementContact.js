const STATEMENT_CONTACT_FIRST_NAME = '#StatementContactFirstName';
const STATEMENT_CONTACT_LAST_NAME = '#StatementContactLastName';
const STATEMENT_CONTACT_PHONE = '#StatementContactPhone';
const STATEMENT_CONTACT_JOB_TITLE = '#StatementContactJobTitle';
const STATEMENT_CONTACT_EMAIL = '#StatementContactEmail';


export class StatementContact {
    fill() {
        cy.get(STATEMENT_CONTACT_FIRST_NAME).clear({force:true}).type('hello',{force:true});
        cy.get(STATEMENT_CONTACT_LAST_NAME).clear({force:true}).type('hello',{force:true});
        cy.get(STATEMENT_CONTACT_PHONE).clear({force:true}).type('hello',{force:true});
        cy.get(STATEMENT_CONTACT_EMAIL).clear({force:true}).type('hello',{force:true});
        cy.get(STATEMENT_CONTACT_JOB_TITLE).clear({force:true}).type('hello',{force:true});
    }
}