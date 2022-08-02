/// <reference types="cypress" />

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('alur cerita film mantap mantap{enter}')
  })
})