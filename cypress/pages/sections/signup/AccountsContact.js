const ACCOUNTS_CONTACT_FIRST_NAME = '#AccountsContactFirstName';
const ACCOUNTS_CONTACT_LAST_NAME = '#AccountsContactLastName';
const ACCOUNTS_CONTACT_PHONE = '#AccountsContactPhone';
const ACCOUNTS_CONTACT_JOB_TITLE = '#AccountsContactJobTitle';
const ACCOUNTS_CONTACT_EMAIL = '#AccountsContactEmail';


export class AccountsContact {
    fill() {
        cy.get(ACCOUNTS_CONTACT_FIRST_NAME).clear({force:true}).type(cy.faker.name.firstName("male"),{force:true});
        cy.get(ACCOUNTS_CONTACT_LAST_NAME).clear({force:true}).type(cy.faker.name.lastName("male"),{force:true});
        cy.get(ACCOUNTS_CONTACT_PHONE).clear({force:true}).type(cy.faker.phone.phoneNumber(),{force:true});
        cy.get(ACCOUNTS_CONTACT_EMAIL).clear({force:true}).type(cy.faker.internet.email(),{force:true});
        cy.get(ACCOUNTS_CONTACT_JOB_TITLE).clear({force:true}).type(cy.faker.lorem.word(),{force:true});
    }
}