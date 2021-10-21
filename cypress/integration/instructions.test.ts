/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Instructions tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  // Doing each of these separately so we can check the change from no shape to a shape
  it('Instructions change when select changes to circle', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click or press spacebar on the shape.').should('exist');
    cy.findByText(
      "Click or press spacebar again when it's twice the size."
    ).should('exist');

    // Circle
    cy.findByTestId('select').select('Circle').should('have.value', 'Circle');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click or press spacebar on the circle.').should('exist');
  });

  it('Instructions change when select changes to heart', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click or press spacebar on the shape.').should('exist');
    cy.findByText(
      "Click or press spacebar again when it's twice the size."
    ).should('exist');

    // Square
    cy.findByTestId('select').select('Heart').should('have.value', 'Heart');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click or press spacebar on the heart.').should('exist');
  });

  it('Instructions change when select changes to hexagon', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click or press spacebar on the shape.').should('exist');
    cy.findByText(
      "Click or press spacebar again when it's twice the size."
    ).should('exist');

    // Square
    cy.findByTestId('select').select('Hexagon').should('have.value', 'Hexagon');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click or press spacebar on the hexagon.').should('exist');
  });

  it('Instructions change when select changes to star', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click or press spacebar on the shape.').should('exist');
    cy.findByText(
      "Click or press spacebar again when it's twice the size."
    ).should('exist');

    // Square
    cy.findByTestId('select').select('Star').should('have.value', 'Star');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click or press spacebar on the star.').should('exist');
  });

  it('Instructions change when select changes to square', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click or press spacebar on the shape.').should('exist');
    cy.findByText(
      "Click or press spacebar again when it's twice the size."
    ).should('exist');

    // Square
    cy.findByTestId('select').select('Square').should('have.value', 'Square');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click or press spacebar on the square.').should('exist');
  });

  it('Instructions change when select changes to triangle', () => {
    cy.findByText('Select a shape.').should('exist');
    cy.findByText('Click or press spacebar on the shape.').should('exist');
    cy.findByText(
      "Click or press spacebar again when it's twice the size."
    ).should('exist');

    // Triangle
    cy.findByTestId('select')
      .select('Triangle')
      .should('have.value', 'Triangle');
    cy.findByText('Select a shape.').should('not.exist');
    cy.findByText('Click or press spacebar on the triangle.').should('exist');
  });
});
