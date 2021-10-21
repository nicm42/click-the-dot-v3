/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Instructions tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Results text shows and button works after shape click', () => {
    // None of it shows to begin with
    cy.findByText('Missed!').should('not.exist');
    cy.findByText('The shape is now', { exact: false }).should('not.exist');
    cy.findByText('times its original size', { exact: false }).should(
      'not.exist'
    );
    cy.findByRole('button', { name: /Try again/i }).should('not.exist');

    cy.findByTestId('select').select('Circle');
    cy.findAllByTestId('circle').should('have.length', 3);
    cy.findAllByTestId('circle')
      .first()
      .click()
      .then(() => {
        // Check text is now there
        cy.findByText('Missed!').should('exist');
        cy.findByText('The shape is now 3.0 times its original size').should(
          'exist'
        );
        cy.findByRole('button', { name: /Try again/i }).should('exist');

        // Now check that clicking the button means everything is reset
        cy.findByRole('button', { name: /Try again/i }).click();
        cy.findByText('Missed!').should('not.exist');
        cy.findByText('The shape is now', { exact: false }).should('not.exist');
        cy.findByText('times its original size', { exact: false }).should(
          'not.exist'
        );
        cy.findByRole('button', { name: /Try again/i }).should('not.exist');
      });
  });
});
