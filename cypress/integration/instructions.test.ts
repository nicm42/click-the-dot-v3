/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Instructions tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  // Doing each of these separately so we can check the change from no shape to a shape
  it('Instructions change when select changes to circle', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click the shape.').should('exist');
    cy.findByText('Click it again when it\'s twice the size.').should('exist');
    
    // Circle
    cy.findByTestId('select')
    .select('Circle')
    .should('have.value', 'Circle');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click the circle.').should('exist');
  });

it('Instructions change when select changes to square', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click the shape.').should('exist');
    cy.findByText('Click it again when it\'s twice the size.').should('exist');
    
    // Circle
    cy.findByTestId('select')
    .select('Square')
    .should('have.value', 'Square');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click the square.').should('exist');
  });

it('Instructions change when select changes to triangle', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click the shape.').should('exist');
    cy.findByText('Click it again when it\'s twice the size.').should('exist');
    
    // Circle
    cy.findByTestId('select')
    .select('Triangle')
    .should('have.value', 'Triangle');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click the triangle.').should('exist');
  });
});
