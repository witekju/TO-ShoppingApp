import { mainPage } from "../pages/mainPage/mainPage-page"

  describe('Main Page Test', () => {
    it('should be possible to visit main page and main navbar should be visible', () => {
      cy.visit('http://localhost:4200')
      mainPage.CheckIsNavBarButtonsVisible()
    })
  })