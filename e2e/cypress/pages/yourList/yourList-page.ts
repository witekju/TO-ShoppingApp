import selectors from './yourList-selectors';


export class YourList {

    addNewList(): this {
      cy.get(selectors.listTitle).type('test')
      cy.get(selectors.datePicker).type('2024-01-23')
      cy.get(selectors.addNewList)
        .click()
      cy.get(selectors.listName).should('be.visible')
      return this
    }

    deleteList(): this {
        cy.get(selectors.listTitle).should('be.visible')
        cy.get(selectors.deleteList).first()
            .click()
        return this
      }

    editList(): this {
        cy.get(selectors.listTitle).should('be.visible')
        cy.get(selectors.editList).first()
            .click()
        cy.get(selectors.listTitleEdit)
            .clear()
            .type('Test2')
        cy.get(selectors.datePickerEdit)
            .clear()
            .type('2025-02-21')
        cy.get(selectors.saveButton)
            .click()
        return this
      }

    openList(): this {
        cy.get(selectors.openList).first()
            .click()
        return this
      }

}

export const yourList = new YourList();