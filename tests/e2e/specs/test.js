// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the running total', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
  })

  it('should update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get ('#operator_add').click();
    cy.get('#number2').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '4')

  })

  it('should chain multiple opertions together', () => {
    cy.get('#number2').click();
    cy.get ('#operator_add').click();

    
    cy.get ('#operator_add').click();
    cy.get ('#operator_divide').click();
    cy.get('#number2').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should output as expected for a range of numbers - negative', () => {
    cy.get('#number1').click();
    cy.get ('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '-8')
  })
  
  it('should output as expected for a range of numbers - decimal ', () => {
    cy.get('#number9').click();
    cy.get ('#operator_divide').click();
    cy.get('#number2').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '4.5')
  })
  
  it('should output as expected for a range of numbers - very large ', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get ('#operator_multiply').click();
    cy.get ('#operator_multiply').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '1000000000000')
  })
  
  it('should not divide by 0', () => {
    cy.get('#number8').click();
    cy.get ('#operator_divide').click();
    cy.get('#number0').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', 'cannot divide by 0')
  })


})
