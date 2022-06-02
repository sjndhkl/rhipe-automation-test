import {Signup} from '../pages/Signup';

const signupPage = new Signup('https://dev-rhipe-signup.azurewebsites.net/');

describe('signup.cy.js', () => {
  it('should visit rhipe signup page', () => {
    signupPage.visit();
  });
  it('should fill information', () => {
    signupPage.fill();
  });
  it('should submit form', () => {
    signupPage.submit();
  });
});
