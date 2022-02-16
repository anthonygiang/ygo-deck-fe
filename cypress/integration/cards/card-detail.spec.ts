import { Card } from '../../../src/app/card'

describe('Test card-detail', () => {
    it('Test cards details are displayed"', () => {
        cy.fixture('cards/dark-magician').then((card: Card) => {
            let cardName = (card.name).replace(/%20/g, " ")

            // Visit card route.
            cy.visit('/cards/' + cardName)
            cy.wait('@get-card-by-name')

            // Test card details are displayed.
            cy.get('#card-name').should('have.text', card.name)
            cy.get('#card-type').should('have.text', card.type)
            cy.get('#card-desc').should('have.text', card.desc)
            cy.get('#card-atk').should('have.text', card.atk)
            cy.get('#card-def').should('have.text', card.def)
            cy.get('#card-level').should('have.text', card.level)
            cy.get('#card-race').should('have.text', card.race)
            cy.get('#card-attribute').should('have.text', card.attribute)
        })
    })
})
