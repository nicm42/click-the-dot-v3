/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Instructions tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('High scores are shown and local storage clears on button click', () => {
    // None of it shows to begin with
    cy.findByText('Closest scores').should('exist');
    cy.findByRole('button', { name: /Clear scores/i }).should('exist');
    cy.findByRole('button', { name: /Clear scores/i }).should('be.disabled');
    cy.findByTitle('Circle icon').should('exist');
    cy.findByTitle('Square icon').should('exist');
    cy.findByTitle('Triangle icon').should('exist');
    cy.findByTestId('closest-score').should('not.exist');

    cy.findByTestId('select').select('Circle');
    cy.findAllByTestId('circle').should('have.length', 3);
    cy.findAllByTestId('circle')
      .first()
      .then(($circle1) => {
        cy.findAllByTestId('circle')
          .first()
          .click()
          .then(($circle) => {
            cy.findAllByTestId('circle').first().click();
            cy.findByTestId('closest-score').should('exist');
            cy.window()
              .its('localStorage')
              .invoke('getItem', 'Circle')
              .should('exist');
            cy.findByRole('button', { name: /Clear scores/i }).should(
              'not.be.disabled'
            );
            // Now clear local storage and check it doesn't exist
            cy.findByRole('button', { name: /Clear scores/i }).click();
            cy.on('window:confirm', () => true);
            cy.window()
              .its('localStorage')
              .invoke('getItem', 'Circle')
              .should('not.exist');
          });
      });
  });
});
