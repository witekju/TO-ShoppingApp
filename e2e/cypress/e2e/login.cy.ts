import { loginPage }  from "../pages/login/login-page"

  describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('http://localhost:4200')
      loginPage.login()
    })
  })
