import { should } from 'chai';
import selectors from './item-selectors';

export class AddItem {

    addItemToList(): this {
        cy.get(selectors.productInput).type('Test')
        cy.get(selectors.quantityInput).type('10')
        cy.get(selectors.unitInput).select('liter')
        cy.get(selectors.addItemButton)
            .click()
        cy.get(selectors.product).first().should('be.visible')
        cy.get(selectors.backButton)
            .click()
      return this
    }
}

export const addItem = new AddItem();