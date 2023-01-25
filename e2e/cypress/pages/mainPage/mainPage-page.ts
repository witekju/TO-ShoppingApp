import selectors from './mainPage-selectors';


export class MainPage {

    CheckIsNavBarButtonsVisible(): this {
      cy.get(selectors.loginButton).should('be.visible')
      cy.get(selectors.registrationButton).should('be.visible')
      return this
    }
}

export const mainPage = new MainPage();