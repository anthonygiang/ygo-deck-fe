import { Card } from '../../../src/app/card'

describe('Test card-detail', () => {
    it('Test cards details are displayed"', () => {
        cy.fixture('cards/cards').then((cards: Card[]) => {
            cy.intercept('GET', Cypress.env('apiCards'), {
                statusCode: 200,
                body: cards
            }).as('get-cards')

            cy.visit('/cards')
            cy.wait('@get-cards')

            cy.get('ul.cards > li').first().click()
            
            // Test card details are displayed.
            cy.get('#card-name').should('have.text', cards[0].name)
            cy.get('#card-type').should('have.text', cards[0].type)
            cy.get('#card-desc').should('have.text', cards[0].desc)
            cy.get('#card-atk').should('have.text', cards[0].atk)
            cy.get('#card-def').should('have.text', cards[0].def)
            cy.get('#card-level').should('have.text', cards[0].level)
            cy.get('#card-race').should('have.text', cards[0].race)
            cy.get('#card-attribute').should('have.text', cards[0].attribute)
        })
    })
})
