import { AuthorizedSignatoryContact } from './sections/signup/AuthorizedSignatoryContact';
import { BillingAddressInformation } from './sections/signup/BillingAddressInformation';
import {GeneralInformation} from './sections/signup/GeneralInformation'

const USE_ANOTHER_BILLING_ADDRESS = '#useanotheraddress';

export class Signup {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    visit() {
        cy.visit(this.baseUrl);
        cy.contains('Signup');
    }
    useDifferentBillingAddress() {
        cy.get(USE_ANOTHER_BILLING_ADDRESS).check({force:true});
        new BillingAddressInformation().fill();
    }
    fill() {
        new GeneralInformation().fill();
        this.useDifferentBillingAddress();
        
        let reportingContact = new AuthorizedSignatoryContact();
        reportingContact.fill();
        reportingContact.dontUseOnlyOneContact();
    }
    submit() {
        console.log("submit the form");
    }
}
