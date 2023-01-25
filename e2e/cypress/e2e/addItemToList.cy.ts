import { loginPage }  from "../pages/login/login-page"
import { yourList }  from "../pages/yourList/yourList-page"
import { addItem } from "../pages/item/item-page"

  describe('Logout Tests', () => {
    it('should be possible to logout form app', () => {
      cy.visit('http://localhost:4200')
      loginPage.login();
      yourList.openList();
      addItem.addItemToList();

    })
  })
