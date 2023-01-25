import selectors from './logout-selectors';

export class LogoutPage {

    logout(): this {
      cy.get(selectors.logoutButton)
        .click()
      cy.get(selectors.loginHeader).should('be.visible')
      return this
    }
}

export const logoutPage = new LogoutPage();