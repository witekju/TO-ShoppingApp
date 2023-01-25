import selectors from './login-selectors';

export class LoginPage {

    login(): this {
      cy.get(selectors.loginButton)
        .click()
      cy.get(selectors.emailInput).type('juliatest1@gmail.com')
      cy.get(selectors.passwordInput).type('test123')
      cy.get(selectors.submitButton)
        .click()
      cy.get(selectors.yourListHeader).should('be.visible')
      return this
    }
}

export const loginPage = new LoginPage();