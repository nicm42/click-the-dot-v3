/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Post tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('has a triangle', () => {
    cy.findByTestId('triangle').should('exist');
  });
});
