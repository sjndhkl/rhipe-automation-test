import { UsageContact } from "./UsageContact";
import { SalesContact } from "./SalesContact";
import { AccountsContact } from "./AccountsContact";
import { StatementContact } from "./StatementContact";
import { TechnicalContact } from "./TechnicalContact";

const PRIMARY_CONTACT_FIRST_NAME = '#PrimaryContactFirstName';
const PRIMARY_CONTACT_LAST_NAME = '#PrimaryContactLastName';
const PRIMARY_CONTACT_PHONE = '#PrimaryContactPhone';
const PRIMARY_CONTACT_JOB_TITLE = '#PrimaryContactJobTitle';
const PRIMARY_CONTACT_EMAIl = '#PrimaryContactEmail';

const USE_SAME_CONTACT = "#usesamecontact";

export class AuthorizedSignatoryContact {
    fill() {
        cy.get(PRIMARY_CONTACT_FIRST_NAME).type(cy.faker.name.firstName("male"),{force:true});
        cy.get(PRIMARY_CONTACT_LAST_NAME).type(cy.faker.name.lastName("male"),{force:true});
        cy.get(PRIMARY_CONTACT_PHONE).type(cy.faker.phone.phoneNumber(),{force:true});
        cy.get(PRIMARY_CONTACT_EMAIl).type(cy.faker.internet.email(),{force:true});
        cy.get(PRIMARY_CONTACT_JOB_TITLE).type(cy.faker.lorem.word(),{force:true});
    }

    dontUseOnlyOneContact() {
        cy.get(USE_SAME_CONTACT).uncheck({force:true});
        new UsageContact().fill();
        new SalesContact().fill();
        new AccountsContact().fill();
        new StatementContact().fill();
        new TechnicalContact().fill();
    }
}