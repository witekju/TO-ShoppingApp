import selectors from './registration-selectors';

export class RegistrationPage {

    registration(): this {
      cy.get(selectors.registerButton)
        .click()
      cy.get(selectors.emailInput).type('juliatestweb1@gmail.com')
      cy.get(selectors.passwordInput).type('test123')
      cy.get(selectors.confirmPasswordInput).type('test1234')
      cy.get(selectors.submitButton)
        .click()
      return this
    }
}

export const registrationPage = new RegistrationPage();