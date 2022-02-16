import { Card } from '../../../src/app/card'

describe('Test cards-component', () => {
    it('Test cards-component is displayed"', () => {
        cy.fixture('cards/cards').then((cards: Card[]) => {
            cy.intercept('GET', Cypress.env('apiCards'), {
                statusCode: 200,
                body: cards
            }).as('get-cards')

            cy.visit('/cards')
            cy.wait('@get-cards')

            // Test that cards are displayed
            for(let i=0; i<cards.length; i++) {
                cy.get('ul.cards > li').eq(i).within(() => {
                    cy.get('#card-name').should('have.text', cards[i].name)
                })
            }
        })
    })
})
