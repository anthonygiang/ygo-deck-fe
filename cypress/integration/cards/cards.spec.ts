//import { Card } from '../../../src/app/card'

describe('Test cards-component', () => {
    it('Test cards-component is displayed"', () => {
        cy.visit('/cards')
        cy.fixture('cards/cards').then((cards) => {
            for(let i=0; i<cards.length; i++) {
                cy.get('ul.cards > li').eq(i).within(() => {
                    cy.get('#card-name').should('have.text', cards[i].name)
                })
            }
        })
    })
})
