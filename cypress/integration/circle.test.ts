/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Post tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('has a circle', () => {
    cy.findByTestId('circle').should('exist');
  });
});
