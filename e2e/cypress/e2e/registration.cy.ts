import { registrationPage }  from "../pages/registration/registration-page"

  describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('http://localhost:4200')
      registrationPage.registration()
    })
  })
