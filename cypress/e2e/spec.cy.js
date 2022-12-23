describe('empty spec', () => {
  it('passes', () => {
    cy.intercept("POST", "http://localhost:4000/graphql*", req => {
      req.alias = 'foo'
    })
    cy.visit('http://localhost:8000')
    cy.wait('@foo')
    cy.get('#app').contains('Hello world!')
  })
})
